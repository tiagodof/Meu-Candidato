"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { SearchBar } from "@/components/search/SearchBar";
import { CandidateList } from "@/components/candidate/CandidateList";

// Componente de carregamento para Suspense
function ResultadosLoading() {
  return (
    <div className="space-y-4">
      {Array(3).fill(0).map((_, i) => (
        <div key={i} className="w-full p-4 border rounded-lg">
          <div className="animate-pulse flex flex-col space-y-3">
            <div className="h-5 bg-gray-200 rounded w-1/3"></div>
            <div className="flex gap-2">
              <div className="h-4 bg-gray-200 rounded w-16"></div>
              <div className="h-4 bg-gray-200 rounded w-24"></div>
            </div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Componente de conteúdo que usa useSearchParams
function ResultadosContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("q") || "";
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Simulação de busca - será substituída pela integração real com APIs
    if (query) {
      setLoading(true);
      // Simular tempo de carregamento
      setTimeout(() => {
        // Dados de exemplo - serão substituídos pela integração com API
        setResults([
          { id: "1", nome: "João Silva", partido: "PXX", numero: "12345", cargo: "Vereador", info: "Candidato à reeleição, atualmente no 1º mandato" },
          { id: "2", nome: "Maria Oliveira", partido: "PYY", numero: "67890", cargo: "Prefeito", info: "Ex-secretária de Educação, primeira candidatura a prefeito" },
        ]);
        setLoading(false);
      }, 1500);
    } else {
      setResults([]);
      setLoading(false);
    }
  }, [query]);

  const handleViewDetails = (candidatoId) => {
    router.push(`/candidato/${candidatoId}`);
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-4">
        {loading ? "Buscando..." : `Resultados para "${query}"`}
      </h2>
      
      <CandidateList 
        candidates={results}
        loading={loading}
        searchTerm={query}
        onViewDetails={handleViewDetails}
      />
    </div>
  );
}

// Componente principal da página de resultados
export default function ResultadosPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8">
      <div className="w-full max-w-6xl">
        <h1 className="text-3xl font-bold mb-6">Meu Candidato</h1>
        
        <div className="mb-8">
          <Suspense fallback={<div>Carregando busca...</div>}>
            <SearchBar />
          </Suspense>
        </div>
        
        <Suspense fallback={<ResultadosLoading />}>
          <ResultadosContent />
        </Suspense>
      </div>
    </main>
  );
}
