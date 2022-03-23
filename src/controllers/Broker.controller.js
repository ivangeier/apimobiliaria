import Broker from '../models/Broker.model.js';
import CheckFields from '../utils/CheckFields.js';

export default class BrokerController {
  static async getAllBrokers(req, res) {
    const brokers = await Broker.findAll();
    res.status(200).json({ status: 200, brokers: brokers });
  }

  static async createBroker(req, res) {
    //recupera todos os itens enviados pelo post(json)
    const {
      firstName,
      lastName,
      email,
      phone,
      cpf,
      creci,
      creciState,
      creciExp,
    } = req.body;

    //checa se todos os campos obrigatórios foram preenchidos
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !cpf ||
      !creci ||
      !creciState ||
      !creciExp
    ) {
      res
        .status(400)
        .json({ status: 400, message: 'Preencha todos os campos' });
      return;
    }

    //verifica se usuário ja esta cadastrado no banco de dados
    const isNewBroker = await Broker.findOne({ where: { cpf } });

    if (isNewBroker) {
      res
        .status(409)
        .json({ status: 409, message: 'Broker/corretor já cadastrado!' });
      return;
    }

    //verifica se o e-mail enviado possui um formato valido
    const isEmailValid = CheckFields.email(email);
    if (!isEmailValid) {
      res.status(400).json({
        status: 400,
        message: 'E-mail inválido, verifique novamente!',
      });
      return;
    }

    const broker = {
      firstName,
      lastName,
      email,
      phone,
      cpf,
      creci,
      creciState,
      creciExp,
    };

    try {
      await Broker.create(broker);
      res
        .status(201)
        .json({ status: 201, message: 'Broker/corretor criado com sucesso!' });
    } catch (error) {
      res.status(400).json({ status: 400, message: error });
    }
  }

  static async findOneBroker(req, res) {
    const { id } = req.params;

    const broker = await Broker.findOne({ where: { id } });

    if (broker) {
      res.status(200).json({ status: 200, broker });
    } else {
      res
        .status(400)
        .json({ status: 400, message: 'Broker/corretor não encontrado!' });
    }
  }

  static async editBroker(req, res) {
    const { id } = req.params;
    const {
      firstName,
      lastName,
      email,
      phone,
      cpf,
      creci,
      creciState,
      creciExp,
      isActive,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !cpf ||
      !creci ||
      !creciState ||
      !creciExp
    ) {
      res
        .status(400)
        .json({ status: 400, message: 'Preencha todos os campos' });
      return;
    }

    const isNewBroker = await Broker.findOne({ where: { cpf } });

    if (isNewBroker) {
      res.status(409).json({
        status: 409,
        message: 'Broker/corretor já cadastrado! Utilize outro CPF',
      });
      return;
    }

    const isEmailValid = CheckFields.email(email);
    if (!isEmailValid) {
      res.status(400).json({
        status: 400,
        message: 'E-mail inválido, verifique novamente!',
      });
      return;
    }

    const broker = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      cpf: cpf,
      creci: creci,
      creciState: creciState,
      creciExp: creciExp,
      isActive: isActive,
    };

    try {
      await Broker.update(broker, { where: { id } });
      res.status(201).json({
        status: 201,
        message: 'Broker/corretor alterado com sucesso!',
      });
    } catch (error) {
      res.status(400).json({ status: 400, message: error });
    }
  }

  static async deleteBroker(req, res) {
    const { id } = req.params;

    const broker = await Broker.findOne({ where: { id } });

    if (!broker) {
      res
        .status(400)
        .json({ status: 400, message: 'Broker/corretor não existe' });
      return;
    }

    try {
      await Broker.destroy({ where: { id } });
      res.status(200).json({
        status: 200,
        message: 'Broker/corretor excluído com sucesso!',
      });
    } catch (error) {
      res.status(400).json({ status: 400, erro: error });
    }
  }
}
