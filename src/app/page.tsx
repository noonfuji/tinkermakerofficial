import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import FeaturesBanner from '@/components/FeaturesBanner';
import { products } from '@/lib/products';
import styles from './page.module.css';

const reviews = [
  {
    stars: '\u2B50\u2B50\u2B50\u2B50\u2B50',
    text: '"Really creative gift for kids. Got it for my nephew for fun & learning - 2 birds w 1 stone! \uD83E\uDD73\uD83E\uDD73\uD83E\uDD73"',
    avatar: '\uD83D\uDC72\uD83C\uDFFB',
    name: 'Nani',
    delay: '0.1s',
  },
  {
    stars: '\u2B50\u2B50\u2B50\u2B50\u2B50',
    text: '"The item is very well designed. My son loved assemble the cannon kit with his dad. He was super curious and kept asking questions about how it works. The item also looks great as a home decor piece!"',
    avatar: '\uD83D\uDC69',
    name: 'Kieranna',
    delay: '0.22s',
  },
  {
    stars: '\u2B50\u2B50\u2B50\u2B50\u2B50',
    text: '"Super cute and well made! Perfect for Christmas or any occasion, and a great choice for anyone with mechanical leanings. Highly recommend!"',
    avatar: '\uD83D\uDC81\uD83C\uDFFB\u200D\u2640\uFE0F',
    name: 'Lin',
    delay: '0.34s',
  },
];

const showcaseProducts = products.filter((p) => p.productImage).slice(0, 3);

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <h1>
          <span>Physics</span> and <span>Engineering</span> Toys <br />
           for the <span>Curious</span> Minds
        </h1>
      </section>

      {/* PRODUCTS SHOWCASE */}
      <section className={styles.productsSection}>
        <div className={styles.productsGrid}>
          {showcaseProducts.map((product, i) => (
            <ProductCard
              key={product.slug}
              product={product}
              variant="drawing"
              animationDelay={`${0.1 + i * 0.15}s`}
            />
          ))}
        </div>
        {/* <Link href="/products" className="btn-pink" style={{ marginTop: '36px' }}>View All Products</Link> */}
        <a href="https://www.etsy.com/shop/TinkerMakerStore" className="btn-pink" style={{ marginTop: '36px' }} target="_blank" rel="noopener noreferrer">
          View All Products
        </a>
      </section>

      {/* FEATURES */}
      <section className={styles.featuresSection}>
        <FeaturesBanner variant="inline" />
      </section>

      {/* ABOUT */}
      <section>
        <div className={styles.about}>
          <div className={styles.aboutText}>
            <h2><span>Who We Are</span></h2>
            <p style={{ marginBottom: '24px' }}>At Tinker Maker, we want to make learning physics and engineering more fun! 
              We make mechanical toys for the curious minds under the concept of <strong><em>Uncover Everyday Mechanisms</em></strong>. 
              Our goal is to help people have a better understanding of the physical world around them.</p>
            <h2><span>Our Mission</span></h2>
            <p>1. Learning without screens - We want to get people excited about learning physics and engineering in our 
              everyday life. Our toys enable people to spend their time learning without being online.</p>
            <p>2. Creating a repair culture - We hope that a better understanding of the physical world will empower people with 
              the knowledge and confidence to fix many of the items around them instead of purchasing 
              new ones, creating a repair culture.</p>
          </div>
          <div className={styles.aboutVideo}>
            <div className={styles.aboutVideoInner}>
              <iframe
                src="https://www.youtube.com/embed/mEuVkCxzKHU"
                title="Tinker Maker Short"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className={styles.reviews}>
        <h2>See what our customers are saying!</h2>
        <div className={styles.reviewsGrid}>
          {reviews.map((review) => (
            <div key={review.name} className={styles.reviewCard} style={{ animationDelay: review.delay }}>
              <div className={styles.stars}>{review.stars}</div>
              <p className={styles.reviewText}>{review.text}</p>
              <div className={styles.reviewer}>
                <div className={styles.reviewerAvatar}>{review.avatar}</div>
                <span className={styles.reviewerName}>{review.name}</span>
              </div>
            </div>
          ))}
        </div>
        <a href="https://www.etsy.com/shop/TinkerMakerStore#reviews" className="btn-primary" target="_blank" rel="noopener noreferrer">
          Read All Reviews on Etsy
        </a>
      </section>
    </>
  );
}
