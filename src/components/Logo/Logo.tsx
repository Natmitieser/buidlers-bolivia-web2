import Image from 'next/image';
import styles from './Logo.module.css';

interface LogoProps {
    className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
    return (
        <div className={`${styles.wrapper} ${className}`}>
            <Image
                src="/brand-logo.png?v=final2"
                alt="Buidlers Bolivia"
                width={180}
                height={60}
                className={styles.image}
                priority
                unoptimized
            />
        </div>
    );
}
