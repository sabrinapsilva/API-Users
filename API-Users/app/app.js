const express = require('express');
const logger = require('morgan');
const db = require('./DB/database');
const users = require('./routes/users');
const app = express();
const PORT = 4000; 

app.use(logger('dev')); 
app.use(express.json());
app.use('/api/users', users);

db();
app.listen(PORT, function () {
  console.log(`Servidor rodando na porta ${PORT}`);
})

module.exports = app;
