const ctrl = require('./controlador')
const database = require('../../../database/bd');

module.exports = ctrl(database);