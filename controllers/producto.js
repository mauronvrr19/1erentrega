const {listarProductos, guardarProducto, getProductById, modificar, productoborrado} = require ("../BaseDatos/producto")


exports.agregarProductos = async (req, res) => {
let producto = req.body
await guardarProducto(producto)
res.send("producto guardado")
} 

exports.listarProductos = async (req , res) => {
    let productos = await listarProductos()
    res.json(productos)
}

exports.listaPorId = async (req, res) => {
    let idP = req.params.id
    let producto = await getProductById(idP)
    res.json (producto)
}

exports.ActualizarProducto = async (req, res) => {
    let idP = req.params.id
    let dobyProducto = req.body
    let productoActualizado = await modificar(idP, dobyProducto)
   res.json (productoActualizado)
}

exports.borrarProducto = async (req, res) => {
    const id = req.params.id;
    productoborrado  = await productoborrado(id)
    res.json(productoborrado);
}