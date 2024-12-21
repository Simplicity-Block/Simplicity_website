import React from 'react';
import { ArrowRight } from 'lucide-react';

const Simplicity = () => {
  return (
    <section className="min-h-screen relative flex items-center">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h1 className="text-6xl font-bold text-white">
              A New Kind of
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"> Money</span>
            </h1>
            
            <p className="text-xl text-white/70 leading-relaxed">
              Simplicity is an innovative payment network and a new kind of money. Whether you're new to cryptocurrencies or a seasoned trader, Simplicity makes it easy to be part of the future of finance.
            </p>
            
            <div className="flex gap-4">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:opacity-90 transition-all group">
                Get Started
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-4 rounded-full border border-purple-500/30 text-white font-medium hover:border-purple-500 transition-all">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-3xl" />
            <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white/5 rounded-2xl">
                  <h3 className="text-2xl font-bold text-white mb-2">Fast</h3>
                  <p className="text-white/60">Lightning-quick transactions in seconds</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl">
                  <h3 className="text-2xl font-bold text-white mb-2">Secure</h3>
                  <p className="text-white/60">Built on proven blockchain technology</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl">
                  <h3 className="text-2xl font-bold text-white mb-2">Simple</h3>
                  <p className="text-white/60">Easy to understand and use</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl">
                  <h3 className="text-2xl font-bold text-white mb-2">Global</h3>
                  <p className="text-white/60">Available worldwide, borderless</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simplicity;