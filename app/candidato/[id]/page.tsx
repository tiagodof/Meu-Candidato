"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, User, MapPin, Vote, DollarSign } from "lucide-react";
import { LegalidadeTab } from "@/components/legalidade/LegalidadeTab";
import { CANDIDATOS_BRASILEIROS_COMPLETOS } from "@/components/search/SearchBar";

export default function CandidatoPage() {
  const params = useParams();
  const id = params.id;
  const [loading, setLoading] = useState(true);
  const [candidato, setCandidato] = useState(null);

  useEffect(() => {
    if (id) {
      setLoading(true);
      // Simular tempo de carregamento
      setTimeout(() => {
        const candidatoEncontrado = CANDIDATOS_BRASILEIROS_COMPLETOS.find(c => c.id === id);
        setCandidato(candidatoEncontrado);
        setLoading(false);
      }, 800);
    }
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-blue-50 p-4 md:p-8">
        <div className="w-full max-w-6xl mx-auto">
          {/* Header com cores do Brasil */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full brasil-pulse"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full brasil-pulse"></div>
              <div className="w-3 h-3 bg-blue-600 rounded-full brasil-pulse"></div>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent mb-2">
              Meu Candidato
            </h1>
            <p className="text-gray-600 italic">"Use com moderação"</p>
          </div>
          
          <div className="animate-pulse space-y-6">
            <div className="flex items-center space-x-4 bg-white/70 backdrop-blur-sm rounded-lg p-6">
              <div className="rounded-full bg-green-200 h-24 w-24"></div>
              <div className="space-y-3">
                <div className="h-8 bg-green-200 rounded w-64"></div>
                <div className="h-4 bg-yellow-200 rounded w-48"></div>
                <div className="h-4 bg-blue-200 rounded w-32"></div>
              </div>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 space-y-3">
              <div className="h-6 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!candidato) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-blue-50 p-4 md:p-8">
        <div className="w-full max-w-6xl mx-auto">
          {/* Header com cores do Brasil */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent mb-2">
              Meu Candidato
            </h1>
            <p className="text-gray-600 italic">"Use com moderação"</p>
          </div>
          
          <Card className="card-brasil">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Candidato não encontrado</h2>
              <p className="text-gray-600 mb-6">
                Não foi possível encontrar informações sobre este candidato em nossa base de dados.
              </p>
              <Button 
                onClick={() => window.history.back()}
                className="btn-brasil"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar para resultados
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-blue-50 p-4 md:p-8">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header com cores do Brasil */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent mb-2">
            Meu Candidato
          </h1>
          <p className="text-gray-600 italic">"Use com moderação"</p>
        </div>

        {/* Botão Voltar */}
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="focus-brasil"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
        </div>
        
        {/* Perfil do Candidato */}
        <div className="mb-8">
          <Card className="card-brasil">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <Avatar className="h-32 w-32 border-4 border-green-200">
                  <User className="h-16 w-16 text-green-600" />
                </Avatar>
                
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-800 mb-3">{candidato.nome}</h2>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="badge-verde text-white">
                      {candidato.partido}
                    </Badge>
                    <Badge className="badge-azul text-white">
                      Nº {candidato.numero}
                    </Badge>
                    <Badge className="badge-amarelo text-blue-800">
                      <MapPin className="h-3 w-3 mr-1" />
                      {candidato.uf}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-700">
                      <User className="h-4 w-4 text-green-600" />
                      <span><strong>Cargo:</strong> {candidato.cargo}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <DollarSign className="h-4 w-4 text-yellow-600" />
                      <span><strong>Bens:</strong> {candidato.bens}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Vote className="h-4 w-4 text-blue-600" />
                      <span><strong>Situação:</strong> {candidato.situacao}</span>
                    </div>
                  </div>
                  
                  {candidato.votos && (
                    <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                      <span className="text-blue-800 font-semibold">
                        Votos recebidos: {candidato.votos}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Abas de Informações */}
        <Tabs defaultValue="propostas" className="w-full">
          <TabsList className="grid grid-cols-5 mb-6 bg-white border border-green-200">
            <TabsTrigger value="propostas" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-700">
              Propostas
            </TabsTrigger>
            <TabsTrigger value="realizacoes" className="data-[state=active]:bg-yellow-100 data-[state=active]:text-yellow-700">
              Realizações
            </TabsTrigger>
            <TabsTrigger value="processos" className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700">
              Processos
            </TabsTrigger>
            <TabsTrigger value="noticias" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-700">
              Notícias
            </TabsTrigger>
            <TabsTrigger value="legalidade" className="data-[state=active]:bg-yellow-100 data-[state=active]:text-yellow-700">
              Legalidade
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="propostas">
            <Card className="card-brasil">
              <CardHeader>
                <CardTitle className="text-green-700">Propostas do Candidato</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {candidato.propostas.map((proposta, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                      <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <p className="text-green-800">{proposta}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="realizacoes">
            <Card className="card-brasil">
              <CardHeader>
                <CardTitle className="text-yellow-700">Realizações em Mandatos Anteriores</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {candidato.realizacoes.map((realizacao, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                      <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        ✓
                      </div>
                      <p className="text-yellow-800">{realizacao}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="processos">
            <Card className="card-brasil">
              <CardHeader>
                <CardTitle className="text-blue-700">Processos Judiciais</CardTitle>
              </CardHeader>
              <CardContent>
                {candidato.processos.length > 0 ? (
                  <div className="space-y-4">
                    {candidato.processos.map((processo, index) => (
                      <div key={index} className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-blue-800">{processo.tipo}</h4>
                          <Badge 
                            className={
                              processo.status === "Em andamento" ? "bg-yellow-100 text-yellow-800" :
                              processo.status === "Anulado pelo STF" ? "bg-green-100 text-green-800" :
                              processo.status === "Absolvida" ? "bg-green-100 text-green-800" :
                              "bg-gray-100 text-gray-800"
                            }
                          >
                            {processo.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-blue-700 mb-1">
                          <strong>Número:</strong> {processo.numero}
                        </p>
                        <p className="text-sm text-blue-600">{processo.descricao}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <p>Nenhum processo judicial encontrado.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="noticias">
            <Card className="card-brasil">
              <CardHeader>
                <CardTitle className="text-green-700">Notícias Recentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {candidato.noticias.map((noticia, index) => (
                    <div key={index} className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-2">{noticia.titulo}</h4>
                      <div className="flex justify-between items-center text-sm text-green-600">
                        <span><strong>Fonte:</strong> {noticia.fonte}</span>
                        <span><strong>Data:</strong> {noticia.data}</span>
                      </div>
                      {noticia.url && (
                        <a 
                          href={noticia.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 text-sm mt-2 inline-block"
                        >
                          Ler notícia completa →
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="legalidade">
            <LegalidadeTab />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}

