import { Router } from 'express';
import CardController from '../controllers/card.controller';

const cardRouter = Router();
const cardController = new CardController();

cardRouter.get('/all', cardController.getAllCards);

cardRouter.get('/:id', cardController.getCardById);

cardRouter.post('/', cardController.createCard);

cardRouter.put('/:id', cardController.updateCard);

cardRouter.delete('/:id', cardController.deleteCard);

export default cardRouter;
