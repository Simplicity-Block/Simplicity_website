import React, { useState } from 'react';
import { Book, Code2, Blocks, GraduationCap, Youtube, FileText, Wallet, Gift } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const ResourcesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Resources', icon: <Book className="w-5 h-5" /> },
    { id: 'blockchain', name: 'Blockchain Basics', icon: <Blocks className="w-5 h-5" /> },
    { id: 'smart-contracts', name: 'Smart Contracts', icon: <Code2 className="w-5 h-5" /> },
    { id: 'wallets', name: 'Wallets & Transactions', icon: <Wallet className="w-5 h-5" /> },
  ];

  const resources = [
    {
      title: "Blockchain Fundamentals",
      category: "blockchain",
      type: "Course Track",
      difficulty: "Beginner",
      resources: [
        {
          name: "What is Blockchain?",
          description: "Learn the basic concepts of blockchain technology and its importance",
          duration: "30 mins",
          format: "Interactive Tutorial"
        },
        {
          name: "Decentralization Explained",
          description: "Understanding distributed ledger technology and consensus mechanisms",
          duration: "45 mins",
          format: "Video + Quiz"
        },
        {
          name: "Cryptography Basics",
          description: "Essential cryptographic concepts for blockchain",
          duration: "1 hour",
          format: "Interactive Lesson"
        }
      ]
    },
    {
      title: "Smart Contracts 101",
      category: "smart-contracts",
      type: "Learning Path",
      difficulty: "Intermediate",
      resources: [
        {
          name: "Introduction to Smart Contracts",
          description: "Basic concepts and use cases of smart contracts",
          duration: "1 hour",
          format: "Interactive Tutorial"
        },
        {
          name: "Solidity Programming",
          description: "Learn the most popular smart contract programming language",
          duration: "2 hours",
          format: "Hands-on Workshop"
        },
        {
          name: "Building DApps",
          description: "Create your first decentralized application",
          duration: "3 hours",
          format: "Project-based Learning"
        }
      ]
    },
    {
      title: "Wallets & Transactions",
      category: "wallets",
      type: "Practical Guide",
      difficulty: "Beginner",
      resources: [
        {
          name: "Crypto Wallets Explained",
          description: "Understanding different types of cryptocurrency wallets",
          duration: "45 mins",
          format: "Interactive Guide"
        },
        {
          name: "Transaction Safety",
          description: "Best practices for secure transactions",
          duration: "1 hour",
          format: "Safety Workshop"
        },
        {
          name: "Practice with Test Networks",
          description: "Hands-on experience with test networks and faucets",
          duration: "1.5 hours",
          format: "Practical Exercise"
        }
      ]
    }
  ];

  const filteredResources = selectedCategory === 'all' 
    ? resources 
    : resources.filter(r => r.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-purple-900/20 to-transparent pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Learning Resources</h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Start your blockchain journey with our carefully curated resources. 
              From basic concepts to advanced development, we've got you covered.
            </p>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="sticky top-0 bg-black/80 backdrop-blur-lg border-b border-white/5 z-50">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex space-x-4 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all
                  ${selectedCategory === category.id
                    ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 gap-8">
          {filteredResources.map((track, index) => (
            <Card key={index} className="bg-black/40 backdrop-blur-xl border border-purple-500/20">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-2xl text-white">{track.title}</CardTitle>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-purple-400">{track.type}</span>
                    <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm">
                      {track.difficulty}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {track.resources.map((resource, resourceIndex) => (
                    <div
                      key={resourceIndex}
                      className="bg-black/40 rounded-xl p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-lg font-medium text-white">{resource.name}</h3>
                        <span className="text-sm text-purple-400">{resource.duration}</span>
                      </div>
                      <p className="text-white/60 mb-4 text-sm">{resource.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-purple-400">{resource.format}</span>
                        <button className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 text-sm hover:bg-purple-500/30 transition-all">
                          Start Learning
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Resources Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-black/40 backdrop-blur-xl border border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-xl text-white">Free Resources</CardTitle>
              <CardDescription className="text-white/60">Get test tokens and practice safely</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-purple-500/10">
                  <Gift className="w-8 h-8 text-purple-400" />
                  <div>
                    <h4 className="text-white font-medium">Test Network Faucets</h4>
                    <p className="text-white/60 text-sm">Get free test tokens to practice transactions</p>
                  </div>
                  <button className="ml-auto px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-all">
                    Claim Tokens
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/40 backdrop-blur-xl border border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-xl text-white">Community Support</CardTitle>
              <CardDescription className="text-white/60">Connect with other learners</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-purple-500/10">
                  <GraduationCap className="w-8 h-8 text-purple-400" />
                  <div>
                    <h4 className="text-white font-medium">Learning Groups</h4>
                    <p className="text-white/60 text-sm">Join study groups and discuss with peers</p>
                  </div>
                  <button className="ml-auto px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-all">
                    Join Now
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;