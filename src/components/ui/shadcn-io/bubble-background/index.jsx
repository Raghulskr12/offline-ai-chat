'use client';

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

function BubbleBackground({
  ref,
  className,
  children,
  interactive = false,
  transition = { stiffness: 100, damping: 20 },
  colors = {
    first: '71,85,105',     // slate-600
    second: '100,116,139',  // slate-500
    third: '148,163,184',   // slate-400
    fourth: '203,213,225',  // slate-300
    fifth: '226,232,240',   // slate-200
    sixth: '241,245,249',   // slate-100
  },
  ...props
}) {
  const containerRef = React.useRef(null);
  React.useImperativeHandle(ref, () => containerRef.current);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, transition);
  const springY = useSpring(mouseY, transition);

  React.useEffect(() => {
    if (!interactive) return;

    const currentContainer = containerRef.current;
    if (!currentContainer) return;

    const handleMouseMove = (e) => {
      const rect = currentContainer.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    currentContainer.addEventListener('mousemove', handleMouseMove);
    return () => currentContainer.removeEventListener('mousemove', handleMouseMove);
  }, [interactive, mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      data-slot="bubble-background"
      className={cn(
        'fixed inset-0 overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-zinc-900',
        className
      )}
      {...props}>
      <style>
        {`
            :root {
              --first-color: ${colors.first};
              --second-color: ${colors.second};
              --third-color: ${colors.third};
              --fourth-color: ${colors.fourth};
              --fifth-color: ${colors.fifth};
              --sixth-color: ${colors.sixth};
            }
          `}
      </style>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 w-0 h-0">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="absolute inset-0" style={{ filter: 'url(#goo) blur(40px)' }}>
        <motion.div
          className="absolute rounded-full w-[80%] h-[80%] top-[10%] left-[10%] mix-blend-soft-light bg-[radial-gradient(circle_at_center,rgba(var(--first-color),0.6)_0%,rgba(var(--first-color),0)_50%)]"
          animate={{ y: [-50, 50, -50] }}
          transition={{ duration: 30, ease: 'easeInOut', repeat: Infinity }} />

        <motion.div
          className="absolute inset-0 flex justify-center items-center origin-[calc(50%-400px)]"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          }}>
          <div
            className="rounded-full w-[80%] h-[80%] mix-blend-soft-light bg-[radial-gradient(circle_at_center,rgba(var(--second-color),0.5)_0%,rgba(var(--second-color),0)_50%)]" />
        </motion.div>

        <motion.div
          className="absolute inset-0 flex justify-center items-center origin-[calc(50%+400px)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, ease: 'linear', repeat: Infinity }}>
          <div
            className="absolute rounded-full w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,rgba(var(--third-color),0.4)_0%,rgba(var(--third-color),0)_50%)] mix-blend-soft-light top-[calc(50%+200px)] left-[calc(50%-500px)]" />
        </motion.div>

        <motion.div
          className="absolute rounded-full w-[80%] h-[80%] top-[10%] left-[10%] mix-blend-soft-light bg-[radial-gradient(circle_at_center,rgba(var(--fourth-color),0.3)_0%,rgba(var(--fourth-color),0)_50%)] opacity-60"
          animate={{ x: [-50, 50, -50] }}
          transition={{ duration: 40, ease: 'easeInOut', repeat: Infinity }} />

        <motion.div
          className="absolute inset-0 flex justify-center items-center origin-[calc(50%_-_800px)_calc(50%_+_200px)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, ease: 'linear', repeat: Infinity }}>
          <div
            className="absolute rounded-full w-[160%] h-[160%] mix-blend-overlay bg-[radial-gradient(circle_at_center,rgba(var(--fifth-color),0.2)_0%,rgba(var(--fifth-color),0)_50%)] top-[calc(50%-80%)] left-[calc(50%-80%)]" />
        </motion.div>

        {interactive && (
          <motion.div
            className="absolute rounded-full w-full h-full mix-blend-overlay bg-[radial-gradient(circle_at_center,rgba(var(--sixth-color),0.15)_0%,rgba(var(--sixth-color),0)_50%)] opacity-50"
            style={{
              x: springX,
              y: springY,
            }} />
        )}
      </div>
      {children}
    </div>
  );
}

export { BubbleBackground };