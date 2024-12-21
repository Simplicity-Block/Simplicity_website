import React from 'react';
import { Calendar, Rocket, Globe, Lock } from 'lucide-react';

const Timeline = () => {
  const timelineItems = [
    {
      icon: <Calendar className="w-6 h-6" />,
      date: "Q1 2025",
      title: "Initial Launch",
      description: "Public release of Simplicity network and core features",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      date: "Q2 2025",
      title: "Enhanced Security",
      description: "Implementation of advanced security protocols and features",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      date: "Q3 2025",
      title: "Global Expansion",
      description: "Partnership with major financial institutions and expansion to new markets",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      date: "Q4 2025",
      title: "Smart Contracts",
      description: "Launch of smart contract functionality and developer tools",
    },
  ];

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-24">
          Project Timeline
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[calc(50%-1px)] top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 opacity-20 hidden md:block" />

          <div className="space-y-16 md:space-y-24">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center md:grid md:grid-cols-2 md:gap-8"
              >
                <div
                  className={`${
                    index % 2 === 0 ? "md:text-right" : ""
                  } md:order-1`}
                >
                  <div
                    className={`inline-flex items-center space-x-4 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-purple-400 font-mono">{item.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mt-4 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/60">{item.description}</p>
                </div>

                {/* Center Dot for Desktop */}
                <div
                  className={`hidden md:flex justify-center items-center ${
                    index % 2 === 0 ? "order-2" : "order-1"
                  }`}
                >
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
