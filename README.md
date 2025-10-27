![1000139073](https://github.com/user-attachments/assets/b662c226-f336-4dd1-980d-cfe52fb158f1)
🤖 Makita Base:

Olá! Sou Raphael (@rafasw7) e criei o Makita Base – um bot de WhatsApp em Node.js pensado para quem quer criar chatbots de forma simples, mas com grandes possibilidades de expansão. Usei uma versão modificada da Baileys que traz recursos aprimorados e desbloqueados, deixando o bot mais completo.

🚀 Recursos:

- Envio completo de mídias: mensagens, imagens, áudios, vídeos e documentos
- Sistema interativo: botões e menus que respondem às escolhas do usuário
- Carrossel: menus com várias páginas para organizar melhor os comandos
- Monitoramento em tempo real: ping com tempo de resposta e tempo de atividade
- Estrutura que cresce com você: adicione novos comandos facilmente
- Fácil de personalizar: código limpo para customizações
- Conexão persistente: a sessão se mantém automaticamente

⚙️ Configuração:

Arquivo configurar/dados.json:

{
  "session": "sessao",
  "prefixo": "."
}

- session: local onde a sessão do WhatsApp será guardada
- prefixo: define como o bot reconhece comandos (pode mudar para qualquer outro)

📥 Instalação:

Pré-requisitos:

- Node.js instalado
- Terminal (Termux, CMD, PowerShell, etc)

Passos:

1. Entre na pasta do bot: cd makita-base
2. Instale as dependências: npm install
   - Se estiver no Termux: npm install --no-bin-links
3. Inicie o bot: node conectar.js

📲 Conectando com o WhatsApp:

1. Execute node conectar.js
2. Digite seu número completo (ex: 5511999999999)
3. Pegue o código que aparecer
4. No WhatsApp:
   - Vá em Configurações → Dispositivos conectados → Conectar um dispositivo
   - Cole o código
5. O bot reinicia sozinho e já pode ser usado.

🎯 Comandos principais:

- .ping – Mostra velocidade e tempo online
- .menu – Abre menu interativo com carrossel

🛠 Estrutura do projeto

makita-base/
├── configurar/
│   └── dados.json
├── funcoes/
│   └── mensagens.js
├── makita.js
├── conectar.js
└── package.json

- funcoes/mensagens.js: funções de envio de mensagens
- makita.js: comandos do bot
- conectar.js: gerencia a conexão com WhatsApp

📞 Contato

- Nome: Raphael
- Instagram: @rafasw7
- WhatsApp: +55 62 8205-3713

Adoro ver o que vocês criam com minha base!

⚠️ Avisos importantes

- Mantenha o Node.js sempre atualizado
- Não compartilhe os arquivos da sessão – são pessoais
- Use seguindo os Termos do WhatsApp
- Essa base foi feita para aprendizado e criação de bots
- 
✨ Criei esta base com muito carinho para nossa comunidade! Espero que vocês curtam e construam coisas incríveis!

— Raphael (@rafasw7)
