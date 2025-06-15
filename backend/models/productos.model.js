// Importamos mongoose para la creación de los schemas
const mongoose = require('../config/connetiondb')

const schemaProductos = new mongoose.Schema({

    nombre: {
        type: String,
        required: [true,'El documento es obligatorio']

    },

    contenido: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },

    disponible: {
        type: Boolean,
        default: true,
        required: [true,'El documento es obligatorio'],
        minLength: 10,
        maxLength: 10

    }

}, {
    versionKey: false
})

const productos = mongoose.model('Productos', schemaProductos)
module.exports = productos