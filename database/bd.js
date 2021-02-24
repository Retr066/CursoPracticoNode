const db = {
  'user': [{ id: "1", name: "carlos" }],
};

const listar = async (tabla) => {
  return db[tabla];
};
const buscar = async(tabla, id) => {
  let coleccion = await listar(tabla);
  return coleccion.filter((item) => item.id === id)[0] || null;
};
const insertar = async(tabla, data) => {
  if (!db[tabla]) {
    db[tabla] = [];
  }
  db[coleccion].push(data);
  console.log(db);
};
const eliminar = async(tabla, id) => {
    
  return true;
};
module.exports = {
  listar,
  buscar,
  insertar,
  eliminar,
};
