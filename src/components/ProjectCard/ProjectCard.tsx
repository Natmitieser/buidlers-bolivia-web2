import Link from 'next/link';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
    project: {
        id: string;
        title: string;
        description: string;
        tags: string[];
        link?: string;
    };
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.imagePlaceholder}>
                <span className={styles.badge}>IMG_16:9</span>
            </div>

            <div className={styles.content}>
                <div className={styles.header}>
                    <h3 className={styles.title}>{project.title}</h3>
                    <span className={styles.id}>#{project.id}</span>
                </div>

                <p className={styles.description}>{project.description}</p>

                <div className={styles.footer}>
                    <div className={styles.tags}>
                        {project.tags.slice(0, 2).map(tag => (
                            <span key={tag} className={styles.tag}>{tag}</span>
                        ))}
                    </div>
                    <span className={styles.linkStart}>./view_project</span>
                </div>
            </div>
        </div>
    );
}
