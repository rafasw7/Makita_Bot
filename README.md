# Makita Base

![Makita Logo](https://github.com/user-attachments/assets/b662c226-f336-4dd1-980d-cfe52fb158f1)

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)]()
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)]()
[![Baileys Enhanced](https://img.shields.io/badge/Baileys-Enhanced-ff69b4?style=for-the-badge)]()

---

## 📦 Versões

- [Versão 1.0 (primeira)](https://github.com/rafasw7/Makita-Whatsapp/tree/main)
- [Versão 1.2 (atualização)](https://github.com/rafasw7/Makita-Whatsapp/tree/update-1.2)

---

## ✨ Sobre o projeto

Olá! Sou Raphael (@rafasw7) e criei a Makita Base — um bot de WhatsApp em Node.js pensado para quem quer desenvolver chatbots de forma simples, expansível e poderosa.

Utiliza uma versão modificada da Baileys, trazendo recursos aprimorados para deixar o bot mais completo.

---

## 🚀 Recursos

- **Mídias completas:** mensagens, imagens, áudios, vídeos e documentos
- **Sistema interativo:** botões e menus dinâmicos
- **Carrossel avançado:** menus com múltiplas páginas
- **Monitoramento em tempo real:** ping e uptime
- **Estrutura expansível:** adição fácil de comandos
- **Personalização:** código limpo e aberto para ajustes
- **Conexão persistente:** sessão automática

---

## ⚡ Instalação rápida

### Pré-requisitos

- Node.js instalado
- Terminal (Termux, CMD, PowerShell...)

### Passos

```bash
# 1) Entre na pasta do bot
cd makita-base

# 2) Instale as dependências
npm install

# Se estiver no Termux:
npm install --no-bin-links

# 3) Inicie o bot
node conectar.js
```

---

## 🔧 Configuração

Arquivo: `configurar/dados.json`

```json
{
  "session": "sessao",
  "prefixo": "."
}
```

- `session`: local onde a sessão do WhatsApp será guardada  
- `prefixo`: define como o bot reconhece comandos (personalizável)

---

## 📱 Conectando ao WhatsApp

1. Execute: `node conectar.js`  
2. Digite seu número completo (ex: 5511999999999)  
3. Copie o código que aparecer no terminal  
4. No WhatsApp: Configurações → Dispositivos conectados → Conectar um dispositivo  
5. Cole o código e conecte — o bot reiniciará automaticamente e ficará pronto para uso

---

## 📝 Comandos principais

- `.ping` — mostra velocidade e tempo online ⚡  
- `.menu` — abre menu interativo com carrossel 🌀

---

## 📂 Estrutura do projeto

```
makita-base/
├── configurar/
│   └── dados.json
├── funcoes/
│   └── mensagens.js
├── makita.js
├── conectar.js
└── package.json
```

- **funcoes/mensagens.js**: funções de envio de mensagens  
- **makita.js**: comandos do bot  
- **conectar.js**: gerenciamento da conexão com o WhatsApp

---

## 🤝 Contato & Suporte

- **Nome:** Raphael  
- **Instagram:** [@rafasw7](https://instagram.com/rafasw7)  
- **WhatsApp:** +55 62 8205-3713

Adoro ver o que vocês criam com a base — marque-me quando publicar algo!

---

## ⚠️ Avisos importantes

- Mantenha o Node.js sempre atualizado  
- Não compartilhe os arquivos de sessão — são pessoais  
- Use o bot respeitando os termos do WhatsApp  
- Projeto destinado a aprendizado e desenvolvimento de bots

---

## 💙 Agradecimentos

Criei esta base com carinho para a comunidade. Aproveite, construa coisas incríveis e não esqueça de dar uma estrela no repositório!

— Raphael (@rafasw7)
