import Link from 'next/link';
import Image from 'next/image';
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

const showcaseProducts = products.filter((p) => p.drawingImage).slice(0, 3);

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <h1>
          Welcome to<br />
          a World Where <span>Curiosity</span> Comes to <span>Life</span>
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
      </section>

      {/* TAGLINE */}
      <section className={styles.tagline}>
        <div className={styles.taglineContent}>
          <div className={styles.taglineLeft}>
            {/* Paper plane decoration */}
            <svg className={styles.paperPlane} viewBox="0 0 64 64" fill="none" stroke="var(--pink-light)" strokeWidth="2">
              <path d="M6 34L58 6 38 58 30 36z" />
              <path d="M30 36L58 6" />
            </svg>
            <h2>
              <span>Physics</span> and <span>Engineering</span> Toys<br />
              for the <span>Curious Mind</span>
            </h2>
          </div>
          <Image
            className={styles.taglineIllustration}
            src="/images/windupcar-drawing.png"
            alt="Wind up car illustration"
            width={350}
            height={250}
          />
        </div>
        {/* Wave divider */}
        <div className={styles.waveDivider}>
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,120 C360,40 720,100 1440,20 L1440,120 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ABOUT */}
      <section>
        <div className={styles.about}>
          <div className={styles.aboutImage}>
            <Image
              src="/images/products/cannon.jpg"
              alt="Tinker Maker product"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.aboutText}>
            <h2>This is <span>Tinker Maker!</span></h2>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className={styles.featuresSection}>
        <FeaturesBanner variant="inline" />
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
