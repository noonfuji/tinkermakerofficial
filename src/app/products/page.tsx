import ProductCard from '@/components/ProductCard';
import FeaturesBanner from '@/components/FeaturesBanner';
import { products } from '@/lib/products';
import styles from './page.module.css';

export default function ProductsPage() {
  return (
    <>
      <FeaturesBanner variant="banner" />

      <div className={styles.pageHeader}>
        <h1>All Products</h1>
        <p>Pick a kit, build it yourself, and see the physics come to life.</p>
      </div>

      <section className={styles.shopSection}>
        <div className={styles.productsGrid}>
          {products.map((product, i) => (
            <ProductCard
              key={product.slug}
              product={product}
              variant="shop"
              animationDelay={`${0.05 + i * 0.05}s`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
