"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

// Componente para exibir um card de candidato na lista de resultados
export function CandidateCard({ candidato, onViewDetails }) {
  return (
    <Card className="w-full hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div>
            <h3 className="text-lg font-semibold">{candidato.nome}</h3>
            <div className="flex flex-wrap gap-2 mt-1">
              <Badge variant="outline" className="text-xs">
                {candidato.partido}
              </Badge>
              <Badge variant="outline" className="text-xs">
                Número: {candidato.numero}
              </Badge>
              {candidato.cargo && (
                <Badge variant="outline" className="text-xs">
                  {candidato.cargo}
                </Badge>
              )}
            </div>
            {candidato.info && (
              <p className="text-sm text-gray-600 mt-2">{candidato.info}</p>
            )}
          </div>
          
          <div className="mt-3 md:mt-0">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => onViewDetails(candidato.id)}
              className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
            >
              Ver detalhes
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Componente para exibir uma lista de candidatos com opção de fallback
export function CandidateList({ candidates, loading, searchTerm, onViewDetails }) {
  // Estado para controlar se as sugestões de fallback estão visíveis
  const [showFallback, setShowFallback] = useState(candidates.length === 0 && !loading);
  
  // Dados de exemplo para sugestões de fallback - serão substituídos pela integração real
  const fallbackSuggestions = [
    { id: "10", nome: "João Silva", partido: "PXX", numero: "12345", cargo: "Vereador" },
    { id: "11", nome: "João Silveira", partido: "PYY", numero: "67890", cargo: "Prefeito" },
    { id: "12", nome: "João Silvestre", partido: "PZZ", numero: "54321", cargo: "Deputado" },
  ];
  
  if (loading) {
    return (
      <div className="space-y-4">
        {Array(3).fill(0).map((_, i) => (
          <Card key={i} className="w-full">
            <CardContent className="p-4">
              <div className="animate-pulse flex flex-col space-y-3">
                <div className="h-5 bg-gray-200 rounded w-1/3"></div>
                <div className="flex gap-2">
                  <div className="h-4 bg-gray-200 rounded w-16"></div>
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                </div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
  
  if (candidates.length === 0) {
    return (
      <div>
        <div className="text-center py-8">
          <AlertCircle className="h-12 w-12 mx-auto mb-4 text-yellow-500" />
          <p className="text-gray-700 font-medium text-lg">Nenhum candidato encontrado para "{searchTerm}"</p>
          <p className="mt-2 text-gray-500">
            Tente buscar por outro nome, número ou partido
          </p>
        </div>
        
        {showFallback && (
          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">Você quis dizer:</h3>
            <div className="space-y-3">
              {fallbackSuggestions.map((candidato) => (
                <CandidateCard 
                  key={candidato.id} 
                  candidato={candidato} 
                  onViewDetails={onViewDetails}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      {candidates.map((candidato) => (
        <CandidateCard 
          key={candidato.id} 
          candidato={candidato} 
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}
