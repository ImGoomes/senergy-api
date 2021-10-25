import { Injectable } from '@nestjs/common';
import { environmentData } from './data/environment.data';
import { Environment } from './entities/environment.entity';

@Injectable()
export class EnvironmentService {
  constructor(private data: environmentData) { }

  findAll(): Environment[] {
    return this.data.dataUser;
  }

  findById(id: number): Environment {
    return this.data.dataUser.filter(x => x.id === id)[0];
  }
}
