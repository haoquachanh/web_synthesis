  import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
  import { Role } from './Role.entity';
  import { Favorite } from './Favorite.entity';
  import { Length, IsNotEmpty  } from "class-validator"
  import * as bcrypt from "bcryptjs";
import { dataSource } from '../datasource';

  @Entity("user")
  export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Length(6,20)
    username: string;

    @Column()
    @Length(4.100)
    password: string;

    @Column()
    @Length(4.100)
    fullname: string;

    @Column()
    email: string;

    @Column()
    avt: string;

    @ManyToOne(() => Role, role => role.users)
    @IsNotEmpty()
    role: Role;

    @ManyToMany(() => Favorite)
    @JoinTable()
    favorites: Favorite[];


    //function

    hashPassword() {
      this.password = bcrypt.hashSync(this.password,7);
    }

    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
      return bcrypt.compareSync(unencryptedPassword, this.password);
    }
    constructor(username: string, password: string, fullname: string, email: string, avt: string,){
      this.password=password;
      this.fullname=fullname;
      this.email=email;
      this.avt=avt;
      this.username=username;
    }

  }
