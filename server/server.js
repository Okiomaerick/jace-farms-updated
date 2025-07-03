import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import contactRoutes from './routes/contact.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/contact', contactRoutes);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder for production
  const clientBuildPath = path.join(__dirname, '../client/dist');
  
  // Serve static files from the React app
  app.use(express.static(clientBuildPath));
  
  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientBuildPath, 'index.html'));
  });
} else {
  // Development mode - serve from the client's public directory
  const clientPublicPath = path.join(__dirname, '../client/public');
  app.use(express.static(clientPublicPath));
  
  // Handle React routing in development
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientPublicPath, 'index.html'));
  });
  
  // Test route for development
  app.get('/api', (req, res) => {
    res.json({ message: 'Jace Farms API is running in development mode...' });
  });
}

// Connect to MongoDB
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
