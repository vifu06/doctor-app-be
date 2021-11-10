import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import * as path from 'path';

const app = express();

export default class Server {
    constructor() {
        const root = path.normalize(`${__dirname}/../..`);

        app.set('appPath', `${root}client`);
        app.use(express.json({ limit: process.env.REQUEST_LIMIT || '100kb'}));
        app.use(express.urlencoded({extended: true, limit: process.env.REQUEST_LIMIT || '100kb'}));
        app.use(express.text({ limit: process.env.REQUEST_LIMIT || '100kb'}));
        app.use(cookieParser(process.env.SESSION_SECRET));
        app.use(express.static(`${root}/public`));
        app.use(cors({origin: '*'}));
    }

    router(routes) {
        routes(app);
        return this;
    }

    listen(port = process.env.PORT) {
        app.listen(port,function(){
            console.log('Server is running on port:',port);
        })
        return app;
    }

}

