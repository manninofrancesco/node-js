import { Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';
import { BaseModel } from './models/BaseModel';

@Injectable()
export class AppService {
  constructor(private readonly appRepository: AppRepository) { }

  async get(): Promise<BaseModel[]> {
    return await this.appRepository.get();
  }

  async insert(input: BaseModel) {
    return await this.appRepository.insert(input);
  }

  async delete() {
    return await this.appRepository.delete();
  }
}
