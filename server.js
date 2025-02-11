const express = require("express");

const app = express();
const PORT = 8080;

console.log("🔄 Intentando iniciar el servidor...");

app.use(express.json());

app.get("/", (req, res) => {
    console.log("📢 Se recibió una petición en /");
    res.send("Servidor funcionando correctamente");
});

app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});

// Mensaje de prueba al final
console.log("🟢 El código de server.js se ejecutó completamente.");
