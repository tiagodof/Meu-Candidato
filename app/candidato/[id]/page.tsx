"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, User, MapPin, DollarSign, Vote, Users } from 'lucide-react';
import { LegalidadeTab } from '@/components/legalidade/LegalidadeTab';

// Dados completos dos candidatos
const CANDIDATOS_COMPLETOS = [
  {
    id: 1,
    nome: "Luiz Inácio Lula da Silva",
    partido: "PT",
    numero: "13",
    uf: "SP",
    cargo: "Presidente da República",
    bens: "R$ 1.200.000,00",
    situacao: "Eleito",
    votos: "60.345.999",
    propostas: [
      "Combate à fome e à pobreza",
      "Fortalecimento do SUS",
      "Criação de empregos e renda",
      "Proteção do meio ambiente",
      "Melhoria da educação pública"
    ],
    realizacoes: [
      "Criação do Programa Bolsa Família",
      "Expansão das universidades federais",
      "Programa Mais Médicos",
      "Lei de Cotas nas universidades",
      "Programa de Aceleração do Crescimento (PAC)"
    ],
    processos: [
      "Processo sobre triplex no Guarujá - Arquivado",
      "Operação Lava Jato - Anulado pelo STF"
    ],
    noticias: [
      "Lula anuncia novo programa social para 2025",
      "Presidente se reúne com líderes do G20",
      "Governo federal lança plano de infraestrutura"
    ]
  },
  {
    id: 2,
    nome: "Jair Messias Bolsonaro",
    partido: "PL",
    numero: "22",
    uf: "RJ",
    cargo: "Ex-Presidente da República",
    bens: "R$ 2.300.000,00",
    situacao: "Não eleito",
    votos: "58.206.354",
    propostas: [
      "Redução de impostos",
      "Combate à corrupção",
      "Fortalecimento da segurança pública",
      "Apoio ao agronegócio",
      "Defesa da família tradicional"
    ],
    realizacoes: [
      "Marco legal do saneamento",
      "Auxílio emergencial na pandemia",
      "Lei de liberdade econômica",
      "Programa Casa Verde e Amarela",
      "Criação do PIX"
    ],
    processos: [
      "Inquérito sobre fake news - Em andamento",
      "Processo sobre ataques ao sistema eleitoral"
    ],
    noticias: [
      "Bolsonaro participa de evento político em São Paulo",
      "Ex-presidente critica políticas do governo atual",
      "PL anuncia pré-candidatura para 2026"
    ]
  }
];

export default function CandidatoPage() {
  const params = useParams();
  const router = useRouter();
  const [candidato, setCandidato] = useState<typeof CANDIDATOS_COMPLETOS[0] | null>(null);
  const [activeTab, setActiveTab] = useState('propostas');

  useEffect(() => {
    const id = parseInt(params.id as string);
    const found = CANDIDATOS_COMPLETOS.find(c => c.id === id);
    setCandidato(found || CANDIDATOS_COMPLETOS[0]);
  }, [params.id]);

  if (!candidato) {
    return (
      <div className="min-h-screen bg-slate-800 flex items-center justify-center">
        <div className="text-white text-xl">Carregando...</div>
      </div>
    );
  }

  const tabs = [
    { id: 'propostas', label: 'Propostas', icon: Vote },
    { id: 'realizacoes', label: 'Realizações', icon: Users },
    { id: 'processos', label: 'Processos', icon: User },
    { id: 'noticias', label: 'Notícias', icon: MapPin },
    { id: 'legalidade', label: 'Legalidade', icon: DollarSign }
  ];

  return (
    <div className="min-h-screen bg-slate-800">
      {/* Header */}
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white rounded-full px-8 py-4 shadow-lg">
          <div className="flex items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">👤</span>
              </div>
              <span className="font-bold text-slate-800 text-lg">Meu Candidato</span>
            </div>
            <nav className="flex items-center gap-6">
              <button 
                onClick={() => router.push('/')}
                className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Candidate Header */}
      <section className="pt-32 pb-12 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center gap-6 mb-6">
              <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center">
                <User className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-800 mb-2">{candidato.nome}</h1>
                <div className="flex items-center gap-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {candidato.partido}
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Nº {candidato.numero}
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    {candidato.uf}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <User className="w-5 h-5 text-slate-600" />
                  <span className="text-sm font-medium text-slate-600">Cargo</span>
                </div>
                <p className="text-slate-800 font-medium">{candidato.cargo}</p>
              </div>

              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5 text-slate-600" />
                  <span className="text-sm font-medium text-slate-600">Bens</span>
                </div>
                <p className="text-slate-800 font-medium">{candidato.bens}</p>
              </div>

              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-slate-600" />
                  <span className="text-sm font-medium text-slate-600">Situação</span>
                </div>
                <p className="text-slate-800 font-medium">{candidato.situacao}</p>
              </div>

              <div className="bg-slate-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Vote className="w-5 h-5 text-slate-600" />
                  <span className="text-sm font-medium text-slate-600">Votos</span>
                </div>
                <p className="text-slate-800 font-medium">{candidato.votos}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="px-8 mb-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-2 shadow-xl">
            <div className="flex gap-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl transition-all ${
                      activeTab === tab.id
                        ? 'bg-slate-800 text-white shadow-lg'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            {activeTab === 'propostas' && (
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Propostas do Candidato</h2>
                <div className="space-y-4">
                  {candidato.propostas.map((proposta, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                      <div className="w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <p className="text-slate-700 flex-1">{proposta}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'realizacoes' && (
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Realizações</h2>
                <div className="space-y-4">
                  {candidato.realizacoes.map((realizacao, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        ✓
                      </div>
                      <p className="text-slate-700 flex-1">{realizacao}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'processos' && (
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Processos Judiciais</h2>
                <div className="space-y-4">
                  {candidato.processos.map((processo, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                      <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        ⚖️
                      </div>
                      <p className="text-slate-700 flex-1">{processo}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'noticias' && (
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Notícias Recentes</h2>
                <div className="space-y-4">
                  {candidato.noticias.map((noticia, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        📰
                      </div>
                      <p className="text-slate-700 flex-1">{noticia}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'legalidade' && (
              <LegalidadeTab />
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-12 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400 text-sm">
            Meu Candidato © 2025 • Dados oficiais do TSE • Transparência Política • Brasil
          </p>
          <p className="text-slate-500 text-xs mt-2">
            "A informação é a base da democracia. Use com moderação e responsabilidade."
          </p>
        </div>
      </footer>
    </div>
  );
}

