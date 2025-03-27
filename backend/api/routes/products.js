const express = require('express');
const router = express.Router();
const { pool } = require('../../db');

// Obtener todos los productos
router.get('/productos', async (req, res) => {
  try {
    const resultados = await pool.query('SELECT * FROM productos');
    res.json(resultados.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching products' });
  }
});

// Crear un producto
router.post('/productos', async (req, res) => {
  try {
    const { name, description, price, img, category, likes } = req.body;
    const resultado = await pool.query(
      'INSERT INTO productos (name, description, price, img, category, likes) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [name, description, price, img, category, likes]
    );
    res.json(resultado.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating product' });
  }
});

// Eliminar un producto por id
router.delete('/productos/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);  // Convertir a número
    if (isNaN(id)) {  // Validación de id
      return res.status(400).json({ message: 'Invalid ID' });
    }
    
    // Ejecutar la consulta
    const respuesta = await pool.query('DELETE FROM productos WHERE id = $1', [id]);

    // Verificar si se eliminó algún producto
    if (respuesta.rowCount === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting product' });
  }
});

// Crear productos en bulk
router.post('/productos/bulk', async (req, res) => {
  try {
    // Recibir un array de productos en el body
    const productos = req.body;  // Supone que el cuerpo contiene un array de productos
    
    // Verificar si el array no está vacío
    if (!productos || productos.length === 0) {
      return res.status(400).json({ message: 'You must send at least one product' });
    }

    // Construir la consulta para insertar múltiples productos
    const valores = productos.map(producto => 
      `('${producto.name}', '${producto.description}', ${producto.price}, '${producto.img}', '${producto.category}', ${producto.likes})`
    ).join(", ");  // Unir todos los valores en una sola cadena

    // Realizar la consulta de inserción
    const resultado = await pool.query(`
      INSERT INTO productos (name, description, price, img, category, likes) 
      VALUES ${valores} 
      RETURNING *
    `);

    // Devolver los productos insertados
    res.status(201).json({
      message: 'Products created successfully',
      products: resultado.rows
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating products' });
  }
});

module.exports = router;
