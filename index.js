const exp = require('express')
const app = exp()
require('dotenv').config();


const logger = require('morgan')
app.use(logger('dev'));

app.use(exp.urlencoded({extended: false}));
app.use(exp.json())

app.listen(process.env.PORT, () => {
    console.log('Servidor en linea')
});

const modeloCliente = require('./backend/models/cliente.model')

app.get('/clientes', async (req, res) => {
    let listaCliente = await modeloCliente.find()
    console.log(listaCliente)
});