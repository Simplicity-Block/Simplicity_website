import React, { useEffect, useRef, useState } from 'react';
import { 
  Wallet, 
  Shield, 
  Lock, 
  Zap,
  Server, 
  Globe,
  ArrowRight,
  Lightning,
  Key,
  Blocks,
  Network
} from 'lucide-react';

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

  const Node3D = () => (
    <div 
      ref={node3dRef}
      className="relative w-96 h-96 transition-transform duration-75"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Primary Node 3D Model */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-800/20 rounded-3xl border border-purple-500/30 backdrop-blur-xl">
        <div className="absolute inset-0 flex items-center justify-center">
          <Server className="w-24 h-24 text-purple-400" />
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="animate-ping absolute inline-flex h-32 w-32 rounded-full bg-purple-400 opacity-10"></div>
              <div className="animate-ping absolute inline-flex h-24 w-24 rounded-full bg-purple-400 opacity-20 delay-75"></div>
              <div className="animate-ping absolute inline-flex h-16 w-16 rounded-full bg-purple-400 opacity-30 delay-150"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

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
            <div className="space-y-24">
              {[
                {
                  title: "One-Click Connection",
                  description: "Connect to the Simplicity blockchain instantly with automatic node selection and optimization.",
                  icon: <Network className="w-12 h-12" />,
                  imageUrl: "/api/placeholder/600/400"
                },
                {
                  title: "Real-Time Transaction Monitoring",
                  description: "Watch your transactions propagate through the network with our visual transaction tracker.",
                  icon: <Blocks className="w-12 h-12" />,
                  imageUrl: "/api/placeholder/600/400"
                },
                {
                  title: "Smart Account Management",
                  description: "Create and manage multiple accounts with our intuitive interface. Perfect for both personal and business use.",
                  icon: <Key className="w-12 h-12" />,
                  imageUrl: "/api/placeholder/600/400"
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}
                >
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
                  <div>
                    <div className="rounded-3xl overflow-hidden border border-purple-500/20">
                      <img 
                        src={feature.imageUrl} 
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
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