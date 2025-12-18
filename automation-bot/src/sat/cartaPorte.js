const llenarVehiculo = require('./vehiculo');
const llenarOperador = require('./operador');

async function generarCartaPorte(page, datos) {
  console.log('🚛 Generando Carta Porte');

  await llenarVehiculo(page, datos.vehiculo);
  await llenarOperador(page);

  console.log('✅ Carta Porte completada');
}

module.exports = generarCartaPorte;
