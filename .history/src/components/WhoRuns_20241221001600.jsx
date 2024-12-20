import React from 'react';
import { Shield, Users, Code } from 'lucide-react';

const WhoRuns = () => {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Who Runs Simplicity?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all group">
            <Shield className="w-12 h-12 text-purple-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Decentralized Network</h3>
            <p className="text-white/60">
              Simplicity runs on a network of independent nodes, ensuring no single point of control. Anyone can participate in running and securing the network.
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all group">
            <Users className="w-12 h-12 text-purple-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Community Driven</h3>
            <p className="text-white/60">
              The development and governance of Simplicity is guided by its community of developers, users, and enthusiasts through transparent decision-making.
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all group">
            <Code className="w-12 h-12 text-purple-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Open Source</h3>
            <p className="text-white/60">
              All Simplicity code is open source, allowing anyone to inspect, contribute to, or build upon the platform in a transparent manner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoRuns;