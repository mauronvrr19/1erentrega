const knexProducto = require ("knex")(
    {
        client: "mysql",
        connection:{
            host : "127.0.0.1",
            port : 3306,
            user : "root",
            password : "",
            database : "ecommerce"
        },
        pool : { min: 0 , max: 10}
    }
)

const knexCarrito = require("knex")({
    client: "sqlite3",
    connection: {
        filename: "./mybase.sqlite"
    },
    useNullAsDefault: true
})

module.exports = {
    knexProducto, knexCarrito
}