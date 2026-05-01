# smartassist 🚀

An AI-powered full stack MERN application that allows users to interact with AI using Google Gemini API. The project includes AI image generation, authentication, payment integration, cloud storage, and a responsive modern UI.

---

## ✨ Features

* 🔐 User Authentication (Login & Signup)
* 💬 AI Chat System
* 🧠 Google Gemini API Integration
* 🖼️ AI Image Generation
* ☁️ Image Upload & Storage with ImageKit
* 💳 Stripe Payment Gateway Integration
* 📂 Sidebar Navigation
* 👥 Community Page
* 💎 Credits System
* ⏳ Loading Animations
* 📱 Fully Responsive Design
* 🌐 Frontend & Backend Deployment

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt.js

### APIs & Services

* Google Gemini API
* ImageKit
* Stripe Payment Gateway

---

## 📁 Project Structure

```bash
smartassist/
│
├── client/                 # Frontend React Application
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── context/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server/                 # Backend Node.js Server
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/vivek6225/smartassist.git
```

### 2️⃣ Navigate to Project Folder

```bash
cd smartassist
```

---

## 🚀 Frontend Setup

### Move to Client Folder

```bash
cd client
```

### Install Dependencies

```bash
npm install
```

### Start Frontend

```bash
npm run dev
```

Frontend will run on:

```bash
http://localhost:5173
```

---

## 🚀 Backend Setup

### Move to Server Folder

```bash
cd server
```

### Install Dependencies

```bash
npm install
```

### Start Backend Server

```bash
npm run server
```

Backend will run on:

```bash
http://localhost:5000
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `server` folder and add the following:

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_url

JWT_SECRET=your_secret_key

GEMINI_API_KEY=your_google_gemini_api_key

IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint

STRIPE_SECRET_KEY=your_stripe_secret_key
```

---

## 🧪 API Testing

You can test APIs using:

* Postman


---

## 🌐 Deployment

### Frontend Deployment

* Vercel


### Backend Deployment

* Render


---

## 📸 Pages Included

* 🏠 Home Page
* 📂 Sidebar Page
* 💬 ChatBox Page
* ⏳ Loading Page
* 👥 Community Page
* 💎 Credits Page
* 🔐 Login Page

---

## 🔥 Future Improvements

* Real-time Chat using Socket.io
* Dark Mode
* Voice Assistant
* Chat History
* AI File Upload
* Mobile App Version

---

## 🧠 Learning Outcomes

By building this project, you can learn:

* MERN Stack Development
* REST API Development
* Authentication & Authorization
* AI API Integration
* Payment Gateway Integration
* Cloud Storage Integration
* Full Stack Deployment
* Responsive UI Design

---

## 👨‍💻 Author

Made with ❤️ by Vivek Kumar

GitHub: https://github.com/vivek6225

---

## 📜 License

This project is licensed under the MIT License.
