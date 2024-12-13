import { ShoppingBag, User } from 'lucide-react';
import React from 'react';

interface NavbarProps {
  isAdmin: boolean;
  cartItems: number;
  onCartClick: () => void;
  onAdminClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  isAdmin,
  cartItems,
  onCartClick,
  onAdminClick,
}) => {
  return (
    <nav className="bg-gradient-to-r from-pink-50 to-purple-50 border-b border-pink-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-serif tracking-wide text-gray-800">
            <span className="text-pink-600 font-medium">Maria del Pilar</span>
            <span className="block text-sm font-light tracking-widest text-gray-600">ACCESORIOS EXCLUSIVOS</span>
          </h1>
          
          <div className="flex items-center gap-6">
            <button
              onClick={onAdminClick}
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-pink-600 
                       transition-colors duration-200 rounded-full hover:bg-white/80"
            >
              <User className="w-5 h-5" />
              <span className="text-sm font-medium">
                {isAdmin ? 'Admin Mode' : 'Login'}
              </span>
            </button>
            
            {!isAdmin && (
              <button
                onClick={onCartClick}
                className="relative p-2 text-gray-600 hover:text-pink-600 
                         transition-colors duration-200 rounded-full hover:bg-white/80"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink-500 text-white 
                                rounded-full w-5 h-5 flex items-center justify-center 
                                text-xs font-medium shadow-sm">
                    {cartItems}
                  </span>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;