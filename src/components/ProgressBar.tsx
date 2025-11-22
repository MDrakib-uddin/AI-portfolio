import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface ProgressBarProps {
    value: number; // 0-100
    maxValue?: number;
    gradient?: string;
    height?: string;
    showLabel?: boolean;
    label?: string;
    className?: string;
    animated?: boolean;
}

const ProgressBar = ({
    value,
    maxValue = 100,
    gradient = 'from-blue-500 to-purple-500',
    height = 'h-2',
    showLabel = false,
    label = '',
    className = '',
    animated = true
}: ProgressBarProps) => {
    const [progress, setProgress] = useState(0);
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    const percentage = Math.min((value / maxValue) * 100, 100);

    useEffect(() => {
        if (inView && animated) {
            const timer = setTimeout(() => {
                setProgress(percentage);
            }, 100);
            return () => clearTimeout(timer);
        } else if (!animated) {
            setProgress(percentage);
        }
    }, [inView, percentage, animated]);

    return (
        <div ref={ref} className={`w-full ${className}`}>
            {showLabel && label && (
                <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-muted-foreground">{label}</span>
                    <span className="text-xs font-semibold text-card-foreground">{value}/{maxValue}</span>
                </div>
            )}
            <div className={`w-full bg-muted/30 rounded-full overflow-hidden ${height}`}>
                <div
                    className={`${height} bg-gradient-to-r ${gradient} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                    style={{ width: `${progress}%` }}
                >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"
                        style={{
                            backgroundSize: '200% 100%',
                            animation: 'shimmer 2s infinite'
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
