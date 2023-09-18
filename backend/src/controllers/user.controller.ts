import { Request, Response } from 'express';
import { User } from '../entities/User.entity';
import { Role } from '../entities/Role.entity';
import { dataSource } from '../datasource';

class UserController {
  async getAllUsers(req: Request, res: Response) {
    try {

      const userRepository = dataSource.getRepository(User);
  
      const users = await userRepository
        .createQueryBuilder('user')
        .leftJoinAndSelect('user.role', 'role')
        .getMany()
      res.status(200).json({
        err: 0,
        mes: users.length>0 ? "Got all users." : "No have any users.",
        data: users
      })
    } catch (error) {
      console.log(error)
      res.status(500).json({
        err: -1,
        mes: "Iternal Error",
      });
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const { id } = req.params;
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async createUser(req: Request, res: Response) {
    try {
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

export default UserController;
