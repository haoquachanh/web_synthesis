import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { CardImage } from './CardImage.entities';
import { Favorite } from './Favorite.entities';

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  effect: string;

  @Column({ nullable: true })
  atk: number;

  @Column({ nullable: true })
  def: number;

  @Column()
  info: string;

  @Column({ nullable: true })
  lvl: number;

  @Column()
  rarity: string;

  @Column()
  buff: number;

  @OneToOne(() => CardImage)
  @JoinColumn()
  image: CardImage;

  @OneToOne(() => Favorite)
  @JoinColumn()
  favorite: Favorite;
}
