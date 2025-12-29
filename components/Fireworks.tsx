import React from 'react';

interface Burst {
  color: string;
  left: string;
  top: string;
  delay: string;
}

const bursts: Burst[] = [
  { color: '#FF5F6D', left: '20%', top: '18%', delay: '0s' },
  { color: '#FFD166', left: '50%', top: '12%', delay: '0.35s' },
  { color: '#60A5FA', left: '78%', top: '20%', delay: '0.7s' },
];

const Fireworks: React.FC = () => {
  return (
    <div className="absolute inset-0 z-40 pointer-events-none overflow-hidden rounded-[2rem]">
      <style>{`
        .fw-bloom {
          position: absolute;
          transform: translate(-50%, -50%) scale(0);
          width: 8px;
          height: 8px;
          border-radius: 50%;
          opacity: 0;
          filter: drop-shadow(0 0 8px rgba(255,255,255,0.12));
          mix-blend-mode: screen;
        }

        @keyframes fw-bloom-anim {
          0% { transform: translate(-50%, -50%) scale(0.2); opacity: 0; }
          20% { transform: translate(-50%, -50%) scale(1.4); opacity: 1; }
          60% { transform: translate(-50%, -50%) scale(1); opacity: 0.9; }
          100% { transform: translate(-50%, -50%) scale(1.8); opacity: 0; }
        }

        .fw-spark {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          opacity: 0;
          transform: translate(-50%, -50%) translate(0,0) scale(1);
          mix-blend-mode: screen;
        }

        @keyframes fw-spark-anim {
          0% { opacity: 0; transform: translate(-50%, -50%) translate(0,0) scale(0.8); }
          10% { opacity: 1; }
          100% { opacity: 0; transform: translate(-50%, -50%) translate(var(--x), var(--y)) scale(0.6); }
        }
      `}</style>

      {bursts.map((b, idx) => (
        <div key={idx} style={{ left: b.left, top: b.top, position: 'absolute', transform: 'translate(-50%, -50%)' }}>
          <div
            className="fw-bloom"
            style={{
              background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), ${b.color}33 30%, ${b.color}11 60%, transparent 70%)`,
              boxShadow: `0 0 12px ${b.color}66, 0 0 28px ${b.color}33`,
              animation: `fw-bloom-anim 1.4s cubic-bezier(.2,.8,.2,1) ${b.delay} infinite`
            }}
          />

          {/* Sparks */}
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i / 16) * Math.PI * 2;
            const distance = 28 + Math.random() * 38;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance * 0.85; // slight ellipse
            const size = 2 + Math.random() * 3;
            const delay = `calc(${b.delay} + ${Math.random() * 0.4}s)`;

            return (
              <div
                key={i}
                className="fw-spark"
                style={{
                  background: b.color,
                  boxShadow: `0 0 ${6 + size}px ${b.color}88`,
                  width: `${size}px`,
                  height: `${size}px`,
                  '--x': `${x}px`,
                  '--y': `${y}px`,
                  transformOrigin: '50% 50%',
                  animation: `fw-spark-anim ${1.2 + Math.random() * 0.8}s cubic-bezier(.15,.8,.15,1) ${delay} infinite`,
                } as React.CSSProperties & { '--x': string; '--y': string }}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Fireworks;
