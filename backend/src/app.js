const express = require('express');
const routes = require('./routes');
const cors = require('cors'); // Use to not allow access from everywhere
const { errors } = require('celebrate'); // To show a better error message when use validation

const app = express();

app.use(cors());

// app.use(cors({
//     origin: "http://meuapp.com.br"
// }));

app.use(express.json()); // para poder pegar o Body no formato JSON.
app.use(routes);
app.use(errors());

module.exports = app;
