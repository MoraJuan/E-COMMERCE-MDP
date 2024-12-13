// Definición de tipos para los productos y el carrito
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Admin {
  username: string;
  password: string;
}

// Estado global de la aplicación
export interface AppState {
  products: Product[];
  cart: CartItem[];
  isAdmin: boolean;
  isCartOpen: boolean;
  showLogin: boolean;
}