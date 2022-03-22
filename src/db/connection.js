import { Sequelize } from 'sequelize';
import 'dotenv-safe/config.js';

const sequelize = new Sequelize(process.env.DATABASE_URL);

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
