const express = require('express');
const router = express.Router();
const carts = {};

router.get('/:userId', (req, res) => {
  try {
    const cart = carts[req.params.userId] || [];
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/:userId', (req, res) => {
  try {
    const { userId } = req.params;
    const { productId, name, price, quantity } = req.body;
    if (!carts[userId]) carts[userId] = [];
    const existingItem = carts[userId].find(item => item.productId === productId);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      carts[userId].push({ productId, name, price, quantity });
    }
    res.json(carts[userId]);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:userId/:productId', (req, res) => {
  try {
    const { userId, productId } = req.params;
    if (carts[userId]) {
      carts[userId] = carts[userId].filter(item => item.productId !== productId);
    }
    res.json(carts[userId] || []);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:userId', (req, res) => {
  try {
    const { userId } = req.params;
    carts[userId] = [];
    res.json({ message: 'Cart cleared' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
