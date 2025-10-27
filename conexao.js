const {
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
  makeWASocket,
  DisconnectReason,
  makeCacheableSignalKeyStore
} = require("baileys");
const pino = require("pino");
const readline = require("readline");
const fs = require("fs");

const config = JSON.parse(fs.readFileSync("./configurar/dados.json", "utf8"));
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const question = (text) => new Promise((resolve) => rl.question(text, resolve));

const makita = async () => {
  try {
    const { state, saveCreds } = await useMultiFileAuthState(config.session);
    const { version } = await fetchLatestBaileysVersion();

    const makitawa = makeWASocket({
      logger: pino({ level: "silent" }),
      printQRInTerminal: false,
      auth: {
        creds: state.creds,
        keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "silent" }))
      },
      browser: ["Ubuntu", "Chrome", "20.0.00"],
      version,
      markOnlineOnConnect: true,
      syncFullHistory: false,
      msgRetryCounterMap: {}
    });

    makitawa.ev.on("creds.update", saveCreds);

    makitawa.ev.on("connection.update", async (update) => {
      const { connection, lastDisconnect } = update;

      if (connection === "open") {
        console.log("Conectado com sucesso!");
        rl.close();
      }

      if (connection === "close") {
        const statusCode = lastDisconnect?.error?.output?.statusCode;
        const shouldReconnect = statusCode !== DisconnectReason.loggedOut;

        if (shouldReconnect) {
          console.log("Reconectando em 5 segundos...");
          setTimeout(makita, 5000);
        } else {
          console.log("Sessão encerrada. Reinicie o bot.");
          process.exit(0);
        }
      }
    });

    if (!makitawa.authState.creds.registered) {
      const phoneNumber = await question("Digite o número com DDI (ex: 5511999999999): ");
      const cleanNumber = phoneNumber.trim().replace(/\D/g, "");

      if (!cleanNumber || cleanNumber.length < 12) {
        console.log("Número inválido. Abortando.");
        process.exit(0);
      }

      const customPairingCode = "MAKITAV2";
      console.log("Gerando código de pareamento personalizado...");
      const code = await makitawa.requestPairingCode(cleanNumber, customPairingCode);
      console.log(`Código de pareamento: ${code?.match(/.{1,4}/g)?.join("-") || code}`);
      console.log("Abra o WhatsApp → Aparelhos Conectados → Conectar Aparelho");
    }

    require("./makita")(makitawa, config.prefixo);

  } catch (erro) {
    console.error("Erro na conexão:", erro);
    console.log("Tentando reconectar em 5 segundos...");
    setTimeout(makita, 5000);
  }
};

makita();


//A base Makita foi criada por Raphael.
//Instagram: @rafasw7
//Número para suporte: +55 62 8205-3713