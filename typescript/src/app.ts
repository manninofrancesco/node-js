import express, { Express, Request, Response } from 'express';
import { AppController } from './controllers/appController';
import { BaseModel } from './models/BaseModel';

const app: Express = express();
app.use(express.json())
const port = 3000;

app.get('/', async (req: Request, res: Response) => {
    try {
        res.send("Basic CRUD App")
    }
    catch (error) {
        res.send(`Error: ${error}`);
    }
})

app.get('/get', async (req: Request, res: Response) => {
    try {
        res.send(await new AppController().get())
    }
    catch (error) {
        res.send(`Error: ${error}`);
    }
})

app.get('/insert', async (req: Request, res: Response) => {
    try {
        let exampleModel: BaseModel = new BaseModel(Math.floor(Math.random() * 9999999));;

        await new AppController().insert(exampleModel);
        res.redirect("/get");
    }
    catch (error) {
        res.send(`Error: ${error}`);
    }
})

app.get('/delete', async (req: Request, res: Response) => {
    try {
        await new AppController().delete();
        res.redirect("/get");
    }
    catch (error) {
        res.send(`Error: ${error}`);
    }
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});