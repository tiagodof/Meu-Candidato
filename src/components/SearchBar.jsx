import { useState, useEffect, useRef } from 'react';
import { candidatos, fuzzySearch } from '../data/candidatos.js';

export default function SearchBar({ onCandidatoSelect }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);

  useEffect(() => {
    if (query.length >= 2) {
      const results = fuzzySearch(query, candidatos);
      setSuggestions(results);
      setShowSuggestions(true);
      setSelectedIndex(-1);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && suggestions[selectedIndex]) {
          selectCandidate(suggestions[selectedIndex]);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setSelectedIndex(-1);
        break;
    }
  };

  const selectCandidate = (candidate) => {
    setQuery(candidate.nome);
    setShowSuggestions(false);
    setSelectedIndex(-1);
    
    // Chama a função de callback para navegar para a página do candidato
    if (onCandidatoSelect) {
      onCandidatoSelect(candidate);
    }
  };

  const handleClickOutside = (e) => {
    if (
      inputRef.current && 
      !inputRef.current.contains(e.target) &&
      suggestionsRef.current &&
      !suggestionsRef.current.contains(e.target)
    ) {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="🔍 Pesquise por candidatos..."
          className="w-full bg-white text-slate-800 px-6 py-4 rounded-full text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-200"
        />
        
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setSuggestions([]);
              setShowSuggestions(false);
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
          >
            ✕
          </button>
        )}
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div
          ref={suggestionsRef}
          className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-slate-200 z-50 max-h-80 overflow-y-auto"
        >
          {suggestions.map((candidate, index) => (
            <div
              key={candidate.id}
              onClick={() => selectCandidate(candidate)}
              className={`p-4 cursor-pointer transition-colors border-b border-slate-100 last:border-b-0 ${
                index === selectedIndex 
                  ? 'bg-blue-50 border-blue-200' 
                  : 'hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                      <span className="text-slate-600 font-semibold text-sm">
                        {candidate.nome.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800">
                        {candidate.nome}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {candidate.partido} • {candidate.cargo}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                    {candidate.resumo}
                  </p>
                </div>
                <div className="ml-4 flex flex-col items-end">
                  <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                    {candidate.matchPercentage}% match
                  </span>
                </div>
              </div>
            </div>
          ))}
          
          {suggestions.length === 0 && query.length >= 2 && (
            <div className="p-4 text-center text-slate-500">
              <p>Nenhum candidato encontrado para "{query}"</p>
              <p className="text-xs mt-1">Tente buscar por nome ou partido</p>
            </div>
          )}
        </div>
      )}

      {query.length >= 2 && suggestions.length > 0 && (
        <div className="mt-2 text-xs text-slate-400 text-center">
          {suggestions.length} candidato{suggestions.length !== 1 ? 's' : ''} encontrado{suggestions.length !== 1 ? 's' : ''}
        </div>
      )}
    </div>
  );
}

