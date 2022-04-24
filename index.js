const express = require ("express")
const app = express()
const routerProducto = express.Router();
const routerCarrito = express.Router();
const {
    listarProductos, 
    agregarProductos, 
    listaPorId, 
    ActualizarProducto,
    borrarProducto} = require("./controllers/producto")
const {
    listaProductosCarro, 
    agregarProductoCarro,
    borrarProductocarro,
    ActualizarProductocarro,
    borrarCarro
} = require ("./controllers/carrito")

app.use("./api/producto", routerProducto)
app.use("./api/carrito", routerCarrito)

routerProducto.use(express.json())
routerCarrito.use(express.json())

app.use(express.urlencoded({extended: true}));

// productos
routerProducto.get("/listar",listarProductos)
routerProducto.post("/guardar",agregarProductos)
routerProducto.get("/listar/:id",listaPorId)
routerProducto.put("/modificar/:id", ActualizarProducto)
routerProducto.delete("/borrar/:id", borrarProducto)

// carrito
routerCarrito.get("/listar",listaProductosCarro )
routerCarrito.post("/guardar",agregarProductoCarro)
routerCarrito.delete("/borrar/:id", borrarProductocarro)
routerCarrito.put("/modificar/:id", ActualizarProductocarro)
routerCarrito.delete("/borrar", borrarCarro)

const PORT = 8080
const server = app.listen(PORT,() => {
    console.log(`servidor escuchando en el puerto ${server.address().PORT}`)
})
server.on("error", error => console.log(`error en el servidor ${error }`))