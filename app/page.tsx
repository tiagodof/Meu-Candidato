import { SearchBar } from "@/components/search/SearchBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 bg-gradient-to-br from-green-50 via-yellow-50 to-blue-50">
      <div className="max-w-5xl w-full flex flex-col items-center justify-center text-center">
        {/* Header com cores do Brasil */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-yellow-400 to-blue-600 rounded-lg blur-lg opacity-20"></div>
          <div className="relative bg-white/90 backdrop-blur-sm rounded-lg p-8 border border-green-200 shadow-xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent">
              Meu Candidato
            </h1>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            </div>
            <p className="text-lg font-medium text-gray-700 italic border-l-4 border-yellow-400 pl-4 bg-yellow-50 py-2 rounded">
              "Use com moderação"
            </p>
          </div>
        </div>
        
        <p className="text-xl mb-12 max-w-2xl text-gray-700 leading-relaxed">
          Pesquise informações detalhadas sobre candidatos políticos de fontes confiáveis.
          <br />
          <span className="text-green-600 font-semibold">Transparência</span> • 
          <span className="text-yellow-600 font-semibold mx-2">Democracia</span> • 
          <span className="text-blue-600 font-semibold">Cidadania</span>
        </p>
        
        <div className="w-full max-w-2xl mb-8">
          <SearchBar />
        </div>
        
        <div className="mt-8 text-sm text-gray-600 bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-gray-200">
          <p className="mb-2">
            <span className="font-semibold text-green-600">🔍 Busque por:</span> nome, número de candidatura ou sigla do partido
          </p>
          <p className="text-xs text-gray-500">
            Dados atualizados com base em informações oficiais do TSE e órgãos competentes
          </p>
        </div>
        
        {/* Bandeira do Brasil estilizada */}
        <div className="mt-12 flex items-center gap-4 opacity-60">
          <div className="w-16 h-12 bg-green-500 rounded-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-yellow-400 transform rotate-45 scale-150"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
          <span className="text-sm text-gray-500 font-medium">Brasil • Transparência Política</span>
        </div>
      </div>
    </main>
  );
}
