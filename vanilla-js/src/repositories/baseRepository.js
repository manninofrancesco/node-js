
const pg = require("pg");

class BaseRepository {
    constructor() {
        this.config = {
            host: 'localhost',
            // Do not hard code your username and password.
            // Consider using Node environment variables.
            user: 'postgres',
            password: 'standard',
            database: 'Test',
            port: 5432,
            ssl: false
        };
    }

    async get() {
        const client = new pg.Client(this.config)
        await client.connect()

        const response = await client.query('SELECT * FROM "TestTable"')
        await client.end()

        return response.rows;
    }

    async insert(input) {
        const client = new pg.Client(this.config)
        await client.connect()

        await client.query(`INSERT INTO "TestTable" VALUES (${input});`)
        await client.end()
    }
}

module.exports = BaseRepository;