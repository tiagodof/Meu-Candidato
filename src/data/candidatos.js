// Dados de candidatos brasileiros reais
export const candidatos = [
  {
    id: 'lula',
    nome: 'Luiz Inácio Lula da Silva',
    nomeCompleto: 'Luiz Inácio Lula da Silva',
    partido: 'PT',
    cargo: 'Presidente da República',
    foto: '/images/lula.jpg',
    resumo: 'Ex-presidente do Brasil (2003-2010), líder sindical e político brasileiro.',
    processos: [
      {
        tipo: 'Criminal',
        status: 'Arquivado',
        descricao: 'Operação Lava Jato - Condenação anulada pelo STF',
        ano: '2021'
      }
    ],
    historico: [
      {
        cargo: 'Presidente da República',
        periodo: '2003-2010',
        realizacoes: ['Programa Bolsa Família', 'Criação do ProUni', 'Programa Mais Médicos']
      },
      {
        cargo: 'Líder Sindical',
        periodo: '1975-1980',
        realizacoes: ['Fundação do PT', 'Greves do ABC', 'Movimento sindical']
      }
    ],
    propostas: [
      'Reconstrução do Estado brasileiro',
      'Combate à fome e à pobreza',
      'Fortalecimento da democracia',
      'Política externa soberana'
    ],
    votacoes: [
      {
        projeto: 'Marco Civil da Internet',
        voto: 'Favorável',
        ano: '2014'
      }
    ],
    aliancas: ['PT', 'PCdoB', 'PV', 'PSB']
  },
  {
    id: 'bolsonaro',
    nome: 'Jair Messias Bolsonaro',
    nomeCompleto: 'Jair Messias Bolsonaro',
    partido: 'PL',
    cargo: 'Ex-Presidente da República',
    foto: '/images/bolsonaro.jpg',
    resumo: 'Ex-presidente do Brasil (2019-2022), ex-deputado federal e militar.',
    processos: [
      {
        tipo: 'Eleitoral',
        status: 'Em andamento',
        descricao: 'Investigação sobre abuso de poder político e econômico',
        ano: '2023'
      }
    ],
    historico: [
      {
        cargo: 'Presidente da República',
        periodo: '2019-2022',
        realizacoes: ['Marco do saneamento', 'Auxílio emergencial', 'Lei de liberdade econômica']
      },
      {
        cargo: 'Deputado Federal',
        periodo: '1991-2018',
        realizacoes: ['27 anos no Congresso', 'Defesa das Forças Armadas', 'Pautas conservadoras']
      }
    ],
    propostas: [
      'Defesa da família tradicional',
      'Fortalecimento das Forças Armadas',
      'Liberalismo econômico',
      'Combate à corrupção'
    ],
    votacoes: [
      {
        projeto: 'Impeachment Dilma Rousseff',
        voto: 'Favorável',
        ano: '2016'
      }
    ],
    aliancas: ['PL', 'PP', 'Republicanos', 'União Brasil']
  },
  {
    id: 'ciro',
    nome: 'Ciro Ferreira Gomes',
    nomeCompleto: 'Ciro Ferreira Gomes',
    partido: 'PDT',
    cargo: 'Ex-Governador do Ceará',
    foto: '/images/ciro.jpg',
    resumo: 'Político brasileiro, ex-governador do Ceará e ex-ministro.',
    processos: [
      {
        tipo: 'Cível',
        status: 'Arquivado',
        descricao: 'Ação por danos morais - Improcedente',
        ano: '2020'
      }
    ],
    historico: [
      {
        cargo: 'Governador do Ceará',
        periodo: '1991-1994, 1999-2002',
        realizacoes: ['Modernização do estado', 'Programas sociais', 'Desenvolvimento econômico']
      },
      {
        cargo: 'Ministro da Fazenda',
        periodo: '1994',
        realizacoes: ['Participação no Plano Real', 'Estabilização monetária']
      }
    ],
    propostas: [
      'Projeto Nacional de Desenvolvimento',
      'Renda básica universal',
      'Industrialização verde',
      'Reforma tributária'
    ],
    votacoes: [
      {
        projeto: 'Reforma da Previdência',
        voto: 'Contrário',
        ano: '2019'
      }
    ],
    aliancas: ['PDT', 'Avante', 'Solidariedade']
  },
  {
    id: 'tebet',
    nome: 'Simone Nassar Tebet',
    nomeCompleto: 'Simone Nassar Tebet',
    partido: 'MDB',
    cargo: 'Senadora',
    foto: '/images/tebet.jpg',
    resumo: 'Senadora por Mato Grosso do Sul, advogada e política brasileira.',
    processos: [
      {
        tipo: 'Administrativo',
        status: 'Arquivado',
        descricao: 'Processo administrativo - Sem irregularidades',
        ano: '2021'
      }
    ],
    historico: [
      {
        cargo: 'Senadora',
        periodo: '2015-presente',
        realizacoes: ['Relatoria da CPI da Covid', 'Lei de proteção à mulher', 'Defesa da democracia']
      },
      {
        cargo: 'Prefeita de Três Lagoas',
        periodo: '2005-2010',
        realizacoes: ['Modernização da cidade', 'Programas habitacionais', 'Desenvolvimento urbano']
      }
    ],
    propostas: [
      'Fortalecimento da democracia',
      'Direitos das mulheres',
      'Desenvolvimento sustentável',
      'Combate à corrupção'
    ],
    votacoes: [
      {
        projeto: 'Marco temporal indígena',
        voto: 'Contrário',
        ano: '2023'
      }
    ],
    aliancas: ['MDB', 'PSDB', 'Cidadania']
  },
  {
    id: 'pacheco',
    nome: 'Rodrigo Pacheco',
    nomeCompleto: 'Rodrigo Otávio Soares Pacheco',
    partido: 'PSD',
    cargo: 'Presidente do Senado',
    foto: '/images/pacheco.jpg',
    resumo: 'Presidente do Senado Federal, senador por Minas Gerais.',
    processos: [
      {
        tipo: 'Eleitoral',
        status: 'Arquivado',
        descricao: 'Prestação de contas eleitorais - Aprovadas',
        ano: '2022'
      }
    ],
    historico: [
      {
        cargo: 'Presidente do Senado',
        periodo: '2021-presente',
        realizacoes: ['Condução dos trabalhos legislativos', 'Mediação política', 'Defesa institucional']
      },
      {
        cargo: 'Senador',
        periodo: '2019-presente',
        realizacoes: ['Projetos de lei importantes', 'Comissões parlamentares', 'Representação de MG']
      }
    ],
    propostas: [
      'Fortalecimento do Legislativo',
      'Desenvolvimento de Minas Gerais',
      'Modernização do Estado',
      'Diálogo institucional'
    ],
    votacoes: [
      {
        projeto: 'PEC dos Precatórios',
        voto: 'Favorável',
        ano: '2021'
      }
    ],
    aliancas: ['PSD', 'MDB', 'PP']
  }
];

// Função de busca fuzzy
export function fuzzySearch(query, candidates) {
  if (!query || query.length < 2) return [];
  
  const normalizeString = (str) => {
    return str.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove acentos
      .replace(/[^a-z0-9\s]/g, ''); // Remove caracteres especiais
  };
  
  const normalizedQuery = normalizeString(query);
  
  const results = candidates.map(candidate => {
    const normalizedName = normalizeString(candidate.nome);
    const normalizedFullName = normalizeString(candidate.nomeCompleto);
    const normalizedParty = normalizeString(candidate.partido);
    
    let score = 0;
    
    // Busca exata no início do nome (maior peso)
    if (normalizedName.startsWith(normalizedQuery)) {
      score += 100;
    }
    
    // Busca exata no nome completo
    if (normalizedFullName.includes(normalizedQuery)) {
      score += 80;
    }
    
    // Busca por palavras individuais
    const queryWords = normalizedQuery.split(' ');
    const nameWords = normalizedName.split(' ');
    
    queryWords.forEach(queryWord => {
      nameWords.forEach(nameWord => {
        if (nameWord.startsWith(queryWord)) {
          score += 60;
        } else if (nameWord.includes(queryWord)) {
          score += 40;
        }
      });
    });
    
    // Busca no partido
    if (normalizedParty.includes(normalizedQuery)) {
      score += 30;
    }
    
    // Busca por similaridade de caracteres
    const similarity = calculateSimilarity(normalizedQuery, normalizedName);
    score += similarity * 20;
    
    return {
      ...candidate,
      score: score,
      matchPercentage: Math.min(100, Math.round(score))
    };
  });
  
  return results
    .filter(result => result.score > 20)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
}

// Função para calcular similaridade entre strings
function calculateSimilarity(str1, str2) {
  const longer = str1.length > str2.length ? str1 : str2;
  const shorter = str1.length > str2.length ? str2 : str1;
  
  if (longer.length === 0) return 1.0;
  
  const editDistance = levenshteinDistance(longer, shorter);
  return (longer.length - editDistance) / longer.length;
}

// Algoritmo de distância de Levenshtein
function levenshteinDistance(str1, str2) {
  const matrix = [];
  
  for (let i = 0; i <= str2.length; i++) {
    matrix[i] = [i];
  }
  
  for (let j = 0; j <= str1.length; j++) {
    matrix[0][j] = j;
  }
  
  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  
  return matrix[str2.length][str1.length];
}

