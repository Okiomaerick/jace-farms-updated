import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/contact', (req, res, next) => {
  // Handle contact route or import from routes/contact.js
  res.json({ message: 'Contact endpoint' });
});

// Serve static files from client/dist in production
if (process.env.NODE_ENV === 'production') {
  const clientBuildPath = path.join(__dirname, 'client/dist');
  
  // Serve static files
  app.use(express.static(clientBuildPath));
  
  // Handle SPA routing - return index.html for all routes
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientBuildPath, 'index.html'));
  });
} else {
  // Development mode - serve from client/public
  const clientPublicPath = path.join(__dirname, 'client/public');
  app.use(express.static(clientPublicPath));
  
  // Handle SPA routing in development
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientPublicPath, 'index.html'));
  });
}

// Start server
const PORT = process.env.PORT || 5000;

// Connect to MongoDB and start the server
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });
