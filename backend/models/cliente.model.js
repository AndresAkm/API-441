// Importamos mongoose para la creación de los schemas
const mongoose = require('../config/connetiondb')

const schemaCliente = new mongoose.Schema({

    document: {
        type: String,
        required: [true,'El documento es obligatorio'],
        minLength: [7, 'El documento es demasiado corto'],
        kMaxLength: [10, 'El documento es demasiado largo']

    },

    nombreCompleto: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },

    fNacimiento: {
        type: Date,
        max: Date.now
    }
})

const cliente = mongoose.model('Clientes', schemaCliente)
module.exports = cliente