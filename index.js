const exp = require('express')
const app = exp()
require('dotenv').config();

const logger = require('morgan')
app.use(logger('dev'));

app.use(exp.urlencoded({ extended: false }));
app.use(exp.json())

const modelCliente = require('./backend/models/cliente.model')

app.get('/clientes', async (req, res) => {
    let listaCliente = await modelCliente.find();
    if (listaCliente)
        res.status(200).json(listaCliente);
    else
        res.status(404).json({ error: 'No se encontraron productos' })
});

app.get('/clientes/:id', async (req, res) => {
    let listaCliente = await modelCliente.findOne({ _id: req.params.id });
    if (listaCliente)
        res.status(200).json(listaCliente);
    else
        res.status(404).json({ error: 'No se encontraron productos' })
});

app.post('/clientes', async (req, res) => {

    const nuevoCliente = {
        documento: req.body.doc,
        nombreCompleto: req.body.nc,
        fNacimiento: req.body.fn
    }

    let insertarCliente = await modelCliente.create(nuevoCliente)
    if (insertarCliente)
        res.status(200).json({ Mensaje: "Registro exitoso" })
    else
        res.status(400), json({ Mensaje: "Se presentó un error" })
})

app.put('/clientes/:id', async (req, res) => {
    const clienteEditado = {
        documento: req.body.doc,
        nombreCompleto: req.body.nc,
        fNacimiento: req.body.fn
    };

    let eliminarProducto = await modelCliente.findOneAndUpdate({ _id: req.params.id }, clienteEditado);
    if (eliminarProducto)
        res.status(200).json({ "mensaje": "actualización exitosa" });
    else
        res.status(404).json({ "mensaje": "Se presentó un error" });
});

app.delete('/clientes/:id', async (req, res) => {

    let eliminacion = await modelCliente.findOneAndDelete({ _id: req.params.id });

    if (eliminacion)
        res.status(200).json({ "mensaje": "eliminacion exitosa" });
    else
        res.status(404).json({ "mensaje": "Se presentó un error" });
});

const modelProductos = require("./backend/models/productos.model")

app.get('/productos', async (req, res) => {
    let listarProductos = await modelProductos.find()
    if (listarProductos)
        res.status(200).json(listarProductos)
    else
        res.status(404).json({ "Error": "No se encontraron productos registrados" })
})

app.get('/productos/:id', async (req, res) => {
    let listarProductosPorId = await modelProductos.findOne({ _id: req.params.id })
    if (listarProductosPorId)
        res.status(200).json(listarProductosPorId)
    else
        res.status(404).json({ "error": "No se encontró este producto" })
})

app.post('/productos', async (req, res) => {
    let nuevoProducto = {
        nombre: req.body.name,
        contenido: req.body.cont,
        disponible: req.body.avai
    }

    let agregarProducto = await modelProductos.create(nuevoProducto)
    if (agregarProducto)
        res.status(200).json({"Mensaje":"Producto agregado correctamente"})
    else
        res.status(404).json({"Mensaje":"No se pudo agregar el producto"})
})

app.put('/productos/:id', async (req, res) => {
    let productoEditado = {
        nombre: req.body.name,
        contenido: req.body.cont,
        disponible: req.body.avai
    }

    let eliminarProducto = await modelProductos.findOneAndUpdate({_id: req.params.id}, productoEditado)
    if (eliminarProducto)
        res.status(200).json({"Mensaje":"Producto actualizado correctamente"})
    else
        res.status(404).json({"Mensaje":"No se pudo actualizar el producto"})

})

app.delete('/productos/:id', async (req, res) => {

    let eliminarProducto = await modelProductos.findOneAndDelete({_id: req.params.id})
    if (eliminarProducto)
        res.status(200).json({"Mensaje":"Producto eliminado correctamente"})
    else
        res.status(404).json({"Mensaje":"No se pudo eliminar el producto"})

})

app.listen(process.env.PORT, () => {
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}...`)
});