import { useState } from 'react';
import './App.css';

const PRICES = {
  30: { Small: 12.99, Big: 15.99 },
  40: { Small: 16.99, Big: 20.99 },
};

const orangeTypes = [
  {
    id: 1,
    name: 'Sai Nam Phueng',
    description: 'Sweet honey-like flavor, perfect for eating fresh',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Oranges_and_orange_juice.jpg',
  },
  {
    id: 2,
    name: 'Ocean',
    description: 'Refreshing and juicy, great for juice',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Navel_Orange_and_Pera_Orange.JPG/400px-Navel_Orange_and_Pera_Orange.JPG',
  },
];

function ProductCard({ product, onAddToCart }) {
  const [boxSize, setBoxSize] = useState(30);
  const [fruitSize, setFruitSize] = useState('Small');

  const price = PRICES[boxSize][fruitSize];

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 p-6 border-2 border-orange-100">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4 text-sm">{product.description}</p>

      <div className="mb-3">
        <p className="text-sm font-semibold text-gray-700 mb-1">Box Size</p>
        <div className="flex gap-2">
          {[30, 40].map(size => (
            <button
              key={size}
              onClick={() => setBoxSize(size)}
              className={`flex-1 py-1 rounded-lg text-sm font-semibold border-2 transition ${
                boxSize === size
                  ? 'bg-orange-600 text-white border-orange-600'
                  : 'bg-white text-orange-600 border-orange-300 hover:border-orange-600'
              }`}
            >
              {size} fruits
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm font-semibold text-gray-700 mb-1">Fruit Size</p>
        <div className="flex gap-2">
          {['Small', 'Big'].map(size => (
            <button
              key={size}
              onClick={() => setFruitSize(size)}
              className={`flex-1 py-1 rounded-lg text-sm font-semibold border-2 transition ${
                fruitSize === size
                  ? 'bg-orange-600 text-white border-orange-600'
                  : 'bg-white text-orange-600 border-orange-300 hover:border-orange-600'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-orange-600">${price.toFixed(2)}</span>
        <button
          onClick={() => onAddToCart({ ...product, boxSize, fruitSize, price })}
          className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-semibold transition transform hover:scale-105"
        >
          Add
        </button>
      </div>
    </div>
  );
}

function App() {
  const [cart, setCart] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [deliveryMessage, setDeliveryMessage] = useState('');

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleLogin = (name) => {
    setCurrentUser(name);
    setShowLogin(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-3xl">🍊</span>
            <h1 className="text-3xl font-bold">Orange Ordering</h1>
          </div>
          <div className="flex items-center space-x-4">
            {currentUser ? (
              <div className="flex items-center space-x-3">
                <span className="text-white">👤 {currentUser}</span>
                <button
                  onClick={() => setCurrentUser(null)}
                  className="bg-white text-orange-600 px-3 py-1 rounded-lg font-semibold hover:bg-orange-100 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowLogin(!showLogin)}
                className="bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold hover:bg-orange-100 transition"
              >
                Login
              </button>
            )}
            <button
              onClick={() => {}}
              className="bg-yellow-300 text-orange-600 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition relative"
            >
              🛒 ({cart.length})
            </button>
          </div>
        </div>

        {showLogin && !currentUser && (
          <div className="bg-orange-700 px-4 py-4">
            <div className="max-w-6xl mx-auto flex space-x-4">
              <input type="email" placeholder="Email" className="px-3 py-2 rounded-lg text-gray-800 flex-1" />
              <input type="password" placeholder="Password" className="px-3 py-2 rounded-lg text-gray-800 flex-1" />
              <button
                onClick={() => handleLogin('Guest')}
                className="bg-yellow-300 text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
              >
                Sign In
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Products */}
          <div className="lg:col-span-3">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">Fresh Oranges</h2>
            <p className="text-gray-600 mb-8">Handpicked premium quality oranges delivered to your door</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {orangeTypes.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
              ))}
            </div>
          </div>

          {/* Cart Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-orange-200 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">🛒 Cart</h3>
              {cart.length === 0 ? (
                <p className="text-gray-600 text-center py-8">Your cart is empty</p>
              ) : (
                <>
                  <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                    {cart.map((item, index) => (
                      <div key={index} className="flex justify-between items-center bg-orange-50 p-3 rounded-lg border border-orange-200">
                        <div>
                          <p className="font-semibold text-gray-800 text-sm">{item.name}</p>
                          <p className="text-gray-500 text-xs">{item.boxSize} fruits · {item.fruitSize}</p>
                          <p className="text-orange-600 font-bold">${item.price.toFixed(2)}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(index)}
                          className="text-red-500 hover:text-red-700 font-bold text-xl w-6 h-6 flex items-center justify-center"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Delivery Message (optional)</label>
                    <textarea
                      value={deliveryMessage}
                      onChange={(e) => setDeliveryMessage(e.target.value)}
                      placeholder="Add a message for your delivery..."
                      className="w-full px-3 py-2 border-2 border-orange-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-orange-400 resize-none"
                      rows={3}
                    />
                  </div>

                  <div className="border-t-2 border-orange-300 pt-4 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-800">Total:</span>
                      <span className="text-2xl font-bold text-orange-600">${totalPrice.toFixed(2)}</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white py-3 rounded-lg font-bold text-lg transition transform hover:scale-105">
                    Proceed to Checkout
                  </button>
                  <button
                    onClick={() => setCart([])}
                    className="w-full mt-2 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg font-semibold transition"
                  >
                    Clear Cart
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-3 text-orange-400">🍊 Orange Ordering</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Premium fresh oranges delivered straight to your door. Supporting local farmers and sustainable agriculture.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3 text-orange-400">Quick Links</h4>
              <ul className="text-gray-400 space-y-2 text-sm">
                <li><a href="/" className="hover:text-orange-400 transition">About Us</a></li>
                <li><a href="/" className="hover:text-orange-400 transition">Contact</a></li>
                <li><a href="/" className="hover:text-orange-400 transition">Shipping Info</a></li>
                <li><a href="/" className="hover:text-orange-400 transition">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3 text-orange-400">Contact</h4>
              <p className="text-gray-400 text-sm mb-2">📧 info@orangeordering.com</p>
              <p className="text-gray-400 text-sm mb-2">📞 (555) 123-4567</p>
              <p className="text-gray-400 text-sm">🕐 Mon-Fri: 9AM-6PM EST</p>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-gray-400 text-sm">&copy; 2026 Orange Ordering. All rights reserved. | Made with ❤️ for your orange business</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
