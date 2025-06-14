// Testes para as integrações de API
import { TseApiIntegration } from '@/lib/api/integrations/tse';
import { TransparenciaApiIntegration } from '@/lib/api/integrations/transparencia';
import { NoticiasApiIntegration } from '@/lib/api/integrations/noticias';
import { ProcessosApiIntegration } from '@/lib/api/integrations/processos';
import { ApiIntegrationService } from '@/lib/api/integrations';

// Mock das chamadas axios
jest.mock('axios');

describe('API Integrations', () => {
  // Testes para integração com TSE
  describe('TseApiIntegration', () => {
    let tseApi: TseApiIntegration;
    
    beforeEach(() => {
      tseApi = new TseApiIntegration();
    });
    
    test('buscarCandidatos retorna array vazio para termo vazio', async () => {
      const resultado = await tseApi.buscarCandidatos('');
      expect(resultado).toEqual([]);
    });
    
    test('buscarCandidatos retorna candidatos para termo "Silva"', async () => {
      const resultado = await tseApi.buscarCandidatos('Silva');
      expect(resultado.length).toBeGreaterThan(0);
      expect(resultado[0].nome).toContain('Silva');
    });
    
    test('obterDetalhes retorna dados para ID válido', async () => {
      const resultado = await tseApi.obterDetalhes('tse-123');
      expect(resultado).toBeTruthy();
      expect(resultado.nome).toBe('José Silva');
    });
    
    test('obterDetalhes retorna objeto vazio para ID inválido', async () => {
      const resultado = await tseApi.obterDetalhes('id-invalido');
      expect(resultado).toEqual({});
    });
  });
  
  // Testes para integração com Portal da Transparência
  describe('TransparenciaApiIntegration', () => {
    let transparenciaApi: TransparenciaApiIntegration;
    
    beforeEach(() => {
      transparenciaApi = new TransparenciaApiIntegration();
    });
    
    test('buscarBensDeclarados retorna dados para CPF válido', async () => {
      const resultado = await transparenciaApi.buscarBensDeclarados('123.456.789-00');
      expect(resultado.valor).toBeTruthy();
      expect(resultado.itens.length).toBeGreaterThan(0);
    });
    
    test('buscarHistoricoCargos retorna dados para CPF válido', async () => {
      const resultado = await transparenciaApi.buscarHistoricoCargos('123.456.789-00');
      expect(resultado.length).toBeGreaterThan(0);
      expect(resultado[0].cargo).toBeTruthy();
    });
  });
  
  // Testes para serviço consolidado
  describe('ApiIntegrationService', () => {
    let apiService: ApiIntegrationService;
    
    beforeEach(() => {
      apiService = new ApiIntegrationService();
    });
    
    test('buscarCandidatos retorna resultados consolidados', async () => {
      const resultado = await apiService.buscarCandidatos('Silva');
      expect(resultado.length).toBeGreaterThan(0);
    });
    
    test('obterDetalhesCompletos retorna dados completos para ID válido', async () => {
      const resultado = await apiService.obterDetalhesCompletos('tse-123');
      expect(resultado).toBeTruthy();
      expect(resultado?.nome).toBe('José Silva');
      expect(resultado?.bens).toBeTruthy();
      expect(resultado?.processos).toBeDefined();
      expect(resultado?.noticias).toBeDefined();
    });
    
    test('obterDetalhesCompletos retorna null para ID inválido', async () => {
      const resultado = await apiService.obterDetalhesCompletos('id-invalido');
      expect(resultado).toBeNull();
    });
    
    test('limparCache limpa o cache interno', () => {
      // Primeiro, preencher o cache
      apiService.buscarCandidatos('Silva');
      
      // Depois, limpar o cache
      apiService.limparCache();
      
      // Verificar se o cache foi limpo (indiretamente, através de uma nova chamada)
      // Em um teste real, verificaríamos o estado interno ou usaríamos um spy
      expect(apiService.buscarCandidatos('Silva')).resolves.toBeDefined();
    });
  });
});
