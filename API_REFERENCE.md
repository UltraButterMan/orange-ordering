# API Service for Vercel Functions

This file contains the updated API calls for the new Vercel Functions + Supabase setup.

```javascript
// api/orangeAPI.js

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

// Products API
export const getProducts = async () => {
  const response = await fetch(`${API_URL}/products`);
  return response.json();
};

export const createProduct = async (productData) => {
  const response = await fetch(`${API_URL}/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(productData)
  });
  return response.json();
};

// Users API
export const registerUser = async (name, email, password) => {
  const response = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'register', name, email, password })
  });
  return response.json();
};

export const loginUser = async (email, password) => {
  const response = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'login', email, password })
  });
  return response.json();
};

export const getUserProfile = async (userId, token) => {
  const response = await fetch(`${API_URL}/users?userId=${userId}`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  return response.json();
};

// Orders API
export const createOrder = async (orderData, token) => {
  const response = await fetch(`${API_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(orderData)
  });
  return response.json();
};

export const getUserOrders = async (userId, token) => {
  const response = await fetch(`${API_URL}/orders?userId=${userId}`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  return response.json();
};

export const updateOrder = async (orderId, updates, token) => {
  const response = await fetch(`${API_URL}/orders`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ id: orderId, ...updates })
  });
  return response.json();
};

// Cart API
export const getCart = async (userId, token) => {
  const response = await fetch(`${API_URL}/cart?userId=${userId}`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  return response.json();
};

export const addToCart = async (userId, item, token) => {
  const response = await fetch(`${API_URL}/cart?userId=${userId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(item)
  });
  return response.json();
};

export const removeFromCart = async (userId, productId, token) => {
  const response = await fetch(`${API_URL}/cart?userId=${userId}&productId=${productId}`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${token}` }
  });
  return response.json();
};
```

## Integration with React Component

In your React components, import and use these functions:

```javascript
import { getProducts, loginUser, addToCart } from './api/orangeAPI';

// Example: Get products
const fetchProducts = async () => {
  try {
    const data = await getProducts();
    setProducts(data);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

// Example: Login
const handleLogin = async (email, password) => {
  try {
    const { token, user } = await loginUser(email, password);
    localStorage.setItem('token', token);
    setCurrentUser(user);
  } catch (error) {
    console.error('Login failed:', error);
  }
};

// Example: Add to cart
const handleAddToCart = async (product) => {
  try {
    const userId = getCurrentUserId(); // Get from auth state
    const token = localStorage.getItem('token');
    await addToCart(userId, product, token);
    setCart([...cart, product]);
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
};
```

## Environment Variables

Create `.env.local` in the frontend directory:

```
REACT_APP_API_URL=http://localhost:3000/api     (development)
REACT_APP_API_URL=https://your-domain.vercel.app/api  (production)
```
