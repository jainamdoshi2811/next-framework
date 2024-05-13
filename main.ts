import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import UserRoutes from './routes/UserRoutes';

const PORT = process.env.PORT || 3000;
const app = express();

dotenv.config();
mongoose.connect(process.env.MONGODB_URI ?? "");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users', UserRoutes);

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
});