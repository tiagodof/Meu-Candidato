// Tipos para a API do Meu Candidato

// Tipo para candidato (resumido)
export interface Candidato {
  id: string;
  nome: string;
  partido: string;
  numero: string;
  cargo?: string;
  info?: string;
  foto?: string | null;
}

// Tipo para detalhes completos do candidato
export interface CandidatoDetalhado extends Candidato {
  bens: string;
  processos: ProcessoJudicial[];
  realizacoes: string[];
  propostas: string[];
  noticias: Noticia[];
}

// Tipo para processo judicial
export interface ProcessoJudicial {
  id: number;
  tipo: string;
  numero: string;
  status: string;
  link?: string;
}

// Tipo para notícia
export interface Noticia {
  titulo: string;
  fonte: string;
  data: string;
  resumo?: string;
  link?: string;
}

// Tipo para resultado de busca
export interface ResultadoBusca {
  query: string;
  resultados: Candidato[];
  total: number;
  sugestoes?: Candidato[];
}

// Tipo para sugestão de autocompletar
export interface SugestaoAutocompletar {
  id: string;
  texto: string;
  tipo: 'candidato' | 'partido' | 'numero';
}

// Tipo para fonte de dados
export interface FonteDados {
  nome: string;
  url: string;
  tipo: 'oficial' | 'noticias' | 'processos';
  ultimaAtualizacao: string;
}

// Tipo para relatório de erro
export interface RelatorioErro {
  candidatoId: string;
  secao: 'dados_basicos' | 'processos' | 'realizacoes' | 'propostas' | 'noticias';
  descricao: string;
  contato?: string;
}

// Tipo para feedback
export interface Feedback {
  candidatoId: string;
  secao: 'dados_basicos' | 'processos' | 'realizacoes' | 'propostas' | 'noticias';
  util: boolean;
}
