"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertCircle, ExternalLink, FileText, ThumbsUp, ThumbsDown } from "lucide-react";

// Componente para exibir informações detalhadas sobre processos judiciais
export function ProcessosJudiciais({ processos = [] }) {
  if (processos.length === 0) {
    return (
      <div className="text-center py-6">
        <p className="text-gray-500">
          Não foram encontrados processos judiciais para este candidato.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {processos.map((processo) => (
        <div key={processo.id} className="p-4 border rounded-lg">
          <div className="flex items-start">
            <FileText className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
            <div>
              <h4 className="font-medium">{processo.tipo}</h4>
              <p className="text-sm text-gray-600">Número: {processo.numero}</p>
              <p className="text-sm text-gray-600">Status: {processo.status}</p>
              <Button variant="link" className="p-0 h-auto text-sm mt-1">
                Ver detalhes <ExternalLink className="h-3 w-3 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      ))}
      
      <div className="mt-4 pt-4 border-t text-sm text-gray-500">
        <p>Fonte: Tribunais de Justiça e bases públicas de processos</p>
      </div>
    </div>
  );
}

// Componente para exibir notícias relacionadas ao candidato
export function NoticiasRecentes({ noticias = [] }) {
  if (noticias.length === 0) {
    return (
      <div className="text-center py-6">
        <p className="text-gray-500">
          Não foram encontradas notícias recentes sobre este candidato.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {noticias.map((noticia, index) => (
        <div key={index} className="p-4 border rounded-lg">
          <h4 className="font-medium">{noticia.titulo}</h4>
          {noticia.resumo && (
            <p className="text-sm text-gray-600 mt-1">{noticia.resumo}</p>
          )}
          <div className="flex items-center mt-2 text-sm text-gray-600">
            <span>{noticia.fonte}</span>
            <span className="mx-2">•</span>
            <span>{noticia.data}</span>
          </div>
          <Button variant="link" className="p-0 h-auto text-sm mt-1">
            Ler matéria completa <ExternalLink className="h-3 w-3 ml-1" />
          </Button>
        </div>
      ))}
    </div>
  );
}

// Componente para exibir propostas do candidato
export function PropostasCandidato({ propostas = [] }) {
  if (propostas.length === 0) {
    return (
      <div className="text-center py-6">
        <p className="text-gray-500">
          Não foram encontradas propostas para este candidato.
        </p>
      </div>
    );
  }

  return (
    <div>
      <ul className="space-y-3">
        {propostas.map((proposta, index) => (
          <li key={index} className="flex items-start p-2 hover:bg-gray-50 rounded-md">
            <span className="mr-2 text-gray-400">•</span>
            <span>{proposta}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-6 pt-4 border-t text-sm text-gray-500">
        <p>Fonte: Plano de governo e entrevistas</p>
        <Button variant="link" className="p-0 h-auto text-sm">
          Ver documento completo <ExternalLink className="h-3 w-3 ml-1" />
        </Button>
      </div>
    </div>
  );
}

// Componente para exibir realizações em mandatos anteriores
export function RealizacoesCandidato({ realizacoes = [] }) {
  if (realizacoes.length === 0) {
    return (
      <div className="text-center py-6">
        <p className="text-gray-500">
          Não foram encontradas informações sobre realizações em mandatos anteriores.
        </p>
      </div>
    );
  }

  return (
    <div>
      <ul className="space-y-3">
        {realizacoes.map((realizacao, index) => (
          <li key={index} className="flex items-start p-2 hover:bg-gray-50 rounded-md">
            <span className="mr-2 text-gray-400">•</span>
            <span>{realizacao}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Componente para feedback sobre a informação
export function FeedbackInfo() {
  const [feedbackSent, setFeedbackSent] = useState(false);
  
  const handleFeedback = (isPositive) => {
    // Aqui seria implementada a lógica para enviar o feedback
    setFeedbackSent(true);
  };
  
  if (feedbackSent) {
    return (
      <div className="text-center text-sm text-gray-500">
        Obrigado pelo seu feedback!
      </div>
    );
  }
  
  return (
    <div className="text-center">
      <p className="text-sm text-gray-500 mb-2">Esta informação foi útil?</p>
      <div className="flex justify-center gap-2">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => handleFeedback(true)}
          className="flex items-center"
        >
          <ThumbsUp className="h-3 w-3 mr-1" />
          Sim
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => handleFeedback(false)}
          className="flex items-center"
        >
          <ThumbsDown className="h-3 w-3 mr-1" />
          Não
        </Button>
      </div>
    </div>
  );
}

// Componente para reportar informação incorreta
export function ReportarErro() {
  const [isReporting, setIsReporting] = useState(false);
  const [reportSent, setReportSent] = useState(false);
  const [reportText, setReportText] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui seria implementada a lógica para enviar o relatório
    setReportSent(true);
    setIsReporting(false);
  };
  
  if (reportSent) {
    return (
      <div className="text-center p-4 bg-green-50 rounded-md">
        <p className="text-green-600">Obrigado! Seu relatório foi enviado e será analisado.</p>
      </div>
    );
  }
  
  if (isReporting) {
    return (
      <div className="p-4 border rounded-md">
        <h4 className="font-medium mb-2">Reportar informação incorreta</h4>
        <form onSubmit={handleSubmit}>
          <textarea 
            className="w-full p-2 border rounded-md mb-2"
            rows={3}
            placeholder="Descreva o erro ou a informação incorreta..."
            value={reportText}
            onChange={(e) => setReportText(e.target.value)}
            required
          />
          <div className="flex justify-end gap-2">
            <Button 
              type="button" 
              variant="outline" 
              size="sm"
              onClick={() => setIsReporting(false)}
            >
              Cancelar
            </Button>
            <Button 
              type="submit" 
              size="sm"
            >
              Enviar
            </Button>
          </div>
        </form>
      </div>
    );
  }
  
  return (
    <div className="text-center">
      <Button 
        variant="outline" 
        size="sm"
        onClick={() => setIsReporting(true)}
      >
        <AlertCircle className="h-4 w-4 mr-2" />
        Reportar informação incorreta
      </Button>
    </div>
  );
}

// Componente para acessibilidade
export function AcessibilidadeControles() {
  const [altoContraste, setAltoContraste] = useState(false);
  const [tamanhoFonte, setTamanhoFonte] = useState(1);
  
  const toggleContraste = () => {
    setAltoContraste(!altoContraste);
    // Aqui seria implementada a lógica para aplicar o alto contraste
    document.body.classList.toggle('high-contrast');
  };
  
  const aumentarFonte = () => {
    if (tamanhoFonte < 1.5) {
      const novoTamanho = tamanhoFonte + 0.1;
      setTamanhoFonte(novoTamanho);
      // Aqui seria implementada a lógica para aumentar o tamanho da fonte
      document.body.style.fontSize = `${novoTamanho}rem`;
    }
  };
  
  const diminuirFonte = () => {
    if (tamanhoFonte > 0.8) {
      const novoTamanho = tamanhoFonte - 0.1;
      setTamanhoFonte(novoTamanho);
      // Aqui seria implementada a lógica para diminuir o tamanho da fonte
      document.body.style.fontSize = `${novoTamanho}rem`;
    }
  };
  
  const resetarFonte = () => {
    setTamanhoFonte(1);
    document.body.style.fontSize = '1rem';
  };
  
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <Button 
        variant="outline" 
        size="sm"
        onClick={toggleContraste}
        className={altoContraste ? "bg-gray-200" : ""}
      >
        Alto Contraste
      </Button>
      <Button 
        variant="outline" 
        size="sm"
        onClick={aumentarFonte}
      >
        A+
      </Button>
      <Button 
        variant="outline" 
        size="sm"
        onClick={diminuirFonte}
      >
        A-
      </Button>
      <Button 
        variant="outline" 
        size="sm"
        onClick={resetarFonte}
      >
        Reset
      </Button>
    </div>
  );
}
