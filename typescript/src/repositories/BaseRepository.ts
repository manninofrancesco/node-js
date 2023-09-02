import pg from "pg";

export class BaseRepository {
    config: {
        host: string;
        user: string;
        password: string;
        database: string;
        port: number;
        ssl: boolean;
    };

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

    async insert(input: Number) {
        let query: string = `INSERT INTO "TestTable" VALUES (${input});`;
        await this.ExecuteQuery(query);
    }

    async delete() {
        let query: string = `DELETE FROM "TestTable";`;
        await this.ExecuteQuery(query);
    }

    private async ExecuteQuery(query: string) {
        const client = new pg.Client(this.config)
        await client.connect()

        await client.query(query)
        await client.end()
    }
}