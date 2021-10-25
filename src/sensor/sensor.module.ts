import { Module } from '@nestjs/common';
import { SensorService } from './sensor.service';
import { SensorController } from './sensor.controller';
import { sensorData } from './data/sensor.data';

@Module({
  controllers: [SensorController],
  providers: [
    SensorService,
    sensorData
  ]
})
export class SensorModule {}
