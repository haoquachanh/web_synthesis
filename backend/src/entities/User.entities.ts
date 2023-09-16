import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Role } from './Role.entities';
import { Favorite } from './Favorite.entities';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @ManyToOne(() => Role, role => role.users)
  role: Role;

  @ManyToMany(() => Favorite, { cascade: true })
  @JoinTable()
  favorites: Favorite[];
}
