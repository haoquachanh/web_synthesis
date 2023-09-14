import { Router } from 'express';
import userRouter from './user.route'; 
import cardRouter from './card.route';

const router = Router();

router.use('/user', userRouter); 
router.use('/card', cardRouter); 

export default router;
