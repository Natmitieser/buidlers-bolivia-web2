import styles from './TeamTree.module.css';

export default function TeamTree() {
    return (
        <div className={styles.container}>
            <h2 className={styles.header}>core_team_&_nodes</h2>

            <div className={styles.treeSection}>
                {/* ROOT NODE */}
                <div className={styles.nodeGroup}>
                    <span className={styles.label}>/root</span>
                    <div className={styles.card}>
                        <div className={styles.cardMain}>
                            <span className={styles.name}>ana_dev</span>
                            <span className={styles.role}>role: /root (ceo);</span>
                            <p className={styles.quote}>"el punto cero; donde se quema lo anterior para construir algo nuevo;"</p>
                        </div>
                        <div className={styles.status}>
                            [connected]
                            <span className={styles.ping}>ping: 1ms</span>
                        </div>
                    </div>
                </div>

                {/* WORKER NODES */}
                <div className={styles.nodeGroup}>
                    <span className={styles.label}>/nodes</span>

                    <div className={styles.card}>
                        <div className={styles.cardMain}>
                            <span className={styles.name}>carlos_lpz</span>
                            <span className={styles.role}>node_leader</span>
                        </div>
                        <div className={styles.status}>
                            [connected]
                            <span className={styles.ping}>ping: 24ms</span>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardMain}>
                            <span className={styles.name}>lucia_scz</span>
                            <span className={styles.role}>evangelist</span>
                        </div>
                        <div className={styles.status}>
                            [connected]
                            <span className={styles.ping}>ping: 12ms</span>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardMain}>
                            <span className={styles.name}>marco_cba</span>
                            <span className={styles.role}>buidler</span>
                        </div>
                        <div className={styles.status} style={{ color: 'var(--color-accent-orange)' }}>
                            [syncing...]
                            <span className={styles.ping}>ping: 99ms</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
