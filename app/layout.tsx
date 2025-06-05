import './globals.css'

export const metadata = {
  title: 'Meu Candidato - Transparência Política no Brasil',
  description: 'Pesquise informações detalhadas sobre candidatos políticos brasileiros de fontes confiáveis. Transparência, democracia e cidadania.',
  keywords: 'candidatos, política, brasil, eleições, transparência, democracia, TSE',
  authors: [{ name: 'Meu Candidato' }],
  creator: 'Meu Candidato',
  publisher: 'Meu Candidato',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://meucandidato.vercel.app'),
  openGraph: {
    title: 'Meu Candidato - Transparência Política no Brasil',
    description: 'Pesquise informações detalhadas sobre candidatos políticos brasileiros',
    url: 'https://meucandidato.vercel.app',
    siteName: 'Meu Candidato',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meu Candidato - Transparência Política no Brasil',
    description: 'Pesquise informações detalhadas sobre candidatos políticos brasileiros',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#22c55e" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased bg-gradient-to-br from-green-50 via-yellow-50 to-blue-50 min-h-screen">
        <div className="relative">
          {/* Padrão sutil da bandeira do Brasil no fundo */}
          <div className="fixed inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-500 via-yellow-400 to-blue-600"></div>
          </div>
          
          {/* Conteúdo principal */}
          <div className="relative z-10">
            {children}
          </div>
          
          {/* Footer com cores do Brasil */}
          <footer className="relative z-10 mt-16 border-t border-green-200 bg-white/80 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-4 py-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-600 font-medium">
                    Meu Candidato © 2025
                  </span>
                </div>
                
                <div className="flex items-center gap-6 text-xs text-gray-500">
                  <span>Dados oficiais do TSE</span>
                  <span>•</span>
                  <span>Transparência Política</span>
                  <span>•</span>
                  <span>Brasil</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200 text-center">
                <p className="text-xs text-gray-500 italic">
                  "A informação é a base da democracia. Use com moderação e responsabilidade."
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
