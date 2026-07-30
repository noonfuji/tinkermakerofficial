import Image from 'next/image';
import styles from './FeaturesBanner.module.css';

const features = [
  {
    icon: '/images/icons/no-glue.png',
    title: 'No Glue/Tool',
    desc: 'Snap-fit parts — no mess, no fuss',
    alt: 'No glue needed',
  },
  {
    icon: '/images/icons/diy.png',
    title: 'Self Assembly',
    desc: 'Assemble everything by yourself',
    alt: 'DIY',
  },
  {
    icon: '/images/icons/transparent.png',
    title: 'Transparent Design',
    desc: 'See how all components move and work together',
    alt: 'STEM learning',
  },
  {
    icon: '/images/icons/educational.png',
    title: 'Educational',
    desc: 'Learn physics and engineering in a fun way',
    alt: 'Creative thinking',
  },
];

interface FeaturesBannerProps {
  variant?: 'inline' | 'banner';
}

export default function FeaturesBanner({ variant = 'inline' }: FeaturesBannerProps) {
  if (variant === 'banner') {
    return (
      <div className={styles.banner}>
        <div className={styles.bannerFeatures}>
          {features.map((f) => (
            <div key={f.title} className={styles.featureItem}>
              <Image className={styles.bannerImg} src={f.icon} alt={f.alt} width={80} height={80} />
              <div className={styles.featureText}>
                <div className={styles.featureTitle}>{f.title}</div>
                <div className={styles.featureDesc}>{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.features}>
      {features.map((f) => (
        <div key={f.title} className={styles.featureItem}>
          <Image className={styles.featureImg} src={f.icon} alt={f.alt} width={120} height={120} />
          <div className={styles.featureText}>
            <div className={styles.featureTitle}>{f.title}</div>
            <div className={styles.featureDesc}>{f.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
