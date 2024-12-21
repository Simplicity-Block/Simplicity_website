import React, { useEffect, useRef } from 'react';
import { Info, Wallet, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

const GetStartedSteps = () => {
  const stepRefs = [useRef(), useRef(), useRef()];
  
  useEffect(() => {
    const handleScroll = () => {
      stepRefs.forEach((ref, index) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.8;
          
          if (isVisible) {
            ref.current.style.opacity = '1';
            ref.current.style.transform = 'translateY(0)';
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-24">
          How to use Simplicity
        </h2>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 to-blue-500 opacity-20 hidden lg:block" />

          <div className="space-y-16 md:space-y-32">
            {/* Step 1 */}
            <div 
              ref={stepRefs[0]}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-16 items-center opacity-0 transform translate-y-8 transition-all duration-1000"
            >
              <div className="text-center md:text-right lg:order-1">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/20 text-purple-400 mb-6 mx-auto md:mx-0">
                  <Info size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Inform yourself</h3>
                <p className="text-white/60 leading-relaxed">
                  Before you start using Simplicity, learn about its unique features and how it differs from traditional payment systems. Understanding the basics will help you use it securely.
                </p>
              </div>
              <div className="lg:order-2 flex justify-center">
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold">
                  1
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div 
              ref={stepRefs[1]}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-16 items-center opacity-0 transform translate-y-8 transition-all duration-1000"
            >
              <div className="lg:order-2 text-center md:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/20 text-purple-400 mb-6 mx-auto md:mx-0">
                  <Wallet size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Choose your wallet</h3>
                <p className="text-white/60 leading-relaxed">
                  Free Simplicity wallets are available for all major operating systems and devices. Select the one that best suits your needs, whether it's for mobile or desktop use.
                </p>
                <Link 
                to="/wallet"
                className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:opacity-90 transition-all">
                  Choose wallet
                </Link>
              </div>
              <div className="lg:order-1 flex justify-center">
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold">
                  2
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div 
              ref={stepRefs[2]}
              className="relative grid grid-cols-1 md:grid-cols-2 gap-16 items-center opacity-0 transform translate-y-8 transition-all duration-1000"
            >
              <div className="text-center md:text-right lg:order-1">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/20 text-purple-400 mb-6 mx-auto md:mx-0">
                  <CreditCard size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Get Simplicity</h3>
                <p className="text-white/60 leading-relaxed">
                  You can get Simplicity by accepting it as payment for goods and services or by purchasing it through various available methods.
                </p>
                <button className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:opacity-90 transition-all">
                  Buy Simplicity
                </button>
              </div>
              <div className="lg:order-2 flex justify-center">
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold">
                  3
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSteps;
