import styles from './DataStream.module.css';

interface DataStreamProps {
    data: string[];
}

export default function DataStream({ data }: DataStreamProps) {
    return (
        <div className={styles.stream}>
            {data.map((line, i) => (
                <span key={i} className={styles.line} style={{ paddingLeft: `${Math.random() * 2}rem` }}>
                    {line}
                </span>
            ))}
            {data.map((line, i) => (
                <span key={i + 'dup'} style={{ display: 'block', marginLeft: `${Math.random() * 5}rem` }}>
                    {line}
                </span>
            ))}
        </div>
    );
}
