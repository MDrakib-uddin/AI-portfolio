import { ReactNode, useRef, MouseEvent } from 'react';

interface TiltCardProps {
    children: ReactNode;
    className?: string;
    tiltMaxAngle?: number;
    glowIntensity?: number;
}

const TiltCard = ({
    children,
    className = '',
    tiltMaxAngle = 10,
    glowIntensity = 0.5
}: TiltCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -tiltMaxAngle;
        const rotateY = ((x - centerX) / centerX) * tiltMaxAngle;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

        // Update glow position
        if (glowRef.current) {
            glowRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(var(--primary-rgb, 99, 102, 241), ${glowIntensity}), transparent 50%)`;
        }
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    };

    return (
        <div
            ref={cardRef}
            className={`relative transition-transform duration-300 ease-out ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transformStyle: 'preserve-3d' }}
        >
            {/* Glow effect */}
            <div
                ref={glowRef}
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg"
                style={{ zIndex: -1 }}
            />
            {children}
        </div>
    );
};

export default TiltCard;
