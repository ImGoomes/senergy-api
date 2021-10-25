import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserData } from './user/data/user';

@Module({
  imports: [],
  controllers: [
    UserController
  ],
  providers: [
    UserService,
    UserData
  ],
})
export class AppModule { }
