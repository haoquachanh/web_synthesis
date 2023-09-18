import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Card } from './Card.entity';

@Entity({name: 'cardimage'})
export class CardImage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  linkimg: string;

  @OneToOne(() => Card, (card) => card.image)
  card: Card;
}
