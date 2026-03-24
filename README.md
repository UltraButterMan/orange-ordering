# 🍊 Orange Ordering Website

A professional full-stack e-commerce platform for ordering fresh oranges online. Built with **React**, **Express.js**, and **MongoDB**.

![Orange Ordering](https://img.shields.io/badge/Status-Active-brightgreen) ![React](https://img.shields.io/badge/React-18.2-blue) ![Node.js](https://img.shields.io/badge/Node.js-16+-green)

## ✨ Features

- 🍊 **Product Catalog** - Browse orange varieties with detailed descriptions
- 🛒 **Shopping Cart** - Add/remove items with real-time updates
- 👤 **User Authentication** - Register and login securely
- 📦 **Order History** - Track previous orders and status
- 💳 **Checkout** - seamless order processing
- 👨‍💼 **Admin Dashboard** - Manage products and orders
- 🎨 **Responsive Design** - Beautiful UI with Tailwind CSS

## 🛠️ Technology Stack

| Layer | Technologies |
|-------|------|
| **Frontend** | React 18, Tailwind CSS, React Router, Axios |
| **Backend** | Express.js, Node.js, MongoDB, JWT, bcryptjs |
| **Database** | MongoDB |
| **Authentication** | JWT Token + bcryptjs Password Hashing |

## 📦 Project Structure

```
orange-ordering/
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js          # Main app component
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   ├── tailwind.config.js
│   └── package.json
├── backend/
│   ├── models/
│   │   ├── Product.js
│   │   ├── User.js
│   │   └── Order.js
│   ├── routes/
│   │   ├── products.js
│   │   ├── users.js
│   │   ├── orders.js
│   │   └── cart.js
│   ├── server.js
│   ├── .env
│   └── package.json
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16 or higher
- npm or yarn
- MongoDB (local or cloud)

### Installation

1. **Navigate to project directory**
```bash
cd orange-ordering
```

2. **Setup Frontend**
```bash
cd frontend
npm install
```

3. **Setup Backend**
```bash
cd ../backend
npm install
```

### Running the Application

#### Terminal 1 - Backend Server
```bash
cd backend
npm run dev
```
- Runs on `http://localhost:5000`
- API endpoints available at `/api/*`

#### Terminal 2 - Frontend Application
```bash
cd frontend
npm start
```
- Runs on `http://localhost:3000`
- Auto-refreshes on code changes

## 📡 API Endpoints

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products |
| GET | `/api/products/:id` | Get single product |
| POST | `/api/products` | Create product (admin) |

### Users
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/users/register` | Register new user |
| POST | `/api/users/login` | Login user |
| GET | `/api/users/profile/:id` | Get user profile |

### Orders
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/orders` | Create order |
| GET | `/api/orders` | Get all orders (admin) |
| GET | `/api/orders/user/:userId` | Get user orders |
| PUT | `/api/orders/:id` | Update order status |

### Cart
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/cart/:userId` | Get cart |
| POST | `/api/cart/:userId` | Add to cart |
| DELETE | `/api/cart/:userId/:productId` | Remove item |
| DELETE | `/api/cart/:userId` | Clear cart |

## 🔑 Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/orange-ordering
JWT_SECRET=your_secret_key_here
NODE_ENV=development
```

## 🗄️ Database Schema

### Product
```javascript
{
  name: String,
  description: String,
  price: Number,
  quantity: Number,
  image: String,
  category: String,
  createdAt: Date
}
```

### User
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  address: String,
  phone: String,
  role: Enum['customer', 'admin'],
  createdAt: Date
}
```

### Order
```javascript
{
  userId: ObjectId,
  items: Array,
  totalPrice: Number,
  status: Enum['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
  shippingAddress: String,
  paymentStatus: Enum['pending', 'completed', 'failed'],
  createdAt: Date
}
```

## 🎯 Key Features Explained

### Shopping Experience
1. Browse product catalog on homepage
2. View product details and prices
3. Add items to cart
4. View cart summary in sidebar
5. Remove items if needed
6. Proceed to checkout

### User Management
- **Registration**: Create new account with email and password
- **Login**: Secure authentication with JWT
- **Profile**: View and update user information
- **Order History**: Track all previous orders

### Admin Features
- View all customer orders
- Update order status (pending → processing → shipped → delivered)
- Manage product inventory
- View sales analytics

##🔐 Security Features

- ✅ Password hashing with bcryptjs
- ✅ JWT authentication
- ✅ CORS protection
- ✅ Environment variable management
- ✅ NoSQL injection prevention

## 📱 Responsive Design

The website is fully responsive and works great on:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| MongoDB connection failed | Ensure MongoDB is running: `mongod` |
| Port already in use | Change PORT in backend .env file |
| npm install fails | Delete node_modules and package-lock.json, then reinstall |
| Frontend won't load | Clear browser cache or use incognito mode |

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend && npm run build
# Deploy the build folder
```

### Backend (Heroku/Railway)
```bash
# Set environment variables
# Deploy using platform CLI
```

## 📄 License

MIT License - Feel free to use this project personally or commercially.

## 💬 Support

For issues or questions:
- Open an issue on GitHub
- Check existing documentation
- Review code comments

---

**Made with ❤️ for your mother's orange business**

Last updated: March 24, 2026
