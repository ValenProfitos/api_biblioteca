const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Biblioteca", {
});

const LibroSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    autor: { type: String, required: true }
}, { collection: 'libros' });

const Libro = mongoose.model("Libro", LibroSchema);

module.exports = Libro;