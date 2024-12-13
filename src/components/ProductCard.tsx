import { ShoppingCart, Trash2 } from 'lucide-react';
import { Product } from '../types';

const ProductCard: React.FC<{
  product: Product;
  isAdmin: boolean;
  onDelete: (id: string) => void;
  onAddToCart: (product: Product) => void;
  onSelect: () => void; // Nueva prop
}> = ({ product, isAdmin, onDelete, onAddToCart, onSelect }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover cursor-pointer"
        onClick={onSelect} // Manejar la selección al hacer clic en la imagen
      />
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{product.description}</p>
        <p className="text-pink-600 font-bold mt-2">${product.price}</p>
        
        <div className="mt-4 flex justify-between">
          {isAdmin ? (
            <button
              onClick={() => onDelete(product.id)}
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 flex items-center gap-2"
            >
              <Trash2 size={18} />
              Delete
            </button>
          ) : (
            <button
              onClick={() => onAddToCart(product)}
              className="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 flex items-center gap-2"
            >
              <ShoppingCart size={18} />
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;