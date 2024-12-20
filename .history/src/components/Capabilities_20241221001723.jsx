import React from 'react';
import { Zap, Lock, Coins, Boxes } from 'lucide-react';

const Capabilities = () => {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">What Can Simplicity Do?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/20 group hover:border-purple-500/40 transition-all">
            <Zap className="w-12 h-12 text-purple-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Fast Transactions</h3>
            <p className="text-white/60">
              Process transactions in seconds with minimal fees, making it perfect for learning and experimenting with blockchain technology.
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/20 group hover:border-purple-500/40 transition-all">
            <Lock className="w-12 h-12 text-purple-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Secure By Design</h3>
            <p className="text-white/60">
              Built with robust cryptographic principles while maintaining simplicity, making it an ideal platform for understanding blockchain security.
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/20 group hover:border-purple-500/40 transition-all">
            <Coins className="w-12 h-12 text-purple-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Smart Contracts</h3>
            <p className="text-white/60">
              Create and deploy simple smart contracts to learn about programmable transactions and decentralized applications.
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-12 border border-purple-500/20 group hover:border-purple-500/40 transition-all">
            <Boxes className="w-12 h-12 text-purple-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Cross-Chain Learning</h3>
            <p className="text-white/60">
              Understand blockchain interoperability through simplified examples of cross-chain communication and asset transfers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;