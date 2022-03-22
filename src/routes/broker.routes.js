import express from 'express';
import BrokerController from '../controllers/Broker.controller.js';
import Broker from '../models/Broker.model.js';

const router = express.Router();

router.get('/all', BrokerController.getAllBrokers);
router.get('/:id', BrokerController.findOneBroker);

router.post('/create', BrokerController.createBroker);

router.put('/update/:id', BrokerController.editBroker);

router.delete('/delete/:id', BrokerController.deleteBroker);

export default router;
