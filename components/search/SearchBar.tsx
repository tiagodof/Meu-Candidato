"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { FuzzySearch } from '@/lib/utils/fuzzySearch';

// Dados de candidatos brasileiros completos
const CANDIDATOS_BRASILEIROS_COMPLETOS = [
  {
    id: 1,
    nome: "Luiz Inácio Lula da Silva",
    partido: "PT",
    numero: "13",
    uf: "SP",
    cargo: "Presidente da República",
    bens: "R$ 1.200.000,00",
    situacao: "Eleito",
    votos: "60.345.999"
  },
  {
    id: 2,
    nome: "Jair Messias Bolsonaro",
    partido: "PL",
    numero: "22",
    uf: "RJ",
    cargo: "Ex-Presidente da República",
    bens: "R$ 2.300.000,00",
    situacao: "Não eleito",
    votos: "58.206.354"
  },
  {
    id: 3,
    nome: "Ciro Ferreira Gomes",
    partido: "PDT",
    numero: "12",
    uf: "CE",
    cargo: "Ex-Candidato a Presidente",
    bens: "R$ 1.800.000,00",
    situacao: "Não eleito",
    votos: "3.599.287"
  },
  {
    id: 4,
    nome: "Simone Nassar Tebet",
    partido: "MDB",
    numero: "15",
    uf: "MS",
    cargo: "Ministra do Planejamento",
    bens: "R$ 950.000,00",
    situacao: "Não eleita",
    votos: "4.915.423"
  },
  {
    id: 5,
    nome: "Rodrigo Pacheco",
    partido: "PSD",
    numero: "55",
    uf: "MG",
    cargo: "Presidente do Senado",
    bens: "R$ 3.200.000,00",
    situacao: "Eleito",
    votos: "4.280.173"
  },
  {
    id: 6,
    nome: "Arthur Henrique Lira",
    partido: "PP",
    numero: "11",
    uf: "AL",
    cargo: "Presidente da Câmara",
    bens: "R$ 2.100.000,00",
    situacao: "Eleito",
    votos: "186.235"
  },
  {
    id: 7,
    nome: "Gleisi Helena Hoffmann",
    partido: "PT",
    numero: "13",
    uf: "PR",
    cargo: "Presidente Nacional do PT",
    bens: "R$ 890.000,00",
    situacao: "Eleita",
    votos: "1.104.295"
  },
  {
    id: 8,
    nome: "Eduardo Bolsonaro",
    partido: "PL",
    numero: "22",
    uf: "SP",
    cargo: "Deputado Federal",
    bens: "R$ 1.450.000,00",
    situacao: "Eleito",
    votos: "1.843.735"
  }
];

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<typeof CANDIDATOS_BRASILEIROS_COMPLETOS>([]);
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

  const handleSelectCandidate = (candidato: typeof CANDIDATOS_BRASILEIROS_COMPLETOS[0]) => {
    router.push(`/candidato/${candidato.id}`);
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-slate-500" />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Pesquise"
          className="w-full pl-12 pr-4 py-4 bg-white border-0 rounded-xl text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-lg"
        />
      </div>

      {/* Suggestions Dropdown */}
      {isOpen && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-slate-200 z-50 max-h-96 overflow-y-auto">
          <div className="p-4">
            <p className="text-sm text-slate-600 mb-3">Candidatos Encontrados</p>
            <div className="space-y-2">
              {suggestions.map((candidato) => {
                const similarity = FuzzySearch.similarity(searchTerm, candidato.nome);
                return (
                  <button
                    key={candidato.id}
                    onClick={() => handleSelectCandidate(candidato)}
                    className="w-full text-left p-3 rounded-lg hover:bg-slate-50 transition-colors border border-slate-100"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="font-medium text-slate-800">
                            {candidato.nome.split(new RegExp(`(${searchTerm})`, 'gi')).map((part, index) =>
                              part.toLowerCase() === searchTerm.toLowerCase() ? (
                                <mark key={index} className="bg-yellow-200 px-1 rounded">
                                  {part}
                                </mark>
                              ) : (
                                part
                              )
                            )}
                          </span>
                          <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                            {candidato.partido}
                          </span>
                          <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                            Nº {candidato.numero}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600">{candidato.cargo}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-slate-500">Similar</p>
                        <p className="text-sm font-medium text-emerald-600">
                          {Math.round(similarity * 100)}% match
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* No results */}
      {isOpen && searchTerm.length >= 2 && suggestions.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-slate-200 z-50">
          <div className="p-4 text-center">
            <p className="text-slate-600">Nenhum candidato encontrado</p>
            <p className="text-sm text-slate-500 mt-1">
              Tente buscar por nome, número ou partido
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

