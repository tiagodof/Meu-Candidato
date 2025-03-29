// Testes de integração para endpoints da API
import { NextRequest } from 'next/server';
import { GET as getCandidatos } from '@/app/api/candidatos/route';
import { GET as getCandidatoById } from '@/app/api/candidatos/[id]/route';
import { GET as getAutocompletar } from '@/app/api/autocompletar/route';
import { POST as postFeedback } from '@/app/api/feedback/route';
import { POST as postReportar } from '@/app/api/reportar/route';

// Mock do NextRequest
const createMockRequest = (url: string, params = {}) => {
  const mockRequest = {
    nextUrl: {
      searchParams: new URLSearchParams(params),
    },
  } as unknown as NextRequest;
  
  return mockRequest;
};

// Mock para params em rotas dinâmicas
const createMockParams = (id: string) => {
  return { params: { id } };
};

describe('API Endpoints', () => {
  // Testes para endpoint de busca de candidatos
  describe('/api/candidatos', () => {
    test('retorna array vazio para busca sem termo', async () => {
      const req = createMockRequest('/api/candidatos');
      const res = await getCandidatos(req);
      const data = await res.json();
      
      expect(data.resultados).toEqual([]);
      expect(data.total).toBe(0);
    });
    
    test('retorna resultados para busca com termo válido', async () => {
      const req = createMockRequest('/api/candidatos', { q: 'Silva' });
      const res = await getCandidatos(req);
      const data = await res.json();
      
      expect(data.resultados.length).toBeGreaterThan(0);
      expect(data.total).toBeGreaterThan(0);
    });
  });
  
  // Testes para endpoint de detalhes de candidato
  describe('/api/candidatos/[id]', () => {
    test('retorna 404 para ID inválido', async () => {
      const req = createMockRequest('/api/candidatos/id-invalido');
      const res = await getCandidatoById(req, createMockParams('id-invalido'));
      
      expect(res.status).toBe(404);
    });
    
    test('retorna dados do candidato para ID válido', async () => {
      const req = createMockRequest('/api/candidatos/1');
      const res = await getCandidatoById(req, createMockParams('1'));
      const data = await res.json();
      
      expect(data.id).toBe('1');
      expect(data.nome).toBeTruthy();
    });
  });
  
  // Testes para endpoint de autocompletar
  describe('/api/autocompletar', () => {
    test('retorna array vazio para termo muito curto', async () => {
      const req = createMockRequest('/api/autocompletar', { termo: 'a' });
      const res = await getAutocompletar(req);
      const data = await res.json();
      
      expect(data.sugestoes).toEqual([]);
    });
    
    test('retorna sugestões para termo válido', async () => {
      const req = createMockRequest('/api/autocompletar', { termo: 'Silva' });
      const res = await getAutocompletar(req);
      const data = await res.json();
      
      expect(data.sugestoes.length).toBeGreaterThan(0);
    });
  });
  
  // Testes para endpoint de feedback
  describe('/api/feedback', () => {
    test('processa feedback válido', async () => {
      const mockBody = {
        candidatoId: '1',
        secao: 'dados_basicos',
        util: true
      };
      
      const req = {
        json: jest.fn().mockResolvedValue(mockBody)
      } as unknown as NextRequest;
      
      const res = await postFeedback(req);
      const data = await res.json();
      
      expect(data.success).toBe(true);
    });
  });
  
  // Testes para endpoint de reportar erro
  describe('/api/reportar', () => {
    test('processa relatório de erro válido', async () => {
      const mockBody = {
        candidatoId: '1',
        secao: 'dados_basicos',
        descricao: 'Informação incorreta sobre o cargo'
      };
      
      const req = {
        json: jest.fn().mockResolvedValue(mockBody)
      } as unknown as NextRequest;
      
      const res = await postReportar(req);
      const data = await res.json();
      
      expect(data.success).toBe(true);
    });
  });
});
