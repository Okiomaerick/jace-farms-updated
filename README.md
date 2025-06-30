# Jace Farms & Consultancy Services

A modern full-stack web application for Jace Farms & Consultancy Services Ltd, showcasing their agricultural services and products with e-commerce capabilities.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **E-commerce**: Product catalog with shopping cart functionality
- **Services**: Detailed service pages for agricultural consultancy and farming solutions
- **Contact Form**: Easy way for customers to get in touch
- **Modern Tech Stack**: Built with React 18, Vite, and Node.js
- **Performance Optimized**: Code splitting, lazy loading, and image optimization

## Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- React Router 6
- React Icons
- Axios for API calls
- Context API for state management

### Backend
- Node.js with Express
- MongoDB with Mongoose
- RESTful API
- CORS enabled
- Environment variables support

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account or local MongoDB instance

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/jace-farms.git
cd jace-farms
```

### 2. Set Up Backend

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the server directory with your MongoDB connection string:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### 3. Set Up Frontend

1. Open a new terminal and navigate to the client directory:
   ```bash
   cd ../client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

### Client
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

### Server
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

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
