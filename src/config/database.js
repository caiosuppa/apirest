const mongoose = require('mongoose');

const uri = "mongodb+srv://caiosuppa0902_db_user:oEsZcUDIi28FC2tK@cluster0.xesreao.mongodb.net/cadastro?retryWrites=true&w=majority&appName=Cluster0";

const connectDatabase = async () => {
  try {
    await mongoose.connect(uri);
    console.log(' Conectado ao banco correto (cadastro)!');
  } catch (err) {
    console.error(' Erro ao conectar:', err.message);
    throw err;
  }
};

module.exports = connectDatabase;