# ItemHub - Modern Tech Collection Platform

ItemHub is a sleek, premium web application built with Next.js 16 and Express.js. It allows users to browse a curated collection of tech items, view detailed specifications, and contribute new items to the marketplace (protected).

## 🚀 Technologies Used

- **Frontend**: Next.js 16 (App Router), Tailwind CSS
- **Backend**: Express.js, Node.js
- **State/Auth**: Mock Authentication with Browser Cookies
- **Styling**: Premium Modern UI with Backdrop Blurs and Custom Animations

## ✨ Implemented Features

1.  **7-Section Landing Page**: A comprehensive homepage featuring Hero, Features, How It Works, Products Preview, Testimonials, Pricing, and CTA sections.
2.  **Mock Authentication**: A secure-feeling login system using `admin@test.com` and `123456`.
3.  **Dynamic Item Collection**: Publicly accessible page that fetches and displays products from the Express server.
4.  **In-Depth Item Details**: Dedicated dynamic routes (`/items/[id]`) for every product.
5.  **Protected "Add Item" Route**: A managed form that only allows authenticated users to add new products to the server.
6.  **Full-Stack Integration**: Real-time communication between the Next.js frontend and Express.js backend.

## 🛣️ Route Summary

- `/` - Landing Page (Public)
- `/items` - Product Collection (Public)
- `/items/[id]` - Product Details (Public)
- `/login` - Authentication Page (Public)
- `/add-item` - Contribution Form (Protected - requires login)

## 🛠️ Setup & Installation

### 1. Backend Setup
```bash
cd "ItemHub(server)"
npm install
node index.js
```
*The server will run on http://localhost:5000*

### 2. Frontend Setup
```bash
cd ItemHub
npm install
npm run dev
```
*The application will be available at http://localhost:3000*

## 🔐 Credentials
- **Email**: `admin@test.com`
- **Password**: `123456`

---
*Created for the WD Projects Job Task.*
