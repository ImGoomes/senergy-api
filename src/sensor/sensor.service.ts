import { Injectable } from '@nestjs/common';
import { sensorData } from './data/sensor.data';
import { Sensor } from './entities/sensor.entity';

@Injectable()
export class SensorService {
  constructor(private data: sensorData) { }

  findAll(): Sensor[] {
    return this.data.dataUser;
  }

  findById(id: number): Sensor {
    return this.data.dataUser.filter(x => x.id === id)[0];
  }
}
