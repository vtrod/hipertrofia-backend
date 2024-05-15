const express = require('express');
const app = express();
const port = 3001;


app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`);
});