import styles from './SpecialEvent.module.css';

export default function SpecialEvent() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.badge}>FEATURED_EVENT</span>
                <span className={styles.date}>DEC_21 :: 18:30</span>
            </div>

            <div className={styles.content}>
                <h2 className={styles.title}>cena_de_agradecimiento</h2>
                <p className={styles.subtitle}># Buidlers & Core Team</p>

                <div className={styles.details}>
                    <p className={styles.detailLine}>&gt; place: "Condominio Sky Elite"</p>
                    <p className={styles.detailLine}>&gt; access: invite_only</p>
                    <p className={styles.detailLine}>
                        <span style={{ color: 'var(--color-primary)' }}>// Nos vemos para cerrar el año;</span>
                    </p>
                </div>
            </div>

            <div className={styles.graphic}>
                {/* Simple ASCII Tree or Block */}
                <pre className={styles.ascii}>
                    {`      *
     ***
    *****
   *******
    *****
   *******
  *********
     |||
 b u i d l e r s`}
                </pre>
            </div>
        </div>
    );
}
