import { Injectable } from '@nestjs/common';
import { UserData } from 'src/user/data/user';
import { User } from 'src/user/models/user';

@Injectable()
export class UserService {
  constructor(private data: UserData) { }

  getLogin(user: User): User[] {
    return this.data.dataUser.filter(x => x.email === user.email && x.password === user.password);
  }

  getUserById(id: number): User {
    return this.data.dataUser.filter(x => x.id === id)[0];
  }
}
