import Section from '@/components/Section/Section';
import GlitchText from '@/components/GlitchText/GlitchText';
import BigStatement from '@/components/BigStatement/BigStatement';
import DataStream from '@/components/DataStream/DataStream';
import TeamTree from '@/components/TeamTree/TeamTree';
import VisionBlock from '@/components/VisionBlock/VisionBlock';
import ValuesList from '@/components/ValuesList/ValuesList';
import content from '@/data/about.json';
import filler from '@/data/filler.json';
import styles from './page.module.css';

export default function AboutPage() {
    return (
        <>
            <div className={styles.container}>
                <GlitchText text="INIT: GENESIS" as="h1" className="mb-8 text-4xl block" />

                {/* Replaced Text Block with Vision Code Block */}
                <VisionBlock />

                <DataStream data={filler.partners} />

                {/* Replaced Standard Headings with Values List */}
                <ValuesList />
            </div>

            <BigStatement text={filler.bigStatements[1]} />

            <div className={styles.container}>
                {/* Manifesto */}
                <Section title={content.manifesto.title}>
                    <ul className={styles.manifestoList}>
                        {content.manifesto.content.map((item, i) => (
                            <li key={i} className={styles.manifestoItem}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </Section>
            </div>
        </>
    );
}
