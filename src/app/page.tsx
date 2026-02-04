import Hero from '@/components/Hero/Hero';
import Section from '@/components/Section/Section';
import Slider from '@/components/Slider/Slider';
import Footer from '@/components/Footer/Footer';
import StatBlock from '@/components/StatBlock/StatBlock';
import content from '@/data/content.json';
import stats from '@/data/stats.json';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Hero />

      {/* Stats Injection */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        <div className={styles.statsGrid}>
          {stats.map((stat, i) => (
            <StatBlock key={i} label={stat.label} value={stat.value} />
          ))}
        </div>
      </div>

      {/* Vision */}
      <Section title={content.vision.title} id="vision">
        <p className={styles.paragraph}>{content.vision.text}</p>
        <ul className={styles.list}>
          {content.vision.items.map((item, i) => (
            <li key={i} className={styles.listItem}>{item}</li>
          ))}
        </ul>
      </Section>

      {/* Mission */}
      <Section title={content.mission.title} id="mission">
        <p className={styles.paragraph}>{content.mission.text}</p>
      </Section>

      {/* Values (Slider) */}
      <Slider title="Valores" items={content.values} />

      {/* Manifesto */}
      <Section title={content.manifesto.title} id="manifesto">
        <p className={styles.paragraph}>{content.manifesto.text}</p>
        <div className={styles.cta}>
          {content.manifesto.cta}
        </div>
      </Section>
    </>
  );
}
