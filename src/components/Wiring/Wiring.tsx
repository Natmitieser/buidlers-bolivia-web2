interface WiringProps {
    className?: string;
    opacity?: number;
}

export default function Wiring({ className = '', opacity = 0.15 }: WiringProps) {
    return (
        <svg
            viewBox="0 0 1440 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                opacity: opacity,
                zIndex: 0
            }}
        >
            {/* Abstract wiring lines connecting left nodes to right nodes */}
            <path
                d="M-50 100 C 400 100, 400 300, 800 300 C 1200 300, 1200 100, 1500 100"
                stroke="var(--color-primary)"
                strokeWidth="2"
                fill="none"
            />
            <path
                d="M-50 250 C 350 250, 450 450, 800 450 C 1150 450, 1250 250, 1500 250"
                stroke="var(--color-primary)"
                strokeWidth="2"
                fill="none"
            />
            <path
                d="M-50 400 C 300 400, 500 600, 900 600 C 1300 600, 1300 400, 1500 400"
                stroke="var(--color-primary)"
                strokeWidth="2"
                fill="none"
            />

            {/* Connection dots (nodes) */}
            <circle cx="800" cy="300" r="4" fill="var(--color-primary)" />
            <circle cx="800" cy="450" r="4" fill="var(--color-primary)" />
            <circle cx="900" cy="600" r="4" fill="var(--color-primary)" />
        </svg>
    );
}
