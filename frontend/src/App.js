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
    description: 'Sweet honey-like flavor, perfect for eating fresh. Sourced from the highlands of Chiang Mai.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Oranges_and_orange_juice.jpg',
    badge: '01',
  },
  {
    id: 2,
    name: 'Ocean',
    description: 'Refreshing and juicy with a crisp finish. Ideal for fresh juice and gift boxes.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Navel_Orange_and_Pera_Orange.JPG/400px-Navel_Orange_and_Pera_Orange.JPG',
    badge: '02',
  },
];

const features = [
  {
    icon: '🌿',
    title: 'Farm Fresh',
    desc: 'Handpicked directly from our orchards in Chiang Mai and delivered to your door.',
  },
  {
    icon: '📦',
    title: 'Flexible Boxes',
    desc: 'Choose 30 or 40 fruits per box in small or big sizes to suit your needs.',
  },
  {
    icon: '💌',
    title: 'Personal Touch',
    desc: 'Add a custom message to make every delivery extra special.',
  },
];

function ProductCard({ product, onAddToCart }) {
  const [boxSize, setBoxSize] = useState(30);
  const [fruitSize, setFruitSize] = useState('Small');

  const price = PRICES[boxSize][fruitSize];

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="relative">
        <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
        <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full tracking-widest">
          {product.badge}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-5 leading-relaxed">{product.description}</p>

        <div className="mb-4">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Box Size</p>
          <div className="flex gap-2">
            {[30, 40].map(size => (
              <button
                key={size}
                onClick={() => setBoxSize(size)}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold border-2 transition-all ${
                  boxSize === size
                    ? 'bg-orange-500 text-white border-orange-500'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-orange-400'
                }`}
              >
                {size} fruits
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Fruit Size</p>
          <div className="flex gap-2">
            {['Small', 'Big'].map(size => (
              <button
                key={size}
                onClick={() => setFruitSize(size)}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold border-2 transition-all ${
                  fruitSize === size
                    ? 'bg-orange-500 text-white border-orange-500'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-orange-400'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-orange-500">${price.toFixed(2)}</span>
          <button
            onClick={() => onAddToCart({ ...product, boxSize, fruitSize, price })}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-all"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

function CartPanel({ cart, onRemove, onClear, deliveryMessage, onMessageChange, onClose }) {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black bg-opacity-40" onClick={onClose} />
      <div className="relative bg-white w-full max-w-md h-full flex flex-col shadow-2xl">
        <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-900">Your Cart ({cart.length})</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl leading-none">&times;</button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-400 text-center">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between items-center bg-orange-50 p-4 rounded-xl border border-orange-100">
                  <div>
                    <p className="font-semibold text-gray-800">{item.name}</p>
                    <p className="text-gray-400 text-xs mt-1">{item.boxSize} fruits · {item.fruitSize}</p>
                    <p className="text-orange-500 font-bold mt-1">${item.price.toFixed(2)}</p>
                  </div>
                  <button
                    onClick={() => onRemove(index)}
                    className="text-gray-300 hover:text-red-400 transition text-2xl leading-none"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>

            <div className="px-6 py-4 border-t border-gray-100">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Delivery Message (optional)</label>
              <textarea
                value={deliveryMessage}
                onChange={(e) => onMessageChange(e.target.value)}
                placeholder="Add a note for your delivery..."
                rows={3}
                className="w-full px-4 py-3 border-2 border-gray-100 rounded-xl text-sm text-gray-700 focus:outline-none focus:border-orange-300 resize-none"
              />
            </div>

            <div className="px-6 py-4 border-t border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-500">Total</span>
                <span className="text-2xl font-bold text-orange-500">${totalPrice.toFixed(2)}</span>
              </div>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-bold text-base transition-all mb-2">
                Proceed to Checkout
              </button>
              <button onClick={onClear} className="w-full bg-gray-100 hover:bg-gray-200 text-gray-600 py-2 rounded-xl font-semibold text-sm transition-all">
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [deliveryMessage, setDeliveryMessage] = useState('');

  const addToCart = (product) => {
    setCart([...cart, product]);
    setCartOpen(true);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍊</span>
            <span className="text-xl font-bold text-gray-900">Orange Ordering</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#home" className="hover:text-orange-500 transition">Home</a>
            <a href="#products" className="hover:text-orange-500 transition">Products</a>
            <a href="#about" className="hover:text-orange-500 transition">About</a>
            <a href="#contact" className="hover:text-orange-500 transition">Contact</a>
          </nav>
          <button
            onClick={() => setCartOpen(true)}
            className="relative bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all"
          >
            Cart
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative bg-gradient-to-br from-orange-500 to-orange-400 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />
        <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="text-orange-100 text-sm font-semibold uppercase tracking-widest mb-3">Fresh from Chiang Mai</p>
            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              Premium Oranges<br />Delivered to<br />Your Door
            </h1>
            <p className="text-orange-100 text-lg mb-8 leading-relaxed max-w-md">
              Handpicked fresh oranges from our orchards in Chiang Mai. Choose your variety, box size, and fruit size.
            </p>
            <a
              href="#products"
              className="inline-block bg-white text-orange-500 font-bold px-8 py-3 rounded-lg hover:bg-orange-50 transition-all"
            >
              Order Now
            </a>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Oranges_and_orange_juice.jpg"
              alt="Fresh Oranges"
              className="w-80 h-80 object-cover rounded-full shadow-2xl border-4 border-white border-opacity-30"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="about" className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-orange-500 text-sm font-bold uppercase tracking-widest mb-3">Why Choose Us</p>
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">The Orange Ordering Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-orange-500 text-sm font-bold uppercase tracking-widest mb-3">Our Selection</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Choose Your Orange</h2>
          <p className="text-gray-500 mb-12 max-w-lg">Select your preferred variety, box size, and fruit size. Add a personal message and we'll include it with your delivery.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {orangeTypes.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="bg-orange-500 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-3xl font-extrabold mb-2">Have a question?</h2>
            <p className="text-orange-100">Reach out to us and we'll get back to you shortly.</p>
          </div>
          <div className="flex gap-4 flex-wrap items-center">
            <a href="mailto:info@orangeordering.com" className="bg-white text-orange-500 font-bold px-6 py-3 rounded-lg hover:bg-orange-50 transition">
              Email Us
            </a>
            <a href="tel:+6612345678" className="bg-orange-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-orange-700 transition border border-orange-300">
              Call Us
            </a>
            {/* Line */}
            <a href="#" className="bg-[#06C755] text-white w-12 h-12 rounded-lg flex items-center justify-center hover:opacity-90 transition" title="Line">
              <svg viewBox="0 0 48 48" fill="white" className="w-7 h-7">
                <path d="M24 4C12.95 4 4 11.82 4 21.5c0 6.04 3.74 11.36 9.38 14.6-.4 1.48-1.46 5.36-1.67 6.2-.27 1.06.39 1.05 .82.76.34-.22 5.39-3.66 7.57-5.14.62.09 1.26.14 1.9.14 11.05 0 20-7.82 20-17.5S35.05 4 24 4zM16.5 25.5h-4a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0v7h3a1 1 0 0 1 0 2zm4.5 0a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0v8zm8.5 0a1 1 0 0 1-.67-.26l-4.5-4v3.26a1 1 0 0 1-2 0v-8a1 1 0 0 1 1.67-.74l4.5 4V16.5a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1zm5.5 0h-4a1 1 0 0 1 0-2h1.5v-2H31a1 1 0 0 1 0-2h1.5v-2H31a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1z"/>
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" className="bg-[#1877F2] text-white w-12 h-12 rounded-lg flex items-center justify-center hover:opacity-90 transition" title="Facebook">
              <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                <path d="M24 12.073C24 5.404 18.629 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🍊</span>
              <span className="font-bold text-lg">Orange Ordering</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">Premium fresh oranges from Chiang Mai, delivered straight to your door.</p>
          </div>
          <div>
            <h4 className="font-bold text-orange-400 mb-3">Quick Links</h4>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li><a href="#home" className="hover:text-orange-400 transition">Home</a></li>
              <li><a href="#products" className="hover:text-orange-400 transition">Products</a></li>
              <li><a href="#about" className="hover:text-orange-400 transition">About</a></li>
              <li><a href="#contact" className="hover:text-orange-400 transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-orange-400 mb-3">Contact</h4>
            <p className="text-gray-400 text-sm mb-2">info@orangeordering.com</p>
            <p className="text-gray-400 text-sm mb-2">+66 12 345 678</p>
            <p className="text-gray-400 text-sm">Chiang Mai, Thailand</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 max-w-6xl mx-auto px-6">
          <p className="text-center text-gray-500 text-sm">&copy; 2026 Orange Ordering. All rights reserved.</p>
        </div>
      </footer>

      {/* Cart Slide-out */}
      {cartOpen && (
        <CartPanel
          cart={cart}
          onRemove={removeFromCart}
          onClear={() => setCart([])}
          deliveryMessage={deliveryMessage}
          onMessageChange={setDeliveryMessage}
          onClose={() => setCartOpen(false)}
        />
      )}
    </div>
  );
}
