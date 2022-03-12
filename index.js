import express from 'express';

import sequelize from './db/connection.js';

const port = process.env.PORT || 3000;

const app = express();

sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  })
  .catch((err) => console.log(err));
