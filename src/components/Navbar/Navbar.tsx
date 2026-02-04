'use client';

import Link from 'next/link';
import Logo from '@/components/Logo/Logo';
import siteConfig from '@/data/site-config.json';
import styles from './Navbar.module.css';

interface NavItem {
    label: string;
    href: string;
}

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logoLink}>
                    <Logo />
                </Link>
                <div className={styles.links}>
                    {(siteConfig.navigation as NavItem[]).map((item) => (
                        <Link key={item.label} href={item.href} className={styles.link}>
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
