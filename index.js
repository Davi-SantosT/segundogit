const express = require("express");

const app = express();
const PORT = 8890;

app.use((req, res, next) => {
    console.log("Referer recebido:", req.headers.referer || "Nenhum referer enviado");
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

app.get("/", (req, res) => {
    res.json({ message: "API funcionando!", referer: req.headers.referer || "Nenhum referer enviado" });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});