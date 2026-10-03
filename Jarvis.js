const express = require("express");
const OpenAI = require("openai");

const app = express();

app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Página principal
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>JARVIS AI</title>
      </head>
      <body style="font-family: Arial; text-align: center; padding: 30px; background: #101820; color: white;">
        <h1>JARVIS AI</h1>
        <p>Tu asistente está en línea.</p>
        <input id="message" placeholder="Escribe tu mensaje" style="padding: 12px; width: 80%; max-width: 400px;">
        <br><br>
        <button onclick="sendMessage()" style="padding: 12px 24px;">Enviar</button>
        <p id="reply"></p>

        <script>
          async function sendMessage() {
            const message = document.getElementById("message").value;
            const reply = document.getElementById("reply");
            reply.textContent = "JARVIS está pensando...";

            try {
              const response = await fetch("/chat", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({message})
              });

              const data = await response.json();
              reply.textContent = data.reply || data.error || "No hubo respuesta";
            } catch (error) {
              reply.textContent = "Error de conexión";
            }
          }
        </script>
      </body>
    </html>
  `);
});

// Chat con IA
app.post("/chat", async (req, res) => {
  try {
    const message = req.body.message;

    if (!message) {
      return res.status(400).json({
        error: "Falta el mensaje"
      });
    }

    const response = await client.responses.create({
      model: "gpt-5.6",
      input: message
    });

    res.json({
      reply: response.output_text
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "JARVIS no pudo procesar la solicitud"
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`JARVIS funcionando en el puerto ${PORT}`);
});const express = require("express");
const OpenAI = require("openai");

const app = express();

app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Página principal
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>JARVIS AI</title>
      </head>
      <body style="font-family: Arial; text-align: center; padding: 30px; background: #101820; color: white;">
        <h1>JARVIS AI</h1>
        <p>Tu asistente está en línea.</p>
        <input id="message" placeholder="Escribe tu mensaje" style="padding: 12px; width: 80%; max-width: 400px;">
        <br><br>
        <button onclick="sendMessage()" style="padding: 12px 24px;">Enviar</button>
        <p id="reply"></p>

        <script>
          async function sendMessage() {
            const message = document.getElementById("message").value;
            const reply = document.getElementById("reply");
            reply.textContent = "JARVIS está pensando...";

            try {
              const response = await fetch("/chat", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({message})
              });

              const data = await response.json();
              reply.textContent = data.reply || data.error || "No hubo respuesta";
            } catch (error) {
              reply.textContent = "Error de conexión";
            }
          }
        </script>
      </body>
    </html>
  `);
});

// Chat con IA
app.post("/chat", async (req, res) => {
  try {
    const message = req.body.message;

    if (!message) {
      return res.status(400).json({
        error: "Falta el mensaje"
      });
    }

    const response = await client.responses.create({
      model: "gpt-5.6",
      input: message
    });

    res.json({
      reply: response.output_text
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "JARVIS no pudo procesar la solicitud"
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`JARVIS funcionando en el puerto ${PORT}`);
});const express = require("express");
const OpenAI = require("openai");

const app = express();

app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Página principal
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>JARVIS AI</title>
      </head>
      <body style="font-family: Arial; text-align: center; padding: 30px; background: #101820; color: white;">
        <h1>JARVIS AI</h1>
        <p>Tu asistente está en línea.</p>
        <input id="message" placeholder="Escribe tu mensaje" style="padding: 12px; width: 80%; max-width: 400px;">
        <br><br>
        <button onclick="sendMessage()" style="padding: 12px 24px;">Enviar</button>
        <p id="reply"></p>

        <script>
          async function sendMessage() {
            const message = document.getElementById("message").value;
            const reply = document.getElementById("reply");
            reply.textContent = "JARVIS está pensando...";

            try {
              const response = await fetch("/chat", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({message})
              });

              const data = await response.json();
              reply.textContent = data.reply || data.error || "No hubo respuesta";
            } catch (error) {
              reply.textContent = "Error de conexión";
            }
          }
        </script>
      </body>
    </html>
  `);
});

// Chat con IA
app.post("/chat", async (req, res) => {
  try {
    const message = req.body.message;

    if (!message) {
      return res.status(400).json({
        error: "Falta el mensaje"
      });
    }

    const response = await client.responses.create({
      model: "gpt-5.6",
      input: message
    });

    res.json({
      reply: response.output_text
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "JARVIS no pudo procesar la solicitud"
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`JARVIS funcionando en el puerto ${PORT}`);
});
