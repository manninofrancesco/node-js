import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BaseModel } from './models/BaseModel';
import { AppRepository } from './app.repository';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, AppRepository],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('get', () => {
    it('should return an array of BaseModel!"', async () => {
      let result : BaseModel[] = await appController.get();
      expect(result).toBeInstanceOf(Array<BaseModel>);
    });
  });
});
