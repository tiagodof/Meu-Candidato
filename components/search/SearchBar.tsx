"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { FuzzySearch } from '@/lib/utils/fuzzySearch';

// Dados de candidatos brasileiros completos
const CANDIDATOS_BRASILEIROS_COMPLETOS = [
  {
    id: "lula",
    nome: "Luiz Inácio Lula da Silva",
    partido: "PT",
    numero: "13",
    cargo: "Presidente",
    estado: "SP",
    foto: "/api/placeholder/150/150",
    idade: 78,
    profissao: "Ex-Presidente",
    escolaridade: "Ensino Fundamental",
    situacao: "Eleito",
    votos: "60.345.999",
    percentual: "50.90%"
  },
  {
    id: "bolsonaro", 
    nome: "Jair Messias Bolsonaro",
    partido: "PL",
    numero: "22",
    cargo: "Presidente",
    estado: "RJ", 
    foto: "/api/placeholder/150/150",
    idade: 69,
    profissao: "Ex-Presidente",
    escolaridade: "Ensino Superior",
    situacao: "Não Eleito",
    votos: "58.206.354",
    percentual: "49.10%"
  },
  {
    id: "ciro",
    nome: "Ciro Ferreira Gomes", 
    partido: "PDT",
    numero: "12",
    cargo: "Presidente",
    estado: "CE",
    foto: "/api/placeholder/150/150",
    idade: 66,
    profissao: "Advogado",
    escolaridade: "Ensino Superior",
    situacao: "Não Eleito", 
    votos: "3.599.287",
    percentual: "3.04%"
  },
  {
    id: "tebet",
    nome: "Simone Nassar Tebet",
    partido: "MDB", 
    numero: "15",
    cargo: "Presidente",
    estado: "MS",
    foto: "/api/placeholder/150/150",
    idade: 63,
    profissao: "Advogada",
    escolaridade: "Ensino Superior",
    situacao: "Não Eleita",
    votos: "4.915.423", 
    percentual: "4.16%"
  },
  {
    id: "pacheco",
    nome: "Rodrigo Pacheco",
    partido: "PSD",
    numero: "55", 
    cargo: "Senador",
    estado: "MG",
    foto: "/api/placeholder/150/150",
    idade: 48,
    profissao: "Advogado",
    escolaridade: "Ensino Superior",
    situacao: "Eleito",
    votos: "4.791.014",
    percentual: "46.15%"
  },
  {
    id: "lira",
    nome: "Arthur César Pereira de Lira",
    partido: "PP",
    numero: "11",
    cargo: "Deputado Federal", 
    estado: "AL",
    foto: "/api/placeholder/150/150",
    idade: 54,
    profissao: "Empresário",
    escolaridade: "Ensino Superior",
    situacao: "Eleito",
    votos: "175.853",
    percentual: "8.94%"
  },
  {
    id: "gleisi",
    nome: "Gleisi Helena Hoffmann",
    partido: "PT",
    numero: "13",
    cargo: "Senadora",
    estado: "PR", 
    foto: "/api/placeholder/150/150",
    idade: 58,
    profissao: "Economista",
    escolaridade: "Ensino Superior",
    situacao: "Eleita",
    votos: "2.406.588",
    percentual: "35.04%"
  },
  {
    id: "eduardo",
    nome: "Eduardo Fauzi Bolsonaro",
    partido: "PL", 
    numero: "22",
    cargo: "Deputado Federal",
    estado: "SP",
    foto: "/api/placeholder/150/150",
    idade: 40,
    profissao: "Advogado",
    escolaridade: "Ensino Superior", 
    situacao: "Eleito",
    votos: "1.846.077",
    percentual: "5.64%"
  }
];

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (searchTerm.length >= 2) {
      const results = FuzzySearch.searchCandidates(
        searchTerm, 
        CANDIDATOS_BRASILEIROS_COMPLETOS, 
        0.3
      ).slice(0, 8);
      setSuggestions(results);
      setIsOpen(true);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  }, [searchTerm]);

  const handleSelectCandidate = (candidato: any) => {
    setSearchTerm('');
    setIsOpen(false);
    router.push(`/candidato/${candidato.id}`);
  };

  return (
    <div className="relative w-full">
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-slate-400" />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Pesquise"
          className="w-full pl-12 pr-4 py-4 bg-white text-slate-800 rounded-full border-0 shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 text-lg font-medium placeholder-slate-400"
        />
      </div>

      {/* Suggestions Dropdown */}
      {isOpen && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-50">
          <div className="p-4">
            <p className="text-sm text-slate-600 mb-3 font-medium">Candidatos Encontrados</p>
            <div className="space-y-2">
              {suggestions.map((candidato) => {
                const similarity = FuzzySearch.similarity(searchTerm, candidato.nome);
                return (
                  <button
                    key={candidato.id}
                    onClick={() => handleSelectCandidate(candidato)}
                    className="w-full text-left p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {candidato.nome.split(' ').map((n: string) => n[0]).join('').substring(0, 2)}
                          </div>
                          <div>
                            <p className="font-semibold text-slate-800 group-hover:text-teal-600 transition-colors">
                              {candidato.nome}
                            </p>
                            <p className="text-sm text-slate-500">
                              {candidato.partido} • {candidato.cargo} • {candidato.estado}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-slate-400 mb-1">
                          {Math.round(similarity * 100)}% match
                        </div>
                        <div className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                          #{candidato.numero}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          
          {suggestions.length >= 8 && (
            <div className="border-t border-slate-100 p-3 text-center">
              <p className="text-sm text-slate-500">
                Mostrando {suggestions.length} resultados. Digite mais para refinar a busca.
              </p>
            </div>
          )}
        </div>
      )}

      {/* No Results */}
      {isOpen && searchTerm.length >= 2 && suggestions.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 z-50">
          <div className="text-center">
            <Search className="h-12 w-12 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-600 font-medium mb-2">Nenhum candidato encontrado</p>
            <p className="text-sm text-slate-500">
              Tente buscar por nome, partido ou número do candidato
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

