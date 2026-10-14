# Construction Firm Landing Page

A modern landing page for a construction company, built with React, Vite, and Tailwind CSS.

## Features

- Bilingual i18n support (PT-PT and EN) with persistent `LanguageContext`
- Reactive glassmorphism navigation header with full-screen mobile menu
- Responsive layout with Framer Motion scroll animations and dynamic counters
- Centralized configuration system in `src/config/clientData.js`
- Floating WhatsApp widget with live status dot

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Framer Motion
- React Icons

## Como Criar um Novo Site de Cliente (Workflow)

1. **Garantir que a `main` está atualizada:**
   ```bash
   git checkout main
   git pull origin main
   ```

2. **Criar a branch do novo cliente:**
   ```bash
   git checkout -b Nome-Do-Cliente
   ```

3. **Personalizar dados e textos:**
   - Editar `src/config/clientData.js` com os dados do cliente (cores, contactos, textos em `pt` e `en`, fotos).
   - Colocar o logótipo do cliente em `public/image.png` (ou atualizar o caminho no `clientData.js`).
   - Atualizar o `<title>` e as `<meta>` tags em `index.html`.

4. **Gravar e enviar a branch do cliente:**
   ```bash
   git add .
   git commit -m "feat(client): setup website for Nome do Cliente"
   git push -u origin Nome-Do-Cliente
   ```

## Scripts

- `npm run dev` — start dev server
- `npm run build` — build for production
- `npm run preview` — preview production build
- `npm run lint` — run ESLint
