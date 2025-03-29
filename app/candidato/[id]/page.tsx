"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, User } from "lucide-react";
import { 
  ProcessosJudiciais, 
  NoticiasRecentes, 
  PropostasCandidato, 
  RealizacoesCandidato,
  FeedbackInfo,
  ReportarErro,
  AcessibilidadeControles
} from "@/components/candidate/CandidateDetails";

export default function CandidatoPage() {
  const params = useParams();
  const id = params.id;
  const [loading, setLoading] = useState(true);
  const [candidato, setCandidato] = useState(null);

  useEffect(() => {
    // Simulação de busca - será substituída pela integração real com APIs
    if (id) {
      setLoading(true);
      // Simular tempo de carregamento
      setTimeout(() => {
        setCandidato({
          id: id,
          nome: "João Silva",
          partido: "PXX",
          numero: "12345",
          cargo: "Vereador",
          foto: null,
          bens: "R$ 450.000,00",
          processos: [
            { id: 1, tipo: "Processo Civil", numero: "0001234-12.2022.8.00.0001", status: "Em andamento" }
          ],
          realizacoes: [
            "Projeto de lei para melhoria do transporte público",
            "Atuação na área de educação com foco em escolas públicas"
          ],
          propostas: [
            "Ampliar investimentos em saúde pública",
            "Melhorar a infraestrutura urbana",
            "Criar programas de incentivo à cultura local"
          ],
          noticias: [
            { 
              titulo: "Candidato participa de debate sobre mobilidade urbana", 
              fonte: "Jornal da Cidade", 
              data: "15/03/2025",
              resumo: "O candidato João Silva participou de um debate sobre mobilidade urbana e apresentou propostas para melhorar o transporte público na cidade."
            }
          ]
        });
        setLoading(false);
      }, 1500);
    }
  }, [id]);

  if (loading) {
    return (
      <main className="flex min-h-screen flex-col items-center p-4 md:p-8">
        <div className="w-full max-w-6xl">
          <div className="flex items-center mb-6">
            <Button variant="ghost" className="mr-2" onClick={() => window.history.back()}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
            <h1 className="text-3xl font-bold">Carregando...</h1>
          </div>
          
          <div className="animate-pulse space-y-6">
            <div className="flex items-center space-x-4">
              <div className="rounded-full bg-gray-200 h-16 w-16"></div>
              <div className="space-y-2">
                <div className="h-6 bg-gray-200 rounded w-48"></div>
                <div className="h-4 bg-gray-200 rounded w-32"></div>
              </div>
            </div>
            
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
      </main>
    );
  }

  if (!candidato) {
    return (
      <main className="flex min-h-screen flex-col items-center p-4 md:p-8">
        <div className="w-full max-w-6xl">
          <div className="flex items-center mb-6">
            <Button variant="ghost" className="mr-2" onClick={() => window.history.back()}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
            <h1 className="text-3xl font-bold">Candidato não encontrado</h1>
          </div>
          
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-gray-500 mb-4">
                Não foi possível encontrar informações sobre este candidato.
              </p>
              <Button onClick={() => window.history.back()}>
                Voltar para resultados
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-8">
      <div className="w-full max-w-6xl">
        <div className="flex items-center mb-6">
          <Button variant="ghost" className="mr-2" onClick={() => window.history.back()}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
          <h1 className="text-3xl font-bold">Perfil do Candidato</h1>
        </div>
        
        <div className="mb-4">
          <AcessibilidadeControles />
        </div>
        
        <div className="mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <Avatar className="h-24 w-24 border">
                  <User className="h-12 w-12" />
                </Avatar>
                
                <div>
                  <h2 className="text-2xl font-bold">{candidato.nome}</h2>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline" className="text-sm">
                      {candidato.partido}
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      Número: {candidato.numero}
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      {candidato.cargo}
                    </Badge>
                  </div>
                  
                  <p className="mt-2 text-gray-600">
                    Bens declarados: {candidato.bens}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="propostas" className="w-full">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="propostas">Propostas</TabsTrigger>
            <TabsTrigger value="realizacoes">Realizações</TabsTrigger>
            <TabsTrigger value="processos">Processos</TabsTrigger>
            <TabsTrigger value="noticias">Notícias</TabsTrigger>
          </TabsList>
          
          <TabsContent value="propostas">
            <Card>
              <CardHeader>
                <CardTitle>Propostas do Candidato</CardTitle>
              </CardHeader>
              <CardContent>
                <PropostasCandidato propostas={candidato.propostas} />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="realizacoes">
            <Card>
              <CardHeader>
                <CardTitle>Realizações em Mandatos Anteriores</CardTitle>
              </CardHeader>
              <CardContent>
                <RealizacoesCandidato realizacoes={candidato.realizacoes} />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="processos">
            <Card>
              <CardHeader>
                <CardTitle>Processos Judiciais</CardTitle>
              </CardHeader>
              <CardContent>
                <ProcessosJudiciais processos={candidato.processos} />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="noticias">
            <Card>
              <CardHeader>
                <CardTitle>Notícias Recentes</CardTitle>
              </CardHeader>
              <CardContent>
                <NoticiasRecentes noticias={candidato.noticias} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="mt-8 space-y-4">
          <FeedbackInfo />
          <ReportarErro />
        </div>
      </div>
    </main>
  );
}
