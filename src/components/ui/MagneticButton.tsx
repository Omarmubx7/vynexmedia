import React, { useRef, useState, useEffect } from 'react';

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    strength?: number;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
    children,
    className = "",
    strength = 30
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const { clientX, clientY } = e;
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();

        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const x = (clientX - centerX) / (width / strength);
        const y = (clientY - centerY) / (height / strength);

        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`inline-block transition-transform duration-300 ease-out ${className}`}
            style={{
                transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
            }}
        >
            {children}
        </div>
    );
};

export default MagneticButton;
