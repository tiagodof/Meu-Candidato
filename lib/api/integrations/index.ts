// Serviço consolidado para integração com todas as APIs externas
import { Candidato, CandidatoDetalhado, Noticia, ProcessoJudicial } from '../types';
import { TseApiIntegration } from './tse';
import { TransparenciaApiIntegration } from './transparencia';
import { NoticiasApiIntegration } from './noticias';
import { ProcessosApiIntegration } from './processos';

// Classe que coordena todas as integrações com APIs externas
export class ApiIntegrationService {
  private tseApi: TseApiIntegration;
  private transparenciaApi: TransparenciaApiIntegration;
  private noticiasApi: NoticiasApiIntegration;
  private processosApi: ProcessosApiIntegration;
  
  // Cache simples para armazenar resultados frequentes
  private cache: {
    candidatos: Map<string, Candidato[]>;
    detalhes: Map<string, CandidatoDetalhado>;
    noticias: Map<string, Noticia[]>;
    processos: Map<string, ProcessoJudicial[]>;
  };
  
  constructor() {
    this.tseApi = new TseApiIntegration();
    this.transparenciaApi = new TransparenciaApiIntegration();
    this.noticiasApi = new NoticiasApiIntegration();
    this.processosApi = new ProcessosApiIntegration();
    
    // Inicializar cache
    this.cache = {
      candidatos: new Map(),
      detalhes: new Map(),
      noticias: new Map(),
      processos: new Map()
    };
  }
  
  // Método para buscar candidatos de todas as fontes
  async buscarCandidatos(termo: string): Promise<Candidato[]> {
    // Verificar cache primeiro
    const cacheKey = `busca:${termo}`;
    if (this.cache.candidatos.has(cacheKey)) {
      console.log(`[Cache] Usando resultados em cache para busca: ${termo}`);
      return this.cache.candidatos.get(cacheKey) || [];
    }
    
    try {
      console.log(`[API Integration] Buscando candidatos com termo: ${termo}`);
      
      // Buscar candidatos do TSE
      const candidatosTse = await this.tseApi.buscarCandidatos(termo);
      
      // Em uma implementação real, poderíamos buscar de outras fontes e consolidar
      // Por enquanto, usamos apenas os resultados do TSE
      
      // Armazenar no cache (com TTL de 1 hora em produção)
      this.cache.candidatos.set(cacheKey, candidatosTse);
      
      return candidatosTse;
    } catch (error) {
      console.error('Erro ao buscar candidatos de APIs externas:', error);
      return [];
    }
  }
  
  // Método para obter detalhes completos de um candidato
  async obterDetalhesCompletos(id: string): Promise<CandidatoDetalhado | null> {
    // Verificar cache primeiro
    if (this.cache.detalhes.has(id)) {
      console.log(`[Cache] Usando detalhes em cache para candidato ID: ${id}`);
      return this.cache.detalhes.get(id) || null;
    }
    
    try {
      console.log(`[API Integration] Obtendo detalhes completos para candidato ID: ${id}`);
      
      // Obter dados básicos do TSE
      const dadosBasicos = await this.tseApi.obterDetalhes(id);
      
      if (!dadosBasicos || !dadosBasicos.nome) {
        console.log(`Candidato não encontrado com ID: ${id}`);
        return null;
      }
      
      // Simulação de CPF para exemplo (em produção, viria dos dados do TSE)
      const cpfSimulado = id.includes('123') ? '123.456.789-00' : '456.789.123-00';
      
      // Buscar dados complementares em paralelo para otimizar tempo
      const [bensDeclarados, historicoCargos, noticias, processos] = await Promise.all([
        this.transparenciaApi.buscarBensDeclarados(cpfSimulado),
        this.transparenciaApi.buscarHistoricoCargos(cpfSimulado),
        this.noticiasApi.buscarNoticias(dadosBasicos.nome || ''),
        this.processosApi.buscarProcessos(dadosBasicos.nome || '', cpfSimulado)
      ]);
      
      // Consolidar todos os dados em um objeto CandidatoDetalhado
      const candidatoCompleto: CandidatoDetalhado = {
        id: id,
        nome: dadosBasicos.nome || '',
        partido: dadosBasicos.partido || '',
        numero: dadosBasicos.numero || '',
        cargo: dadosBasicos.cargo || '',
        foto: dadosBasicos.foto || null,
        bens: bensDeclarados.valor || 'Não disponível',
        processos: processos || [],
        realizacoes: [
          ...(dadosBasicos.realizacoes || []),
          ...historicoCargos.map(cargo => `${cargo.cargo} (${cargo.periodo}) - ${cargo.orgao}`)
        ],
        propostas: dadosBasicos.propostas || [],
        noticias: noticias || []
      };
      
      // Armazenar no cache (com TTL de 1 dia em produção)
      this.cache.detalhes.set(id, candidatoCompleto);
      
      return candidatoCompleto;
    } catch (error) {
      console.error('Erro ao obter detalhes completos do candidato:', error);
      return null;
    }
  }
  
  // Método para buscar sugestões de autocompletar
  async obterSugestoesAutocompletar(termo: string): Promise<Candidato[]> {
    if (!termo || termo.length < 2) return [];
    
    try {
      // Para autocompletar, usamos a mesma API de busca, mas limitamos os resultados
      const candidatos = await this.buscarCandidatos(termo);
      return candidatos.slice(0, 5); // Limitar a 5 sugestões
    } catch (error) {
      console.error('Erro ao obter sugestões de autocompletar:', error);
      return [];
    }
  }
  
  // Método para limpar o cache
  limparCache(): void {
    this.cache.candidatos.clear();
    this.cache.detalhes.clear();
    this.cache.noticias.clear();
    this.cache.processos.clear();
    console.log('[Cache] Cache limpo com sucesso');
  }
}
