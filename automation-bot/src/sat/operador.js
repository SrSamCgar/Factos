const sleep = require('../utils/sleep');

async function llenarOperador(page) {
  await page.type('#268textbox381', 'SLP009801');

  await page.click('#268checkbox385');
  await sleep(2000);

  await page.type('#268textboxautocomplete390', 'Mexico');
  await page.type('#268textbox391', 'San Luis Potosi');
  await page.type('#268textbox394', '78370');
  await page.type('#268textbox395', 'Progreso');
  await page.type('#268textbox398', 'San Luis Potosi');
  await page.type('#268textbox401', 'San Luis Potosi');

  await page.click('#guardarEditar2680015');
}

module.exports = llenarOperador;
