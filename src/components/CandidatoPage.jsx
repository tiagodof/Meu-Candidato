import { candidatos } from '../data/candidatos.js';
import LegalidadeTab from './LegalidadeTab.jsx';
import { useState } from 'react';

export default function CandidatoPage({ candidatoId, onBack }) {
  const candidato = candidatos.find(c => c.id === candidatoId);
  const [activeTab, setActiveTab] = useState('perfil');

  if (!candidato) {
    return (
      <div className="min-h-screen bg-slate-800 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Candidato não encontrado</h1>
          <button 
            onClick={onBack}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors"
          >
            Voltar à busca
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-800 text-white">
      {/* Header fixo */}
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-6">
        <div className="bg-white rounded-full px-8 py-4 flex items-center justify-between shadow-lg">
          <div className="flex items-center space-x-2">
            <button 
              onClick={onBack}
              className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors"
            >
              <span className="text-white text-sm">←</span>
            </button>
            <span className="text-slate-800 font-semibold text-lg">Meu Candidato</span>
          </div>
          <div className="text-slate-600 text-sm">
            Perfil do Candidato
          </div>
        </div>
      </header>

      {/* Conteúdo principal */}
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Cabeçalho do candidato */}
          <div className="bg-slate-700/50 rounded-2xl p-8 mb-8">
            <div className="flex items-start space-x-6">
              <div className="w-24 h-24 bg-slate-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">
                  {candidato.nome.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </span>
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">{candidato.nomeCompleto}</h1>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {candidato.partido}
                  </span>
                  <span className="text-slate-300">{candidato.cargo}</span>
                </div>
                <p className="text-slate-300 text-lg">{candidato.resumo}</p>
              </div>
            </div>
            
            {/* Navegação por abas */}
            <div className="mt-8 border-t border-slate-600 pt-6">
              <div className="flex space-x-6">
                <button
                  onClick={() => setActiveTab('perfil')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === 'perfil' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-600'
                  }`}
                >
                  Perfil Completo
                </button>
                <button
                  onClick={() => setActiveTab('legalidade')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === 'legalidade' 
                      ? 'bg-yellow-600 text-white' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-600'
                  }`}
                >
                  ⚖️ Legalidade da Plataforma
                </button>
              </div>
            </div>
          </div>

          {/* Conteúdo das abas */}
          {activeTab === 'perfil' ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* 01 - Processos */}
            <div className="bg-slate-700/30 rounded-xl p-6">
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-4xl font-bold text-red-400">01</span>
                <h2 className="text-2xl font-bold">Processos Judiciais</h2>
              </div>
              <div className="space-y-4">
                {candidato.processos.map((processo, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-white">{processo.tipo}</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        processo.status === 'Arquivado' ? 'bg-green-600 text-white' :
                        processo.status === 'Em andamento' ? 'bg-yellow-600 text-white' :
                        'bg-red-600 text-white'
                      }`}>
                        {processo.status}
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm mb-2">{processo.descricao}</p>
                    <p className="text-slate-400 text-xs">Ano: {processo.ano}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 02 - Histórico */}
            <div className="bg-slate-700/30 rounded-xl p-6">
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-4xl font-bold text-blue-400">02</span>
                <h2 className="text-2xl font-bold">Trajetória Política</h2>
              </div>
              <div className="space-y-4">
                {candidato.historico.map((item, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-white">{item.cargo}</span>
                      <span className="text-slate-400 text-sm">{item.periodo}</span>
                    </div>
                    <div className="space-y-1">
                      {item.realizacoes.map((realizacao, idx) => (
                        <p key={idx} className="text-slate-300 text-sm">• {realizacao}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 03 - Propostas */}
            <div className="bg-slate-700/30 rounded-xl p-6">
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-4xl font-bold text-green-400">03</span>
                <h2 className="text-2xl font-bold">Propostas</h2>
              </div>
              <div className="space-y-3">
                {candidato.propostas.map((proposta, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-4">
                    <p className="text-slate-300">• {proposta}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 04 - Votações */}
            <div className="bg-slate-700/30 rounded-xl p-6">
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-4xl font-bold text-purple-400">04</span>
                <h2 className="text-2xl font-bold">Histórico de Votações</h2>
              </div>
              <div className="space-y-4">
                {candidato.votacoes.map((votacao, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-white">{votacao.projeto}</span>
                      <span className="text-slate-400 text-sm">{votacao.ano}</span>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      votacao.voto === 'Favorável' ? 'bg-green-600 text-white' :
                      'bg-red-600 text-white'
                    }`}>
                      {votacao.voto}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 05 - Alianças (seção completa) */}
            <div className="bg-slate-700/30 rounded-xl p-6 mt-8">
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-4xl font-bold text-orange-400">05</span>
                <h2 className="text-2xl font-bold">Alianças e Coligações</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {candidato.aliancas.map((alianca, index) => (
                  <span key={index} className="bg-slate-800/50 px-4 py-2 rounded-lg text-slate-300">
                    {alianca}
                  </span>
                ))}
              </div>
            </div>

          </div>
          ) : (
            <LegalidadeTab />
          )}

        </div>
      </div>
      <footer className="border-t border-slate-700 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            Meu Candidato © 2025 • Dados oficiais do TSE • Transparência Política • Brasil
          </p>
          <p className="text-slate-500 text-sm mt-2">
            "A informação é a base da democracia. Use com moderação e responsabilidade."
          </p>
        </div>
      </footer>
    </div>
  );
}

