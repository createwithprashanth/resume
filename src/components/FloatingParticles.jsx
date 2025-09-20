import React, { useEffect, useState } from 'react';

const FloatingParticles = ({ count = 20 }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDelay: Math.random() * 15,
      animationDuration: 15 + Math.random() * 10,
      size: 2 + Math.random() * 4,
      color: ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981'][Math.floor(Math.random() * 4)]
    }));
    setParticles(newParticles);
  }, [count]);

  return (
    <div className="floating-particles">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.animationDelay}s`,
            animationDuration: `${particle.animationDuration}s`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.color,
            boxShadow: `0 0 10px ${particle.color}`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;