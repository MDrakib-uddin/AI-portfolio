import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CircularProgressProps {
    percentage: number;
    size?: number;
    strokeWidth?: number;
    color?: string;
    label?: string;
    delay?: number;
}

const CircularProgress = ({
    percentage,
    size = 120,
    strokeWidth = 8,
    color = 'hsl(var(--primary))',
    label,
    delay = 0,
}: CircularProgressProps) => {
    const [progress, setProgress] = useState(0);
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (progress / 100) * circumference;

    useEffect(() => {
        const timer = setTimeout(() => {
            setProgress(percentage);
        }, delay);
        return () => clearTimeout(timer);
    }, [percentage, delay]);

    return (
        <div className="relative inline-flex items-center justify-center">
            <svg width={size} height={size} className="transform -rotate-90">
                {/* Background circle */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="hsl(var(--border))"
                    strokeWidth={strokeWidth}
                    fill="none"
                    opacity={0.2}
                />
                {/* Progress circle */}
                <motion.circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={color}
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeLinecap="round"
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset: offset }}
                    transition={{ duration: 1.5, ease: 'easeInOut', delay }}
                    style={{
                        strokeDasharray: circumference,
                    }}
                />
            </svg>

            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.span
                    className="text-2xl font-bold text-foreground"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: delay + 0.5 }}
                >
                    {Math.round(progress)}%
                </motion.span>
                {label && (
                    <motion.span
                        className="text-xs text-muted-foreground mt-1 text-center px-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: delay + 0.7 }}
                    >
                        {label}
                    </motion.span>
                )}
            </div>
        </div>
    );
};

export default CircularProgress;
