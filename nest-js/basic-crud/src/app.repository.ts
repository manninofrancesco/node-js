import { Injectable } from '@nestjs/common';
import { BaseModel } from './models/BaseModel';
import pg, { Client } from "pg";

@Injectable()
export class AppRepository {
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

    async get(): Promise<BaseModel[]> {
        const client = new Client(this.config);

        await client.connect()

        const response = await client.query('SELECT * FROM "TestTable"')
        await client.end()

        return response.rows;
    }

    async insert(input: BaseModel) {
        let query: string = `INSERT INTO "TestTable" VALUES (${input.Id});`;
        await this.ExecuteQuery(query);
    }

    async delete() {
        let query: string = `DELETE FROM "TestTable";`;
        await this.ExecuteQuery(query);
    }

    private async ExecuteQuery(query: string) {
        const client = new Client(this.config)
        await client.connect()

        await client.query(query)
        await client.end()
    }
}