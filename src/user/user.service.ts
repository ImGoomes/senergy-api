import { Injectable } from '@nestjs/common';
import { UserData } from 'src/user/data/user';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class UserService {
  constructor(private data: UserData) { }

  findLogin(user: User): User[] {
    return this.data.dataUser.filter(x => x.email === user.email && x.password === user.password);
  }

  findById(id: number): User {
    return this.data.dataUser.filter(x => x.id === id)[0];
  }
}
