const mongoose = require('mongoose');

const pessoaSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
      trim: true,
    },
    curso: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    versionKey: false,
  }
  
);

const Pessoa = mongoose.model('Pessoa', pessoaSchema, 'pessoas');


module.exports = Pessoa;