# Jace Farms Deployment Guide

This guide explains how to deploy the Jace Farms application to Render.

## Prerequisites

1. A GitHub account
2. A Render account (sign up at [https://render.com](https://render.com))
3. A MongoDB Atlas database (or any MongoDB database)

## Deployment Steps

### 1. Set up MongoDB

1. Create a MongoDB Atlas account at [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster and database
3. Get your MongoDB connection string

### 2. Deploy to Render

#### Option A: Using GitHub (Recommended)

1. Push your code to a GitHub repository
2. Go to [Render Dashboard](https://dashboard.render.com/)
3. Click "New +" and select "Web Service"
4. Connect your GitHub repository
5. Configure the service:
   - **Name**: jace-farms
   - **Region**: Choose the one closest to your users
   - **Branch**: main (or your deployment branch)
   - **Build Command**: `cd client && npm install && npm run build && cd ../server && npm install`
   - **Start Command**: `cd server && npm start`
   - **Environment Variables**:
     - `NODE_ENV=production`
     - `PORT=10000`
     - `MONGO_URI=your_mongodb_connection_string`
6. Click "Create Web Service"

#### Option B: Using the render.yaml file

1. Update the `render.yaml` file with your MongoDB connection string
2. Push your code to a GitHub repository
3. Go to [Render Dashboard](https://dashboard.render.com/)
4. Click "New +" and select "Blueprint"
5. Connect your GitHub repository
6. Select the repository and branch
7. Click "Apply" to deploy

### 3. Configure Custom Domain (Optional)

1. Go to your service in Render Dashboard
2. Click on "Settings" tab
3. Scroll down to "Custom Domains"
4. Add your domain and follow the instructions to verify ownership

## Environment Variables

Create a `.env` file in the `server` directory with the following variables:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
```

## Running Locally

1. Install dependencies:
   ```bash
   # Install server dependencies
   cd server
   npm install
   
   # Install client dependencies
   cd ../client
   npm install
   ```

2. Start the development server:
   ```bash
   # From the server directory
   npm run dev
   ```
   This will start both the client (on port 3000) and server (on port 5000) with hot-reload.

## Building for Production

1. Build the client:
   ```bash
   cd client
   npm run build
   ```

2. Start the production server:
   ```bash
   cd server
   npm start
   ```

The application will be available at `http://localhost:5000`
