const express = require('express');

const app = express();
const PORT = process.env.PORT || 4001;

app.get('/', (req, res) => {
  res.send('Factos bot activo');
});

app.listen(PORT, () => {
  console.log('Factos bot iniciado');
  console.log(`🤖 Automation bot en puerto ${PORT}`);
});
