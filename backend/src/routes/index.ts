import { Router } from 'express';
import userRouter from './user.route'; 
import cardRouter from './card.route';
import favoriteRouter from './favorite.route';
import authRouter from './auth.route';
const router = Router();

router.use('/user', userRouter); 
router.use('/card', cardRouter); 
router.use('/auth', authRouter); 
router.use('/favorite', favoriteRouter);

export default router;
