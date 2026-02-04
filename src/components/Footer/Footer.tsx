import styles from './Footer.module.css';
import BoliviaBadge from '@/components/BoliviaBadge/BoliviaBadge';
import siteConfig from '@/data/site-config.json';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    <BoliviaBadge />
                </div>

                <div className={styles.links}>
                    <div className={styles.column}>
                        <h4>REDES</h4>
                        {siteConfig.socials.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {social.label}
                            </a>
                        ))}
                    </div>

                    <div className={styles.column}>
                        <h4>LEGAL</h4>
                        <a href="#">PRIVACIDAD</a>
                        <a href="#">TÉRMINOS</a>
                    </div>
                </div>

                <div className={styles.copyright}>
                    <span>// BUIDLERS_BOLIVIA_2024;</span>
                    <span>running_on: solana_network</span>
                </div>
            </div>
        </footer>
    );
}
