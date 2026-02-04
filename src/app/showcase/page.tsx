import Section from '@/components/Section/Section';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import BigStatement from '@/components/BigStatement/BigStatement';
import content from '@/data/showcase.json';
import filler from '@/data/filler.json';
import styles from './page.module.css';

export default function ShowcasePage() {
    return (
        <>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '4rem 2rem' }}>
                <header className={styles.header}>
                    <div>
                        <h1 className="text-4xl font-mono text-[var(--color-primary)] mb-4">
                            SHOWCASE
                        </h1>
                        <p className="text-xl opacity-80 max-w-2xl">
                            Ecosistema híbrido {`{físico y virtual}`} que funciona como fuego creador.
                        </p>
                    </div>
                    <div className={styles.filters}>
                        <button className={styles.activeFilter}>ALL</button>
                        <button className={styles.filterBtn}>WEB3</button>
                        <button className={styles.filterBtn}>AI</button>
                        <button className={styles.filterBtn}>PRIVACY</button>
                    </div>
                </header>

                <div className={styles.grid}>
                    {content.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                    {/* DUPLICATE CONTENT FOR FILLER */}
                    {content.map(project => (
                        <ProjectCard key={project.id + 'dup'} project={{ ...project, id: project.id + '_dup' }} />
                    ))}
                </div>
            </div>

            <BigStatement text={filler.bigStatements[2]} />
        </>
    );
}
