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
// Import images
import walletImg from '../assets/wallet.jpeg';
import payImg from '../assets/pay.jpeg';
import qrImg from '../assets/qr.jpeg';
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
              imageUrl: "https://res.cloudinary.com/paulitechat/image/upload/v1734847539/wo4vhoghzb2q69ucktj2.jpg"
            },
            {
              title: "Quick and Easy Payments",
              description: "Send payments with just a few taps. Save frequent addresses for quick access or scan QR codes for instant transactions. Multiple payment methods supported for your convenience.",
              icon: <Blocks className="w-12 h-12" />,
        imageUrl: "https://drive.google.com/file/d/1mkkTLkfFmLFeBA2knkC0FFvQh7c2uR56/view?usp=drive_link"
            },
            {
              title: "Secure QR Code Transactions",
              description: "Generate and scan QR codes for quick and secure transactions. Perfect for in-person payments and receiving funds from other users.",
              icon: <Key className="w-12 h-12" />,
              image: payImg
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