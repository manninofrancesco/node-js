import { Controller, Get, Redirect, Res } from '@nestjs/common';
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
  @Redirect()
  async insert(@Res() res: Response) {
    let testModel: BaseModel = new BaseModel(Math.floor(Math.random() * 9999999));
    await this.appService.insert(testModel);
    return { url: "/get", statusCode: 302 };
  }

  @Get("/delete")
  @Redirect()
  async delete() {
    await this.appService.delete();
    return { url: "/get", statusCode: 302 };
  }
}