'use client';

import { useEffect } from 'react';

const AnimatedBackground = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes animate-aurora {
        from {
          background-position: 50% 50%, 50% 50%;
        }
        to {
          background-position: 350% 50%, 350% 50%;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      // Subtle slate colors for a professional, "smoky" feel
      className="fixed top-0 left-0 w-full h-full [--aurora-color-1:#1e293b] [--aurora-color-2:#334155] [--aurora-color-3:#1f2937] pointer-events-none z-[-1]"
      style={{
        backgroundImage: `
          radial-gradient(ellipse 200% 100% at 50% 0%,
            rgba(var(--aurora-color-1), 0.15),
            rgba(var(--aurora-color-2), 0)
          ),
          radial-gradient(ellipse 200% 100% at 50% 0%,
            rgba(var(--aurora-color-2), 0.1),
            rgba(var(--aurora-color-3), 0)
          )
        `,
        animation: 'animate-aurora 20s linear infinite', // Slowed animation
      }}
    ></div>
  );
};

export default AnimatedBackground;