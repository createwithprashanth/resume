import React, { useEffect, useRef } from 'react';

const NeuralNetwork = ({ side }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const nodesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = side === 'left' ? window.innerWidth * 0.25 : window.innerWidth * 0.25;
    let height = window.innerHeight;

    // Set canvas size and position
    const resizeCanvas = () => {
      width = window.innerWidth * 0.25;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create nodes
    const createNodes = () => {
      const nodes = [];
      const nodeCount = Math.floor((width * height) / 20000);
      
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.4 + 0.2,
        });
      }
      return nodes;
    };

    nodesRef.current = createNodes();

    // Mouse tracking
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw nodes
      nodesRef.current.forEach((node, i) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse interaction
        const mouseDistance = Math.sqrt(
          Math.pow(mouseRef.current.x - node.x, 2) + 
          Math.pow(mouseRef.current.y - node.y, 2)
        );

        if (mouseDistance < 100) {
          const force = (100 - mouseDistance) / 100;
          node.vx += (node.x - mouseRef.current.x) * force * 0.002;
          node.vy += (node.y - mouseRef.current.y) * force * 0.002;
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(29, 155, 240, ${node.opacity})`;
        ctx.fill();

        // Draw connections
        nodesRef.current.slice(i + 1).forEach((otherNode) => {
          const distance = Math.sqrt(
            Math.pow(node.x - otherNode.x, 2) + 
            Math.pow(node.y - otherNode.y, 2)
          );

          if (distance < 80) {
            const opacity = (80 - distance) / 80 * 0.2;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.strokeStyle = `rgba(29, 155, 240, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [side]);

  const sideClass = side === 'left' ? 'left-0' : 'right-0';

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 ${sideClass} w-1/4 h-full pointer-events-none z-0 opacity-60`}
    />
  );
};

export default NeuralNetwork;