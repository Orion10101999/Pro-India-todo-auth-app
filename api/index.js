import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path'
import connectDB from './config/connectDB.js';
import router from './routes/index.js';
import todoRouter from './routes/todo.route.js';
connectDB().then(() => {
    console.log('mongodb atlas connected');

    app.listen(PORT, () => {
        console.log('server running at ' + PORT);
    });
}).catch((err) => {
    console.log('mongodb atlas connection failed');
});

const __dirname = path.resolve();

const app = express();

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});


app.use(cors({
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

const PORT =  process.env. PORT || 8080;

// api endpoints
app.use('/api', router);
app.use('/api/todo', todoRouter);

