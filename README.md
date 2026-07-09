# Next.js Authentication System

A clean, modern, and secure authentication system built with Next.js (App Router), MongoDB, Mongoose, and Tailwind CSS.

## Features

- **User Registration**: Sign up with username, email, and password.
- **User Authentication**: Secure password hashing with bcryptjs and JWT-based authentication.
- **Protected Pages**: User profile pages that require authentication.
- **Interactive UI**: Styled with Tailwind CSS for a clean, minimal, and modern look with built-in dark mode support.
- **Toast Notifications**: Interactive toast alerts for success and error states.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Database**: MongoDB (via Mongoose)
- **Styling**: Tailwind CSS
- **Authentication**: JSON Web Tokens (JWT) & bcryptjs
- **API Client**: Axios

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your machine.

### Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
MONGO_URL=your_mongodb_connection_string
TOKEN_SECRET=your_jwt_secret_token
```

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
