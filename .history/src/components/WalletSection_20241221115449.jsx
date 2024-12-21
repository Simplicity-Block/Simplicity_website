import React, { useEffect, useRef, useState } from 'react';
import { Wallet, Pick, Share, Book, ChevronDown } from 'lucide-react';

const WalletSection = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const walletRef = useRef(null);
  const coinsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (walletRef.current) {
        const rect = walletRef.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, 1 - (rect.bottom / window.innerHeight)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const Section = ({ title, icon, content, index }) => (
    <div className="mb-8">
      <button
        onClick={() => setActiveSection(activeSection === index ? null : index)}
        className="w-full flex items-center justify-between p-6 bg-black/40 backdrop-blur-xl rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all"
      >
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full bg-purple-500/20">
            {icon}
          </div>
          <span className="text-xl font-bold text-white">{title}</span>
        </div>
        <ChevronDown 
          className={`transform transition-transform ${activeSection === index ? 'rotate-180' : ''}`}
          size={24}
        />
      </button>
      
      <div className={`overflow-hidden transition-all duration-500 ${activeSection === index ? 'max-h-96' : 'max-h-0'}`}>
        <div className="p-6 bg-black/20 rounded-b-xl border-x border-b border-purple-500/20">
          {content}
        </div>
      </div>
    </div>
  );

  // 3D Wallet Animation
  const Wallet3D = () => (
    <div ref={walletRef} className="relative h-96 mb-16">
      <div 
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `
            translate(-50%, -50%)
            rotate3d(1, 0, 0, ${scrollProgress * 45}deg)
            rotate3d(0, 1, 0, ${scrollProgress * 180}deg)
          `
        }}
      >
        {/* Wallet Body */}
        <div className="relative w-64 h-40 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl shadow-2xl transform-style-preserve-3d">
          {/* Wallet Flap */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl origin-top"
            style={{
              transform: `rotateX(${-scrollProgress * 160}deg)`,
              transformOrigin: 'top',
            }}
          />
          
          {/* Coins */}
          <div ref={coinsRef} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600"
                style={{
                  transform: `
                    translate(
                      ${Math.sin((i / 5) * Math.PI * 2) * scrollProgress * 100}px,
                      ${Math.cos((i / 5) * Math.PI * 2) * scrollProgress * 100}px
                    )
                    scale(${1 - scrollProgress * 0.5})
                  `,
                  opacity: 1 - scrollProgress,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="py-32 relative">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Get Started with Your Wallet
        </h2>

        <Wallet3D />

        <Section
          index={0}
          title="Download & Setup Wallet"
          icon={<Wallet className="w-6 h-6 text-purple-400" />}
          content={
            <div className="space-y-4 text-white/60">
              <p>Follow these steps to set up your wallet:</p>
              <ol className="list-decimal pl-4 space-y-2">
                <li>Download the wallet app for your platform</li>
                <li>Create a new wallet and securely store your recovery phrase</li>
                <li>Set up two-factor authentication for additional security</li>
                <li>Configure your preferred network settings</li>
              </ol>
            </div>
          }
        />

        <Section
          index={1}
          title="Mining Coins"
          icon={<Pick className="w-6 h-6 text-purple-400" />}
          content={
            <div className="space-y-4 text-white/60">
              <p>Start mining Simplicity coins:</p>
              <ul className="list-disc pl-4 space-y-2">
                <li>Check minimum hardware requirements</li>
                <li>Join a mining pool or mine solo</li>
                <li>Configure your mining software</li>
                <li>Monitor your mining performance</li>
              </ul>
            </div>
          }
        />

        <Section
          index={2}
          title="Sharing Coins"
          icon={<Share className="w-6 h-6 text-purple-400" />}
          content={
            <div className="space-y-4 text-white/60">
              <p>Learn how to transfer and receive coins:</p>
              <ul className="list-disc pl-4 space-y-2">
                <li>Understand transaction fees and confirmation times</li>
                <li>Send coins using wallet addresses</li>
                <li>Verify transactions on the blockchain</li>
                <li>Track your transaction history</li>
              </ul>
            </div>
          }
        />

        <Section
          index={3}
          title="Documentation"
          icon={<Book className="w-6 h-6 text-purple-400" />}
          content={
            <div className="space-y-4 text-white/60">
              <p>Access comprehensive guides and documentation:</p>
              <ul className="list-disc pl-4 space-y-2">
                <li>Detailed wallet setup instructions</li>
                <li>Mining optimization guides</li>
                <li>Security best practices</li>
                <li>Troubleshooting and FAQ</li>
              </ul>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default WalletSection;