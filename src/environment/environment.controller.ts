import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Environment } from './entities/environment.entity';
import { EnvironmentService } from './environment.service';

@Controller('environment')
export class EnvironmentController {
  constructor(private readonly environmentService: EnvironmentService) {}

  @Get()
  findAll(){
    return this.environmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.environmentService.findById(+id);
  }

}
