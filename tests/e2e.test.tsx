// Testes de responsividade e acessibilidade
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import HomePage from '@/app/page';
import ResultadosPage from '@/app/resultados/page';
import CandidatoPage from '@/app/candidato/[id]/page';

// Adicionar matcher personalizado
expect.extend(toHaveNoViolations);

// Mock do useRouter e useParams
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
  useSearchParams: () => ({
    get: jest.fn().mockReturnValue('teste'),
  }),
  useParams: () => ({
    id: '1',
  }),
}));

describe('Testes de Acessibilidade', () => {
  test('HomePage não tem violações de acessibilidade', async () => {
    const { container } = render(<HomePage />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('ResultadosPage não tem violações de acessibilidade', async () => {
    const { container } = render(<ResultadosPage />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('CandidatoPage não tem violações de acessibilidade', async () => {
    const { container } = render(<CandidatoPage />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Testes de Responsividade', () => {
  // Simular diferentes tamanhos de tela
  const viewports = {
    mobile: { width: 375, height: 667 },
    tablet: { width: 768, height: 1024 },
    desktop: { width: 1280, height: 800 },
  };

  test('HomePage é responsiva em diferentes tamanhos de tela', () => {
    // Para cada tamanho de viewport
    Object.entries(viewports).forEach(([device, dimensions]) => {
      // Configurar dimensões da janela
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: dimensions.width });
      Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: dimensions.height });
      
      // Disparar evento de redimensionamento
      window.dispatchEvent(new Event('resize'));
      
      // Renderizar componente
      render(<HomePage />);
      
      // Verificar se elementos principais estão presentes
      expect(screen.getByText(/Meu Candidato/i)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/Busque por nome/i)).toBeInTheDocument();
    });
  });

  test('ResultadosPage é responsiva em diferentes tamanhos de tela', () => {
    // Similar ao teste anterior, mas para ResultadosPage
    Object.entries(viewports).forEach(([device, dimensions]) => {
      Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: dimensions.width });
      Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: dimensions.height });
      window.dispatchEvent(new Event('resize'));
      
      render(<ResultadosPage />);
      
      expect(screen.getByText(/Resultados para/i)).toBeInTheDocument();
    });
  });
});

// Testes de desempenho simulados
describe('Testes de Desempenho', () => {
  test('Tempo de carregamento da página inicial é aceitável', () => {
    const startTime = performance.now();
    render(<HomePage />);
    const endTime = performance.now();
    
    const loadTime = endTime - startTime;
    console.log(`Tempo de carregamento da HomePage: ${loadTime}ms`);
    
    // O tempo exato dependerá do ambiente, mas podemos definir um limite razoável
    expect(loadTime).toBeLessThan(1000); // menos de 1 segundo
  });

  test('Tempo de carregamento da página de resultados é aceitável', () => {
    const startTime = performance.now();
    render(<ResultadosPage />);
    const endTime = performance.now();
    
    const loadTime = endTime - startTime;
    console.log(`Tempo de carregamento da ResultadosPage: ${loadTime}ms`);
    
    expect(loadTime).toBeLessThan(1500); // menos de 1.5 segundos
  });
});
