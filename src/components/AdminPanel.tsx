import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Product } from '../types';

// Componente para el panel de administración
const AdminPanel: React.FC<{ onAddProduct: (product: Product) => void }> = ({ onAddProduct }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
    category: '',
  });

  // Manejador para enviar el formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddProduct({
      id: Date.now().toString(),
      ...formData,
      price: parseFloat(formData.price),
    });
    setFormData({ name: '', price: '', description: '', image: '', category: '' });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Product</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Campos del formulario */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Product Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-200"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Price</label>
          <input
            type="number"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-200"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-200"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            type="url"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-200"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring focus:ring-pink-200"
            required
          >
            <option value="">Select a category</option>
            <option value="necklaces">Necklaces</option>
            <option value="earrings">Earrings</option>
            <option value="bracelets">Bracelets</option>
            <option value="rings">Rings</option>
          </select>
        </div>
        
        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 flex items-center justify-center gap-2"
        >
          <Plus size={18} />
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;