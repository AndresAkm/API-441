const exp = require('express')
const app = exp()
require('dotenv').config();

const logger = require('morgan')
app.use(logger('dev'));

app.use(exp.urlencoded({extended: false}));
app.use(exp.json())

const modelCliente = require('./backend/models/cliente.model')

app.get('/clientes',async(req,res)=>{
    let listaCliente = await modelCliente.find();
    if(listaCliente)
        res.status(200).json(listaCliente);
    else
        res.status(404).json({error:'No se encontraron productos'})
});

app.get('/clientes/:ref',async(req,res)=>{
    let listaCliente = await modelCliente.findOne({_id:req.params.ref});
    if(listaCliente)
        res.status(200).json(listaCliente);
    else
        res.status(404).json({error:'No se encontraron productos'})
});

app.post('/clientes', async (req, res) => {

    const nuevoCliente = {
        documento: req.body.doc,
        nombreCompleto: req.body.nc,
        fNacimiento: req.body.fn
    }

    let insertarCliente = await modelCliente.create(nuevoCliente)
    if(insertarCliente)
        res.status(200).json({Mensaje: "Registro exitoso"})
    else
        res.status(400),json({Mensaje: "Se presentó un error"})
})

app.listen(process.env.PORT,( )=>{
    console.log('servidor en linea')
});