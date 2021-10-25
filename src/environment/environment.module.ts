import { Module } from '@nestjs/common';
import { EnvironmentService } from './environment.service';
import { EnvironmentController } from './environment.controller';
import { environmentData } from './data/environment.data';

@Module({
  controllers: [EnvironmentController],
  providers: [
    EnvironmentService,
    environmentData
  ]
})
export class EnvironmentModule { }
