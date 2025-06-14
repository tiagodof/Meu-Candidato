import { SearchBar } from "@/components/search/SearchBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-800 text-white relative overflow-hidden">
      {/* Header */}
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-6">
        <div className="bg-white rounded-full px-8 py-4 flex items-center justify-between shadow-lg">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">👤</span>
            </div>
            <span className="text-slate-800 font-semibold text-lg">Meu Candidato</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#servicos" className="text-teal-600 font-medium hover:text-teal-700 transition-colors">
              Serviços
            </a>
            <a href="#sobre" className="text-slate-600 font-medium hover:text-slate-700 transition-colors">
              Sobre
            </a>
            <a href="#faq" className="text-slate-600 font-medium hover:text-slate-700 transition-colors">
              FAQ
            </a>
            <button className="bg-slate-800 text-white px-6 py-2 rounded-full font-medium hover:bg-slate-700 transition-colors">
              Contato
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32">
        {/* Hero Section */}
        <section className="px-6 mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white text-slate-800 rounded-lg px-6 py-3 inline-block mb-8">
              <span className="font-medium">SERVIÇOS</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-light mb-4 leading-tight">
              O que nós mostramos a você?
            </h1>
            
            <p className="text-xl text-slate-300 mb-16">
              Use com moderação
            </p>
          </div>
        </section>

        {/* Services Sections */}
        <div className="space-y-0">
          {/* Section 01 - Processos */}
          <section className="border-t border-slate-700 py-16 px-6">
            <div className="max-w-6xl mx-auto flex items-center">
              <div className="text-8xl font-light text-white mr-16 w-32 flex-shrink-0">
                01
              </div>
              <div className="flex-1">
                <h2 className="text-4xl font-light mb-4">Processos</h2>
                <p className="text-xl text-slate-300 max-w-2xl">
                  Descubra todos os processos políticos envolvendo seu candidato de forma resumida e clara.
                </p>
              </div>
            </div>
          </section>

          {/* Section 02 - Histórico */}
          <section className="border-t border-slate-700 py-16 px-6">
            <div className="max-w-6xl mx-auto flex items-center">
              <div className="text-8xl font-light text-white mr-16 w-32 flex-shrink-0">
                02
              </div>
              <div className="flex-1">
                <h2 className="text-4xl font-light mb-4">Histórico</h2>
                <p className="text-xl text-slate-300 max-w-2xl">
                  Veja o histórico político de seu candidato e suas realizações.
                </p>
              </div>
            </div>
          </section>

          {/* Section 03 - Planejamento */}
          <section className="border-t border-slate-700 py-16 px-6">
            <div className="max-w-6xl mx-auto flex items-center">
              <div className="text-8xl font-light text-white mr-16 w-32 flex-shrink-0">
                03
              </div>
              <div className="flex-1">
                <h2 className="text-4xl font-light mb-4">Planejamento</h2>
                <p className="text-xl text-slate-300 max-w-2xl">
                  Tenha acesso ao planejamento de seu candidato para caso seja eleito.
                </p>
              </div>
            </div>
          </section>

          {/* Section 04 - Projetos votados */}
          <section className="border-t border-slate-700 py-16 px-6">
            <div className="max-w-6xl mx-auto flex items-center">
              <div className="text-8xl font-light text-white mr-16 w-32 flex-shrink-0">
                04
              </div>
              <div className="flex-1">
                <h2 className="text-4xl font-light mb-4">Projetos votados</h2>
                <p className="text-xl text-slate-300 max-w-2xl">
                  Como seu candidato vota em determinados projetos?
                </p>
              </div>
            </div>
          </section>

          {/* Section 05 - Alianças */}
          <section className="border-t border-slate-700 py-16 px-6">
            <div className="max-w-6xl mx-auto flex items-center">
              <div className="text-8xl font-light text-white mr-16 w-32 flex-shrink-0">
                05
              </div>
              <div className="flex-1">
                <h2 className="text-4xl font-light mb-4">Alianças</h2>
                <p className="text-xl text-slate-300 max-w-2xl">
                  As alianças feitas por seu candidato também determinam que tipo de candidato ele é.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Search Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-6xl mx-auto relative">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h2 className="text-4xl font-light mb-8">
                  Vamos conhecê-lo melhor?
                </h2>
                
                <div className="max-w-md">
                  <SearchBar />
                </div>
              </div>
              
              {/* Geometric Elements */}
              <div className="hidden lg:block relative w-96 h-96">
                {/* Large white circles */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-90"></div>
                <div className="absolute top-16 right-24 w-40 h-40 bg-white rounded-full opacity-80"></div>
                <div className="absolute top-32 right-8 w-36 h-36 bg-white rounded-full opacity-85"></div>
                <div className="absolute bottom-16 right-16 w-28 h-28 bg-white rounded-full opacity-90"></div>
                
                {/* Colored geometric shapes */}
                <div className="absolute top-8 right-8 w-24 h-24 bg-teal-500 rounded-lg transform rotate-12"></div>
                <div className="absolute bottom-24 right-32 w-20 h-20 bg-yellow-400 rounded-lg transform -rotate-6"></div>
                
                {/* Additional circles for depth */}
                <div className="absolute top-24 right-40 w-16 h-16 bg-white rounded-full opacity-70"></div>
                <div className="absolute bottom-8 right-4 w-20 h-20 bg-white rounded-full opacity-75"></div>
              </div>
            </div>
            
            {/* Small profile image in corner */}
            <div className="absolute bottom-0 right-0 w-16 h-16 rounded-full overflow-hidden opacity-80">
              <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <span className="text-white text-xs">👤</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-8 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="text-slate-400 mb-2">
            Meu Candidato © 2025 • Dados oficiais do TSE • Transparência Política • Brasil
          </p>
          <p className="text-slate-500 text-sm italic">
            "A informação é a base da democracia. Use com moderação e responsabilidade."
          </p>
        </div>
      </footer>
    </div>
  );
}

