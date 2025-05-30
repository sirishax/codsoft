import React, { useState } from 'react';
import { FiMenu, FiShoppingCart, FiUser } from 'react-icons/fi';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-orange-500">SneakerZone</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="nav-link">Home</a>
              <a href="#" className="nav-link">Collection</a>
              <a href="#" className="nav-link">About</a>
              <a href="#" className="nav-link">Contact</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <FiShoppingCart className="h-6 w-6 cursor-pointer hover:text-orange-500" />
              <FiUser className="h-6 w-6 cursor-pointer hover:text-orange-500" />
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <FiMenu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 nav-link">Home</a>
              <a href="#" className="block px-3 py-2 nav-link">Collection</a>
              <a href="#" className="block px-3 py-2 nav-link">About</a>
              <a href="#" className="block px-3 py-2 nav-link">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Step into <span className="text-orange-500">Greatness</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Discover our latest collection of premium sneakers designed for style and comfort.
              </p>
              <button className="btn-primary">
                Shop Now
              </button>
            </div>
            <div className="relative">
              <img
                src="/images/pexels-mnz-1598505.jpg"
                alt="Featured Sneaker"
                className="w-full h-auto transform rotate-[-25deg] hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-4">
                <img src="/images/photo-1552346154-21d32810aba3.jpg" alt="Sneaker 1" className="w-full h-auto" />
                <h3 className="text-xl font-semibold mt-4">Air Max Supreme</h3>
                <p className="text-gray-600 mt-2">$199.99</p>
                <button className="w-full btn-primary mt-4">Add to Cart</button>
              </div>
            </div>
            
            {/* Product Card 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-4">
                <img src="/images/th.jpg" alt="Sneaker 2" className="w-full h-auto" />
                <h3 className="text-xl font-semibold mt-4">Ultra Boost Pro</h3>
                <p className="text-gray-600 mt-2">$179.99</p>
                <button className="w-full btn-primary mt-4">Add to Cart</button>
              </div>
            </div>
            
            {/* Product Card 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-4">
                <img src="/images/th (1).jpg" alt="Sneaker 3" className="w-full h-auto" />
                <h3 className="text-xl font-semibold mt-4">Zoom Elite X</h3>
                <p className="text-gray-600 mt-2">$159.99</p>
                <button className="w-full btn-primary mt-4">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-orange-500 text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">On orders over $100</p>
            </div>
            <div className="p-6">
              <div className="text-orange-500 text-4xl mb-4">↩️</div>
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600">30-day return policy</p>
            </div>
            <div className="p-6">
              <div className="text-orange-500 text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">100% secure checkout</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Join Our Newsletter</h2>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none"
              />
              <button className="px-8 py-3 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">SneakerZone</h3>
              <p className="text-gray-400">Your premium sneaker destination.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">Collection</a></li>
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Help</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Shipping</a></li>
                <li><a href="#" className="hover:text-white">Returns</a></li>
                <li><a href="#" className="hover:text-white">Sizing</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@sneakerzone.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Address: 123 Sneaker St, NY</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 SneakerZone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;