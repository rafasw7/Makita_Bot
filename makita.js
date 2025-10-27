const { enviar, reagir, nome, enviarbotao, enviarcarrocel } = require("./funcoes/mensagens");

module.exports = async (makitawa, prefixo) => {
  makitawa.ev.on("messages.upsert", async (msg) => {
    const m = msg.messages[0];
    if (!m.message || !m.key.remoteJid) return;

    global.jid = m.key.remoteJid;
    global.m = m;
    global.makitawa = makitawa;

    const fromMe = m.key.fromMe;
    const body =
      m.message.conversation ||
      m.message.extendedTextMessage?.text ||
      m.message.imageMessage?.caption ||
      m.message.buttonsResponseMessage?.selectedButtonId ||
      "";

    if (fromMe) return;

    const args = body.startsWith(prefixo) ? body.trim().split(/\s+/) : [];
    const comando = body.startsWith(prefixo)
      ? args[0].slice(prefixo.length).toLowerCase()
      : body.toLowerCase();
    const texto = args.slice(1).join(" ");

    switch (comando) {
      case "ping": {
        const inicio = Date.now();
        await enviar("• *Pong!*");
        const fim = Date.now();
        const tempo = fim - inicio;

        const uptime = process.uptime();
        const horas = Math.floor(uptime / 3600);
        const minutos = Math.floor((uptime % 3600) / 60);
        const segundos = Math.floor(uptime % 60);

        const botoes = [
          { buttonId: "menu", buttonText: { displayText: "> MENU" }, type: 1 }
        ];

        await enviarbotao(
          jid,
          `• Velocidade: *${tempo}ms*\n• Uptime: *${horas}h ${minutos}m ${segundos}s*`,
          "Makita Bot",
          botoes,
          m
        );
        break;
      }

      case "menu": {
        const cards = [
          {
            title: `Olá \n${nome()}, Seja Bem-Vindo`,
            footer: "@Makita - Pag 1/3",
            image: "https://i.ibb.co/5xG9HWL2/fac3d7578a3999ca7edd7bc6eb48309d.jpg",
            buttons: []
          },
          {
            title: "Menu Teste",
            footer: "@Makita - Pag 2/3",
            image: "https://i.ibb.co/5xG9HWL2/fac3d7578a3999ca7edd7bc6eb48309d.jpg",
            buttons: []
          },
          {
            title: "Menu Teste",
            footer: "@Makita - Pag 3/3",
            image: "https://i.ibb.co/5xG9HWL2/fac3d7578a3999ca7edd7bc6eb48309d.jpg",
            buttons: []
          }
        ];

        await enviarcarrocel("", "Selecione uma categoria", cards, m);
        break;
      }

      default:
        if (body.startsWith(prefixo)) {
          await reagir("🏗");
          await enviar(`Comando inválido: ${comando}`);
        }
        break;
    }
  });

  process.on("uncaughtException", (err) => console.log("Erro:", err));
};

//A base Makita foi criada por Raphael.
//Instagram: @rafasw7
//Número para suporte: +55 62 8205-3713