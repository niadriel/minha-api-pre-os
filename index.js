const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    mensagem: "Minha API de preços está funcionando!"
  });
});

app.get("/produtos", (req, res) => {
  res.json([
    {
      nome: "Tênis esportivo",
      loja: "Loja de exemplo",
      preco: 199.90
    },
    {
      nome: "Camiseta",
      loja: "Loja de exemplo",
      preco: 49.90
    }
  ]);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("API funcionando na porta " + PORT);
});
