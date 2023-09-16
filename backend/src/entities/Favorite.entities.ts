import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToMany } from 'typeorm';
import { User } from './User.entities'; 
import { Card } from './Card.entities'; 

@Entity()
export class Favorite {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => User)
  users: User[];

  @OneToOne(() => Card)
  @JoinColumn()
  card: Card;
}
