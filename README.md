         
# Plantify

Plantify is a comprehensive plant care and gardening e-commerce platform that connects plant enthusiasts with gardening products, expert gardeners, and plant identification services.

## Project Overview

Plantify is a full-stack web application built with modern technologies that offers a complete solution for plant lovers. The platform includes an e-commerce store for plant care products, a gardener marketplace to connect with professionals, plant identification services, and an informative chatbot for plant care advice.

## Project Structure

The project is organized into three main components:

### Frontend
- Built with React.js and Vite
- Responsive UI with Tailwind CSS
- Interactive animations with AOS and Framer Motion
- State management with Context API

### Backend
- Node.js with Express.js
- MongoDB database with Mongoose ODM
- RESTful API architecture
- JWT authentication
- Cloudinary for image storage

### Admin Dashboard
- Separate React application for administrators
- Product, order, and gardener management
- Analytics and reporting features

## Key Features

### E-Commerce Platform
- Product catalog with categories (fertilizers, soil, pest control, etc.)
- Shopping cart and checkout functionality
- Order tracking and management
- User reviews and ratings

### Gardener Marketplace
- Gardener profiles with portfolios and ratings
- Location-based gardener search
- Direct messaging system between users and gardeners
- Hire gardeners for consultations or services

### Plant Identification
- Upload plant images for identification
- Get detailed information about identified plants
- Care recommendations for identified plants

### Plant Care Information
- Comprehensive plant care guides
- Seasonal gardening tips
- Disease identification and treatment advice
- Fertilizer and soil recommendations

### Interactive Chatbot
- AI-powered plant care assistant
- Answers questions about plants, diseases, and gardening
- Provides personalized recommendations

## Technologies Used

### Frontend
- React.js
- Tailwind CSS
- Vite
- React Router
- Axios
- React Icons
- AOS (Animate On Scroll)
- Framer Motion
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- Bcrypt
- Multer
- Cloudinary
- Dotenv

## Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Cloudinary account

### Backend Setup
1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
PORT=5000
```

4. Run the setup script to create necessary directories:
```bash
npm run setup
```

5. Start the backend server:
```bash
npm run dev
```

### Frontend Setup
1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

### Admin Dashboard Setup
1. Navigate to the admin directory:
```bash
cd admin
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Usage

- Access the main application at `http://localhost:5173`
- Access the admin dashboard at `http://localhost:5174`
- The backend API runs at `http://localhost:5000`

## Contributors

The Plantify project was developed by a team of dedicated developers (as seen in the Team component).

## License

This project is licensed under the ISC License.

---

For more information or support, please contact the development team.
        
