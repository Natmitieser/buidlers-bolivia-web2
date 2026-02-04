import styles from './ValuesList.module.css';

const values = [
    {
        title: 'ÉTICA',
        desc: 'Ética por diseño: privacidad por defecto y código libre como estándar no negociable.'
    },
    {
        title: 'AUTONOMÍA',
        desc: 'Libertad real para construir y decidir. Sin permisos de terceros.'
    },
    {
        title: 'RESILIENCIA',
        desc: 'Sistemas que resisten la censura. Estructuras antifrágiles.'
    },
    {
        title: 'INNOVACIÓN',
        desc: 'Nunca copiar, siempre adaptar y evolucionar.'
    },
    {
        title: 'TALENTO',
        desc: 'Reclutamiento de curiosidad, actitud antes que currículum.'
    }
];

export default function ValuesList() {
    return (
        <div className={styles.container}>
            <h3 className={styles.header}>VALORES</h3>
            <div className={styles.list}>
                {values.map((v) => (
                    <div key={v.title} className={styles.item}>
                        <span className={styles.bullet}>❚</span>
                        <div className={styles.text}>
                            <span className={styles.title}>{v.title}</span>
                            <p className={styles.desc}>{v.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
