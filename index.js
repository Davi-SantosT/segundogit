const express = require("express");  
const app = express();  

const PORT = 8884;  

app.use((req, res, next) => {  
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();  
});  

app.get("/", (req, res) => {  
    res.send("Servidor rodando na porta 8884! 🚀");  
});  

app.listen(PORT, () => {  
    console.log(`Servidor iniciado em http://localhost:${PORT}`);  
});
