const BaseRepository = require("../repositories/baseRepository");

class AppController {
    constructor() { }

    async get() {
        return await new BaseRepository().get();
    }

    async insert(input) {
        return await new BaseRepository().insert(input);
    }

    delete() {
        return "Delete";
    }
}

module.exports = AppController;