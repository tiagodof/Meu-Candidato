import { SearchBar } from "@/components/search/SearchBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24">
      <div className="max-w-5xl w-full flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Meu Candidato</h1>
        <p className="text-xl mb-12 max-w-2xl">
          Pesquise informações detalhadas sobre candidatos políticos de fontes confiáveis.
        </p>
        
        <div className="w-full max-w-2xl">
          <SearchBar />
        </div>
        
        <div className="mt-12 text-sm text-gray-500">
          <p>Busque por nome, número de candidatura ou sigla do partido</p>
        </div>
      </div>
    </main>
  );
}
