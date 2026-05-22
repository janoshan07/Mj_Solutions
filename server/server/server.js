import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true
  })
);
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'MJ Solution API is running.' });
});

app.use('/api/contact', contactRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found.'
  });
});

app.use((error, req, res, next) => {
  const statusCode = error.name === 'ValidationError' ? 400 : 500;

  res.status(statusCode).json({
    success: false,
    message: error.message || 'Server error.'
  });
});

app.listen(PORT, () => {
  console.log(`MJ Solution server running on port ${PORT}`);
});
