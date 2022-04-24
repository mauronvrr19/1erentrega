const {knexProducto} = require ("./config")

// [{
//     "id" : 1 ,
//     "nombre" : "Escuadra",
//     "codigo" : 1234,
//     "precio" : 123.45,
//     "stock" : 10,
//     "timestamp" : "x",
//     "url" : "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
//     "descripcion" : " marca pizzaro, buena medida"
//     }]
exports.guardarProducto = producto =>{
knexProducto ("articulo").insert(producto)
.then(art => art)
.catch(err =>{console.log(err); throw err})}

exports.listarProductos = () => {
knexProducto.from("articulos").select("*")
.then(rows =>{
    return rows
})
.catch(err => {console.log(err);throw err})}

exports.getProductById = () => {
knexProducto.from("articulos").select("id")
.then(rows =>{
    return rows
})
.catch(err => {console.log(err);throw err})}

exports.modificar = (idP, bodyProducto)=>{
knexProducto.from("articulo").where("id", "=" ,idP).update(idP, bodyProducto)
.then(prod => prod)
.catch(err => {console.log(err); throw err})}

exports.productoborrado = (id) =>{
knexProducto.from("articulos").where("id", "=",id).delete(id)
.then(prod => prod)
.catch(err => {console.log(err); throw err})}


