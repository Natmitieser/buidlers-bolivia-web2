import BigStatement from '@/components/BigStatement/BigStatement';
import content from '@/data/swag.json';
import filler from '@/data/filler.json';
import FeaturedDrop from '@/components/FeaturedDrop/FeaturedDrop';
import styles from './page.module.css';

export default function SwagPage() {
    return (
        <div className={styles.container}>
            <h1 className="text-4xl font-mono text-[var(--color-primary)] mb-8">
                // MERCH_STORE
            </h1>

            <FeaturedDrop />

            <div className={styles.grid}>
                <p className="mt-4 font-mono text-[var(--color-secondary)]">
                    // wear your code
                </p>

                <div className={styles.gallery}>
                    {content.map(item => (
                        <div key={item.id} className={styles.item}>
                            <div className={styles.placeholder}>
                                [IMAGE_NOT_FOUND]
                            </div>
                            <h3 className="text-xl font-medium">{item.name}</h3>
                            <p className="opacity-70 mt-2 text-sm">{item.description}</p>
                            <span className={styles.price}>{item.price}</span>
                        </div>
                    ))}
                    {/* FILLER CARDS */}
                    {content.map(item => (
                        <div key={item.id + 'dup'} className={styles.item}>
                            <div className={styles.placeholder}>
                                [OUT_OF_STOCK]
                            </div>
                            <h3 className="text-xl font-medium opacity-50">{item.name} (V2)</h3>
                            <p className="opacity-70 mt-2 text-sm">Legacy collection.</p>
                            <span className={styles.price}>SOLD OUT</span>
                        </div>
                    ))}
                </div>
            </div>

            <BigStatement text={filler.bigStatements[2]} />
        </div>
    );
}
