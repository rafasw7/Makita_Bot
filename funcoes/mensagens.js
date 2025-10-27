const { prepareWAMessageMedia } = require('baileys');

const enviar = async (conteudo) => {
  try {
    await makitawa.sendPresenceUpdate("composing", jid);
    await new Promise((r) => setTimeout(r, 1000));
    const mensagem = await makitawa.sendMessage(jid, {
      text: conteudo,
      contextInfo: {
        stanzaId: m.key.id,
        participant: m.key.participant || m.key.remoteJid,
        quotedMessage: m.message
      }
    });
    return mensagem;
  } catch (erro) {
    console.error('Erro ao enviar mensagem:', erro);
  }
};

const enviarimagem = async (url, caption = "") => {
  try {
    await makitawa.sendPresenceUpdate("composing", jid);
    const delay = 500 + Math.floor(Math.random() * 1500);
    await new Promise(r => setTimeout(r, delay));
    await makitawa.sendMessage(jid, {
      image: { url },
      caption,
      contextInfo: {
        stanzaId: m.key.id,
        participant: m.key.participant || m.key.remoteJid,
        quotedMessage: m.message
      }
    });
  } catch (erro) {
    console.error('Erro ao enviar imagem:', erro);
  }
};

const enviarvideo = async (url, caption = "") => {
  try {
    await makitawa.sendPresenceUpdate("composing", jid);
    const delay = 500 + Math.floor(Math.random() * 1500);
    await new Promise(r => setTimeout(r, delay));
    await makitawa.sendMessage(jid, {
      video: { url },
      caption,
      contextInfo: {
        stanzaId: m.key.id,
        participant: m.key.participant || m.key.remoteJid,
        quotedMessage: m.message
      }
    });
  } catch (erro) {
    console.error('Erro ao enviar vídeo:', erro);
  }
};

const enviaraudio = async (url) => {
  try {
    await makitawa.sendPresenceUpdate("recording", jid);
    const delay = 500 + Math.floor(Math.random() * 1500);
    await new Promise(r => setTimeout(r, delay));
    await makitawa.sendMessage(jid, {
      audio: { url },
      mimetype: 'audio/mp4',
      contextInfo: {
        stanzaId: m.key.id,
        participant: m.key.participant || m.key.remoteJid,
        quotedMessage: m.message
      }
    });
  } catch (erro) {
    console.error('Erro ao enviar áudio:', erro);
  }
};

const enviardocumento = async (url, filename, caption = "") => {
  try {
    await makitawa.sendPresenceUpdate("composing", jid);
    const delay = 500 + Math.floor(Math.random() * 1500);
    await new Promise(r => setTimeout(r, delay));
    await makitawa.sendMessage(jid, {
      document: { url },
      fileName: filename,
      caption,
      mimetype: 'application/octet-stream',
      contextInfo: {
        stanzaId: m.key.id,
        participant: m.key.participant || m.key.remoteJid,
        quotedMessage: m.message
      }
    });
  } catch (erro) {
    console.error('Erro ao enviar documento:', erro);
  }
};

const enviarsticker = async (url) => {
  try {
    await makitawa.sendPresenceUpdate("composing", jid);
    const delay = 500 + Math.floor(Math.random() * 1500);
    await new Promise(r => setTimeout(r, delay));
    await makitawa.sendMessage(jid, {
      sticker: { url },
      contextInfo: {
        stanzaId: m.key.id,
        participant: m.key.participant || m.key.remoteJid,
        quotedMessage: m.message
      }
    });
  } catch (erro) {
    console.error('Erro ao enviar sticker:', erro);
  }
};

const enviarlocalizacao = async (latitude, longitude, nome, endereco) => {
  try {
    await makitawa.sendPresenceUpdate("composing", jid);
    const delay = 500 + Math.floor(Math.random() * 1500);
    await new Promise(r => setTimeout(r, delay));
    await makitawa.sendMessage(jid, {
      location: {
        degreesLatitude: latitude,
        degreesLongitude: longitude,
        name: nome,
        address: endereco
      },
      contextInfo: {
        stanzaId: m.key.id,
        participant: m.key.participant || m.key.remoteJid,
        quotedMessage: m.message
      }
    });
  } catch (erro) {
    console.error('Erro ao enviar localização:', erro);
  }
};

const enviarcontato = async (numero, nome) => {
  try {
    await makitawa.sendPresenceUpdate("composing", jid);
    const delay = 500 + Math.floor(Math.random() * 1500);
    await new Promise(r => setTimeout(r, delay));
    await makitawa.sendMessage(jid, {
      contacts: {
        contacts: [{
          displayName: nome,
          vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:${nome}\nTEL;type=CELL;type=VOICE;waid=${numero}:${numero}\nEND:VCARD`
        }]
      },
      contextInfo: {
        stanzaId: m.key.id,
        participant: m.key.participant || m.key.remoteJid,
        quotedMessage: m.message
      }
    });
  } catch (erro) {
    console.error('Erro ao enviar contato:', erro);
  }
};

const enviarbotao = async (texto, botoes, footer = "") => {
  try {
    await makitawa.sendPresenceUpdate("composing", jid);
    const buttonMessage = {
      text: texto,
      footer: footer,
      buttons: botoes,
      headerType: 1,
      contextInfo: {
        stanzaId: m.key.id,
        participant: m.key.participant || m.key.remoteJid,
        quotedMessage: m.message
      }
    };
    await makitawa.sendMessage(jid, buttonMessage);
  } catch (erro) {
    console.error('Erro ao enviar botão:', erro);
  }
};

const enviarcarrocel = async (titulo, rodape, cards) => {
  try {
    for (let item of cards) {
      let { imageMessage } = await prepareWAMessageMedia({ image: { url: item.image }}, { upload: makitawa.waUploadToServer });
      item.image = imageMessage;
    }

    await makitawa.relayMessage(jid, {
      "interactiveMessage": {
        "body": {
          "text": titulo
        },
        "footer": {
          "text": rodape
        },
        "carouselMessage": {
          "cards": cards.flatMap(({ title, footer, image, buttons }) => {
            return [{
              "header": {
                "imageMessage": image,
                "hasMediaAttachment": true
              },
              "body": {
                "text": title
              },
              "footer": {
                "text": footer
              },
              "nativeFlowMessage": {
                "buttons": buttons.flatMap(({ name, button }) => {
                  return [{
                    "name": name,
                    "buttonParamsJson": JSON.stringify(button)
                  }]
                })
              }
            }]
          })
        },
        "contextInfo": {
          stanzaId: m.key.id,
          participant: m.key.participant || m.key.remoteJid,
          quotedMessage: m.message
        }
      }
    }, {});
  } catch (erro) {
    console.error('Erro ao enviar carrossel:', erro);
  }
};

const reagir = async (emoji) => {
  try {
    await makitawa.sendMessage(jid, {
      react: {
        text: emoji,
        key: m.key
      }
    });
  } catch (erro) {
    console.error("Erro ao reagir:", erro);
  }
};

const marcar = (jid) => {
  return `@${jid.split("@")[0]}`;
};

const nome = () => {
  return m.pushName || "Usuário";
};

module.exports = {
  enviar,
  enviarimagem,
  enviarvideo,
  enviaraudio,
  enviardocumento,
  enviarsticker,
  enviarlocalizacao,
  enviarcontato,
  enviarbotao,
  enviarcarrocel,
  reagir,
  marcar,
  nome
};


//A base Makita foi criada por Raphael.
//Instagram: @rafasw7
//Número para suporte: +55 62 8205-3713