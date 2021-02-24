const express = require('express');
const router = express.Router();
const responder = require('../../../red/responder')
const controlador = require('./index');

//Routes
router.get('/',listar);
router.get('/:id',buscar);
router.post('/',insertar);
router.put('/',eliminar);


function listar (req,res) {
       controlador.listar()
    .then((lista)=>{
        responder.success(req,res,lista,200);
    })
    .catch(err=>{responder.error(req,res,err,message,500)});
   
};
function buscar (req,res) {
     controlador.buscar(req.params.id)
     .then((usuario)=>{
        responder.success(req,res,usuario,200);
     })
     .catch(err=>{responder.error(req,res,err,message,500)});
};

function insertar (req,res) {
    controlador.insertar(req.body)
    .then((usuario)=>{
        responder.success(req,res,usuario,201);
    })
    .catch(err=>{responder.error(req,res,err,500)});
};


function eliminar (req,res) {
     controlador.eliminar()
     .then((usuario)=>{
        responder.success(req,res,usuario,200);
     })
     .catch(err=>{responder.error(req,res,err,message,500)});
};

module.exports = router;