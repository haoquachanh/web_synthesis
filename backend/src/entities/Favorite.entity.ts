import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToMany } from 'typeorm';
import { User } from './User.entity'; 
import { Card } from './Card.entity'; 

@Entity()
export class Favorite {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => User, user => user.favorites)
  users: User[];

  @OneToOne(() => Card)
  @JoinColumn()
  card: Card;
}
