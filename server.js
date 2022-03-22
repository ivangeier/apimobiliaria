import 'dotenv-safe/config.js';
import express from 'express';
import sequelize from './src/db/connection.js';
import router from './src/routes/broker.routes.js';

import Broker from './src/models/Broker.model.js';

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use('/broker', router);

sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));
