import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserData } from './user/data/user';
import { EnvironmentModule } from './environment/environment.module';
import { UserModule } from './user/user.module';
import { SensorModule } from './sensor/sensor.module';

@Module({
  imports: [
    UserModule,
    EnvironmentModule,
    SensorModule
  ]
})
export class AppModule { }
