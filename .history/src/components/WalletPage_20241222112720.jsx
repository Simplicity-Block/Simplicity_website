import React, { useEffect, useRef, useState } from 'react';
import { 
  Wallet, 
  Shield, 
  Zap,
  Server, 
  Globe,
  ArrowRight,
  Key,
  Blocks,
  Network
} from 'lucide-react';
import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/0.161.0/three.module.min.js';

const WalletPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const node3dRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (node3dRef.current) {
        const rotation = scrollY * 0.1;
        node3dRef.current.style.transform = `
          perspective(1000px)
          rotateY(${rotation}deg)
          rotateX(${rotation * 0.5}deg)
        `;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  const PhoneMockup = ({ imageUrl, className = "" }) => (
    <div className={`relative ${className}`}>
      <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
        <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute" />
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg" />
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg" />
        <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg" />
        <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-gray-800">
          <img src={imageUrl} className="w-full h-full object-cover" alt="App Screenshot" />
        </div>
      </div>
    </div>
  );
 
  const Node3D = () => {
    const containerRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      if (!containerRef.current) return;
  
      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(400, 400);
      renderer.setClearColor(0x000000, 0);
      containerRef.current.appendChild(renderer.domElement);
  
      // Camera position
      camera.position.z = 5;
  
      // Create hexagonal node structure
      const geometry = new THREE.IcosahedronGeometry(2, 1);
      const edges = new THREE.EdgesGeometry(geometry);
      
      // Create glowing material
      const nodeMaterial = new THREE.MeshPhongMaterial({
        color: 0x9333EA, // Purple color matching UI
        transparent: true,
        opacity: 0.3,
        shininess: 100,
      });
  
      // Create wireframe material
      const wireframeMaterial = new THREE.LineBasicMaterial({
        color: 0xA855F7,
        transparent: true,
        opacity: 0.5,
      });
  
      // Create mesh and wireframe
      const nodeMesh = new THREE.Mesh(geometry, nodeMaterial);
      const wireframe = new THREE.LineSegments(edges, wireframeMaterial);
  
      // Add to scene
      scene.add(nodeMesh);
      scene.add(wireframe);
  
      // Add ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
  
      // Add point lights for glow effect
      const pointLight1 = new THREE.PointLight(0x9333EA, 2, 10);
      pointLight1.position.set(2, 2, 2);
      scene.add(pointLight1);
  
      const pointLight2 = new THREE.PointLight(0xA855F7, 2, 10);
      pointLight2.position.set(-2, -2, -2);
      scene.add(pointLight2);
  
      // Create particles
      const particlesGeometry = new THREE.BufferGeometry();
      const particleCount = 100;
      const positions = new Float32Array(particleCount * 3);
      const particleMaterial = new THREE.PointsMaterial({
        color: 0xA855F7,
        size: 0.05,
        transparent: true,
        opacity: 0.5,
      });
  
      // Generate random positions for particles
      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 8;
        positions[i + 1] = (Math.random() - 0.5) * 8;
        positions[i + 2] = (Math.random() - 0.5) * 8;
      }
  
      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const particles = new THREE.Points(particlesGeometry, particleMaterial);
      scene.add(particles);
  
      // Animation variables
      let mouseX = 0;
      let mouseY = 0;
      let targetRotationX = 0;
      let targetRotationY = 0;
  
      // Mouse movement handlers
      const handleMouseMove = (event) => {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  
        targetRotationX = mouseY * 0.5;
        targetRotationY = mouseX * 0.5;
      };
  
      containerRef.current.addEventListener('mousemove', handleMouseMove);
  
      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
  
        // Smooth rotation
        nodeMesh.rotation.x += (targetRotationX - nodeMesh.rotation.x) * 0.05;
        nodeMesh.rotation.y += (targetRotationY - nodeMesh.rotation.y) * 0.05;
        wireframe.rotation.x = nodeMesh.rotation.x;
        wireframe.rotation.y = nodeMesh.rotation.y;
  
        // Particle animation
        particles.rotation.x += 0.0005;
        particles.rotation.y += 0.0005;
  
        // Pulsing effect
        const pulseFactor = Math.sin(Date.now() * 0.001) * 0.1 + 1;
        nodeMesh.scale.set(pulseFactor, pulseFactor, pulseFactor);
        wireframe.scale.set(pulseFactor, pulseFactor, pulseFactor);
  
        renderer.render(scene, camera);
      };
  
      animate();
      setIsLoading(false);
  
      // Cleanup
      return () => {
        containerRef.current?.removeEventListener('mousemove', handleMouseMove);
        containerRef.current?.removeChild(renderer.domElement);
        scene.clear();
      };
    }, []);
  
    return (
      <div className="relative w-96 h-96">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        )}
        <div 
          ref={containerRef} 
          className="w-full h-full cursor-move"
          style={{ perspective: '1000px' }}
        />
        {/* Interactive hint */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-purple-400/70 text-sm">
          Move mouse to rotate
        </div>
      </div>
    );
  };
  
  

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-purple-500/20 mb-8">
              <Wallet className="w-10 h-10 text-purple-400" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Simplicity Wallet
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Your gateway to the Simplicity blockchain. A secure, intuitive, and powerful wallet designed for both beginners and advanced users.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {[
              {
                icon: <Shield />,
                title: "Bank-Grade Security",
                description: "Advanced encryption and security measures to keep your assets safe"
              },
              {
                icon: <Zap />,
                title: "Lightning Fast",
                description: "Instant transactions and real-time blockchain synchronization"
              },
              {
                icon: <Key />,
                title: "Self-Custody",
                description: "You own your private keys and have complete control over your assets"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all group"
              >
                <div className="text-purple-400 mb-6 transform group-hover:scale-110 transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Primary Nodes Section */}
          <div className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Powered by Primary Nodes
                </h2>
                <p className="text-white/60 mb-8 leading-relaxed">
                  The Simplicity network is anchored by two primary nodes, ensuring maximum reliability and uptime. These nodes serve as the backbone of our network:
                </p>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-2">Primary Node Alpha</h3>
                      <p className="text-white/60">Located in Frankfurt, Germany</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-2">Primary Node Beta</h3>
                      <p className="text-white/60">Located in Singapore</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <Node3D />
              </div>
            </div>
          </div>

          {/* Wallet Features */}
          <div className="mb-32">
        <h2 className="text-3xl font-bold text-white text-center mb-16">
          Intuitive by Design
        </h2>
        <div className="space-y-32">
          {[
            {
              title: "All Your Transactions in One Place",
              description: "Track your balance and view all transactions in a clean, organized interface. Stay on top of your finances with detailed transaction history and real-time updates.",
              icon: <Network className="w-12 h-12" />,
              imageUrl: "./assest/pay.jpeg" // Replace with actual wallet screenshot
            },
            {
              title: "Quick and Easy Payments",
              description: "Send payments with just a few taps. Save frequent addresses for quick access or scan QR codes for instant transactions. Multiple payment methods supported for your convenience.",
              icon: <Blocks className="w-12 h-12" />,
              imageUrl: "data:image/jpeg;base64,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" // Replace with actual payment screenshot
            },
            {
              title: "Secure QR Code Transactions",
              description: "Generate and scan QR codes for quick and secure transactions. Perfect for in-person payments and receiving funds from other users.",
              icon: <Key className="w-12 h-12" />,
              imageUrl: "../assest/pay.jpeg" // Replace with actual QR code screenshot
            }
          ].map((feature, index) => (
            <div key={index} className="relative">
              <div className="max-w-7xl mx-auto px-8">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="inline-block text-purple-400 mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <button className="text-purple-400 flex items-center gap-2 group">
                      Learn more 
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  <div className={`flex justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <PhoneMockup 
                      imageUrl={feature.imageUrl}
                      className="transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
              {/* Decorative gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-purple-900/0 via-purple-900/5 to-purple-900/0 -z-10" />
            </div>
          ))}
        </div>
      </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Get Started?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all">
                Download Wallet
              </button>
              <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium border border-purple-500/30 hover:border-purple-500 transition-all">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WalletPage;