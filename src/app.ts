import express, { json } from 'express';
import router from './routes';
import cors from 'cors';


function createServer() {
    const app = express();
    app.use(cors());
    app.use(json());
    app.use("/",router);
    app.use(cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    }))

    return app;

}

export default createServer;
