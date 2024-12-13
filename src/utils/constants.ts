// Credenciales de administrador (en un caso real, esto estaría en el backend)
export const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin123',
} as const;

export const CATEGORIES = [
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Elegant necklaces for every occasion',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f',
  },
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Beautiful earrings to enhance your style',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908',
  },
  {
    id: 'bracelets',
    name: 'Bracelets',
    description: 'Stunning bracelets for your wrist',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a',
  },
  /*{
    id: 'rings',
    name: 'Rings',
    description: 'Gorgeous rings for any finger',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e',
  },*/
] as const;