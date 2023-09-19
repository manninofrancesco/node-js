import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { BaseModel } from './models/BaseModel';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("/")
  start(): string {
    return "Basic Crud App";
  }

  @Get("/get")
  async get(): Promise<BaseModel[]> {
    return await this.appService.get();
  }

  @Get("/insert")
  async insert() {
    let testModel: BaseModel = new BaseModel(Math.floor(Math.random() * 9999999));
    return await this.appService.insert(testModel);
  }

  @Get("/delete")
  async delete() {
    return await this.appService.delete();
  }
}