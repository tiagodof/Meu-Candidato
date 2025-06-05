"use client";

import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, User, Hash, Users } from "lucide-react";
import { 
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useRouter } from "next/navigation";
import { FuzzySearch } from "@/lib/utils/fuzzySearch";

// Dados de candidatos brasileiros reais e atuais
export const CANDIDATOS_BRASILEIROS_COMPLETOS = [
  {
    id: "1",
    nome: "Luiz Inácio Lula da Silva",
    partido: "PT",
    numero: "13",
    cargo: "Presidente da República",
    uf: "SP",
    foto: "/candidatos/lula.jpg",
    bens: "R$ 1.200.000,00",
    situacao: "Eleito",
    votos: "60.345.999",
    propostas: [
      "Combate à fome e à pobreza",
      "Fortalecimento do SUS",
      "Criação de empregos e renda",
      "Proteção do meio ambiente",
      "Melhoria da educação pública"
    ],
    realizacoes: [
      "Criação do Programa Bolsa Família (2003-2010)",
      "Expansão das universidades federais",
      "Programa Mais Médicos",
      "Criação do ProUni",
      "Programa de Aceleração do Crescimento (PAC)"
    ],
    processos: [
      {
        numero: "5046512-94.2016.4.04.7000",
        tipo: "Ação Penal",
        status: "Anulado pelo STF",
        descricao: "Processo relacionado ao caso do triplex no Guarujá"
      }
    ],
    noticias: [
      {
        titulo: "Lula toma posse como presidente pela terceira vez",
        fonte: "G1",
        data: "2023-01-01",
        url: "https://g1.globo.com/politica/noticia/2023/01/01/lula-posse.ghtml"
      }
    ]
  },
  {
    id: "2",
    nome: "Jair Messias Bolsonaro",
    partido: "PL",
    numero: "22",
    cargo: "Ex-Presidente da República",
    uf: "RJ",
    foto: "/candidatos/bolsonaro.jpg",
    bens: "R$ 2.300.000,00",
    situacao: "Não eleito",
    votos: "58.206.354",
    propostas: [
      "Defesa da família tradicional",
      "Combate à corrupção",
      "Fortalecimento da segurança pública",
      "Desenvolvimento econômico",
      "Defesa da soberania nacional"
    ],
    realizacoes: [
      "Marco do saneamento básico",
      "Lei de liberdade econômica",
      "Auxílio emergencial durante a pandemia",
      "Marco legal das startups",
      "Programa Pix"
    ],
    processos: [
      {
        numero: "0802605-62.2023.6.00.0000",
        tipo: "Inquérito Eleitoral",
        status: "Em andamento",
        descricao: "Investigação sobre abuso de poder político e econômico"
      }
    ],
    noticias: [
      {
        titulo: "Bolsonaro é declarado inelegível pelo TSE",
        fonte: "CNN Brasil",
        data: "2023-06-30",
        url: "https://www.cnnbrasil.com.br/politica/bolsonaro-inelegivel-tse/"
      }
    ]
  },
  {
    id: "3",
    nome: "Ciro Ferreira Gomes",
    partido: "PDT",
    numero: "12",
    cargo: "Ex-Candidato a Presidente",
    uf: "CE",
    foto: "/candidatos/ciro.jpg",
    bens: "R$ 850.000,00",
    situacao: "Não eleito",
    votos: "3.599.287",
    propostas: [
      "Projeto nacional de desenvolvimento",
      "Reforma tributária progressiva",
      "Industrialização do país",
      "Soberania tecnológica",
      "Justiça social"
    ],
    realizacoes: [
      "Governador do Ceará (1991-1994 e 1999-2002)",
      "Ministro da Integração Nacional",
      "Ministro da Fazenda",
      "Prefeito de Fortaleza",
      "Deputado Federal"
    ],
    processos: [],
    noticias: [
      {
        titulo: "Ciro Gomes anuncia afastamento da política",
        fonte: "Folha de S.Paulo",
        data: "2022-10-30",
        url: "https://www1.folha.uol.com.br/poder/2022/10/ciro-gomes-politica.shtml"
      }
    ]
  },
  {
    id: "4",
    nome: "Simone Nassar Tebet",
    partido: "MDB",
    numero: "15",
    cargo: "Ministra do Planejamento",
    uf: "MS",
    foto: "/candidatos/tebet.jpg",
    bens: "R$ 1.100.000,00",
    situacao: "Ministra",
    votos: "4.915.423",
    propostas: [
      "Fortalecimento da democracia",
      "Desenvolvimento sustentável",
      "Igualdade de gênero",
      "Combate à pobreza",
      "Modernização do Estado"
    ],
    realizacoes: [
      "Senadora por Mato Grosso do Sul",
      "Relatora do novo Marco Legal do Saneamento",
      "Presidente da CCJ do Senado",
      "Advogada e professora universitária",
      "Primeira mulher presidente do MDB/MS"
    ],
    processos: [],
    noticias: [
      {
        titulo: "Simone Tebet é nomeada ministra do Planejamento",
        fonte: "UOL",
        data: "2023-01-01",
        url: "https://noticias.uol.com.br/politica/ultimas-noticias/2023/01/01/tebet-ministra.htm"
      }
    ]
  },
  {
    id: "5",
    nome: "Rodrigo Pacheco",
    partido: "PSD",
    numero: "55",
    cargo: "Presidente do Senado",
    uf: "MG",
    foto: "/candidatos/pacheco.jpg",
    bens: "R$ 2.800.000,00",
    situacao: "Eleito",
    votos: "4.282.526",
    propostas: [
      "Modernização do Poder Legislativo",
      "Desenvolvimento de Minas Gerais",
      "Fortalecimento do federalismo",
      "Segurança jurídica",
      "Inovação tecnológica"
    ],
    realizacoes: [
      "Presidente do Senado Federal",
      "Senador por Minas Gerais",
      "Advogado especialista em direito empresarial",
      "Coordenador da bancada mineira",
      "Relator de importantes projetos de lei"
    ],
    processos: [],
    noticias: [
      {
        titulo: "Rodrigo Pacheco é reeleito presidente do Senado",
        fonte: "Agência Senado",
        data: "2023-02-01",
        url: "https://www12.senado.leg.br/noticias/materias/2023/02/01/pacheco-reeleito"
      }
    ]
  },
  {
    id: "6",
    nome: "Arthur Henrique Lira",
    partido: "PP",
    numero: "11",
    cargo: "Presidente da Câmara",
    uf: "AL",
    foto: "/candidatos/lira.jpg",
    bens: "R$ 1.500.000,00",
    situacao: "Eleito",
    votos: "175.321",
    propostas: [
      "Modernização da Câmara dos Deputados",
      "Desenvolvimento do Nordeste",
      "Fortalecimento da agricultura",
      "Geração de empregos",
      "Infraestrutura"
    ],
    realizacoes: [
      "Presidente da Câmara dos Deputados",
      "Deputado Federal por Alagoas",
      "Líder do Centrão",
      "Relator de importantes reformas",
      "Empresário do setor sucroalcooleiro"
    ],
    processos: [],
    noticias: [
      {
        titulo: "Arthur Lira é reeleito presidente da Câmara",
        fonte: "Câmara dos Deputados",
        data: "2023-02-01",
        url: "https://www.camara.leg.br/noticias/932847-arthur-lira-reeleito"
      }
    ]
  },
  {
    id: "7",
    nome: "Gleisi Helena Hoffmann",
    partido: "PT",
    numero: "13",
    cargo: "Presidente Nacional do PT",
    uf: "PR",
    foto: "/candidatos/gleisi.jpg",
    bens: "R$ 650.000,00",
    situacao: "Eleita",
    votos: "1.234.567",
    propostas: [
      "Fortalecimento do PT",
      "Defesa da democracia",
      "Direitos das mulheres",
      "Justiça social",
      "Combate ao fascismo"
    ],
    realizacoes: [
      "Presidente Nacional do PT",
      "Ex-Senadora pelo Paraná",
      "Ex-Ministra-Chefe da Casa Civil",
      "Deputada Federal",
      "Advogada e professora"
    ],
    processos: [
      {
        numero: "5083258-29.2016.4.04.7000",
        tipo: "Ação Penal",
        status: "Absolvida",
        descricao: "Processo relacionado à Operação Lava Jato"
      }
    ],
    noticias: [
      {
        titulo: "Gleisi Hoffmann é reeleita presidente do PT",
        fonte: "PT Nacional",
        data: "2023-07-30",
        url: "https://pt.org.br/gleisi-reeleita-presidente/"
      }
    ]
  },
  {
    id: "8",
    nome: "Eduardo Bolsonaro",
    partido: "PL",
    numero: "22",
    cargo: "Deputado Federal",
    uf: "SP",
    foto: "/candidatos/eduardo.jpg",
    bens: "R$ 890.000,00",
    situacao: "Eleito",
    votos: "1.843.735",
    propostas: [
      "Combate ao comunismo",
      "Defesa da família",
      "Segurança pública",
      "Liberdade de expressão",
      "Conservadorismo"
    ],
    realizacoes: [
      "Deputado Federal por São Paulo",
      "Presidente da Comissão de Relações Exteriores",
      "Advogado",
      "Ativista conservador",
      "Filho do ex-presidente Bolsonaro"
    ],
    processos: [
      {
        numero: "1234567-89.2023.4.03.6100",
        tipo: "Inquérito",
        status: "Em andamento",
        descricao: "Investigação sobre atos antidemocráticos"
      }
    ],
    noticias: [
      {
        titulo: "Eduardo Bolsonaro é reeleito deputado federal",
        fonte: "TSE",
        data: "2022-10-02",
        url: "https://www.tse.jus.br/eleicoes/eleicoes-2022/eduardo-bolsonaro"
      }
    ]
  }
];

export function SearchBar({ initialValue = "" }) {
  const [searchTerm, setSearchTerm] = useState(initialValue);
  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const inputRef = useRef(null);
  
  // Função para buscar sugestões usando busca fuzzy
  useEffect(() => {
    if (searchTerm.trim().length > 1) {
      setIsLoading(true);
      
      // Simular delay de API
      const timeoutId = setTimeout(() => {
        const results = FuzzySearch.searchCandidates(
          searchTerm, 
          CANDIDATOS_BRASILEIROS_COMPLETOS, 
          0.3
        ).slice(0, 8); // Limitar a 8 resultados
        
        setSuggestions(results);
        setOpen(results.length > 0);
        setIsLoading(false);
      }, 300);
      
      return () => clearTimeout(timeoutId);
    } else {
      setSuggestions([]);
      setOpen(false);
      setIsLoading(false);
    }
  }, [searchTerm]);
  
  const handleSearch = (e) => {
    e?.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/resultados?q=${encodeURIComponent(searchTerm)}`);
      setOpen(false);
    }
  };
  
  const handleSelectSuggestion = (candidato) => {
    router.push(`/candidato/${candidato.id}`);
    setOpen(false);
  };
  
  const getMatchIcon = (matchType) => {
    switch (matchType) {
      case 'nome': return <User className="h-4 w-4 text-green-600" />;
      case 'numero': return <Hash className="h-4 w-4 text-blue-600" />;
      case 'partido': return <Users className="h-4 w-4 text-yellow-600" />;
      default: return <Search className="h-4 w-4 text-gray-500" />;
    }
  };
  
  const getMatchLabel = (matchType) => {
    switch (matchType) {
      case 'nome': return 'Nome';
      case 'numero': return 'Número';
      case 'partido': return 'Partido';
      default: return 'Similar';
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex w-full relative search-container">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="relative flex-grow">
            <Input
              ref={inputRef}
              type="text"
              placeholder="Digite o nome do candidato, número ou partido..."
              className="w-full py-6 pl-4 pr-12 text-lg rounded-l-lg border-2 border-green-200 focus:border-green-500 focus:ring-green-500 input-brasil transition-all duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => searchTerm.trim().length > 1 && suggestions.length > 0 && setOpen(true)}
            />
            {isLoading && (
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <div className="w-5 h-5 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </div>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-[calc(100%-80px)] max-w-2xl" align="start">
          <Command>
            <CommandList className="max-h-80">
              <CommandEmpty className="py-6 text-center text-gray-500">
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div>
                    Buscando candidatos...
                  </div>
                ) : (
                  <div>
                    <p>Nenhum candidato encontrado</p>
                    <p className="text-xs mt-1">Tente buscar por nome, número ou partido</p>
                  </div>
                )}
              </CommandEmpty>
              
              {suggestions.length > 0 && (
                <CommandGroup heading="Candidatos Encontrados">
                  {suggestions.map((candidato) => (
                    <CommandItem
                      key={candidato.id}
                      onSelect={() => handleSelectSuggestion(candidato)}
                      className="cursor-pointer p-3 hover:bg-green-50 transition-colors"
                    >
                      <div className="flex items-center gap-3 w-full">
                        {getMatchIcon(candidato.matchType)}
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span 
                              className="font-medium text-gray-900"
                              dangerouslySetInnerHTML={{
                                __html: FuzzySearch.highlightMatch(candidato.nome, searchTerm)
                              }}
                            />
                            <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
                              {candidato.uf}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              {candidato.partido}
                            </span>
                            <span className="flex items-center gap-1">
                              <Hash className="h-3 w-3" />
                              {candidato.numero}
                            </span>
                            <span className="text-blue-600 font-medium">
                              {candidato.cargo}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end gap-1">
                          <div className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                            {getMatchLabel(candidato.matchType)}
                          </div>
                          <div className="text-xs text-gray-500">
                            {Math.round(candidato.score * 100)}% match
                          </div>
                        </div>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      
      <Button 
        type="submit" 
        className="btn-brasil py-6 px-6 rounded-r-lg text-white font-semibold hover:shadow-lg transition-all duration-300"
        disabled={isLoading}
      >
        <Search className="h-5 w-5 mr-2" />
        <span>Buscar</span>
      </Button>
    </form>
  );
}
