import React, { useEffect, useRef, useState } from 'react';

const NeuralNetwork = ({ side = 'left' }) => {
  const svgRef = useRef(null);
  const [nodes, setNodes] = useState([]);
  const [connections, setConnections] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Generate neural network nodes
    const newNodes = [];
    const layers = 6;
    const nodesPerLayer = [4, 6, 8, 6, 4, 3];
    
    for (let layer = 0; layer < layers; layer++) {
      const nodeCount = nodesPerLayer[layer];
      const layerX = side === 'left' ? 50 + layer * 40 : 250 - layer * 40;
      
      for (let node = 0; node < nodeCount; node++) {
        const nodeY = (window.innerHeight / (nodeCount + 1)) * (node + 1);
        newNodes.push({
          id: `${layer}-${node}`,
          x: layerX,
          y: nodeY,
          layer,
          active: false,
        });
      }
    }
    
    // Generate connections between adjacent layers
    const newConnections = [];
    for (let layer = 0; layer < layers - 1; layer++) {
      const currentLayerNodes = newNodes.filter(n => n.layer === layer);
      const nextLayerNodes = newNodes.filter(n => n.layer === layer + 1);
      
      currentLayerNodes.forEach(currentNode => {
        nextLayerNodes.forEach(nextNode => {
          if (Math.random() > 0.3) { // 70% chance of connection
            newConnections.push({
              from: currentNode,
              to: nextNode,
              active: false,
            });
          }
        });
      });
    }
    
    setNodes(newNodes);
    setConnections(newConnections);
  }, [side]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Activate nodes based on mouse proximity
      const updatedNodes = nodes.map(node => {
        const distance = Math.sqrt(
          Math.pow(e.clientX - (side === 'left' ? node.x : window.innerWidth - 300 + node.x), 2) +
          Math.pow(e.clientY - node.y, 2)
        );
        return {
          ...node,
          active: distance < 150,
        };
      });
      
      setNodes(updatedNodes);
      
      // Activate connections
      const updatedConnections = connections.map(conn => {
        const fromActive = updatedNodes.find(n => n.id === conn.from.id)?.active;
        const toActive = updatedNodes.find(n => n.id === conn.to.id)?.active;
        return {
          ...conn,
          active: fromActive || toActive,
        };
      });
      
      setConnections(updatedConnections);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [nodes, connections, side]);

  return (
    <div className={`neural-network ${side}`}>
      <svg
        ref={svgRef}
        width="300"
        height="100vh"
        className="absolute inset-0"
      >
        {/* Render connections */}
        {connections.map((conn, index) => (
          <line
            key={index}
            x1={conn.from.x}
            y1={conn.from.y}
            x2={conn.to.x}
            y2={conn.to.y}
            className={`neural-line ${conn.active ? 'opacity-80' : 'opacity-30'}`}
            style={{
              stroke: conn.active ? '#00d4ff' : 'rgba(29, 155, 240, 0.3)',
              strokeWidth: conn.active ? 2 : 1,
              filter: conn.active ? 'drop-shadow(0 0 5px rgba(0, 212, 255, 0.6))' : 'none',
            }}
          />
        ))}
        
        {/* Render nodes */}
        {nodes.map((node) => (
          <circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r={node.active ? 6 : 3}
            className={`neural-node ${node.active ? 'active' : ''}`}
            style={{
              fill: node.active ? '#00d4ff' : 'rgba(29, 155, 240, 0.6)',
              filter: node.active ? 'drop-shadow(0 0 10px rgba(0, 212, 255, 0.8))' : 'none',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
        
        {/* Animated particles */}
        {connections.filter(conn => conn.active).map((conn, index) => (
          <circle
            key={`particle-${index}`}
            r="2"
            fill="#f093fb"
            className="animate-neural-pulse"
          >
            <animateMotion
              dur="3s"
              repeatCount="indefinite"
              path={`M${conn.from.x},${conn.from.y} L${conn.to.x},${conn.to.y}`}
            />
          </circle>
        ))}
      </svg>
    </div>
  );
};

export default NeuralNetwork;