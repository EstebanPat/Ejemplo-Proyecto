
//Importacion de librerias
const bodyParser = require("body-parser")
const express = require("express")
const addressRoutes = require("./controllers/address")
const userRoutes = require("./routes/user")
const categoryRoutes = require("./routes/category")
const serviceRoutes = require("./routes/service")
const clientRoutes = require("./routes/client")

//Importacion de archivos
const { API_VERSION } = require('./config.js')
PORT = 3000

const app = express()

//Visualizacion del contenido del endpoint o envio del contenido
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Configure static folder

app.use(express.static("uploads"));
app.use('/uploads', express.static('uploads'));

//Configuracion cabeceras HTTP
app.use(`/api/${API_VERSION}/addresses`, addressRoutes)
app.use(`/api/${API_VERSION}/users`, userRoutes)
app.use(`/api/${API_VERSION}/categories`, categoryRoutes)
app.use(`/api/${API_VERSION}/services`, serviceRoutes)
app.use(`/api/${API_VERSION}/clients`, clientRoutes)

/* 
    get = v1/addresses
    post = v1/addresses/new-address
*/
module.exports = app