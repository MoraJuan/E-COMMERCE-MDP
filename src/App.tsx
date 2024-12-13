import React, { useState } from 'react';
import { Product, CartItem, AppState } from './types';
import { ADMIN_CREDENTIALS } from './utils/constants';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ProductGrid from './components/ProductGrid';
import AdminPanel from './components/AdminPanel';
import CartModal from './components/CartModal';
import LoginModal from './components/LoginModal';

const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Crystal Necklace',
    price: 29.99,
    description: 'Beautiful crystal necklace with silver chain',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f',
    category: 'necklaces',
  },
];

function App() {
  const [state, setState] = useState<AppState>({
    products: initialProducts,
    cart: [],
    isAdmin: false,
    isCartOpen: false,
    showLogin: false,
  });

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Cart handlers
  const toggleCart = () => {
    setState((prev) => ({ ...prev, isCartOpen: !prev.isCartOpen }));
  };

  const addToCart = (product: Product) => {
    setState((prev) => {
      const existingItem = prev.cart.find((item) => item.id === product.id);
      if (existingItem) {
        return {
          ...prev,
          cart: prev.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...prev,
        cart: [...prev.cart, { ...product, quantity: 1 }],
      };
    });
  };

  const removeFromCart = (id: string) => {
    setState((prev) => ({
      ...prev,
      cart: prev.cart.filter((item) => item.id !== id),
    }));
  };

  const updateCartQuantity = (id: string, quantity: number) => {
    setState((prev) => ({
      ...prev,
      cart: quantity === 0
        ? prev.cart.filter((item) => item.id !== id)
        : prev.cart.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
    }));
  };

  // Admin handlers
  const handleAdminClick = () => {
    if (!state.isAdmin) {
      setState((prev) => ({ ...prev, showLogin: true }));
    } else {
      setState((prev) => ({ ...prev, isAdmin: false }));
      setSelectedCategory(null);
    }
  };

  const handleLogin = (username: string, password: string) => {
    if (
      username === ADMIN_CREDENTIALS.username &&
      password === ADMIN_CREDENTIALS.password
    ) {
      setState((prev) => ({
        ...prev,
        isAdmin: true,
        showLogin: false,
      }));
    }
  };

  const addProduct = (product: Product) => {
    setState((prev) => ({
      ...prev,
      products: [...prev.products, product],
    }));
  };

  const deleteProduct = (id: string) => {
    setState((prev) => ({
      ...prev,
      products: prev.products.filter((p) => p.id !== id),
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        isAdmin={state.isAdmin}
        cartItems={state.cart.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={toggleCart}
        onAdminClick={handleAdminClick}
      />

      <main className="container mx-auto px-4 py-8">
        {state.isAdmin ? (
          <AdminPanel onAddProduct={addProduct} />
        ) : selectedCategory === null ? (
          <HomePage onSelectCategory={setSelectedCategory} />
        ) : (
          <ProductGrid
            products={state.products}
            category={selectedCategory}
            isAdmin={state.isAdmin}
            onDelete={deleteProduct}
            onAddToCart={addToCart}
            onBack={() => setSelectedCategory(null)}
          />
        )}
      </main>

      {state.isCartOpen && (
        <CartModal
          isOpen={state.isCartOpen}
          onClose={toggleCart}
          items={state.cart}
          onRemove={removeFromCart}
          onUpdateQuantity={updateCartQuantity}
        />
      )}

      {state.showLogin && (
        <LoginModal
          onClose={() => setState((prev) => ({ ...prev, showLogin: false }))}
          onLogin={handleLogin}
        />
      )}
    </div>
  );
}

export default App;