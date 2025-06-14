// Dados de exemplo para desenvolvimento
import { Candidato, CandidatoDetalhado, ResultadoBusca } from './types';

// Candidatos de exemplo para busca
export const CANDIDATOS_EXEMPLO: Candidato[] = [
  { id: "1", nome: "João Silva", partido: "PXX", numero: "12345", cargo: "Vereador", info: "Candidato à reeleição, atualmente no 1º mandato" },
  { id: "2", nome: "Maria Oliveira", partido: "PYY", numero: "67890", cargo: "Prefeito", info: "Ex-secretária de Educação, primeira candidatura a prefeito" },
  { id: "3", nome: "José Santos", partido: "PZZ", numero: "54321", cargo: "Deputado Estadual", info: "Advogado, 2º mandato como deputado" },
  { id: "4", nome: "Ana Pereira", partido: "PWW", numero: "09876", cargo: "Vereador", info: "Professora, primeira candidatura" },
  { id: "5", nome: "Carlos Ferreira", partido: "PXX", numero: "13579", cargo: "Prefeito", info: "Empresário, candidato pela 3ª vez" },
  { id: "6", nome: "João Silveira", partido: "PYY", numero: "24680", cargo: "Vereador", info: "Médico, ativista na área de saúde pública" },
  { id: "7", nome: "João Silvestre", partido: "PZZ", numero: "97531", cargo: "Deputado Federal", info: "Engenheiro, ex-secretário de Infraestrutura" },
];

// Detalhes completos de candidatos de exemplo
export const CANDIDATOS_DETALHADOS: Record<string, CandidatoDetalhado> = {
  "1": {
    id: "1",
    nome: "João Silva",
    partido: "PXX",
    numero: "12345",
    cargo: "Vereador",
    foto: null,
    bens: "R$ 450.000,00",
    processos: [
      { id: 1, tipo: "Processo Civil", numero: "0001234-12.2022.8.00.0001", status: "Em andamento" }
    ],
    realizacoes: [
      "Projeto de lei para melhoria do transporte público",
      "Atuação na área de educação com foco em escolas públicas",
      "Criação de programa de incentivo ao esporte nas comunidades"
    ],
    propostas: [
      "Ampliar investimentos em saúde pública",
      "Melhorar a infraestrutura urbana",
      "Criar programas de incentivo à cultura local",
      "Implementar políticas de sustentabilidade ambiental"
    ],
    noticias: [
      { 
        titulo: "Candidato participa de debate sobre mobilidade urbana", 
        fonte: "Jornal da Cidade", 
        data: "15/03/2025",
        resumo: "O candidato João Silva participou de um debate sobre mobilidade urbana e apresentou propostas para melhorar o transporte público na cidade."
      },
      {
        titulo: "João Silva propõe revitalização de praças públicas",
        fonte: "Portal de Notícias",
        data: "10/03/2025",
        resumo: "Em evento com moradores, o candidato apresentou projeto para revitalizar praças e áreas de lazer em bairros periféricos."
      }
    ]
  },
  "2": {
    id: "2",
    nome: "Maria Oliveira",
    partido: "PYY",
    numero: "67890",
    cargo: "Prefeito",
    foto: null,
    bens: "R$ 1.250.000,00",
    processos: [],
    realizacoes: [
      "Gestão da Secretaria de Educação por 4 anos",
      "Implementação de programa de alfabetização premiado nacionalmente",
      "Reforma e ampliação de 15 escolas municipais"
    ],
    propostas: [
      "Modernizar a gestão pública municipal",
      "Expandir a rede de atendimento à saúde",
      "Implementar programa de habitação popular",
      "Revitalizar o centro histórico da cidade",
      "Criar incubadora de startups e hub de inovação"
    ],
    noticias: [
      {
        titulo: "Maria Oliveira lidera pesquisas para prefeitura",
        fonte: "Diário Municipal",
        data: "20/03/2025",
        resumo: "Pesquisa divulgada ontem mostra a ex-secretária de Educação com 38% das intenções de voto."
      }
    ]
  }
};

// Função para simular busca de candidatos
export function buscarCandidatos(query: string): ResultadoBusca {
  if (!query.trim()) {
    return { query, resultados: [], total: 0 };
  }
  
  const termoBusca = query.toLowerCase();
  
  // Busca por nome, partido ou número
  const resultados = CANDIDATOS_EXEMPLO.filter(candidato => 
    candidato.nome.toLowerCase().includes(termoBusca) ||
    candidato.partido.toLowerCase().includes(termoBusca) ||
    candidato.numero.includes(termoBusca)
  );
  
  // Se não encontrou resultados exatos, busca por similaridade para sugestões
  let sugestoes: Candidato[] = [];
  if (resultados.length === 0) {
    // Busca por similaridade (simplificada)
    sugestoes = CANDIDATOS_EXEMPLO.filter(candidato => {
      const nome = candidato.nome.toLowerCase();
      // Verifica se há pelo menos 3 caracteres consecutivos em comum
      for (let i = 0; i <= nome.length - 3; i++) {
        const trecho = nome.substring(i, i + 3);
        if (termoBusca.includes(trecho)) return true;
      }
      return false;
    }).slice(0, 3); // Limita a 3 sugestões
  }
  
  return {
    query,
    resultados,
    total: resultados.length,
    sugestoes: sugestoes.length > 0 ? sugestoes : undefined
  };
}

// Função para obter detalhes de um candidato
export function obterCandidatoDetalhado(id: string): CandidatoDetalhado | null {
  return CANDIDATOS_DETALHADOS[id] || null;
}

// Função para obter sugestões de autocompletar
export function obterSugestoesAutocompletar(termo: string) {
  if (!termo || termo.length < 2) return [];
  
  const termoBusca = termo.toLowerCase();
  
  // Busca candidatos cujos nomes começam com o termo
  return CANDIDATOS_EXEMPLO
    .filter(candidato => candidato.nome.toLowerCase().startsWith(termoBusca))
    .slice(0, 5) // Limita a 5 sugestões
    .map(candidato => ({
      id: candidato.id,
      nome: candidato.nome,
      partido: candidato.partido,
      numero: candidato.numero
    }));
}
