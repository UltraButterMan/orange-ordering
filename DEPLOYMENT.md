# 🚀 Deployment Guide - Vercel + Supabase

## Complete Deployment in 3 Easy Steps

### Step 1: Set Up Supabase Database (5 minutes)

1. **Create Supabase Account**
   - Go to https://supabase.com
   - Sign up with GitHub or Email
   - Click "New Project"

2. **Create Database**
   - Choose a name: `orange-ordering`
   - Select region closest to you
   - Create password (save it!)
   - Click "Create new project" (wait 2-3 minutes)

3. **Import Schema**
   - In Supabase Dashboard, go to "SQL Editor"
   - Click "New Query"
   - Copy & paste content from `database/schema.sql`
   - Click "Run"

4. **Get Your Credentials**
   - Go to "Settings" → "API"
   - Copy `Project URL` (save as `SUPABASE_URL`)
   - Copy `anon public` key (save as `SUPABASE_KEY`)

### Step 2: Deploy Backend to Vercel (10 minutes)

1. **Push Code to GitHub**
   ```bash
   cd C:\Users\natta\orange-ordering
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/orange-ordering.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com
   - Sign up with GitHub
   - Click "Import Project"
   - Select `orange-ordering` repository
   - Click "Import"

3. **Add Environment Variables**
   - In Vercel Dashboard, click your project
   - Go to "Settings" → "Environment Variables"
   - Add these variables:
     ```
     SUPABASE_URL = (Your SUPABASE_URL from step 1.4)
     SUPABASE_KEY = (Your SUPABASE_KEY from step 1.4)
     JWT_SECRET = (Generate random: openssl rand -base64 32)
     ```
   - Click "Save"

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete (2-3 minutes)
   - Your backend is live! 🎉

### Step 3: Deploy Frontend to Vercel (5 minutes)

1. **Update API URL**
   - In `frontend/.env.production`:
     ```
     REACT_APP_API_URL=https://your-vercel-deployment.vercel.app/api
     ```

2. **Vercel Auto-Deploys**
   - Vercel automatically deploys when you push to GitHub
   - Your frontend is live at: `https://your-project.vercel.app` 🎉

---

## 📋 Quick Verification Checklist

- [ ] Supabase database created with schema
- [ ] GitHub repository created and code pushed
- [ ] Vercel project imported
- [ ] Environment variables added to Vercel
- [ ] Backend deploys successfully
- [ ] Frontend deploys successfully
- [ ] Test API endpoints are working
- [ ] Website loads at your Vercel URL

## 🔗 Your Live URLs

After deployment:

```
Frontend: https://your-project-name.vercel.app
Backend API: https://your-project-name.vercel.app/api
Health Check: https://your-project-name.vercel.app/api/products
```

## 🐛 Troubleshooting Deployment

| Problem | Solution |
|---------|----------|
| "Cannot find module '@supabase/supabase-js'" | Run `npm install` in api directory |
| "JWT_SECRET is undefined" | Add JWT_SECRET to Vercel Environment Variables |
| "Database connection failed" | Check SUPABASE_URL and SUPABASE_KEY are correct |
| "CORS errors" | CORS headers are already configured in api endpoints |
| "Build fails" | Check `vercel.json` is in root directory |

## 💡 Using Your Live Website

1. Go to your frontend URL
2. Browse products
3. Add oranges to cart
4. Click "Login" to test authentication
5. Click "Proceed to Checkout"

## 🔄 Making Updates

After deployment, to update your website:

```bash
# Make changes locally
git add .
git commit -m "Your changes"
git push origin main

# Vercel automatically deploys!
```

## 📊 Monitor Your Deployment

- **Vercel Dashboard**: View logs, metrics, deployments
- **Supabase Dashboard**: View database, run queries, monitor usage
- **Both free tiers** cover your mom's orange business!

## 💰 Cost Summary

- **Vercel**: Free tier (perfect for your needs)
- **Supabase**: Free tier includes:
  - 500MB database storage
  - 2GB bandwidth
  - Real-time capabilities
- **Total Cost**: $0/month 🎉

---

**Your professional Orange Ordering Website is now LIVE! 🍊**

Need help? Check the main README.md or contact Vercel/Supabase support.
