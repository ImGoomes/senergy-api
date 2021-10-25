import { Controller, Get, Param, Req } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly appService: UserService) { }

  @Get()
  login(@Req() user: User) {
    return this.appService.findLogin(user);
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.appService.findById(+id);
  }
}
