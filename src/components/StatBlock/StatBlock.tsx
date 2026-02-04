import styles from './StatBlock.module.css';

interface StatBlockProps {
    label: string;
    value: string;
}

export default function StatBlock({ label, value }: StatBlockProps) {
    return (
        <div className={styles.block}>
            <span className={styles.label}>{label}</span>
            <span className={styles.value}>{value}</span>
        </div>
    );
}
