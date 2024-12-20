// src/components/sections/Features.jsx
import React from 'react';
import { BookOpen, Blocks, Users } from 'lucide-react';

const featureData = [
  {
    icon: BookOpen,
    title: "Interactive Tutorials",
    description: "Learn blockchain concepts through hands-on exercises and real-world examples"
  },
  {
    icon: Blocks,
    title: "SimpleCoin Sandbox",
    description: "Practice with our educational cryptocurrency in a risk-free environment"
  },
  {
    icon: Users,
    title: "Community Learning",
    description: "Join a global community of blockchain enthusiasts and learners"
  }
];

const Features = () => (
  <section className="py-32 relative">
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featureData.map((feature, index) => (
          <div 
            key={index}
            className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all group"
          >
            <div className="text-purple-400 mb-6 transform group-hover:scale-110 transition-all duration-500">
              <feature.icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
            <p className="text-white/60">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;