const auth = require('.');

const TABLA = 'auth'
module.exports = (injectedDatabase) =>{
    let database = injectedDatabase;
    if (!database) {
        database = require('../../../database/bd')
    }
    const insertar = (data) => {
        const authData = {
            id :data.id,
        }
        if (data.username) {
            authData.username = data.username;
        }if (data.password) {
            authData.password = data.password;
        }
        return database.insertar(TABLA,authData);
    }

    return{
        insertar,
    }
}