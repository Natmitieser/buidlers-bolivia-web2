import styles from './GlitchText.module.css';

interface GlitchTextProps {
    text: string;
    as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
    className?: string;
}

export default function GlitchText({ text, as: Component = 'span', className }: GlitchTextProps) {
    return (
        <Component className={`${styles.text} ${className}`} data-text={text}>
            {text}
        </Component>
    );
}
