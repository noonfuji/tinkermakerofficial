import { Product } from '@/types';

export const products: Product[] = [
  {
    slug: 'cannon-blast',
    name: 'Cannon Blast',
    price: 29.99,
    drawingImage: '/images/cannon-drawing.png',
    productImage: '/images/products/cannon.jpg',
  },
  {
    slug: 'wind-up-car',
    name: 'Wind Up Car',
    price: 29.99,
    drawingImage: '/images/windupcar-drawing.png',
    productImage: '/images/products/beetle-car.jpg',
  },
  {
    slug: 'ferris-wheel',
    name: 'Ferris Wheel',
    price: 34.99,
    drawingImage: '/images/ferriswheel-drawing.png',
    productImage: '/images/products/rocket-ferris-wheel.jpg',
  },
  {
    slug: 'train-set',
    name: 'Train Set',
    price: 29.99,
    drawingImage: '',
    productImage: '/images/products/train-set.JPG',
  },
];
