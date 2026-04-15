'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Shop' },
    { href: '#', label: 'About' },
    { href: '#', label: 'Resources' },
    { href: '#', label: 'FAQ' },
  ];

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <Image src="/logo/logo.png" alt="Tinker Maker Logo" width={200} height={80} style={{ height: '100%', width: 'auto', objectFit: 'contain' }} />
      </Link>

      <ul className={styles.navLinks}>
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={pathname === link.href ? styles.active : ''}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <button className={styles.cartBtn}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
        <div className={styles.cartIcon}>2</div>
      </button>
    </nav>
  );
}
