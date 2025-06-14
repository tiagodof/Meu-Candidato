import { SearchBar } from "@/components/search/SearchBar";

export default function Home() {
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
              <a href="#servicos" className="text-slate-600 hover:text-slate-800 transition-colors">Serviços</a>
              <a href="#sobre" className="text-slate-600 hover:text-slate-800 transition-colors">Sobre</a>
              <a href="#faq" className="text-slate-600 hover:text-slate-800 transition-colors">FAQ</a>
              <button className="bg-slate-800 text-white px-6 py-2 rounded-full hover:bg-slate-700 transition-colors">
                Contato
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <span className="bg-white text-slate-800 px-4 py-2 rounded-lg font-medium">
              SERVIÇOS
            </span>
          </div>
          <h1 className="text-white text-5xl md:text-6xl font-light mb-8 max-w-3xl">
            O que nós mostramos a você?
          </h1>
          <p className="text-slate-300 text-lg mb-12 max-w-2xl">
            Use com moderação
          </p>
        </div>
      </section>

      {/* Services Sections */}
      <div className="space-y-0">
        {/* Section 01 - Processos */}
        <section className="border-t border-slate-700 py-20 px-8">
          <div className="max-w-6xl mx-auto flex items-center gap-16">
            <div className="text-white text-8xl font-light opacity-50">01</div>
            <div className="flex-1">
              <h2 className="text-white text-4xl font-light mb-4">Processos</h2>
              <p className="text-slate-300 text-lg max-w-2xl">
                Descubra todos os processos políticos envolvendo seu candidato de forma resumida e clara.
              </p>
            </div>
          </div>
        </section>

        {/* Section 02 - Histórico */}
        <section className="border-t border-slate-700 py-20 px-8">
          <div className="max-w-6xl mx-auto flex items-center gap-16">
            <div className="text-white text-8xl font-light opacity-50">02</div>
            <div className="flex-1">
              <h2 className="text-white text-4xl font-light mb-4">Histórico</h2>
              <p className="text-slate-300 text-lg max-w-2xl">
                Veja o histórico político de seu candidato e suas realizações.
              </p>
            </div>
          </div>
        </section>

        {/* Section 03 - Planejamento */}
        <section className="border-t border-slate-700 py-20 px-8">
          <div className="max-w-6xl mx-auto flex items-center gap-16">
            <div className="text-white text-8xl font-light opacity-50">03</div>
            <div className="flex-1">
              <h2 className="text-white text-4xl font-light mb-4">Planejamento</h2>
              <p className="text-slate-300 text-lg max-w-2xl">
                Tenha acesso ao planejamento de seu candidato para caso seja eleito.
              </p>
            </div>
          </div>
        </section>

        {/* Section 04 - Projetos votados */}
        <section className="border-t border-slate-700 py-20 px-8">
          <div className="max-w-6xl mx-auto flex items-center gap-16">
            <div className="text-white text-8xl font-light opacity-50">04</div>
            <div className="flex-1">
              <h2 className="text-white text-4xl font-light mb-4">Projetos votados</h2>
              <p className="text-slate-300 text-lg max-w-2xl">
                Como seu candidato vota em determinados projetos?
              </p>
            </div>
          </div>
        </section>

        {/* Section 05 - Alianças */}
        <section className="border-t border-slate-700 py-20 px-8">
          <div className="max-w-6xl mx-auto flex items-center gap-16">
            <div className="text-white text-8xl font-light opacity-50">05</div>
            <div className="flex-1">
              <h2 className="text-white text-4xl font-light mb-4">Alianças</h2>
              <p className="text-slate-300 text-lg max-w-2xl">
                As alianças feitas por seu candidato também determinam que tipo de candidato ele é.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Search Section */}
      <section className="border-t border-slate-700 py-32 px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h2 className="text-white text-4xl font-light mb-8">
                Vamos conhecê-lo melhor?
              </h2>
              <div className="max-w-md">
                <SearchBar />
              </div>
            </div>
            
            {/* Geometric Elements */}
            <div className="relative">
              {/* Large circles */}
              <div className="absolute -top-20 -right-20">
                <div className="w-40 h-40 bg-white rounded-full opacity-90"></div>
              </div>
              <div className="absolute -top-10 right-20">
                <div className="w-32 h-32 bg-white rounded-full opacity-80"></div>
              </div>
              <div className="absolute top-20 -right-10">
                <div className="w-36 h-36 bg-white rounded-full opacity-85"></div>
              </div>
              <div className="absolute top-40 right-30">
                <div className="w-28 h-28 bg-white rounded-full opacity-75"></div>
              </div>
              
              {/* Colored elements */}
              <div className="absolute top-60 right-10">
                <div className="w-24 h-24 bg-emerald-500 rounded-full"></div>
              </div>
              <div className="absolute top-80 right-40">
                <div className="w-20 h-20 bg-yellow-400"></div>
              </div>
            </div>
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

