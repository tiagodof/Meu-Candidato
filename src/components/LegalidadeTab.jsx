export default function LegalidadeTab() {
  return (
    <div className="bg-slate-700/30 rounded-xl p-6">
      <div className="flex items-center space-x-4 mb-6">
        <span className="text-4xl font-bold text-yellow-400">⚖️</span>
        <h2 className="text-2xl font-bold">Legalidade da Plataforma</h2>
      </div>
      
      <div className="space-y-6">
        
        {/* Introdução */}
        <div className="bg-slate-800/50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">
            Por que o Meu Candidato é completamente legal?
          </h3>
          <p className="text-slate-300 leading-relaxed">
            A plataforma <strong>Meu Candidato</strong> está fundamentada nos princípios constitucionais 
            de transparência, acesso à informação e participação democrática. Todos os dados apresentados 
            são de natureza pública e estão disponíveis em fontes oficiais do governo brasileiro.
          </p>
        </div>

        {/* Constituição Federal */}
        <div className="bg-slate-800/50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">
            📜 Constituição Federal de 1988
          </h3>
          
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-blue-300 mb-2">Art. 5º, XXXIII</h4>
              <p className="text-slate-300 italic mb-2">
                "Todos têm direito a receber dos órgãos públicos informações de seu interesse particular, 
                ou de interesse coletivo ou geral, que serão prestadas no prazo da lei, sob pena de 
                responsabilidade, ressalvadas aquelas cujo sigilo seja imprescindível à segurança da 
                sociedade e do Estado."
              </p>
              <p className="text-slate-400 text-sm">
                <strong>Aplicação:</strong> Garante o direito fundamental de acesso a informações sobre 
                candidatos e políticos, que são de interesse público e coletivo.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-green-300 mb-2">Art. 37, § 3º, II</h4>
              <p className="text-slate-300 italic mb-2">
                "A lei disciplinará as formas de participação do usuário na administração pública direta 
                e indireta, regulando especialmente: (...) II - o acesso dos usuários a registros 
                administrativos e a informações sobre atos de governo."
              </p>
              <p className="text-slate-400 text-sm">
                <strong>Aplicação:</strong> Estabelece o direito de acesso a informações sobre atos 
                de governo e registros administrativos, incluindo dados sobre políticos.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-purple-300 mb-2">Art. 216, § 2º</h4>
              <p className="text-slate-300 italic mb-2">
                "Cabem à administração pública, na forma da lei, a gestão da documentação governamental 
                e as providências para franquear sua consulta a quantos dela necessitem."
              </p>
              <p className="text-slate-400 text-sm">
                <strong>Aplicação:</strong> Obriga o poder público a franquear o acesso à documentação 
                governamental, incluindo informações sobre agentes públicos.
              </p>
            </div>
          </div>
        </div>

        {/* Lei de Acesso à Informação */}
        <div className="bg-slate-800/50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">
            📋 Lei de Acesso à Informação (Lei 12.527/2011)
          </h3>
          
          <div className="space-y-4">
            <div className="border-l-4 border-yellow-500 pl-4">
              <h4 className="font-semibold text-yellow-300 mb-2">Art. 3º, I</h4>
              <p className="text-slate-300 italic mb-2">
                "Os procedimentos previstos nesta Lei destinam-se a assegurar o direito fundamental 
                de acesso à informação e devem ser executados em conformidade com os princípios 
                básicos da administração pública e com as seguintes diretrizes: I - observância 
                da publicidade como preceito geral e do sigilo como exceção."
              </p>
              <p className="text-slate-400 text-sm">
                <strong>Aplicação:</strong> Estabelece a publicidade como regra geral, tornando 
                legítima a divulgação de informações públicas sobre candidatos.
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold text-red-300 mb-2">Art. 7º, VI</h4>
              <p className="text-slate-300 italic mb-2">
                "O acesso à informação de que trata esta Lei compreende, entre outros, os direitos 
                de obter: (...) VI - informação pertinente à administração do patrimônio público, 
                utilização de recursos públicos, licitação, contratos administrativos."
              </p>
              <p className="text-slate-400 text-sm">
                <strong>Aplicação:</strong> Garante acesso a informações sobre gestão pública, 
                incluindo atos de políticos no exercício de mandatos.
              </p>
            </div>
          </div>
        </div>

        {/* Portal de Dados Abertos do TSE */}
        <div className="bg-slate-800/50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">
            🗳️ Portal de Dados Abertos do TSE
          </h3>
          
          <div className="space-y-3">
            <p className="text-slate-300">
              O Tribunal Superior Eleitoral (TSE) disponibiliza publicamente mais de 
              <strong className="text-white"> 162 conjuntos de dados</strong> sobre:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-slate-700/50 p-3 rounded">
                <span className="text-green-400">✓</span> Candidatos e candidaturas
              </div>
              <div className="bg-slate-700/50 p-3 rounded">
                <span className="text-green-400">✓</span> Prestação de contas eleitorais
              </div>
              <div className="bg-slate-700/50 p-3 rounded">
                <span className="text-green-400">✓</span> Resultados eleitorais
              </div>
              <div className="bg-slate-700/50 p-3 rounded">
                <span className="text-green-400">✓</span> Bens declarados por candidatos
              </div>
              <div className="bg-slate-700/50 p-3 rounded">
                <span className="text-green-400">✓</span> Doações e gastos de campanha
              </div>
              <div className="bg-slate-700/50 p-3 rounded">
                <span className="text-green-400">✓</span> Processos eleitorais
              </div>
            </div>
            
            <p className="text-slate-400 text-sm mt-4">
              <strong>Fonte oficial:</strong> dadosabertos.tse.jus.br - Todos os dados são 
              disponibilizados pelo próprio TSE para consulta pública e transparência eleitoral.
            </p>
          </div>
        </div>

        {/* Outras Normas */}
        <div className="bg-slate-800/50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">
            📚 Outras Normas Aplicáveis
          </h3>
          
          <div className="space-y-4">
            <div className="border-l-4 border-indigo-500 pl-4">
              <h4 className="font-semibold text-indigo-300 mb-2">
                Lei da Ficha Limpa (Lei Complementar 135/2010)
              </h4>
              <p className="text-slate-300 text-sm mb-2">
                Estabelece critérios de inelegibilidade que são de conhecimento público, 
                reforçando a importância da transparência sobre a vida pregressa de candidatos.
              </p>
            </div>

            <div className="border-l-4 border-pink-500 pl-4">
              <h4 className="font-semibold text-pink-300 mb-2">
                Marco Civil da Internet (Lei 12.965/2014)
              </h4>
              <p className="text-slate-300 text-sm mb-2">
                Art. 2º, I: Garante a liberdade de expressão e o livre acesso à informação, 
                fundamentando plataformas que promovem transparência política.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold text-orange-300 mb-2">
                Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018)
              </h4>
              <p className="text-slate-300 text-sm mb-2">
                Art. 4º, III, 'a': Não se aplica ao tratamento de dados de pessoas públicas, 
                permitindo o processamento de informações sobre políticos e candidatos.
              </p>
            </div>
          </div>
        </div>

        {/* Conclusão */}
        <div className="bg-gradient-to-r from-green-800/30 to-blue-800/30 rounded-lg p-6 border border-green-500/30">
          <h3 className="text-xl font-semibold text-white mb-4">
            ✅ Conclusão Legal
          </h3>
          <div className="space-y-3">
            <p className="text-slate-300">
              A plataforma <strong className="text-white">Meu Candidato</strong> opera em 
              <strong className="text-green-400"> total conformidade com a legislação brasileira</strong>, 
              fundamentada em:
            </p>
            
            <ul className="text-slate-300 space-y-2 ml-4">
              <li>• <strong>Direitos constitucionais</strong> de acesso à informação</li>
              <li>• <strong>Princípios de transparência</strong> da administração pública</li>
              <li>• <strong>Dados exclusivamente públicos</strong> de fontes oficiais</li>
              <li>• <strong>Interesse público</strong> na transparência política</li>
              <li>• <strong>Fortalecimento da democracia</strong> através da informação</li>
            </ul>
            
            <div className="bg-slate-700/50 p-4 rounded mt-4">
              <p className="text-slate-300 text-sm italic">
                "A transparência é um dos pilares fundamentais da democracia. Ao facilitar 
                o acesso a informações públicas sobre candidatos e políticos, contribuímos 
                para uma sociedade mais informada e uma democracia mais forte."
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-600">
          <p className="text-slate-400 text-xs">
            <strong>Disclaimer:</strong> Todas as informações apresentadas nesta plataforma são 
            baseadas em dados públicos oficiais. A plataforma não emite juízos de valor, apenas 
            organiza e apresenta informações já disponíveis publicamente. Em caso de dúvidas 
            sobre a veracidade de alguma informação, consulte diretamente as fontes oficiais.
          </p>
        </div>

      </div>
    </div>
  );
}

