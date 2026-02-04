import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.codeBlock}>
                <span className={styles.init}>init {'{'}</span>
            </div>

            <div className={styles.headline}>
                <h1 className={styles.mainText}>
                    el punto cero;<br />
                    donde se quema lo anterior.
                </h1>

                <div className={styles.consoleOutput}>
                    <p>
                        <span className={styles.prompt}>echo</span>
                        "Construimos herramientas que empoderan a las personas."
                    </p>
                    <p>
                        <span className={styles.prompt}>web3 + ia</span>
             // autonomía == por_defecto; privacidad == derecho;
                    </p>
                </div>
            </div>

            <div className={styles.codeBlock}>
                <span className={styles.closing}>{'}'}</span>
            </div>
        </section>
    );
}
