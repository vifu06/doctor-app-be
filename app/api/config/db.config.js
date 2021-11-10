import { MongoClient } from 'mongodb';

export class Database {
    uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER_URL}?retryWrites=true&w=majority`;
    client = new MongoClient(this.uri,{ useNewUrlParser: true, useUnifiedTopology: true });
    db;

    constructor() {
        this.connect(this.client);
        this.db = this.client.db(process.env.DB_NAME);
    }

    async connect(client) {
        return await client.connect();
    }

    async close() {
        return await this.client.close();
    } 
}

export default new Database();
