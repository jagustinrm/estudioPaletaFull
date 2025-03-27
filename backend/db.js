const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const crearTablaProductos = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS productos (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        price DECIMAL(10, 2) NOT NULL,
        img VARCHAR(255),
        category VARCHAR(255),
        likes BOOLEAN
      );
    `);
    console.log('Tabla productos creada con éxito');
  } catch (err) {
    console.error('Error al crear la tabla productos:', err);
  }
};

// Exportar ambos correctamente
module.exports = { pool, crearTablaProductos };
