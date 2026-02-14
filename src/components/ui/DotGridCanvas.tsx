import React, { useEffect, useRef } from 'react';

const DotGridCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        interface Dot {
            x: number;
            y: number;
            radius: number;
            opacity: number;
            targetRadius: number;
            targetOpacity: number;
        }

        const dots: Dot[] = [];
        const config = {
            dotSpacing: 15,
            dotBaseRadius: 1.5,
            dotMaxRadius: 5,
            dotBaseOpacity: 0.15, // Adjusted for screen visibility on black
            dotMaxOpacity: 1,
            interactionRadius: 200,
            animationSpeed: 0.05
        };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initDots();
        };

        const initDots = () => {
            dots.length = 0;
            const cols = Math.ceil(canvas.width / config.dotSpacing);
            const rows = Math.ceil(canvas.height / config.dotSpacing);

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    dots.push({
                        x: i * config.dotSpacing,
                        y: j * config.dotSpacing,
                        radius: config.dotBaseRadius,
                        opacity: config.dotBaseOpacity,
                        targetRadius: config.dotBaseRadius,
                        targetOpacity: config.dotBaseOpacity
                    });
                }
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            dots.forEach(dot => {
                const dx = mouseRef.current.x - dot.x;
                const dy = mouseRef.current.y - dot.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < config.interactionRadius) {
                    const force = (config.interactionRadius - distance) / config.interactionRadius;
                    dot.targetRadius = config.dotBaseRadius + (config.dotMaxRadius - config.dotBaseRadius) * force;
                    dot.targetOpacity = config.dotBaseOpacity + (config.dotMaxOpacity - config.dotBaseOpacity) * force;
                } else {
                    dot.targetRadius = config.dotBaseRadius;
                    dot.targetOpacity = config.dotBaseOpacity;
                }

                // Smooth interpolation
                dot.radius += (dot.targetRadius - dot.radius) * config.animationSpeed;
                dot.opacity += (dot.targetOpacity - dot.opacity) * config.animationSpeed;

                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${dot.opacity})`;
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        handleResize();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none z-[0] bg-black"
            style={{ mixBlendMode: 'screen' }}
        />
    );
};

export default DotGridCanvas;
