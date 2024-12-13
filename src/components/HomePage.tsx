import { Crown, Heart, Sparkles } from 'lucide-react';
import React from 'react';

// Componente para la página de inicio
const HomePage: React.FC<{ onSelectCategory: (category: string | null) => void }> = ({ onSelectCategory }) => {
  // Categorías disponibles con sus iconos y descripciones
  const categories = [
    {
      id: 'necklaces',
      name: 'Necklaces',
      icon: <Crown className="w-12 h-12 text-pink-500" />,
      description: 'Elegant necklaces for every occasion',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f',
    },
    {
      id: 'earrings',
      name: 'Earrings',
      icon: <Sparkles className="w-12 h-12 text-pink-500" />,
      description: 'Beautiful earrings to enhance your style',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908',
    },
    {
      id: 'bracelets',
      name: 'Bracelets',
      icon: <Heart className="w-12 h-12 text-pink-500" />,
      description: 'Stunning bracelets for your wrist',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a',
    },
    /*{
      id: 'rings',
      name: 'Rings',
      icon: <Gem className="w-12 h-12 text-pink-500" />,
      description: 'Gorgeous rings for any finger',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e',
    },*/
  ];

  return (
    <div className="space-y-8">
      {/* Banner principal */}
        <div className="relative h-[600px] rounded-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1576011842375-014b58e19c27"
            alt="Luxury Accessories Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/70 via-purple-500/60 to-transparent">
            <div className="absolute inset-0 backdrop-blur-sm"></div>
            <div className="relative h-full flex flex-col items-center justify-center px-4">
              <div className="text-center space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                  Maria del Pilar
                  <span className="block text-3xl md:text-4xl mt-2 font-light">
                    Accesorios Exclusivos
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light">
                  Descubre nuestra colección de accesorios únicos que realzarán tu elegancia natural
                </p>
                <div className="pt-4">
                  <button 
                    onClick={() => onSelectCategory(null)}
                    className="bg-white/90 hover:bg-white text-pink-600 px-8 py-3 rounded-full 
                            text-lg font-medium transform transition-all hover:scale-105 
                            hover:shadow-lg"
                  >
                    Explorar Colección
                  </button>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-48 h-24 
                            bg-white/10 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>
      {/* Sección de categorías */}
<div className="container mx-auto px-4 py-12">
  <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
    Busca por categoria
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
    {categories.map((category) => (
      <button
        key={category.id}
        onClick={() => onSelectCategory(category.id)}
        className="group relative w-full h-64 rounded-xl overflow-hidden transition-transform hover:scale-105 shadow-md"
      >
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent group-hover:from-pink-500/70 transition-colors">
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="mb-2">{category.icon}</div>
            <h3 className="text-xl font-bold mb-1">{category.name}</h3>
            <p className="text-sm opacity-90">{category.description}</p>
          </div>
        </div>
      </button>
    ))}
  </div>
</div>

      {/* Sección de destacados */}
      <div className="bg-pink-50 rounded-xl p-8 mt-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Por que elegirnos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <Crown className="w-10 h-10 text-pink-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Calidad Premiun</h3>
            <p className="text-gray-600">Only the finest materials and craftsmanship</p>
          </div>
          <div className="text-center">
            <div className="bg-white p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <Heart className="w-10 h-10 text-pink-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Diseños Unicos</h3>
            <p className="text-gray-600">Handcrafted pieces that stand out</p>
          </div>
          <div className="text-center">
            <div className="bg-white p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <Sparkles className="w-10 h-10 text-pink-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Servicio Excelente</h3>
            <p className="text-gray-600">Customer satisfaction guaranteed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;