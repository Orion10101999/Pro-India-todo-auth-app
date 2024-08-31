import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import connectDB from './config/connectDB.js';
import router from './routes/index.js';
import todoRouter from './routes/todo.route.js';

const app = express();  // Move app declaration before it's used

connectDB()
  .then(() => {
    console.log('MongoDB Atlas connected');

    const PORT = process.env.PORT || 8080;  // Fixed typo here

    app.listen(PORT, () => {
        console.log('Server running at ' + PORT);
    });
  })
  .catch((err) => {
    console.log('MongoDB Atlas connection failed', err);
  });

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, '/client/dist')));

app.use(express.json());
app.use(cookieParser());

// API endpoints
app.use('/api', router);
app.use('/api/todo', todoRouter);

// Catch-all to serve the frontend app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
