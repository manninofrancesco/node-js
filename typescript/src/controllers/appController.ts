import { BaseModel } from "../models/BaseModel";
import { BaseRepository } from "../repositories/BaseRepository";

export class AppController {
    constructor() { }

    async get() {
        return await new BaseRepository().get();
    }

    async insert(input: BaseModel) {
        return await new BaseRepository().insert(input);
    }

    async delete() {
        return await new BaseRepository().delete();
    }
}