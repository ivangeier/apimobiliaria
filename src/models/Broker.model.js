import sequelize from '../db/connection.js';
import { DataTypes } from 'sequelize';

const Broker = sequelize.define('broker', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        message: 'Por favor, preencha seu nome!',
      },
    },
  },

  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        message: 'Por favor, preencha seu nome!',
      },
    },
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { message: 'O preenchimento do e-mail é obrigatório!' },
      isEmail: { message: 'Informe um e-mail válido para prosseguir.' },
    },
  },

  phone: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isAlphanumeric: {
        message:
          'Por favor, complete este campo utilizando apenas os números do seu telefone.',
      },
    },
  },

  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        message: 'Por favor, informe os números do seu CPF.',
      },
      isAlphanumeric: {
        message:
          'Por favor, complete este campo utilizando apenas os números do seu CPF.',
      },
      len: {
        args: [11, 11],
        message: 'Insira um número de CPF válido.',
      },
    },
  },

  creci: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        message: 'Este campo obrigatório! Informe o número do seu CRECI',
      },
    },
  },

  creciState: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        message: 'Este campo obrigatório! Informe o número do seu CRECI',
      },
      len: {
        args: [2, 2],
        message: 'Insira a abreviação do seu estado (ex.: SP).',
      },
    },
  },

  creciExp: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      notNull: {
        message: 'Este campo obrigatório! Informe a validade do seu CRECI',
      },
      isDate: true,
    },
  },

  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 1,
  },
});

export default Broker;
