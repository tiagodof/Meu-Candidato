"use client";

import { useState } from 'react';
import { Scale, FileText, Building, CheckCircle } from 'lucide-react';

export function LegalidadeTab() {
  const [activeSubTab, setActiveSubTab] = useState('constituicao');

  const subTabs = [
    { id: 'constituicao', label: 'Constituição', icon: Scale },
    { id: 'lai', label: 'LAI', icon: FileText },
    { id: 'tse', label: 'TSE', icon: Building },
    { id: 'conformidade', label: 'Conformidade', icon: CheckCircle }
  ];

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Legalidade da Plataforma</h2>
        <p className="text-slate-600 text-lg">
          O projeto <strong>Meu Candidato</strong> está em total conformidade com a legislação brasileira, 
          baseando-se em marcos legais sólidos que garantem o direito à transparência e acesso à informação pública.
        </p>
      </div>

      {/* Sub Tabs */}
      <div className="mb-8">
        <div className="flex gap-2 bg-slate-50 p-2 rounded-xl">
          {subTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id)}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-all ${
                  activeSubTab === tab.id
                    ? 'bg-white text-slate-800 shadow-md'
                    : 'text-slate-600 hover:bg-white/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {activeSubTab === 'constituicao' && (
          <div>
            <div className="bg-slate-50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5" />
                Constituição Federal de 1988
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                  <h4 className="font-bold text-slate-800 mb-2">Art. 5º, Inciso XXXIII</h4>
                  <p className="text-slate-700 italic">
                    "Todos têm direito a receber dos órgãos públicos informações de seu interesse particular, 
                    ou de interesse coletivo ou geral, que serão prestadas no prazo da lei, sob pena de responsabilidade, 
                    ressalvadas aquelas cujo sigilo seja imprescindível à segurança da sociedade e do Estado."
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                  <h4 className="font-bold text-slate-800 mb-2">Art. 37, § 3º, Inciso II</h4>
                  <p className="text-slate-700 italic">
                    "A lei disciplinará as formas de participação do usuário na administração pública direta e indireta, 
                    regulando especialmente: [...] II - o acesso dos usuários a registros administrativos e a informações 
                    sobre atos de governo."
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-500">
                  <h4 className="font-bold text-slate-800 mb-2">Art. 216, § 2º</h4>
                  <p className="text-slate-700 italic">
                    "Cabem à administração pública, na forma da lei, a gestão da documentação governamental 
                    e as providências para franquear sua consulta a quantos dela necessitem."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="font-bold text-blue-800 mb-2">Fundamentação Constitucional</h4>
              <p className="text-blue-700">
                A Constituição Federal estabelece como direito fundamental o acesso à informação pública, 
                criando a base legal para plataformas como o <strong>Meu Candidato</strong> que promovem a transparência política e o controle social.
              </p>
            </div>
          </div>
        )}

        {activeSubTab === 'lai' && (
          <div>
            <div className="bg-slate-50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Lei de Acesso à Informação (LAI) - Lei nº 12.527/2011
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-slate-800 mb-2">Diretrizes de Transparência</h4>
                  <ul className="text-slate-700 space-y-2">
                    <li>• Observância da publicidade como preceito geral</li>
                    <li>• Divulgação de informações de interesse público</li>
                    <li>• Utilização de meios de comunicação viabilizados pela tecnologia</li>
                    <li>• Fomento ao desenvolvimento da cultura de transparência</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-slate-800 mb-2">Divulgação Proativa</h4>
                  <p className="text-slate-700">
                    A LAI estabelece que os órgãos públicos devem divulgar informações de interesse coletivo, 
                    independentemente de solicitação, incluindo dados sobre candidatos e processos eleitorais.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-slate-800 mb-2">Direito de Acesso</h4>
                  <p className="text-slate-700">
                    Todo cidadão tem direito ao acesso a informações públicas, que devem ser fornecidas 
                    de forma clara, objetiva e em linguagem de fácil compreensão.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSubTab === 'tse' && (
          <div>
            <div className="bg-slate-50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Building className="w-5 h-5" />
                Portal de Dados Abertos do TSE
              </h3>
              
              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-bold text-slate-800 mb-2">Dados Públicos Disponíveis</h4>
                <p className="text-slate-700 mb-4">
                  O TSE disponibiliza oficialmente dados eleitorais através do Portal de Dados Abertos, 
                  que substitui o antigo Repositório de Dados Eleitorais.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">162</div>
                    <div className="text-sm text-blue-700">conjuntos</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">35</div>
                    <div className="text-sm text-green-700">sobre candidatos</div>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-600 mb-1">Desde 1933</div>
                    <div className="text-sm text-yellow-700">Creative Commons</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 mb-4">
                <h4 className="font-bold text-slate-800 mb-2">Tipos de Dados</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-slate-700">
                  <div>• Bens de candidatos</div>
                  <div>• Coligações partidárias</div>
                  <div>• Propostas de governo</div>
                  <div>• Certidões criminais</div>
                  <div>• Redes sociais</div>
                  <div>• Fotos oficiais</div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-bold text-slate-800 mb-2">Licença de Uso</h4>
                <p className="text-slate-700 mb-2">
                  Os dados podem ser "livremente acessados, utilizados, tratados e compartilhados por qualquer pessoa, 
                  com vistas à geração de novas informações e iniciativas da sociedade."
                </p>
                <h4 className="font-bold text-slate-800 mb-2">Objetivo Oficial</h4>
                <p className="text-slate-700">
                  Segundo o TSE, o portal visa "estimular o controle social e contribuir com a melhoria da gestão pública", 
                  objetivo alinhado com a missão do projeto Meu Candidato.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeSubTab === 'conformidade' && (
          <div>
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Conformidade Legal Total
              </h3>
              
              <div className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-bold text-green-800 mb-2">✅ Uso de Dados Públicos</h4>
                  <p className="text-green-700">
                    Utilizamos exclusivamente dados disponibilizados oficialmente pelo TSE e outros órgãos públicos, 
                    conforme previsto na legislação de transparência.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-bold text-green-800 mb-2">✅ Finalidade Educativa</h4>
                  <p className="text-green-700">
                    A plataforma tem finalidade exclusivamente educativa e de promoção da transparência política, 
                    contribuindo para o exercício da cidadania.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h4 className="font-bold text-green-800 mb-2">✅ Responsabilidade Social</h4>
                  <p className="text-green-700">
                    Promovemos o uso responsável da informação, incentivando o debate democrático e o controle social 
                    das atividades políticas.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-bold text-blue-800 mb-2">📋 Resumo da Legalidade</h4>
                  <p className="text-blue-700">
                    O projeto <strong>Meu Candidato</strong> está fundamentado na Constituição Federal, 
                    na Lei de Acesso à Informação e utiliza dados oficiais do TSE, garantindo total conformidade 
                    legal e contribuindo para a transparência democrática no Brasil.
                  </p>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                  <h4 className="font-bold text-yellow-800 mb-2">⚠️ Compromisso com a Responsabilidade</h4>
                  <p className="text-yellow-700">
                    Reforçamos nosso compromisso com o uso responsável da informação pública, 
                    sempre respeitando os princípios democráticos e a dignidade das pessoas envolvidas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

