const { knexCarrito } = require ("./config")

knexCarrito.schema.dropTableIfExists ("carrito")
.finally(()=> {
     return knexCarrito.schema.createTable("carrito", table =>{
         table.increments("id").primary()
         table.string ("nombre", 50).notNullable()
         table.string("codigo", 10).notNullable()
         table.float ("precio")
         table.integer("stock")
         table.string ("timestamp")
         table.string("url")
         table.string("descripcion")

     })
}
)

exports.guardarProducto = producto =>{
knexCarrito("carrito").insert(producto)
.then(art => art)
.catch(err => {console.log(err); throw err})}

exports.listaProductos = ()=> {
knexCarrito.from("carrito").select("*")
.then(rows => {
    return rows
})
.catch(err => {console.log(err);throw err}) }

exports.productoborradocarro = ()=>{
    knexProducto.from("carrito").where("id", "=",id).delete(id)
.then(prod => prod)
.catch(err => {console.log(err); throw err})
} 
exports.modificarCarro = ()=>{
    knexProducto.from("carrito").where("id", "=" ,idP).update(idP, bodyProducto)
    .then(prod => prod)
    .catch(err => {console.log(err); throw err})}


exports.borrarTodo= ()=>{
    knexProducto.from("carrito").delete("*")
    .then(rows => {
        return rows
    })
    .catch(err => {console.log(err);throw err}) }

