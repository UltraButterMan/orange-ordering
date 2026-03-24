# 🚀 Quick Start Guide - Orange Ordering Website

## ✅ Project Setup Completed!

Your professional Orange Ordering website is ready to run. Here's how to get started:

## 📂 Project Location
```
C:\Users\natta\orange-ordering\
```

## 🎯 Next Steps

### 1. Open the Project in VS Code

```powershell
cd C:\Users\natta\orange-ordering
code .
```

### 2. Start the Backend Server

Open a terminal and run:
```powershell
cd backend
npm run dev
```

You should see:
```
🚀 Server running on http://localhost:5000
✅ MongoDB connected
```

**Note:** If you don't have MongoDB installed locally, install it or use MongoDB Atlas (cloud).

### 3. Start the Frontend Application

Open another terminal and run:
```powershell
cd frontend
npm start
```

This will automatically open your browser at `http://localhost:3000`

## 🎨 What You Get

### Frontend Features
- ✅ Beautiful responsive design with Tailwind CSS
- ✅ Product catalog showing orange varieties
- ✅ Shopping cart functionality
- ✅ User login/registration
- ✅ Professional header and footer
- ✅ Mobile-friendly layout

### Backend Features
- ✅ RESTful API endpoints
- ✅ User authentication with JWT
- ✅ Product management
- ✅ Order tracking
- ✅ Shopping cart API
- ✅ MongoDB database integration

## 📝 Default Credentials (Demo)

For testing login:
- Email: `mom@oranges.com`
- Password: `password123`

## 🔗 Useful Links

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000/api
- **Health Check**: http://localhost:5000/api/health

## 🛠️ Available Commands

### Backend
```bash
npm run dev    # Run with auto-reload (recommended)
npm start      # Run in production
```

### Frontend
```bash
npm start      # Run development server
npm build      # Build for production
npm test       # Run tests
```

## 🗄️ Database Setup

### Option 1: Local MongoDB
```powershell
# Install MongoDB on your Windows machine first
# Then start the service with:
mongod
```

### Option 2: MongoDB Cloud (Atlas)
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a free cluster
3. Get connection string
4. Update `backend/.env`:
   ```
   MONGODB_URI=your_connection_string_here
   ```

## 📱 Testing the Website

1. Browse products on homepage
2. Click "Add" to add oranges to cart
3. View cart in sidebar
4. Remove items if needed
5. Click "Proceed to Checkout" (demo button)
6. Click "Login" to test auth (demo login)

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| "MongoDB connection failed" | Start MongoDB service or use Atlas |
| "Port 3000 already in use" | Kill process or change port in frontend |
| "Port 5000 already in use" | Change PORT in backend/.env |
| npm install fails | Delete node_modules, npm cache clean, reinstall |
| Blank page in browser | Check browser console (F12) for errors |

## 📚 Project Structure

```
orange-ordering/
├── frontend/          # React app
│   ├── public/       # Static files
│   ├── src/          # React components
│   ├── package.json
│   └── tailwind.config.js
├── backend/          # Express.js API
│   ├── models/       # Database schemas
│   ├── routes/       # API endpoints
│   ├── server.js     # Main server
│   ├── .env          # Configuration
│   └── package.json
├── .github/          # Github config
└── README.md
```

## 🎓 Learning Resources

- React: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Express.js: https://expressjs.com
- MongoDB: https://docs.mongodb.com

## 🚀 Next Steps for Production

1. **Environment Variables**: Secure your JWT_SECRET
2. **Payment Integration**: Add Stripe/PayPal
3. **Deployment**:
   - Frontend → Vercel or Netlify
   - Backend → Heroku, Railway, or Render
4. **Database**: Use MongoDB Atlas
5. **Email**: Add email notifications
6. **Admin Dashboard**: Fully implement order management

## 💡 Tips

- Use Chrome DevTools (F12) to debug
- Check backend console for API errors
- Use MongoDB compass for database visualization
- Test API endpoints with Postman or Thunder Client

## ❓ Need Help?

Check the main README.md for detailed documentation:
```
C:\Users\natta\orange-ordering\README.md
```

---

**Happy coding! 🍊 Your mother's orange business website is ready!**

Last Updated: March 24, 2026
