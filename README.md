# Makita Base

![Makita Logo](https://github.com/user-attachments/assets/b662c226-f336-4dd1-980d-cfe52fb158f1)

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)]()
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)]()
[![Baileys Enhanced](https://img.shields.io/badge/Baileys-Enhanced-ff69b4?style=for-the-badge)]()

Um bot de WhatsApp poderoso e expansível criado com Node.js.

✨ Crie chatbots incríveis de forma simples! ✨

---

## Sobre o projeto

Olá! Sou Raphael (@rafasw7) e criei a Makita Base — um bot de WhatsApp em Node.js pensado para quem quer desenvolver chatbots de forma simples e com grande potencial de expansão.

Utilizo uma versão modificada da Baileys com recursos aprimorados para deixar o bot mais completo e poderoso.

---

## Recursos

- Mídias completas: envio de mensagens, imagens, áudios, vídeos e documentos
- Sistema interativo: botões e menus que respondem às escolhas do usuário
- Carrossel avançado: menus com várias páginas para melhor organização
- Monitoramento em tempo real: ping com tempo de resposta e tempo de atividade
- Estrutura expansível: adicione novos comandos facilmente
- Fácil personalização: código limpo para customizações ilimitadas
- Conexão persistente: sessão mantida automaticamente

---

## Configuração rápida

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

## Instalação

Pré-requisitos:

- Node.js instalado
- Terminal (Termux, CMD, PowerShell, etc.)

Passos:

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

## Conexão com o WhatsApp

1. Execute: `node conectar.js`  
2. Digite seu número completo (ex: 5511999999999)  
3. Copie o código que aparecer no terminal  
4. No WhatsApp: Configurações → Dispositivos conectados → Conectar um dispositivo  
5. Cole o código e conecte — o bot deverá reiniciar automaticamente e ficará pronto para uso

---

## Comandos principais

- `.ping` — mostra velocidade e tempo online ⚡  
- `.menu` — abre menu interativo com carrossel 🌀

---

## Estrutura do projeto

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

- `funcoes/mensagens.js`: funções de envio de mensagens  
- `makita.js`: comandos do bot  
- `conectar.js`: gerenciamento da conexão com o WhatsApp

---

## Contato & suporte

- Nome: Raphael  
- Instagram: @rafasw7  
- WhatsApp: +55 62 8205-3713

Adoro ver o que vocês criam com a base — marque-me quando publicar algo!

---

## Avisos importantes

- Mantenha o Node.js sempre atualizado  
- Não compartilhe os arquivos de sessão — são pessoais  
- Use o bot respeitando os termos do WhatsApp  
- Projeto destinado a aprendizado e desenvolvimento de bots

---

## Agradecimentos

Criei esta base com muito carinho para a comunidade. Espero que aproveitem e construam coisas incríveis!

— Raphael (@rafasw7)

Se gostou, não esqueça de dar uma estrela no repositório!

<p align="center">
  <img src="https://media0.giphy.com/media/v1.Y2lkPTZjMDliOTUyNmdnbTZybGh1M2NiNXlyczF5ZTR2eDhlaG1lMHVqbG5zem1mODdlZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gDyCnwdmwgR36UAq8y/giphy.gif" alt="Makita em obra - animado" width="420" style="border-radius: 12px;">
</p>
