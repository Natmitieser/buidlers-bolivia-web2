import styles from './FeaturedDrop.module.css';

export default function FeaturedDrop() {
    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {/* Left: Text */}
                <div className={styles.info}>
                    <span className={styles.label}>// NEW_DROP</span>
                    <h2 className={styles.title}>buidlers_tee_v1</h2>

                    <div className={styles.specs}>
                        <div className={styles.spec}>
                            <span>COLOR:</span> NEGRO_CARBON
                        </div>
                        <div className={styles.spec}>
                            <span>MAT:</span> 100% ALGODÓN
                        </div>
                        <div className={styles.spec}>
                            <span>PRECIO:</span> 0.05 ETH
                        </div>
                    </div>

                    <button className={styles.cta}>
                        MINT + CLAIM
                    </button>
                </div>

                {/* Right: Visual Placeholder */}
                <div className={styles.visual}>
                    <div className={styles.placeholderBox}>
                        IMG_TSHIRT_FRONT
                    </div>
                    <div className={styles.placeholderBox}>
                        IMG_TSHIRT_BACK
                    </div>
                </div>
            </div>
        </div>
    );
}
