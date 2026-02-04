'use client';

import { useRef } from 'react';
import styles from './Slider.module.css';

interface Item {
    title: string;
    description: string;
}

interface SliderProps {
    title: string;
    items: Item[];
}

export default function Slider({ title, items }: SliderProps) {
    const trackRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (trackRef.current) {
            const scrollAmount = 350; // card width + gap
            trackRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className={styles.sliderContainer}>
            <div className={styles.header}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.controls}>
                    <button onClick={() => scroll('left')} className={styles.button}>{"<"}</button>
                    <button onClick={() => scroll('right')} className={styles.button}>{">"}</button>
                </div>
            </div>
            <div className={styles.track} ref={trackRef}>
                {items.map((item, idx) => (
                    <div key={idx} className={styles.card}>
                        <h3 className={styles.cardTitle}>{item.title}</h3>
                        <p className={styles.cardDesc}>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
