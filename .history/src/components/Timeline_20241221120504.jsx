import React from "react";
import { Calendar, Rocket, Globe, Lock } from "lucide-react";

const Timeline = () => {
  const timelineItems = [
    {
      icon: <Calendar className="w-5 h-5 md:w-6 md:h-6" />,
      date: "Q1 2025",
      title: "Initial Launch",
      description: "Public release of Simplicity network and core features",
    },
    {
      icon: <Lock className="w-5 h-5 md:w-6 md:h-6" />,
      date: "Q2 2025",
      title: "Enhanced Security",
      description: "Implementation of advanced security protocols and features",
    },
    {
      icon: <Globe className="w-5 h-5 md:w-6 md:h-6" />,
      date: "Q3 2025",
      title: "Global Expansion",
      description: "Partnership with major financial institutions and expansion to new markets",
    },
    {
      icon: <Rocket className="w-5 h-5 md:w-6 md:h-6" />,
      date: "Q4 2025",
      title: "Smart Contracts",
      description: "Launch of smart contract functionality and developer tools",
    },
  ];

  return (
    <section className="py-16 md:py-32 relative bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Project Timeline
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[calc(50%-1px)] top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 opacity-20 hidden md:block" />

          <div className="space-y-16">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center md:grid md:grid-cols-2 md:items-start md:gap-8"
              >
                <div className="flex items-center space-x-4 md:space-x-0 md:space-y-2 md:flex-col md:items-center">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-purple-400 font-mono text-sm md:text-base">
                    {item.date}
                  </span>
                </div>

                <div className="mt-4 md:mt-0">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm md:text-base">
                    {item.description}
                  </p>
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
