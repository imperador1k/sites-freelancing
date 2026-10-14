---
name: adaptador-cliente-pt
description: Adapta o template base do site para um novo cliente em Portugal (PT-PT). Usa sempre que o utilizador fornecer dados de uma empresa, telefone, especialidades ou links de fotos do Google Maps.
---

# Instruções de Adaptação de Cliente (PT-PT)

Sempre que o utilizador fornecer os dados brutos de um negócio local, executa rigorosamente estes passos:

1. **Idioma Estrito (PT-PT):**
   - Substitui qualquer texto em Romeno ou Inglês por Português de Portugal natural e persuasivo.
   - Termos obrigatórios: "Orçamento Gratuito", "Equipa", "Betão", "Canalização", "Contacto", "Remodelações". Proibido usar termos do português do Brasil.

2. **Fotos do Google Maps em Alta Resolução:**
   - Sempre que receberes links `lh3.googleusercontent.com/...`, substitui o sufixo final (ex: `=w203-h135-k-no`) por `=w1200-h800-no` para garantir alta definição.

3. **Conversão Direta para WhatsApp:**
   - Todos os botões de Call-to-Action ("Pedir Orçamento", "Contactar") devem apontar para `https://wa.me/[NUMERO_WHATSAPP]?text=Olá%20[NOME_EMPRESA],%20vi%20o%20vosso%20site%20e%20gostaria%20de%20pedir%20um%20orçamento.`

4. **Adaptação de Secções:**
   - Na secção de estatísticas, destaca os anos de experiência ou número de obras (ex: "+800 Obras Realizadas").
   - Se o cliente não tiver fotos da equipa, transforma a secção de equipa em "O Nosso Processo em 4 Passos" ou "Avaliações de Clientes".

5. **Suporte Bilingue (i18n):**
   - Preenche sempre tanto o bloco `pt` como o bloco `en` dentro de `src/config/clientData.js` para garantir que o cliente tem o site disponível em Português e em Inglês.