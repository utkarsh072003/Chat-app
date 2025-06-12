# 🧠 Chat App – Real-Time Messaging Platform

A full-stack real-time chat application that supports direct messaging (DM), group channels, profile customization, file uploads, and more.

> 🚀 **Live App Frontend**: [chat-app-kappa-sandy.vercel.app](https://chat-app-kappa-sandy.vercel.app)  
> 🛠 **Backend API**: [chat-app-1-946a.onrender.com](https://chat-app-1-946a.onrender.com)

---

## 📌 Features

- 🔐 **Authentication** – Signup/Login using email and password (JWT-based)
- 🧑‍💼 **Profile Management** – Update profile info, set avatar, pick user color
- 👥 **DM Contacts** – Search and chat 1-to-1 with other users
- 💬 **Messaging** – Send real-time messages via WebSocket (Socket.IO)
- 📂 **File Uploads** – Upload and send images/files in chats
- 📢 **Channels** – Create channels for group conversations
- 📶 **WebSocket Support** – Real-time communication with proper CORS and security setup
- 🧾 **Protected Routes** – Frontend routing is restricted for unauthorized users

---

## 🛠️ Tech Stack

### **Frontend**
- React + Vite
- Tailwind CSS
- React Icons
- ShadCN UI
- Axios
- Zustand (for state management)
- Vercel (for hosting)

### **Backend**
- Node.js + Express
- MongoDB + Mongoose
- Multer (for file upload)
- JWT + bcryptjs (auth)
- Socket.IO (real-time messaging)
- Render (for hosting)

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/utkarsh072003/Chat-app
cd Chat-app
