import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserData } from './data/user';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    UserData
  ]
})
export class UserModule {}
