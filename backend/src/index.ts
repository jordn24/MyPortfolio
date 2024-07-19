require('dotenv').config()

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import router from './routes/projectsRouter';

import Projects from './models/projectSchema';

const PORT: number = parseInt(process.env.PORT || '5000');

if(!process.env.MONGO_CONNECTION_STRING){
    throw new Error("MONGO DB String is Not Defined!")
}

const MONGO_CONNECTION_STRING: string = process.env.MONGO_CONNECTION_STRING;

const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

app.use('/projects', router);

mongoose.connect(MONGO_CONNECTION_STRING, { dbName: 'MyPortfolioDB' }).then( () => {

    console.log("MongoDB Connection Completed!");

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
}).catch((err: any) => {
    console.error("Failed to connect to MongoDB"), err;
})

