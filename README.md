Forever | MERN Stack eCommerce Platform

Project Overview

Forever is a full-stack eCommerce platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js) to deliver a modern and scalable online shopping experience. The platform integrates Stripe and Razorpay for secure online payment processing and features robust admin functionality for managing products and orders. The project is deployed on Vercel, making it accessible online for real-time use.

Features

User Features:

Product Browsing: Users can explore a wide range of products with options for filtering and sorting.

Product Details: View detailed information about each product, including images, descriptions, and variants.

Cart Management: Add products to the cart, update quantities, and remove items as needed.

Checkout and Payment: Place orders using Cash on Delivery or online payments via Stripe and Razorpay.

Order Tracking: Track order details after successful placement.

Admin Features:

Dashboard: Overview of products, orders, and user activity.

Product Management: Add, update, or delete products.

Order Management: View and manage orders placed by users.

Tech Stack

Frontend:

React.js: For building the user interface.

Tailwind CSS: For responsive and modern design.

Backend:

Node.js: Backend runtime environment.

Express.js: For creating RESTful APIs.

Database:

MongoDB: NoSQL database for storing product, user, and order data.

Payment Gateways:

Stripe: For processing online payments.

Razorpay: For additional payment processing options.

Deployment:

Vercel: For hosting the frontend and backend.

Installation and Setup

Prerequisites:

Node.js (v14 or later)

MongoDB

Steps:

Clone the Repository:

git clone https://github.com/yourusername/forever.git
cd forever

Install Dependencies:

Navigate to the frontend folder and install dependencies:

cd frontend
npm install

Navigate to the backend folder and install dependencies:

cd ../backend
npm install

Set Up Environment Variables:

Create a .env file in the backend folder with the following:

PORT=5000
MONGO_URI=your_mongodb_connection_string
STRIPE_SECRET_KEY=your_stripe_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

Run the Application:

Start the backend server:

cd backend
npm start

Start the frontend server:

cd ../frontend
npm start

Access the Application:
Open http://localhost:3000 in your browser.

Deployment

Frontend:

Deploy the React app on Vercel.

Backend:

Deploy the backend on Render or Heroku.

Environment Variables:

Ensure the necessary environment variables are set in the hosting platform.

Folder Structure

shopsphere/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
├── .gitignore
├── README.md

Acknowledgements

Stripe Documentation

Razorpay Documentation

Contact

For queries or contributions, feel free to reach out:

Email: hiteshkv582@gmail.com

GitHub: hitesh582

