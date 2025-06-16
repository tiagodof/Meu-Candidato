# Meu Candidato - Deploy no Vercel

## 🚀 Configuração para Deploy

Este projeto é um **React + Vite** e está configurado para deploy no Vercel.

### ⚙️ Configurações Aplicadas:

1. **vercel.json** - Configuração específica para SPA React
2. **vite.config.js** - Otimizado para build de produção
3. **package.json** - Homepage configurada

### 📋 Comandos de Deploy:

- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

### 🔧 Configurações Importantes:

- Framework: **null** (para evitar detecção automática como Next.js)
- Rewrites: Configurado para SPA (Single Page Application)
- Cache: Otimizado para assets estáticos

### 🎯 Como Fazer Deploy:

1. Fazer push das alterações para o GitHub
2. O Vercel irá detectar automaticamente as configurações
3. Deploy será executado como React + Vite (não Next.js)

### ✅ Problema Resolvido:

O erro "No Next.js version detected" foi corrigido configurando explicitamente o framework como `null` no `vercel.json`.

