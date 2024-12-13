import { ArrowLeft } from 'lucide-react';
import React, { useState } from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

const ProductGrid: React.FC<{
  products: Product[];
  category: string | null;
  isAdmin: boolean;
  onDelete: (id: string) => void;
  onAddToCart: (product: Product) => void;
  onBack: () => void;
}> = ({ products, category, isAdmin, onDelete, onAddToCart, onBack }) => {
  // Filtra los productos por categoría si hay una seleccionada
  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  // Nuevo estado para el producto seleccionado
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Maneja la selección de un producto
  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  // Maneja el cierre de la vista de detalle
  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-pink-600"
        >
          <ArrowLeft size={20} />
          Back to Categories
        </button>
        {category && (
          <h2 className="text-2xl font-bold text-gray-800 capitalize">
            {category}
          </h2>
        )}
      </div>

      {!selectedProduct ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isAdmin={isAdmin}
              onDelete={onDelete}
              onAddToCart={onAddToCart}
              onSelect={() => handleSelectProduct(product)} // Nueva prop
            />
          ))}
        </div>
      ) : (
        // Vista detallada del producto seleccionado
        <div className="bg-white p-6 rounded-lg shadow-md">
          <button
            onClick={handleCloseDetail}
            className="text-gray-600 hover:text-pink-600 mb-4"
          >
            <ArrowLeft size={20} /> Back to Products
          </button>
          <div className="flex flex-col md:flex-row">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full md:w-1/2 h-64 object-cover rounded-lg"
            />
            <div className="md:ml-6 mt-4 md:mt-0">
              <h3 className="text-2xl font-bold text-gray-800">{selectedProduct.name}</h3>
              <p className="text-pink-600 font-semibold mt-2">${selectedProduct.price}</p>
              <p className="text-gray-600 mt-4">{selectedProduct.description}</p>
              <button
                onClick={() => onAddToCart(selectedProduct)}
                className="mt-6 bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;