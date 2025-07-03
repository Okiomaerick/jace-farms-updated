# Jace Farms & Consultancy Services

A modern full-stack web application for Jace Farms & Consultancy Services Ltd, showcasing their agricultural services and products.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Product Showcase**: Beautifully presented agricultural products
- **Services**: Detailed service pages for agricultural consultancy and farming solutions
- **Contact Form**: Easy way for customers to get in touch
- **Modern Tech Stack**: Built with React 18, Vite, and Node.js
- **Performance Optimized**: Code splitting, lazy loading, and WebP image optimization

## 🛠 Tech Stack

### Frontend
- ⚛️ React 18 with Hooks
- ⚡ Vite for fast development and builds
- 🎨 Tailwind CSS for styling
- 🔄 React Router 6 for navigation
- 🖼️ React Icons
- 📡 Axios for API calls
- 🏗️ Context API for state management

### Backend
- 🟢 Node.js with Express
- 🍃 MongoDB with Mongoose
- 🌐 RESTful API
- 🔄 CORS enabled
- 🔑 Environment variables support

## 🚀 Deployment

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB Atlas account or local MongoDB instance

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/jace-farms.git
   cd jace-farms
   ```

2. **Set up environment variables**
   - Copy `.env.example` to `.env` in the root directory
   - Update the `MONGO_URI` with your MongoDB connection string

3. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install client dependencies
   cd client && npm install && cd ..
   ```

4. **Start the development servers**
   ```bash
   # Start backend server (from root directory)
   npm run dev
   
   # In a new terminal, start frontend dev server
   cd client && npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

### Production Build

1. **Build the frontend**
   ```bash
   cd client
   npm run build
   ```

2. **Start the production server**
   ```bash
   # From root directory
   npm start
   ```

## 🚀 Deployment to Render

1. **Push your code** to a GitHub repository

2. **Create a new Web Service** on [Render Dashboard](https://dashboard.render.com/)
   - Connect your GitHub repository
   - Use the following settings:
     - Build Command: `npm install && cd client && npm install && npm run build`
     - Start Command: `node server.js`
     - Environment: Node
     - Region: Oregon (or your preferred region)

3. **Set environment variables** in Render dashboard:
   ```
   NODE_ENV=production
   PORT=10000
   MONGO_URI=your_mongodb_connection_string
   ```

4. **Deploy!** Render will automatically build and deploy your application

## 📦 Project Structure

```
jace-farms/
├── client/                 # Frontend React application
│   ├── public/            # Static files
│   ├── src/               # React source code
│   └── package.json       # Frontend dependencies
├── server/                # Backend server code
│   └── routes/            # API routes
├── .env.example          # Example environment variables
├── render.yaml           # Render deployment configuration
├── server.js             # Main server entry point
└── README.md             # This file
```

## 📝 Available Scripts

### Root Directory
- `npm install` - Install all dependencies
- `npm start` - Start production server
- `npm run dev` - Start development server

### Client Directory
- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 📞 Contact

For any questions or support, please contact [Your Contact Information]

## Project Structure

```
jace-farms/
├── client/                 # Frontend React application
│   ├── public/            # Static files
│   ├── src/               # Source files
│   │   ├── components/    # Reusable components
│   │   ├── contexts/      # React contexts
│   │   ├── pages/         # Page components
│   │   ├── App.jsx        # Main App component
│   │   └── main.jsx       # Entry point
│   └── package.json
├── server/                # Backend server
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   ├── server.js         # Express server setup
│   └── package.json
└── README.md
```

## Environment Variables

### Server (.env)
- `PORT` - Server port (default: 5000)
- `MONGO_URI` - MongoDB connection string

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact [your-email@example.com](mailto:your-email@example.com)
