import StatBlock from '@/components/StatBlock/StatBlock';
import BigStatement from '@/components/BigStatement/BigStatement';
import DataStream from '@/components/DataStream/DataStream';
import content from '@/data/events.json';
import filler from '@/data/filler.json';
import styles from './page.module.css';
import Wiring from '@/components/Wiring/Wiring';
import SpecialEvent from '@/components/SpecialEvent/SpecialEvent';

export default function EventsPage() {
    return (
        <>
            <div className={styles.container}>
                <Wiring opacity={0.3} className="absolute top-0 left-0 w-full h-[800px]" />
                <h1 className="text-4xl font-mono text-[var(--color-primary)] mb-8">
                    SYSTEM LOG: EVENTS
                </h1>

                {/* Global Stats */}
                <div className={styles.statsGrid}>
                    {filler.eventStats.map((stat, i) => (
                        <StatBlock key={i} label={stat.label} value={stat.value} />
                    ))}
                </div>

                <div className={styles.timeline}>
                    <div style={{ marginBottom: '2rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-dim)' }}>
                        ./syncing_calendar
                    </div>

                    <SpecialEvent />

                    {content.map(event => (
                        <div key={event.id} className={styles.event}>
                            <div className={styles.meta}>
                                time="{new Date(event.date).toISOString().split('T')[0]} 18:00"
                            </div>

                            <h2 className={styles.title}>{event.title}</h2>
                            <span className={styles.location}>loc: "{event.location}"</span>

                            <div className={styles.infoBox}>
                                <span className={styles.infoText}>
                                    INFO: {event.description};
                                </span>
                                <span className={styles.infoText}>
                                    OUTPUT: seeds, mentorías y acceso a infra;
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <BigStatement text={filler.bigStatements[0]} />

            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '4rem 2rem' }}>
                <div className={styles.hallOfFame}>
                    <h2 className="text-2xl font-mono text-[var(--color-primary)] mb-4">
             // HALL_OF_FAME_DB
                    </h2>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>YEAR</th>
                                <th>WINNER</th>
                                <th>PROJECT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filler.hallOfFame.map((entry, i) => (
                                <tr key={i}>
                                    <td>{entry.year}</td>
                                    <td>{entry.winner}</td>
                                    <td>{entry.project}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <DataStream data={filler.dataStream} />
        </>
    );
}
