<div align="center"><img src="https://github.com/user-attachments/assets/b662c226-f336-4dd1-980d-cfe52fb158f1" width="80" style="border-radius: 10px;"> Makita Base</div>

<div align="center">

https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white
https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
https://img.shields.io/badge/Baileys-Enhanced-ff69b4?style=for-the-badge

Um bot de WhatsApp poderoso e expansível criado com Node.js

✨ Crie chatbots incríveis de forma simples! ✨

</div>

---

🌟 Sobre o Projeto

<div align="center">

🎉 Olá! Sou Raphael (@rafasw7) e criei o Makita Base – um bot de WhatsApp em Node.js pensado para quem quer criar chatbots de forma simples, mas com grandes possibilidades de expansão!

🚀 Usei uma versão modificada da Baileys que traz recursos aprimorados e desbloqueados, deixando o bot mais completo e poderoso!

</div>

---

⚡ Recursos Incríveis

<div align="center">

🎯 Recurso ✨ Descrição
📱 Mídias Completas Envio de mensagens, imagens, áudios, vídeos e documentos
🔘 Sistema Interativo Botões e menus que respondem às escolhas do usuário
🌀 Carrossel Avançado Menus com várias páginas para melhor organização
⚡ Monitoramento em Tempo Real Ping com tempo de resposta e tempo de atividade
💬 Estrutura Expansível Adicione novos comandos facilmente
🧠 Fácil Personalização Código limpo para customizações ilimitadas
🔒 Conexão Persistente A sessão se mantém automaticamente

</div>

---

🛠 Configuração Rápida

<div align="center">

⚙️ Arquivo: configurar/dados.json

```json
{
  "session": "sessao",
  "prefixo": "."
}
```

🔧 Configuração 📝 Descrição
session Local onde a sessão do WhatsApp será guardada
prefixo Define como o bot reconhece comandos (personalizável)

</div>

---

📥 Instalação Passo a Passo

<div align="center">

📋 Pré-requisitos:

· 🟢 Node.js instalado
· 💻 Terminal (Termux, CMD, PowerShell, etc)

</div>

🚀 Passos de Instalação:

```bash
# 1️⃣ Entre na pasta do bot
cd makita-base

# 2️⃣ Instale as dependências
npm install

# 💡 Para Termux use:
npm install --no-bin-links

# 3️⃣ Inicie o bot
node conectar.js
```

---

📲 Conexão com WhatsApp

<div align="center">

🎯 Siga estes passos para conectar:

</div>

1. ▶️ Execute: node conectar.js
2. 📱 Digite seu número completo (ex: 5511999999999)
3. 🔢 Pegue o código que aparecer
4. 📲 No WhatsApp:
   · Vá em Configurações → Dispositivos conectados → Conectar um dispositivo
   · 📋 Cole o código
5. ✅ O bot reinicia sozinho e já pode ser usado!

---

🎯 Comandos Principais

<div align="center">

Comando Ação Emoji
.ping Mostra velocidade e tempo online ⚡
.menu Abre menu interativo com carrossel 🌀

</div>

---

🗂 Estrutura do Projeto

<div align="center">

```bash
makita-base/
├── 📁 configurar/
│   └── 📄 dados.json
├── 📁 funcoes/
│   └── 📄 mensagens.js
├── 📄 makita.js
├── 📄 conectar.js
└── 📄 package.json
```

Arquivo Função
funcoes/mensagens.js 🎨 Funções de envio de mensagens
makita.js 🤖 Comandos do bot
conectar.js 🔌 Gerencia a conexão com WhatsApp

</div>

---

📞 Contato & Suporte

<div align="center">

Plataforma Contato
👤 Nome Raphael
📸 Instagram @rafasw7
💬 WhatsApp +55 62 8205-3713

🎉 Adoro ver o que vocês criam com minha base!

</div>

---

⚠️ Avisos Importantes

<div align="center">

⚠️ Aviso 🛡️ Recomendação
🔄 Node.js Mantenha sempre atualizado
🔐 Sessão Não compartilhe os arquivos – são pessoais
📜 Termos Use seguindo os Termos do WhatsApp
🎓 Propósito Feita para aprendizado e criação de bots

</div>

---

✨ Mensagem Final

<div align="center">

🌟 Criei esta base com muito carinho para nossa comunidade!
🚀 Espero que vocês curtam e construam coisas incríveis!

---

— 🎩 Raphael (@rafasw7)

<img src="https://github.com/user-attachments/assets/b662c226-f336-4dd1-980d-cfe52fb158f1" width="100" style="border-radius: 15px; margin-top: 20px;">

</div>

---

<div align="center">

⭐ Não esqueça de dar uma estrela no repositório!

https://user-images.githubusercontent.com/5530109/151700966-0da42c3c-3e4c-4b5c-8e6c-5e5e5e5e5e5e.gif

</div>

<style>
  .markdown-body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  .markdown-body h1, .markdown-body h2, .markdown-body h3 {
    color: #2E86AB;
    border-bottom: 2px solid #F9C74F;
    padding-bottom: 10px;
  }
  
  .markdown-body table {
    border-collapse: collapse;
    width: 100%;
    margin: 20px 0;
  }
  
  .markdown-body table, .markdown-body th, .markdown-body td {
    border: 1px solid #ddd;
  }
  
  .markdown-body th, .markdown-body td {
    padding: 12px;
    text-align: left;
  }
  
  .markdown-body th {
    background-color: #2E86AB;
    color: white;
  }
  
  .markdown-body tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  
  .markdown-body code {
    background-color: #f4f4f4;
    padding: 2px 4px;
    border-radius: 4px;
    font-family: 'Courier New', monospace;
  }
</style>
