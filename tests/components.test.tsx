// Testes para os componentes de busca
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { SearchBar } from '@/components/search/SearchBar';
import { CandidateList } from '@/components/candidate/CandidateList';

// Mock do useRouter
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
  useSearchParams: () => ({
    get: jest.fn(),
  }),
}));

describe('SearchBar Component', () => {
  test('renderiza corretamente com valor inicial vazio', () => {
    render(<SearchBar />);
    
    const inputElement = screen.getByPlaceholderText(/Busque por nome, número ou partido/i);
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('');
    
    const buttonElement = screen.getByRole('button', { name: /Buscar/i });
    expect(buttonElement).toBeInTheDocument();
  });
  
  test('atualiza valor do input ao digitar', () => {
    render(<SearchBar />);
    
    const inputElement = screen.getByPlaceholderText(/Busque por nome, número ou partido/i);
    fireEvent.change(inputElement, { target: { value: 'João Silva' } });
    
    expect(inputElement).toHaveValue('João Silva');
  });
  
  test('submete formulário ao clicar no botão de busca', () => {
    const mockRouter = { push: jest.fn() };
    jest.spyOn(require('next/navigation'), 'useRouter').mockReturnValue(mockRouter);
    
    render(<SearchBar />);
    
    const inputElement = screen.getByPlaceholderText(/Busque por nome, número ou partido/i);
    fireEvent.change(inputElement, { target: { value: 'João Silva' } });
    
    const buttonElement = screen.getByRole('button', { name: /Buscar/i });
    fireEvent.click(buttonElement);
    
    expect(mockRouter.push).toHaveBeenCalledWith('/resultados?q=Jo%C3%A3o%20Silva');
  });
});

describe('CandidateList Component', () => {
  const mockCandidates = [
    { id: "1", nome: "João Silva", partido: "PXX", numero: "12345", cargo: "Vereador" },
    { id: "2", nome: "Maria Oliveira", partido: "PYY", numero: "67890", cargo: "Prefeito" }
  ];
  
  const mockHandleViewDetails = jest.fn();
  
  test('renderiza lista de candidatos corretamente', () => {
    render(
      <CandidateList 
        candidates={mockCandidates} 
        loading={false} 
        searchTerm="Silva" 
        onViewDetails={mockHandleViewDetails} 
      />
    );
    
    expect(screen.getByText('João Silva')).toBeInTheDocument();
    expect(screen.getByText('Maria Oliveira')).toBeInTheDocument();
    expect(screen.getAllByText(/Ver detalhes/i)).toHaveLength(2);
  });
  
  test('mostra indicador de carregamento quando loading=true', () => {
    render(
      <CandidateList 
        candidates={[]} 
        loading={true} 
        searchTerm="Silva" 
        onViewDetails={mockHandleViewDetails} 
      />
    );
    
    // Verificar elementos de skeleton loading
    const skeletonElements = document.querySelectorAll('.animate-pulse');
    expect(skeletonElements.length).toBeGreaterThan(0);
  });
  
  test('mostra mensagem quando nenhum candidato é encontrado', () => {
    render(
      <CandidateList 
        candidates={[]} 
        loading={false} 
        searchTerm="XYZ" 
        onViewDetails={mockHandleViewDetails} 
      />
    );
    
    expect(screen.getByText(/Nenhum candidato encontrado para "XYZ"/i)).toBeInTheDocument();
  });
  
  test('chama função onViewDetails ao clicar em Ver detalhes', () => {
    render(
      <CandidateList 
        candidates={mockCandidates} 
        loading={false} 
        searchTerm="Silva" 
        onViewDetails={mockHandleViewDetails} 
      />
    );
    
    const detailsButtons = screen.getAllByText(/Ver detalhes/i);
    fireEvent.click(detailsButtons[0]);
    
    expect(mockHandleViewDetails).toHaveBeenCalledWith("1");
  });
});
