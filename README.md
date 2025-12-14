# fitclub
🏋️‍♂️ FitPlanHub – Trainers & Fitness Plans Platform

FitPlanHub is a full-stack MERN application where certified trainers can create fitness plans and users can browse, subscribe, and access detailed workout plans.
The project focuses on authentication, role-based access, subscriptions, and secure backend logic.

🚀 Features
👤 Authentication & Roles

User & Trainer signup/login

JWT-based authentication

Role-based access (User vs Trainer)

🧑‍🏫 Trainer Features

Create fitness plans

Update existing plans

Delete their own plans

View all plans created by them

🧍 User Features

View all available fitness plans

View plan details by ID

Subscribe to a fitness plan

After subscribing, access full plan details

🔐 Subscription & Access Control

Subscription data stored in database

Backend verifies subscription before sending full plan data

Non-subscribed users get preview data

Subscribed users get complete plan details

🧩 Backend Concepts Implemented

REST APIs

MongoDB relationships (one-to-many, many-to-many)

JWT authentication

Middleware (protected & optional auth)

Proper MVC folder structure

🛠️ Tech Stack
Frontend

React

React Router

Context API

Axios

Tailwind CSS

Backend

Node.js

Express.js

MongoDB

Mongoose

JWT

bcrypt

dotenv
<img width="690" height="648" alt="image" src="https://github.com/user-attachments/assets/3a96a73e-5e0f-42e7-a05c-a6958ebf2243" />

1️⃣ Clone the Repository
git clone https://github.com/MayankAgrawal2005/fitclub.git
cd FitPlanHub

2️⃣ Backend Setup
cd backend
npm install
npm run dev

3️⃣ Frontend Setup
cd frontend
npm install
npm start



