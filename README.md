# 🌱 Plantify

**Plantify** is an all-in-one plant care and gardening e-commerce platform that empowers plant lovers with access to gardening products, professional gardener services, plant identification tools, and AI-driven plant care support.

---

## 🚀 Project Overview

Plantify is a full-stack web application that brings together an online store, gardener marketplace, plant identification, and a chatbot assistant into one cohesive platform. Built with modern technologies and best development practices, it provides a seamless experience for users and administrators alike.

---

## 🗂️ Project Structure

The project is divided into three core applications:

### 🖥️ Frontend
- Built with **React.js** and **Vite**
- Styled using **Tailwind CSS**
- Enhanced with **AOS** and **Framer Motion** for smooth animations
- Global state managed using **Context API**

### 🔧 Backend
- Developed with **Node.js** and **Express.js**
- **MongoDB** database managed via **Mongoose**
- RESTful API architecture
- Secure **JWT authentication**
- Media management using **Cloudinary**

### 📊 Admin Dashboard
- Separate React application for administrative users
- Features include product, order, and gardener management
- Includes analytics and reporting tools

---

## 🌟 Key Features

### 🛒 E-Commerce Store
- Browse and search products (fertilizers, soil, pest control, etc.)
- Add to cart, checkout, and track orders
- Leave product ratings and reviews

### 👨‍🌾 Gardener Marketplace
- View gardener profiles and portfolios
- Location-based search and hiring
- Secure messaging between users and gardeners

### 🌿 Plant Identification
- Upload plant images for instant identification via **Plant.ID API**
- Receive detailed info including common/scientific names, images, and care tips

### 📚 Plant Care Knowledge
- Access plant care guides, seasonal tips, and soil/fertilizer advice
- Diagnose and treat plant diseases with expert insights

### 🤖 AI Chatbot Assistant
- Powered by **Gemini API**
- Responds to plant-related queries with tailored suggestions
- Integrated into the UI for real-time interaction

---

## 🧪 Technologies Used

### Frontend & Admin
- React.js
- Vite
- Tailwind CSS
- React Router
- Axios
- React Icons
- AOS (Animate On Scroll)
- Framer Motion
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT + Bcrypt
- Multer for image handling
- Cloudinary for image storage
- Dotenv for environment variable management

### APIs & Integrations
- **Plant.ID API** for plant image recognition  
- **Gemini API** for AI chatbot responses  
- **Cloudinary** for image hosting and transformation

---

## 🏗️ Installation & Setup

### Prerequisites
- Node.js (v14+)
- MongoDB (local or cloud instance)
- Cloudinary account

---

### 📦 Backend Setup
```bash
cd backend
npm install
