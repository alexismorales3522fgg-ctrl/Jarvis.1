const express = require("express");
const OpenAI = require("openai");

const app = express();

app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

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
