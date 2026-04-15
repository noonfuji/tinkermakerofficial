import Image from 'next/image';
import { Product } from '@/types';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
  variant?: 'drawing' | 'shop';
  animationDelay?: string;
}

export default function ProductCard({ product, variant = 'drawing', animationDelay }: ProductCardProps) {
  if (variant === 'shop') {
    return (
      <div className={styles.shopCard} style={animationDelay ? { animationDelay } : undefined}>
        <div className={styles.shopImgWrap}>
          <Image
            src={product.productImage}
            alt={product.name}
            width={400}
            height={300}
            style={{ width: '120%', height: '120%', objectFit: 'contain' }}
          />
        </div>
        <div className={styles.productInfo}>
          <div className={styles.shopName}>{product.name}</div>
          <div className={styles.price}>${product.price.toFixed(2)}</div>
          <button className={styles.shopCartBtn}>Add to Cart</button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.card} style={animationDelay ? { animationDelay } : undefined}>
      <div className={styles.imgWrap}>
        <Image
          src={product.drawingImage}
          alt={product.name}
          width={300}
          height={280}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>
      <div className={styles.cardBottom}>
        <div className={styles.cardInfo}>
          <div className={styles.name}>{product.name}</div>
          <div className={styles.description}>Short Description</div>
        </div>
        <button className={styles.cartIconBtn}>
          <svg viewBox="0 0 24 24">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
