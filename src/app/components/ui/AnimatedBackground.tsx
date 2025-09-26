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
      className="absolute top-0 left-0 w-full h-full [--aurora-color-1:#4338ca] [--aurora-color-2:#7c3aed] [--aurora-color-3:#be185d] pointer-events-none"
      style={{
        backgroundImage: `
          radial-gradient(ellipse 200% 100% at 50% 0%,
            rgba(var(--aurora-color-1), 0.1),
            rgba(var(--aurora-color-2), 0)
          ),
          radial-gradient(ellipse 200% 100% at 50% 0%,
            rgba(var(--aurora-color-2), 0.1),
            rgba(var(--aurora-color-3), 0)
          )
        `,
        animation: 'animate-aurora 12s linear infinite',
      }}
    ></div>
  );
};

export default AnimatedBackground;
