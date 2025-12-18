async function llenarVehiculo(page, vehiculo) {
  await page.select('#268select222', 'C3R3');
  await page.type('#268textbox225', vehiculo.placas);
  await page.select('#268select223', vehiculo.modelo);
}

module.exports = llenarVehiculo;
