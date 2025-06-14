// Utilitário para busca fuzzy e nomes similares
export class FuzzySearch {
  // Calcula a distância de Levenshtein entre duas strings
  static levenshteinDistance(str1: string, str2: string): number {
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
  
  // Calcula a similaridade entre duas strings (0-1)
  static similarity(str1: string, str2: string): number {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    
    if (longer.length === 0) {
      return 1.0;
    }
    
    const distance = this.levenshteinDistance(longer, shorter);
    return (longer.length - distance) / longer.length;
  }
  
  // Normaliza string para comparação (remove acentos, converte para minúsculo)
  static normalize(str: string): string {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove acentos
      .replace(/[^a-z0-9\s]/g, '') // Remove caracteres especiais
      .trim();
  }
  
  // Busca fuzzy em uma lista de candidatos
  static searchCandidates(query: string, candidates: any[], threshold: number = 0.3): any[] {
    if (!query || query.length < 2) {
      return [];
    }
    
    const normalizedQuery = this.normalize(query);
    const results = [];
    
    for (const candidate of candidates) {
      const normalizedName = this.normalize(candidate.nome);
      const normalizedParty = this.normalize(candidate.partido);
      const numero = candidate.numero.toString();
      
      // Busca por nome
      const nameSimilarity = this.similarity(normalizedQuery, normalizedName);
      
      // Busca por partes do nome
      const nameParts = normalizedName.split(' ');
      const maxPartSimilarity = Math.max(
        ...nameParts.map(part => this.similarity(normalizedQuery, part))
      );
      
      // Busca por partido
      const partySimilarity = this.similarity(normalizedQuery, normalizedParty);
      
      // Busca por número
      const numberMatch = numero.includes(query) ? 1 : 0;
      
      // Busca por iniciais
      const initials = nameParts.map(part => part.charAt(0)).join('');
      const initialsSimilarity = this.similarity(normalizedQuery, initials);
      
      // Calcula score final
      const finalScore = Math.max(
        nameSimilarity,
        maxPartSimilarity,
        partySimilarity,
        numberMatch,
        initialsSimilarity * 0.8 // Peso menor para iniciais
      );
      
      if (finalScore >= threshold) {
        results.push({
          ...candidate,
          score: finalScore,
          matchType: this.getMatchType(finalScore, nameSimilarity, partySimilarity, numberMatch)
        });
      }
    }
    
    // Ordena por score (maior primeiro)
    return results.sort((a, b) => b.score - a.score);
  }
  
  // Determina o tipo de match para exibição
  static getMatchType(finalScore: number, nameSimilarity: number, partySimilarity: number, numberMatch: number): string {
    if (numberMatch === 1) return 'número';
    if (nameSimilarity === finalScore) return 'nome';
    if (partySimilarity === finalScore) return 'partido';
    return 'similar';
  }
  
  // Destaca o texto que fez match
  static highlightMatch(text: string, query: string): string {
    if (!query || query.length < 2) return text;
    
    const normalizedQuery = this.normalize(query);
    const normalizedText = this.normalize(text);
    
    // Busca exata
    const exactIndex = normalizedText.indexOf(normalizedQuery);
    if (exactIndex !== -1) {
      const start = exactIndex;
      const end = start + query.length;
      return text.substring(0, start) + 
             `<mark class="bg-yellow-200 text-yellow-800 px-1 rounded">${text.substring(start, end)}</mark>` + 
             text.substring(end);
    }
    
    return text;
  }
  
  // Gera sugestões de correção para nomes
  static generateSuggestions(query: string, candidates: any[]): string[] {
    const suggestions = new Set<string>();
    const normalizedQuery = this.normalize(query);
    
    for (const candidate of candidates) {
      const words = this.normalize(candidate.nome).split(' ');
      
      for (const word of words) {
        if (word.length >= 3 && this.similarity(normalizedQuery, word) > 0.5) {
          suggestions.add(word);
        }
      }
    }
    
    return Array.from(suggestions).slice(0, 5);
  }
}

