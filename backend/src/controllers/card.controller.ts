import { Request, Response } from 'express';
import { Card } from '../entities/Card.entities';
import { CardImage } from '../entities/CardImage.entities';
import { connectToDatabase } from '../connection';

class CardController {
  async getAllCards(req: Request, res: Response) {
    try {
      const connection = await connectToDatabase(); 

      const cardRepository = connection.getRepository(Card);
  
      const cards = await cardRepository
        .createQueryBuilder('card')
        .leftJoinAndSelect('card.image', 'cardimage')
        .getMany()
      res.status(200).json({
        err: 0,
        mes: cards.length>0 ? "Got all cards." : "No have any cards.",
        data: cards
      })
    } 
    catch (error) {
      res.status(500).json({
        err: -1,
        mes: "Iternal Error",
      });
    }
  }

  async getCardById(req: Request, res: Response) {
    try {
      const { id } = req.params;
    } 
    catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async createCard(req: Request, res: Response) {
    try {
      const connection = await connectToDatabase()
      const cardRepository = connection.getRepository(Card);
      const cardImageRepository = connection.getRepository(CardImage);
  
      //Create card image first
      const cardImage = new CardImage();
      //need a middleware upload card image and return its link
      cardImage.linkimg = "link_return_by_middleware_upload_card_image";
      await cardImageRepository.save(cardImage);
  
      //Create card
      const newCard = cardRepository.create({
        ...req.body,
        image: cardImage,
      });
      await cardRepository.save(newCard);
  
      res.status(201).json({
        err: 0,
        mes: 'Created successfully',
      });
    } catch (error) {
      console.error('Lỗi khi tạo lá bài:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async updateCard(req: Request, res: Response) {
    try {
      const { id } = req.params;
    } 
    catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async deleteCard(req: Request, res: Response) {
    try {
      const { id } = req.params;
    } 
    catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

export default CardController;
