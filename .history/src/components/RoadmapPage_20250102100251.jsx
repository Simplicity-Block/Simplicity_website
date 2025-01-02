import React, { useState } from 'react';
import { 
  Check, 
  Wallet, 
  Server, 
  Boxes,
  Code,
  GitBranch,
  PackageSearch,
  Coins,
  Building2,
  ArrowRight,
  ChevronRight,
  Star
} from 'lucide-react';

const RoadmapPage = () => {
  const [activePhase, setActivePhase] = useState(null);

  const phases = [
    {
      id: 'foundation',
      status: 'completed',
      period: 'Q4 2024',
      title: 'Foundation Phase',
      description: 'Establishing the core infrastructure',
      milestones: [
        {
          title: 'Primary Node Development',
          description: 'Successfully deployed dual primary nodes on Render.com with high availability architecture',
          status: 'completed',
          icon: Server
        },
        {
          title: 'Wallet Implementation',
          description: 'Developed secure wallet infrastructure with encrypted key storage and transaction capabilities',
          status: 'completed',
          icon: Wallet
        }
      ]
    },
   
    {
      id: 'ecosystem',
      status: 'upcoming',
      period: 'Q1 2025',
      title: 'Ecosystem Growth',
      description: 'Expanding platform capabilities and user accessibility',
      milestones: [
        {
          title: 'Simplicity-IDE',
          description: 'Provides an IDE to deploy and execute the smart contracts ',
          status: 'completed',
          icon: Coins
        },
        {
          title: 'Simply-lang Integration',
          description: 'Integration of Simply-lang programming language for smart contract development',
          status: 'completed',
          icon: Boxes,
          link: 'https://simply-lang.vercel.app/'
        }
        
      ]
    },
    {
      id: 'developer',
      status: 'upcoming',
      period: 'Q2 2025',
      title: 'Developer Experience',
      description: 'Enhancing developer tools and platform integration',
      milestones: [
        {
          title: 'SDK Development',
          description: 'Release of Flutter and web packages for seamless node interaction via RPC',
          status: 'completed',
          icon: PackageSearch
        }, {
          title: 'Smart Contracts',
          description: 'Introduction of smart contract functionality with developer tools and documentation',
          status: 'completed',
          icon: Code
        }
        
      ]
    },
    {
      id: 'consensus',
      status: 'in-progress',
      period: 'Q3 2025',
      title: 'Consensus Evolution',
      description: 'Transitioning to more efficient consensus mechanism',
      milestones: [
        {
          title: 'PoS Implementation',
          description: 'Migration from Proof-of-Work to Proof-of-Stake consensus for improved efficiency and scalability',
          status: 'in-progress',
          icon: Building2
        },
        {
          title: 'Validator Network',
          description: 'Establishing validator node network and staking mechanisms',
          status: 'pending',
          icon: GitBranch
        }
      ]
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green-400';
      case 'in-progress':
        return 'text-purple-400';
      default:
        return 'text-white/40';
    }
  };

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-white mb-6">
            Simplicity Roadmap
          </h1>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Our journey to build a more efficient, scalable, and developer-friendly blockchain ecosystem.
            Follow our progress as we evolve from foundation to full-scale deployment.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-32">
          {/* Progress Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-purple-500/20" />

          {phases.map((phase, index) => (
            <div key={phase.id} className="mb-24 relative">
              {/* Phase Period */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-10">
                <div className={`px-4 py-1 rounded-full border ${
                  phase.status === 'completed' ? 'border-green-500/30 text-green-400' :
                  phase.status === 'in-progress' ? 'border-purple-500/30 text-purple-400' :
                  'border-white/10 text-white/40'
                }`}>
                  {phase.period}
                </div>
              </div>

              {/* Phase Content */}
              <div 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 relative ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Phase Overview */}
                <div className={index % 2 === 0 ? 'lg:text-right' : ''}>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {phase.title}
                  </h2>
                  <p className="text-white/60 mb-6">
                    {phase.description}
                  </p>
                </div>

                {/* Milestones */}
                <div className={`space-y-6 ${index % 2 === 0 ? '' : 'lg:col-start-1'}`}>
                {phase.milestones.map((milestone) => (
  <div
    key={milestone.title}
    className="bg-white/5 rounded-xl p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all"
  >
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0">
        <milestone.icon className={`w-6 h-6 ${getStatusColor(milestone.status)}`} />
      </div>
      <div>
        <h3 className="text-white font-medium mb-2">
          {milestone.link ? (
            <a
              href={milestone.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:underline"
            >
              {milestone.title}
            </a>
          ) : (
            milestone.title
          )}
        </h3>
        <p className="text-white/60">
          {milestone.description}
        </p>
      </div>
      <div className="ml-auto flex-shrink-0">
        {milestone.status === 'completed' && (
          <Check className="w-5 h-5 text-green-400" />
        )}
      </div>
    </div>
  </div>
))}

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center max-w-2xl mx-auto">
          <Star className="w-8 h-8 text-purple-400 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-white mb-4">
            Join Our Journey
          </h2>
          <p className="text-white/60 mb-8">
            Be part of the Simplicity ecosystem as we build the future of blockchain technology.
            Follow our progress and contribute to our open-source development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all">
              View GitHub Repository
            </button>
            <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium border border-purple-500/30 hover:border-purple-500 transition-all">
              Join Developer Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;