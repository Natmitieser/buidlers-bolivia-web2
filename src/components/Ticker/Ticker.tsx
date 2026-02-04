import styles from './Ticker.module.css';

interface TickerProps {
    items: string[];
}

export default function Ticker({ items }: TickerProps) {
    return (
        <div className={styles.tickerWrapper}>
            <div className={styles.tickerContent}>
                {items.map((item, i) => (
                    <span key={i} className={styles.item}>
            /// {item}
                    </span>
                ))}
                {items.map((item, i) => (
                    <span key={`dup-${i}`} className={styles.item}>
            /// {item}
                    </span>
                ))}
            </div>
        </div>
    );
}
