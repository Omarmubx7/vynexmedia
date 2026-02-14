import React, { useEffect, useRef } from 'react';

const DotGridCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const scrollYRef = useRef(0);

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
            dotSpacing: 18,
            dotBaseRadius: 1.2,
            dotMaxRadius: 4.5,
            dotBaseOpacity: 0.1,
            dotMaxOpacity: 0.8,
            interactionRadius: 250,
            animationSpeed: 0.04
        };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initDots();
        };

        const handleScroll = () => {
            scrollYRef.current = window.scrollY;
        };

        const initDots = () => {
            dots.length = 0;
            const cols = Math.ceil(canvas.width / config.dotSpacing) + 1;
            const rows = Math.ceil(canvas.height / config.dotSpacing) + 1;

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

            const scrollOffset = (scrollYRef.current * 0.2) % config.dotSpacing;

            dots.forEach(dot => {
                const adjustedY = dot.y - scrollOffset;

                const dx = mouseRef.current.x - dot.x;
                const dy = mouseRef.current.y - adjustedY;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < config.interactionRadius) {
                    const force = (config.interactionRadius - distance) / config.interactionRadius;
                    dot.targetRadius = config.dotBaseRadius + (config.dotMaxRadius - config.dotBaseRadius) * force;
                    dot.targetOpacity = config.dotBaseOpacity + (config.dotMaxOpacity - config.dotBaseOpacity) * force;
                } else {
                    dot.targetRadius = config.dotBaseRadius;
                    dot.targetOpacity = config.dotBaseOpacity;
                }

                dot.radius += (dot.targetRadius - dot.radius) * config.animationSpeed;
                dot.opacity += (dot.targetOpacity - dot.opacity) * config.animationSpeed;

                ctx.beginPath();
                ctx.arc(dot.x, adjustedY, dot.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(204, 204, 204, ${dot.opacity})`;
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll, { passive: true });

        handleResize();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none z-[0] bg-black"
        />
    );
};

export default DotGridCanvas;
