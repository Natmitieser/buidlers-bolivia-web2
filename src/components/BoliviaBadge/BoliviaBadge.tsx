import Image from 'next/image';
import styles from './BoliviaBadge.module.css';

export default function BoliviaBadge() {
    return (
        <div className={styles.container}>
            <Image
                src="/bolivia-badge.png"
                alt="Buidlers Bolivia Badge"
                width={80}
                height={80}
                className={styles.image}
                priority
            />
        </div>
    );
}
