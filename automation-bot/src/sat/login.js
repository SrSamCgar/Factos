async function esperarLoginSAT(page) {
  console.log('⏳ Esperando login manual SAT...');
  await page.waitForFunction(
    () => location.href.includes('GenerarCfd.aspx'),
    { timeout: 180000 }
  );
  console.log('✅ Login SAT detectado');
}

module.exports = esperarLoginSAT;
