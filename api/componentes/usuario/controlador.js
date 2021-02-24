const database = require ('../../../database/bd');
const nanoid = require('nanoid');
const bodyParser = require('body-parser');
const TABLA = 'user'
const auth = require('../auth')

module.exports = (injectedDatabase) =>{
 let database = injectedDatabase;
 if (!database) {
     database = require('../../../database/bd')
 }
    const listar = () =>{
        return database.listar(TABLA);
    }
    const buscar = (id) =>{
        return database.buscar(TABLA,id);
    }

    const insertar = async (body) =>{
      const usuario = {
          nombre:body.nombre,
          username:body.username,
      }
      if (body.id) {
        usuario.id = body.id;
      } else {
        usuario.id = nanoid();
      }
       if (body.password || body.username) {
           await auth.insertar({
               id:usuario.id,
               username:usuario.username,
               password:body.password,
           })
       }
        return database.insertar(TABLA,usuario);
    }

    const eliminar = (id) =>{
        return database.eliminar(TABLA,id);
    }


return {
    listar,
    buscar,
    insertar,
    eliminar,
};
}
