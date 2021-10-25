import { Controller, Get, Req } from '@nestjs/common';
import { User } from 'src/user/models/user';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get()
  async login(@Req() user: User): Promise<User[]> {
    return this.appService.getLogin(user);
  }

  @Get(':id')
  async getUser(@Req() id: number): Promise<User> {
    return this.appService.getUserById(id);
  }
}
