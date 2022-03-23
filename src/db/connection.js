import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  host: './src/db/database.sqlite',
});

async function conectar() {
  try {
    sequelize.authenticate();
    console.log('Banco conectado');
  } catch (error) {
    console.log(`Não foi possível conectar: ${err}`);
  }
}

conectar();

export default sequelize;
