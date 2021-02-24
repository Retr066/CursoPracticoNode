const express = require('express');
const bodyParser = require('body-parser')
const config = require('../config');
const app = express();
const usuario = require('./componentes/usuario/redes')
const swaggerUI = require('swagger-ui-express')

app.use(bodyParser.json());

const swaggerDoc = require('./swagger.json');

app.use('/api/usuario',usuario);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDoc));

app.listen(config.api.port,()=>{
    console.log('Esta escuchando en el http://localhost/3000')
})