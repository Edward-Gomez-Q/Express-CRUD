const express = require('express');
const app = express();
const PORT = 3000;

// Importar la carpeta API 
const actorRoutes = require('./API/actorApi');
app.use(express.json());
app.use('/api', actorRoutes);

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});