import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isPointer, setIsPointer] = useState(false);
    const [isHidden, setIsHidden] = useState(true);

    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 250 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            if (isHidden) setIsHidden(false);
        };

        const mouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable =
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button');

            setIsPointer(!!isClickable);
        };

        const mouseOut = () => {
            setIsHidden(true);
        };

        window.addEventListener('mousemove', mouseMove);
        window.addEventListener('mouseover', mouseOver);
        window.addEventListener('mouseout', mouseOut);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('mouseover', mouseOver);
            window.removeEventListener('mouseout', mouseOut);
        };
    }, [mouseX, mouseY, isHidden]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] bg-primary mix-blend-difference hidden md:block"
            style={{
                x: cursorX,
                y: cursorY,
                translateX: '-50%',
                translateY: '-50%',
                opacity: isHidden ? 0 : 1,
            }}
            animate={{
                scale: isPointer ? 2 : 1,
                backgroundColor: isPointer ? 'rgba(0, 255, 0, 0.4)' : 'rgba(0, 255, 0, 1)',
            }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        />
    );
};

export default CustomCursor;
