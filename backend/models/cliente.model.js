// Importamos mongoose para la creación de los schemas
const mongoose = require('../config/connetiondb')

const schemaCliente = new mongoose.Schema({

    documento: {
        type: String,
        required: [true,'El documento es obligatorio'],
        minLength: [7, 'El documento es demasiado corto'],
        maxLength: [10, 'El documento es demasiado largo']

    },

    nombreCompleto: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },

    fNacimiento: {
        type: String,
        required: [true,'El documento es obligatorio'],
        minLength: 10,
        maxLength: 10

    }

}, {
    versionKey: false
})

const cliente = mongoose.model('Clientes', schemaCliente)
module.exports = cliente