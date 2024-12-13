import React from 'react';
import { X, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

// Componente para el carrito de compras
const Cart: React.FC<{
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
}> = ({ items, onRemove, onUpdateQuantity }) => {
  // Calcula el total del carrito
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-6">
        <ShoppingBag className="text-pink-600" />
        <h2 className="text-2xl font-bold text-gray-800">Shopping Cart</h2>
      </div>

      {items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <>
          {/* Lista de productos en el carrito */}
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-pink-600">${item.price}</p>
                  
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                      className="px-2 py-1 bg-gray-100 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 bg-gray-100 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <button
                  onClick={() => onRemove(item.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  <X size={20} />
                </button>
              </div>
            ))}
          </div>

          {/* Total y botón de checkout */}
          <div className="mt-6">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            
            <button className="w-full mt-4 bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;