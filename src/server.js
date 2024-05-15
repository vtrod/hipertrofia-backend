const express = require('express');
const routes = require('./routes');
const port = 3001;
const cors = require('cors');



const app = express();
app.use(cors({
  origin: 'http://localhost:8083' // Permitir apenas essa origem
}));
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(routes);




app.listen(port, () => {
  console.log(`O servidor está usando a porta ${port}`);
});