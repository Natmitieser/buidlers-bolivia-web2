import styles from './BigStatement.module.css';

interface BigStatementProps {
    text: string;
}

export default function BigStatement({ text }: BigStatementProps) {
    return (
        <div className={styles.container}>
            <h2 className={styles.text}>{text}</h2>
        </div>
    );
}
