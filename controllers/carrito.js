const { listaProductos, guardarProducto, productoborradocarro, modificarCarro,borrarTodo } = require ("../BaseDatos/carrito")

exports.agregarProductoCarro = async (req, res) => {
    let producto = req.body
    await guardarProducto(producto)
    res.send("producto guardado")
}

exports.listaProductosCarro = async (req , res) =>{
    let productos = await listaProductos()
    res.json (productos)
}

exports.borrarProductocarro = async (req, res) =>{
      const id = req.params.id;
    productoborrado  = await productoborradocarro(id)
    res.json(productoborrado);}

exports.ActualizarProductocarro = async (req, res) =>{
    let idP = req.params.id
    let dobyProducto = req.body
    let productoActualizado = await modificarCarro(idP, dobyProducto)
   res.json (productoActualizado)
}
exports.borrarCarro = async (req, res) =>{
    let producto = req.body
    await borrarTodo(producto)
    res.send("carrito vacio")
}