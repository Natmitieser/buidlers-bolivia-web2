'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo/Logo';
import siteConfig from '@/data/site-config.json';
import styles from './Navbar.module.css';

interface NavItem {
    label: string;
    href: string;
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logoLink} onClick={() => setIsOpen(false)}>
                    <Logo />
                </Link>

                <button
                    className={styles.hamburger}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation"
                >
                    <span className={`${styles.bar} ${isOpen ? styles.barOpen : ''}`} />
                    <span className={`${styles.bar} ${isOpen ? styles.barOpen : ''}`} />
                    <span className={`${styles.bar} ${isOpen ? styles.barOpen : ''}`} />
                </button>

                <div className={`${styles.links} ${isOpen ? styles.linksOpen : ''}`}>
                    {(siteConfig.navigation as NavItem[]).map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={styles.link}
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
