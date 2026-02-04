import styles from './VisionBlock.module.css';

export default function VisionBlock() {
    return (
        <div className={styles.container}>
            <span className={styles.keyword}>vision {'{'}</span>
            <div className={styles.content}>
                <p className={styles.string}>
                    "Autonomía y privacidad como derechos digitales fundamentales";
                </p>
                <p className={styles.string}>
                    "Innovación guiada por la ética y el valor comunitario";
                </p>
                <p className={styles.comment}>
                    # buidl_mode=true -&gt; guiar sin jerarquías, construir con propósito
                </p>
            </div>
            <span className={styles.keyword}>{'}'}</span>
        </div>
    );
}
