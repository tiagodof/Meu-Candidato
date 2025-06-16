import './App.css'
import SearchBar from './components/SearchBar.jsx'
import CandidatoPage from './components/CandidatoPage.jsx'
import { useState } from 'react'

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedCandidato, setSelectedCandidato] = useState(null);

  const handleCandidatoSelect = (candidato) => {
    setSelectedCandidato(candidato.id);
    setCurrentView('candidato');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedCandidato(null);
  };

  if (currentView === 'candidato') {
    return <CandidatoPage candidatoId={selectedCandidato} onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-slate-800 text-white relative overflow-hidden">
      {/* Header flutuante branco */}
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-6">
        <div className="bg-white rounded-full px-8 py-4 flex items-center justify-between shadow-lg">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">👤</span>
            </div>
            <span className="text-slate-800 font-semibold text-lg">Meu Candidato</span>
          </div>
          <nav className="flex items-center space-x-6">
            <a href="#" className="text-slate-600 hover:text-slate-800 transition-colors">Serviços</a>
            <a href="#" className="text-slate-600 hover:text-slate-800 transition-colors">Sobre</a>
            <a href="#" className="text-slate-600 hover:text-slate-800 transition-colors">FAQ</a>
            <button className="bg-slate-800 text-white px-6 py-2 rounded-full hover:bg-slate-700 transition-colors">
              Contato
            </button>
          </nav>
        </div>
      </header>

      {/* Seção SERVIÇOS */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <span className="bg-white text-slate-800 px-4 py-2 rounded text-sm font-medium">
              SERVIÇOS
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            O que nós mostramos a você?
          </h1>
          <p className="text-lg text-slate-300 mb-4">Use com moderação</p>
          <p className="text-slate-400 max-w-2xl">
            Acesse informações públicas e transparentes sobre candidatos brasileiros. 
            Todos os dados são baseados em fontes oficiais do TSE e órgãos públicos.
          </p>
        </div>
      </section>

      {/* Seções numeradas */}
      <div className="max-w-6xl mx-auto px-6 space-y-0">
        {/* 01 - Processos */}
        <section className="border-t border-slate-700 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-2">
              <span className="text-6xl md:text-8xl font-bold text-white">01</span>
            </div>
            <div className="md:col-span-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Processos Judiciais</h2>
              <p className="text-slate-300 text-lg mb-6">
                Acesse informações transparentes sobre processos envolvendo candidatos, baseadas em dados públicos oficiais.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">⚖️ Processos Ativos</h4>
                  <p className="text-slate-400 text-sm">Ações em andamento nos tribunais</p>
                </div>
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">📋 Histórico Completo</h4>
                  <p className="text-slate-400 text-sm">Processos arquivados e finalizados</p>
                </div>
              </div>
              <ul className="text-slate-400 space-y-2">
                <li>• Processos criminais e cíveis</li>
                <li>• Investigações do Ministério Público</li>
                <li>• Situação junto ao TCU e CGU</li>
                <li>• Processos eleitorais no TSE</li>
              </ul>
            </div>
            <div className="md:col-span-4 hidden md:block">
              <div className="relative">
                <div className="w-24 h-24 bg-red-500/20 rounded-full absolute top-0 right-0"></div>
                <div className="w-16 h-16 bg-yellow-500/30 rounded-lg absolute top-8 right-8 transform rotate-12"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 02 - Histórico */}
        <section className="border-t border-slate-700 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-2">
              <span className="text-6xl md:text-8xl font-bold text-white">02</span>
            </div>
            <div className="md:col-span-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Trajetória Política</h2>
              <p className="text-slate-300 text-lg mb-6">
                Conheça a trajetória completa do candidato, suas realizações e experiência no serviço público.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">🏛️ Cargos Ocupados</h4>
                  <p className="text-slate-400 text-sm">Histórico de mandatos e funções</p>
                </div>
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">🏆 Principais Feitos</h4>
                  <p className="text-slate-400 text-sm">Realizações e conquistas</p>
                </div>
              </div>
              <ul className="text-slate-400 space-y-2">
                <li>• Mandatos executivos e legislativos</li>
                <li>• Projetos aprovados e sancionados</li>
                <li>• Participação em comissões</li>
                <li>• Reconhecimentos e premiações</li>
              </ul>
            </div>
            <div className="md:col-span-4 hidden md:block">
              <div className="relative">
                <div className="w-20 h-20 bg-green-500/30 rounded-full absolute top-4 right-4"></div>
                <div className="w-16 h-16 bg-blue-500/20 rounded-lg absolute top-12 right-12 transform -rotate-12"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 - Planejamento */}
        <section className="border-t border-slate-700 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-2">
              <span className="text-6xl md:text-8xl font-bold text-white">03</span>
            </div>
            <div className="md:col-span-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Propostas de Governo</h2>
              <p className="text-slate-300 text-lg mb-6">
                Explore as propostas detalhadas e o plano de governo do candidato para o mandato.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">📋 Plano de Governo</h4>
                  <p className="text-slate-400 text-sm">Propostas oficiais registradas</p>
                </div>
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">🎯 Metas e Prazos</h4>
                  <p className="text-slate-400 text-sm">Cronograma de implementação</p>
                </div>
              </div>
              <ul className="text-slate-400 space-y-2">
                <li>• Propostas para saúde e educação</li>
                <li>• Planos econômicos e sociais</li>
                <li>• Políticas de segurança pública</li>
                <li>• Compromissos ambientais</li>
              </ul>
            </div>
            <div className="md:col-span-4 hidden md:block">
              <div className="relative">
                <div className="w-18 h-18 bg-yellow-500/30 rounded-full absolute top-2 right-6"></div>
                <div className="w-14 h-14 bg-green-600/20 rounded-lg absolute top-10 right-10 transform rotate-45"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 - Projetos votados */}
        <section className="border-t border-slate-700 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-2">
              <span className="text-6xl md:text-8xl font-bold text-white">04</span>
            </div>
            <div className="md:col-span-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Histórico de Votações</h2>
              <p className="text-slate-300 text-lg mb-6">
                Analise como o candidato vota em projetos importantes e seu posicionamento político.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">🗳️ Votações Recentes</h4>
                  <p className="text-slate-400 text-sm">Posicionamento em projetos atuais</p>
                </div>
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">📊 Análise de Coerência</h4>
                  <p className="text-slate-400 text-sm">Consistência com propostas</p>
                </div>
              </div>
              <ul className="text-slate-400 space-y-2">
                <li>• Votações no Congresso Nacional</li>
                <li>• Posicionamento em temas polêmicos</li>
                <li>• Coerência ideológica</li>
                <li>• Mudanças de posição ao longo do tempo</li>
              </ul>
            </div>
            <div className="md:col-span-4 hidden md:block">
              <div className="relative">
                <div className="w-16 h-16 bg-blue-500/30 rounded-full absolute top-6 right-8"></div>
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg absolute top-14 right-14 transform -rotate-45"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 05 - Alianças */}
        <section className="border-t border-slate-700 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-2">
              <span className="text-6xl md:text-8xl font-bold text-white">05</span>
            </div>
            <div className="md:col-span-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Alianças e Coligações</h2>
              <p className="text-slate-300 text-lg mb-6">
                Entenda as alianças políticas e parcerias que moldam o perfil do candidato.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">🤝 Coligações Atuais</h4>
                  <p className="text-slate-400 text-sm">Partidos e movimentos aliados</p>
                </div>
                <div className="bg-slate-700/50 p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">🌐 Rede de Apoio</h4>
                  <p className="text-slate-400 text-sm">Endorsements e apoios recebidos</p>
                </div>
              </div>
              <ul className="text-slate-400 space-y-2">
                <li>• Coligações eleitorais oficiais</li>
                <li>• Apoios de lideranças políticas</li>
                <li>• Parcerias com movimentos sociais</li>
                <li>• Histórico de alianças passadas</li>
              </ul>
            </div>
            <div className="md:col-span-4 hidden md:block">
              <div className="relative">
                <div className="w-20 h-20 bg-orange-500/30 rounded-full absolute top-0 right-4"></div>
                <div className="w-14 h-14 bg-teal-500/20 rounded-lg absolute top-8 right-12 transform rotate-30"></div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Seção de busca com elementos geométricos */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Vamos conhecê-lo melhor?
              </h2>
              <div className="relative">
                <SearchBar onCandidatoSelect={handleCandidatoSelect} />
              </div>
            </div>
            
            {/* Elementos geométricos coloridos */}
            <div className="relative h-96 hidden md:block">
              {/* Círculos brancos */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-90"></div>
              <div className="absolute top-16 right-24 w-24 h-24 bg-white rounded-full opacity-80"></div>
              <div className="absolute bottom-32 right-8 w-28 h-28 bg-white rounded-full opacity-85"></div>
              <div className="absolute bottom-0 right-32 w-20 h-20 bg-white rounded-full opacity-75"></div>
              
              {/* Retângulo verde */}
              <div className="absolute top-24 right-16 w-24 h-24 bg-teal-500 rounded-lg transform rotate-12"></div>
              
              {/* Retângulo amarelo */}
              <div className="absolute bottom-16 right-20 w-20 h-20 bg-yellow-400 rounded-lg transform -rotate-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
  )
}

export default App

