const express = require('express');

const mongoose = require('mongoose');

const app = express()
require('./config/config')



app.use(express.urlencoded({
  extended: false
}));

app.use(require('.././serve/routes/usuarios'))
mongoose.connect('mongodb://localhost:27017/cafe', { useNewUrlParser: true, useUnifiedTopology: true },(err,res)=>{
  if(err) throw err;
  console.log('Base de datos online')
});



app.listen(process.env.PORT, () => {
  console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
})