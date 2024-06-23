import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app: express.Application = express();

// configurations
app.use(cors()); // CORS
dotenv.config({ path: './.env' }); // for env variables
app.use(express.json()); // json form data

let hostName: string | undefined = process.env.HOST_NAME;
let port: number | undefined = Number(process.env.PORT);
let mongoDBURL: string | undefined = process.env.MONGODB_URL;

// MongoDb Connection
if (mongoDBURL) {
    mongoose.connect(mongoDBURL).then(() => {
        console.log('Connected to MongoDB Successfully...');
    }).catch((error) => {
        console.error('MongoDB connection error:', error);
        process.exit(1); // stop the node.js process
    });
}

app.get('/', (request: express.Request, response: express.Response) => {
    response.status(200).json({
        msg: 'Welcome to express server of big-basket'
    });
});

if (port !== undefined && hostName !== undefined) {
    app.listen(port, hostName, () => {
        console.log(`Express Server is started at: http://${hostName}:${port}`);
    });
}