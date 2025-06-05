# 🗳️ Meu Candidato

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.0.0-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
</div>

<div align="center">
  <h3>🔍 Pesquise informações detalhadas sobre candidatos políticos de fontes confiáveis</h3>
  <p>Uma plataforma moderna e transparente para consultar dados de candidatos, processos judiciais, propostas e realizações.</p>
</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Como Usar](#-como-usar)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [API Endpoints](#-api-endpoints)
- [Componentes](#-componentes)
- [Contribuição](#-contribuição)
- [Licença](#-licença)
- [Contato](#-contato)

---


## 🎯 Sobre o Projeto

**Meu Candidato** é uma plataforma web moderna desenvolvida para promover a transparência política no Brasil. O projeto permite que cidadãos pesquisem e acessem informações detalhadas sobre candidatos políticos, incluindo:

- **Dados pessoais e profissionais** dos candidatos
- **Propostas de campanha** e planos de governo
- **Realizações em mandatos anteriores**
- **Processos judiciais** e questões legais
- **Notícias recentes** relacionadas aos candidatos
- **Declaração de bens** e patrimônio
- **Histórico político** e trajetória

### 🎯 Objetivo

Democratizar o acesso à informação política, permitindo que os eleitores tomem decisões mais conscientes e informadas durante os processos eleitorais.

### 🌟 Diferenciais

- ✅ **Interface moderna e intuitiva**
- ✅ **Busca inteligente com autocompletar**
- ✅ **Dados de múltiplas fontes confiáveis**
- ✅ **Responsivo para todos os dispositivos**
- ✅ **Acessibilidade completa**
- ✅ **Performance otimizada**

---

## ⚡ Funcionalidades

### 🔍 **Sistema de Busca Avançado**
- Busca por nome do candidato
- Busca por número de candidatura
- Busca por sigla do partido
- Autocompletar inteligente
- Sugestões em tempo real

### 👤 **Perfil Completo do Candidato**
- Informações pessoais e profissionais
- Foto e dados básicos
- Partido político e número
- Cargo em disputa
- Declaração de bens

### 📊 **Abas Organizadas de Informações**
- **Propostas**: Planos de governo e promessas de campanha
- **Realizações**: Histórico de mandatos anteriores
- **Processos**: Questões judiciais e legais
- **Notícias**: Cobertura da mídia e eventos recentes

### 🔗 **Integrações Externas**
- API do TSE (Tribunal Superior Eleitoral)
- Portal da Transparência
- Sistemas de notícias
- Bases de dados judiciais

### 📱 **Experiência do Usuário**
- Design responsivo para mobile e desktop
- Navegação intuitiva
- Carregamento rápido
- Acessibilidade (WCAG 2.1)
- Feedback do usuário
- Sistema de reportar erros

---


## 🛠️ Tecnologias Utilizadas

### **Frontend**
- **[Next.js 15.2.4](https://nextjs.org/)** - Framework React para produção
- **[React 18.2.0](https://reactjs.org/)** - Biblioteca para interfaces de usuário
- **[TypeScript 5.0.0](https://www.typescriptlang.org/)** - Superset tipado do JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones

### **Backend & APIs**
- **[Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)** - Endpoints serverless
- **[Axios](https://axios-http.com/)** - Cliente HTTP para requisições

### **Desenvolvimento**
- **[ESLint](https://eslint.org/)** - Linter para JavaScript/TypeScript
- **[Prettier](https://prettier.io/)** - Formatador de código
- **[Git](https://git-scm.com/)** - Controle de versão

### **Deploy & Hospedagem**
- **[Vercel](https://vercel.com/)** - Plataforma de deploy otimizada para Next.js
- **[GitHub](https://github.com/)** - Repositório de código

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- **[Node.js](https://nodejs.org/)** (versão 18.0 ou superior)
- **[npm](https://www.npmjs.com/)** (geralmente vem com o Node.js)
- **[Git](https://git-scm.com/)** (para clonar o repositório)

### Verificar Instalações

```bash
# Verificar versão do Node.js
node --version

# Verificar versão do npm
npm --version

# Verificar versão do Git
git --version
```

---

## 🚀 Instalação

### 1. **Clone o Repositório**

```bash
git clone https://github.com/tiagodof/Meu-Candidato.git
cd Meu-Candidato
```

### 2. **Instale as Dependências**

```bash
npm install
```

### 3. **Configure as Variáveis de Ambiente**

Crie um arquivo `.env.local` na raiz do projeto:

```bash
cp .env.example .env.local
```

Edite o arquivo `.env.local` com suas configurações:

```env
# APIs Externas
TSE_API_URL=https://api.tse.gov.br
TRANSPARENCIA_API_URL=https://api.portaltransparencia.gov.br
NEWS_API_KEY=sua_chave_da_api_de_noticias

# Configurações do Banco de Dados (se aplicável)
DATABASE_URL=sua_url_do_banco

# Configurações de Autenticação (se aplicável)
NEXTAUTH_SECRET=seu_secret_aqui
NEXTAUTH_URL=http://localhost:3000
```

### 4. **Execute o Projeto em Desenvolvimento**

```bash
npm run dev
```

O projeto estará disponível em: **http://localhost:3000**

### 5. **Build para Produção**

```bash
# Gerar build de produção
npm run build

# Executar versão de produção
npm start
```

---


## 📖 Como Usar

### **1. Página Inicial**
- Acesse a página principal em `http://localhost:3000`
- Use a barra de busca para pesquisar candidatos
- Digite nome, número ou sigla do partido
- Selecione uma sugestão ou pressione Enter para buscar

### **2. Resultados da Busca**
- Visualize a lista de candidatos encontrados
- Clique em um candidato para ver detalhes completos
- Use filtros para refinar os resultados

### **3. Perfil do Candidato**
- Navegue pelas abas: Propostas, Realizações, Processos, Notícias
- Visualize informações detalhadas em cada seção
- Use os botões de ação para mais detalhes
- Reporte erros ou envie feedback

### **4. Funcionalidades Adicionais**
- **Acessibilidade**: Use controles de acessibilidade
- **Feedback**: Envie sugestões e melhorias
- **Reportar Erros**: Informe problemas encontrados

---

## 📁 Estrutura do Projeto

```
meu-candidato/
├── 📁 app/                          # App Router do Next.js 13+
│   ├── 📁 api/                      # API Routes
│   │   ├── 📁 autocompletar/        # Endpoint de autocompletar
│   │   ├── 📁 candidatos/           # CRUD de candidatos
│   │   ├── 📁 feedback/             # Sistema de feedback
│   │   └── 📁 reportar/             # Sistema de reportar erros
│   ├── 📁 candidato/[id]/           # Página dinâmica do candidato
│   ├── 📁 resultados/               # Página de resultados da busca
│   ├── 📄 layout.tsx                # Layout principal
│   └── 📄 page.tsx                  # Página inicial
├── 📁 components/                   # Componentes React
│   ├── 📁 candidate/                # Componentes de candidatos
│   ├── 📁 search/                   # Componentes de busca
│   └── 📁 ui/                       # Componentes de UI base
├── 📁 lib/                          # Bibliotecas e utilitários
│   └── 📁 api/                      # Integrações com APIs externas
│       ├── 📁 integrations/         # Integrações específicas
│       ├── 📄 types.ts              # Tipos TypeScript
│       ├── 📄 services.ts           # Serviços de API
│       └── 📄 mockData.ts           # Dados de exemplo
├── 📁 tests/                        # Testes automatizados
├── 📁 public/                       # Arquivos estáticos
├── 📄 package.json                  # Dependências e scripts
├── 📄 tsconfig.json                 # Configuração TypeScript
├── 📄 tailwind.config.js            # Configuração Tailwind
├── 📄 next.config.js                # Configuração Next.js
└── 📄 README.md                     # Este arquivo
```

### **Principais Diretórios**

- **`app/`**: Contém todas as páginas e API routes usando o App Router
- **`components/`**: Componentes React reutilizáveis organizados por funcionalidade
- **`lib/`**: Lógica de negócio, integrações com APIs e utilitários
- **`tests/`**: Testes unitários, de integração e end-to-end

---

## 🔌 API Endpoints

### **Candidatos**

```http
GET /api/candidatos
```
Busca candidatos com parâmetros de filtro.

**Parâmetros:**
- `q` (string): Termo de busca
- `partido` (string): Filtro por partido
- `cargo` (string): Filtro por cargo

**Resposta:**
```json
{
  "candidatos": [
    {
      "id": "1",
      "nome": "João Silva",
      "partido": "PXX",
      "numero": "12345",
      "cargo": "Vereador"
    }
  ],
  "total": 1
}
```

---

```http
GET /api/candidatos/[id]
```
Obtém detalhes completos de um candidato específico.

**Resposta:**
```json
{
  "id": "1",
  "nome": "João Silva",
  "partido": "PXX",
  "numero": "12345",
  "cargo": "Vereador",
  "bens": "R$ 450.000,00",
  "propostas": ["Proposta 1", "Proposta 2"],
  "realizacoes": ["Realização 1"],
  "processos": [
    {
      "numero": "0001234-12.2022.8.00.0001",
      "tipo": "Processo Civil",
      "status": "Em andamento"
    }
  ],
  "noticias": [
    {
      "titulo": "Notícia sobre o candidato",
      "fonte": "Jornal da Cidade",
      "data": "2025-03-15"
    }
  ]
}
```

### **Autocompletar**

```http
GET /api/autocompletar?q=termo
```
Retorna sugestões para autocompletar a busca.

### **Feedback**

```http
POST /api/feedback
```
Envia feedback do usuário.

**Body:**
```json
{
  "tipo": "sugestao",
  "mensagem": "Sugestão de melhoria",
  "email": "usuario@email.com"
}
```

### **Reportar Erro**

```http
POST /api/reportar
```
Reporta um erro encontrado.

**Body:**
```json
{
  "candidatoId": "1",
  "tipoErro": "informacao_incorreta",
  "descricao": "Descrição do erro",
  "email": "usuario@email.com"
}
```

---


## 🧩 Componentes

### **Componentes de UI Base**

#### **Button**
```tsx
import { Button } from "@/components/ui/button";

<Button variant="default" size="lg">
  Clique aqui
</Button>
```

#### **Card**
```tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Título do Card</CardTitle>
  </CardHeader>
  <CardContent>
    Conteúdo do card
  </CardContent>
</Card>
```

#### **Tabs**
```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Conteúdo 1</TabsContent>
  <TabsContent value="tab2">Conteúdo 2</TabsContent>
</Tabs>
```

### **Componentes Específicos**

#### **SearchBar**
```tsx
import { SearchBar } from "@/components/search/SearchBar";

<SearchBar initialValue="" />
```

#### **CandidateDetails**
```tsx
import { CandidateDetails } from "@/components/candidate/CandidateDetails";

<CandidateDetails candidato={candidatoData} />
```

---

## 🤝 Contribuição

Contribuições são sempre bem-vindas! Siga os passos abaixo para contribuir:

### **1. Fork o Projeto**
```bash
# Clique no botão "Fork" no GitHub
```

### **2. Clone seu Fork**
```bash
git clone https://github.com/seu-usuario/Meu-Candidato.git
cd Meu-Candidato
```

### **3. Crie uma Branch para sua Feature**
```bash
git checkout -b feature/nova-funcionalidade
```

### **4. Faça suas Alterações**
- Siga os padrões de código estabelecidos
- Adicione testes para novas funcionalidades
- Mantenha a documentação atualizada

### **5. Commit suas Alterações**
```bash
git add .
git commit -m "feat: adiciona nova funcionalidade"
```

### **6. Push para sua Branch**
```bash
git push origin feature/nova-funcionalidade
```

### **7. Abra um Pull Request**
- Descreva claramente as alterações
- Referencie issues relacionadas
- Aguarde a revisão

### **Padrões de Commit**

Utilizamos [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Alterações na documentação
- `style:` Formatação, ponto e vírgula, etc
- `refactor:` Refatoração de código
- `test:` Adição ou correção de testes
- `chore:` Tarefas de manutenção

### **Diretrizes de Código**

- Use TypeScript para tipagem forte
- Siga os padrões do ESLint e Prettier
- Escreva testes para novas funcionalidades
- Mantenha componentes pequenos e reutilizáveis
- Use nomes descritivos para variáveis e funções

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

```
MIT License

Copyright (c) 2025 Meu Candidato

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📞 Contato

### **Desenvolvedor Principal**
- **Nome**: Tiago Oliveira
- **GitHub**: [@tiagodof](https://github.com/tiagodof)
- **Email**: tiago@meucandidato.com.br

### **Projeto**
- **Repositório**: [https://github.com/tiagodof/Meu-Candidato](https://github.com/tiagodof/Meu-Candidato)
- **Website**: [https://meucandidato.vercel.app](https://meucandidato.vercel.app)
- **Issues**: [https://github.com/tiagodof/Meu-Candidato/issues](https://github.com/tiagodof/Meu-Candidato/issues)

### **Redes Sociais**
- **LinkedIn**: [Tiago Oliveira](https://linkedin.com/in/tiagodof)
- **Twitter**: [@tiagodof](https://twitter.com/tiagodof)

---

## 🙏 Agradecimentos

- **[Next.js Team](https://nextjs.org/)** - Framework incrível
- **[Vercel](https://vercel.com/)** - Plataforma de deploy
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS
- **[Lucide](https://lucide.dev/)** - Ícones lindos
- **[TSE](https://www.tse.jus.br/)** - Dados eleitorais
- **Comunidade Open Source** - Por todas as contribuições

---

<div align="center">
  <p>⭐ Se este projeto te ajudou, considere dar uma estrela no GitHub!</p>
  <p>🚀 Feito com ❤️ para promover a transparência política no Brasil</p>
</div>

---

**[⬆ Voltar ao topo](#-meu-candidato)**

