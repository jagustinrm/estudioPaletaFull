const express = require('express');
const cors = require('cors');
const productosRouter = require('./api/routes/products');
const { crearTablaProductos } = require('./db');


const app = express();
const port = 3000;

// Middlewares
app.use(express.json());
app.use(cors());

// Rutas
app.use('/api', productosRouter);

crearTablaProductos();

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Error interno del servidor' });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
