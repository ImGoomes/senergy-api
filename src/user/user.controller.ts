import { Controller, Get, Param, Req } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly appService: UserService) { }

  @Get()
  async login(@Req() user: User): Promise<User[]> {
    return this.appService.findLogin(user);
  }

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<User> {
    return this.appService.findById(+id);
  }
}
