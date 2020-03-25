const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());

// app.use(cors({
//     origin: "http://meuapp.com.br"
// }));

app.use(express.json()); // para poder pegar o Body no formato JSON.

app.use(routes);

app.listen(3333);