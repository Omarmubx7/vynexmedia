import React, { useEffect, useRef } from 'react';

const DotGridCanvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const dots: { x: number; y: number; baseX: number; baseY: number; phase: number }[] = [];
        const dotSpacing = 15;
        const dotRadius = 1.5;
        let time = 0;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initDots();
        };

        const initDots = () => {
            dots.length = 0;
            for (let x = 0; x < canvas.width; x += dotSpacing) {
                for (let y = 0; y < canvas.height; y += dotSpacing) {
                    dots.push({
                        x,
                        y,
                        baseX: x,
                        baseY: y,
                        phase: Math.random() * Math.PI * 2
                    });
                }
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };

        const animate = () => {
            time += 0.01;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            dots.forEach(dot => {
                const waveX = Math.sin(time + dot.baseX * 0.01) * 2;
                const waveY = Math.cos(time + dot.baseY * 0.01) * 2;

                const currentX = dot.baseX + waveX;
                const currentY = dot.baseY + waveY;

                const dx = mouseRef.current.x - currentX;
                const dy = mouseRef.current.y - currentY;
                const distance = Math.sqrt(dx * dx + dy * dy);

                let scale = 1;
                let opacity = 0.08;

                if (distance < 250) {
                    scale = 1 + (250 - distance) / 50;
                    opacity = 0.3 + (250 - distance) / 300;
                }

                ctx.beginPath();
                ctx.arc(currentX, currentY, dotRadius * scale, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
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
