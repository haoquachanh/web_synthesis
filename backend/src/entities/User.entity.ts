  import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
  import { Role } from './Role.entity';
  import { Favorite } from './Favorite.entity';

  @Entity("user")
  export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @ManyToOne(() => Role, role => role.users)
    role: Role;

    @ManyToMany(() => Favorite)
    @JoinTable()
    favorites: Favorite[];
  }
