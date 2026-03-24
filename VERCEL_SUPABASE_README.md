# 🍊 Orange Ordering Website - Vercel + Supabase Edition

**Complete Full-Stack E-Commerce Platform** - Now Serverless & Scalable!

![Status](https://img.shields.io/badge/Status-Active-brightgreen) ![Vercel](https://img.shields.io/badge/Vercel-Deployed-blue) ![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-green)

## ✨ What's New

- 🚀 **Serverless Backend** - Vercel Functions (no server management)
- 🗄️ **PostgreSQL Database** - Supabase (scalable & reliable)
- ☁️ **Fully Cloud-Based** - Deploy with one click
- 💰 **100% Free** - Vercel & Supabase free tiers
- ⚡ **Auto-Scaling** - Handles traffic automatically

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────┐
│                  VERCEL PLATFORM                    │
│  ┌──────────────────┐      ┌──────────────────────┐ │
│  │  Frontend (React) │      │  Backend (Functions) │ │
│  │  @ your-url.app  │◄────►│   /api/products      │ │
│  │  - Tailwind CSS   │      │   /api/users         │ │
│  │  - Shopping Cart  │      │   /api/orders        │ │
│  │  - Auth UI        │      │   /api/cart          │ │
│  └──────────────────┘      └──────────────────────┘ │
└─────────────────────────────────────────────────────┘
                             │
                    HTTP API Requests
                             │
                             ▼
           ┌─────────────────────────────────┐
           │    SUPABASE (PostgreSQL)        │
           │  ┌──────────────────────────┐  │
           │  │ • users                  │  │
           │  │ • products               │  │
           │  │ • orders                 │  │
           │  │ • cart_items             │  │
           │  └──────────────────────────┘  │
           └─────────────────────────────────┘
```

## 📁 Project Structure

```
orange-ordering/
├── api/                      # Vercel Serverless Functions
│   ├── products.js          # GET/POST products
│   ├── users.js             # Register/Login
│   ├── orders.js            # Create/View orders
│   └── cart.js              # Cart management
├── frontend/                 # React Application
│   ├── public/
│   ├── src/
│   │   ├── App.js
│   │   └── App.css
│   ├── package.json
│   └── tailwind.config.js
├── database/
│   └── schema.sql           # PostgreSQL Schema
├── vercel.json              # Vercel Configuration
├── DEPLOYMENT.md            # Deployment Guide
├── API_REFERENCE.md         # API Documentation
└── README.md
```

## 🚀 Quick Start

### Local Development

1. **Clone & Install**
```bash
cd C:\Users\natta\orange-ordering
npm install
cd frontend && npm install
cd ../backend && npm install
```

2. **Set Up Supabase**
   - Create account at https://supabase.com
   - Import schema from `database/schema.sql`
   - Get credentials from Settings → API

3. **Configure Environment**
```bash
# Create frontend/.env.local
REACT_APP_API_URL=http://localhost:3000/api

# Create backend/.env
SUPABASE_URL=your_url
SUPABASE_KEY=your_key
JWT_SECRET=your_secret
```

4. **Run Locally**
```bash
# Terminal 1 - Frontend
cd frontend && npm start

# Terminal 2 - Vercel Dev (simulates serverless)
vercel dev
```

### Deploy to Production

See [DEPLOYMENT.md](DEPLOYMENT.md) for complete step-by-step guide.

**TL;DR:**
1. Push code to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy! 🎉

## 📡 API Endpoints

All endpoints are at `/api/*`

### Products
```
GET    /api/products              - Get all products
POST   /api/products              - Create product
```

### Users
```
POST   /api/users                 - Register or Login
       { action: 'register', name, email, password }
       { action: 'login', email, password }
```

### Orders
```
GET    /api/orders?userId=123     - Get user orders
POST   /api/orders                - Create order
PUT    /api/orders                - Update order status
```

### Cart
```
GET    /api/cart?userId=123       - Get cart
POST   /api/cart?userId=123       - Add to cart
DELETE /api/cart?userId=123&productId=456 - Remove item
```

## 💾 Database Schema

### Users
```sql
id, email, password, name, address, phone, role, created_at
```

### Products
```sql
id, name, description, price, quantity, image, category, created_at
```

### Orders
```sql
id, user_id, items (JSON), total_price, status, shipping_address, payment_status, created_at
```

### Cart Items
```sql
id, user_id, product_id, name, price, quantity, created_at
```

## 🔐 Security Features

✅ JWT Authentication  
✅ Password Hashing (bcryptjs)  
✅ CORS Protection  
✅ Environment Variables  
✅ Supabase Row Level Security (RLS)  

## 💰 Costs

| Service | Free Tier | Cost |
|---------|-----------|------|
| Vercel | ✅ 100GB bandwidth | $0 |
| Supabase | ✅ 500MB storage, 2GB bandwidth | $0 |
| Domain | Optional | ~$5-15/year |
| **Total** | | **$0-15/year** 🎉 |

## 🛠️ Development

### Adding New API Endpoint

1. Create `api/your-endpoint.js`:
```javascript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export default async (req, res) => {
  // CORS headers...
  // Your code here
};
```

2. It's automatically available at `/api/your-endpoint`

### Running Database Migrations

1. Go to Supabase Dashboard
2. SQL Editor → New Query
3. Paste SQL → Run

## 📊 Monitoring

**Vercel Dashboard:**
- View deployments
- Monitor function execution
- Check error logs

**Supabase Dashboard:**
- Query editor
- Database browser
- Real-time updates
- Backups

## 🔄 CI/CD

Automatic deployment on every push to `main`:
- `.github/workflows/deploy.yml` configured
- Add `VERCEL_TOKEN` to GitHub Secrets
- Done! Auto-deploys thereafter

##  🎯 Next Steps

1. ✅ Set up Supabase database
2. ✅ Deploy to Vercel
3. 📧 Add email notifications
4. 💳 Integrate Stripe payments
5. 📊 Add analytics dashboard
6. 🔔 Push notifications

## 📚 Resources

- [Vercel Docs](https://vercel.com/docs)
- [Supabase Docs](https://supabase.com/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)

## 🐛 Troubleshooting

See [DEPLOYMENT.md](DEPLOYMENT.md) for deployment issues.

**Common Issues:**
- `Module not found` → Run `npm install @supabase/supabase-js`
- `CORS errors` → Check headers in api files
- `Database connection` → Verify SUPABASE_URL/KEY
- `Build fails` → Check `vercel.json` exists

## 📄 License

MIT - Free for personal & commercial use

## 🍊 Support

For help:
- Check documentation files
- Review code comments
- Contact Vercel/Supabase support

---

**Your mother's professional Orange Ordering Website is now serverless, scalable, and 100% FREE! 🎉**

Built with ❤️ for your orange business
Last Updated: March 2026
