"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Scale, Shield, FileText, Users, CheckCircle, AlertCircle } from "lucide-react";

export function LegalidadeTab() {
  return (
    <div className="space-y-6">
      {/* Header da Legalidade */}
      <div className="text-center bg-gradient-to-r from-green-50 via-yellow-50 to-blue-50 p-8 rounded-lg border border-green-200">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Scale className="h-8 w-8 text-green-600" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent">
            Legalidade da Plataforma
          </h2>
        </div>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          O projeto <strong>Meu Candidato</strong> está em total conformidade com a legislação brasileira, 
          baseando-se em marcos legais sólidos que garantem o direito à transparência e acesso à informação pública.
        </p>
      </div>

      <Tabs defaultValue="constituicao" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-white border border-green-200">
          <TabsTrigger value="constituicao" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-700">
            <FileText className="h-4 w-4 mr-2" />
            Constituição
          </TabsTrigger>
          <TabsTrigger value="lai" className="data-[state=active]:bg-yellow-100 data-[state=active]:text-yellow-700">
            <Shield className="h-4 w-4 mr-2" />
            LAI
          </TabsTrigger>
          <TabsTrigger value="tse" className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700">
            <Users className="h-4 w-4 mr-2" />
            TSE
          </TabsTrigger>
          <TabsTrigger value="conformidade" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-700">
            <CheckCircle className="h-4 w-4 mr-2" />
            Conformidade
          </TabsTrigger>
        </TabsList>

        {/* Aba Constituição Federal */}
        <TabsContent value="constituicao" className="space-y-4">
          <Card className="card-brasil">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <FileText className="h-5 w-5" />
                Constituição Federal de 1988
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-green-800 mb-2">Art. 5º, Inciso XXXIII</h4>
                <blockquote className="text-green-700 italic">
                  "Todos têm direito a receber dos órgãos públicos informações de seu interesse particular, 
                  ou de interesse coletivo ou geral, que serão prestadas no prazo da lei, sob pena de 
                  responsabilidade, ressalvadas aquelas cujo sigilo seja imprescindível à segurança da 
                  sociedade e do Estado."
                </blockquote>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <h4 className="font-semibold text-yellow-800 mb-2">Art. 37, § 3º, Inciso II</h4>
                <blockquote className="text-yellow-700 italic">
                  "A lei disciplinará as formas de participação do usuário na administração pública direta 
                  e indireta, regulando especialmente: [...] II - o acesso dos usuários a registros 
                  administrativos e a informações sobre atos de governo."
                </blockquote>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-800 mb-2">Art. 216, § 2º</h4>
                <blockquote className="text-blue-700 italic">
                  "Cabem à administração pública, na forma da lei, a gestão da documentação governamental 
                  e as providências para franquear sua consulta a quantos dela necessitem."
                </blockquote>
              </div>

              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Fundamentação Constitucional</h4>
                <p className="text-gray-700">
                  A Constituição Federal estabelece como direito fundamental o acesso à informação pública, 
                  criando a base legal para plataformas como o <strong>Meu Candidato</strong> que promovem 
                  a transparência política e o controle social.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba Lei de Acesso à Informação */}
        <TabsContent value="lai" className="space-y-4">
          <Card className="card-brasil">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-yellow-700">
                <Shield className="h-5 w-5" />
                Lei de Acesso à Informação (LAI) - Lei nº 12.527/2011
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Art. 3º - Diretrizes</h4>
                  <ul className="text-yellow-700 space-y-1 text-sm">
                    <li>• Publicidade como regra geral</li>
                    <li>• Divulgação independente de solicitações</li>
                    <li>• Uso de tecnologia da informação</li>
                    <li>• Cultura de transparência</li>
                    <li>• Controle social</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Art. 8º - Divulgação</h4>
                  <p className="text-green-700 text-sm">
                    "É dever dos órgãos e entidades públicas promover, independentemente de requerimentos, 
                    a divulgação em local de fácil acesso, no âmbito de suas competências, de informações 
                    de interesse coletivo ou geral."
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-800 mb-2">Art. 10 - Direito de Acesso</h4>
                <blockquote className="text-blue-700 italic">
                  "Qualquer interessado poderá apresentar pedido de acesso a informações aos órgãos e 
                  entidades referidos no art. 1º desta Lei, por qualquer meio legítimo, devendo o pedido 
                  conter a identificação do requerente e a especificação da informação requerida."
                </blockquote>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Aplicação ao Projeto</h4>
                <p className="text-gray-700">
                  A LAI garante o direito de acesso a informações públicas sobre candidatos e políticos, 
                  legitimando plataformas que compilam e disponibilizam esses dados de forma organizada 
                  e acessível à sociedade.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba TSE e Dados Eleitorais */}
        <TabsContent value="tse" className="space-y-4">
          <Card className="card-brasil">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-700">
                <Users className="h-5 w-5" />
                Portal de Dados Abertos do TSE
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">Dados Públicos Disponíveis</h4>
                <p className="text-blue-700 mb-3">
                  O TSE disponibiliza oficialmente dados eleitorais através do Portal de Dados Abertos, 
                  que substitui o antigo Repositório de Dados Eleitorais.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3">
                  <Badge className="badge-azul">162 conjuntos</Badge>
                  <Badge className="badge-verde">35 sobre candidatos</Badge>
                  <Badge className="badge-amarelo">Desde 1933</Badge>
                  <Badge className="bg-gray-100 text-gray-700">Creative Commons</Badge>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Tipos de Dados</h4>
                  <ul className="text-green-700 space-y-1 text-sm">
                    <li>• Bens de candidatos</li>
                    <li>• Coligações partidárias</li>
                    <li>• Propostas de governo</li>
                    <li>• Certidões criminais</li>
                    <li>• Redes sociais</li>
                    <li>• Fotos oficiais</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Licença de Uso</h4>
                  <p className="text-yellow-700 text-sm">
                    Os dados podem ser "livremente acessados, utilizados, tratados e compartilhados 
                    por qualquer pessoa, com vistas à geração de novas informações e iniciativas 
                    da sociedade."
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Objetivo Oficial</h4>
                <p className="text-gray-700">
                  Segundo o TSE, o portal visa "estimular o controle social e contribuir com a melhoria 
                  da gestão pública", objetivo alinhado com a missão do projeto Meu Candidato.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba Conformidade */}
        <TabsContent value="conformidade" className="space-y-4">
          <Card className="card-brasil">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <CheckCircle className="h-5 w-5" />
                Conformidade Legal Total
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-green-800 font-medium">Dados Públicos</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-green-800 font-medium">Fontes Oficiais</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-green-800 font-medium">Transparência</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="text-blue-800 font-medium">Controle Social</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="text-blue-800 font-medium">Interesse Público</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <span className="text-blue-800 font-medium">Democracia</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <Scale className="h-5 w-5 text-green-600" />
                  Resumo da Legalidade
                </h4>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>✅ Base Constitucional:</strong> Fundamentado no Art. 5º, XXXIII da Constituição Federal
                  </p>
                  <p>
                    <strong>✅ Lei de Acesso à Informação:</strong> Em conformidade com a Lei nº 12.527/2011
                  </p>
                  <p>
                    <strong>✅ Dados Oficiais:</strong> Utiliza exclusivamente dados públicos do TSE e órgãos oficiais
                  </p>
                  <p>
                    <strong>✅ Finalidade Pública:</strong> Promove transparência, democracia e controle social
                  </p>
                  <p>
                    <strong>✅ Licença Aberta:</strong> Dados sob Creative Commons Attribution
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-1">Compromisso com a Responsabilidade</h4>
                    <p className="text-yellow-700 text-sm">
                      O projeto Meu Candidato compromete-se a manter a veracidade das informações, 
                      respeitar a privacidade quando aplicável e promover o uso responsável dos dados, 
                      sempre em conformidade com a legislação brasileira vigente.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

