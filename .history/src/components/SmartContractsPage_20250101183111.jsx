import React, { useState } from 'react';
import { Code2, Terminal, Play, Book, Archive, Server } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';

const SmartContractsPage = () => {
  const [selectedSection, setSelectedSection] = useState('basics');

  const sections = [
    { id: 'basics', name: 'Contract Basics', icon: <Book className="w-5 h-5" /> },
    { id: 'writing', name: 'Writing Contracts', icon: <Code2 className="w-5 h-5" /> },
    { id: 'ide', name: 'Using the IDE', icon: <Terminal className="w-5 h-5" /> },
    { id: 'deployment', name: 'Deployment', icon: <Server className="w-5 h-5" /> },
  ];

  const codeExamples = {
    basic: `contract wallet with amount, address does
    deposit takes amount does
        save balance is balance + amount
        return balance
    .
    
    withdraw takes amount does
        if balance > amount then
            balance is balance - amount
            return balance
        otherwise             
            return "Insufficient balance"
        .
    .`,
    advanced: `contract token with sender, recipient, amount does
    transfer takes recipient, amount does
        if balance[sender] >= amount then
            balance[sender] = balance[sender] - amount
            balance[recipient] = balance[recipient] + amount
            return "Transfer successful"
        otherwise
            return "Insufficient balance"
        .
    .
    
    mint takes amount does
        if sender == owner then
            total_supply = total_supply + amount
            balance[sender] = balance[sender] + amount
            return "Tokens minted"
        otherwise
            return "Unauthorized"
        .
    .`
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="bg-gradient-to-b from-purple-900/20 to-transparent pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Smart Contract Development</h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Learn how to write, test, and deploy smart contracts using Simply-lang and the Simplicity IDE. 
              Our intuitive tools make blockchain development accessible to everyone.
            </p>
          </div>
        </div>
      </div>

      <div className="sticky top-0 bg-black/80 backdrop-blur-lg border-b border-white/5 z-50">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex space-x-4 overflow-x-auto">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setSelectedSection(section.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all
                  ${selectedSection === section.id
                    ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
              >
                {section.icon}
                <span>{section.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 gap-8">
          <Card className="bg-black/40 backdrop-blur-xl border border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Getting Started with Simply-lang</CardTitle>
              <CardDescription className="text-white/60">
                Simply-lang is our intuitive smart contract language designed for simplicity and safety
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white">Basic Contract Structure</h3>
                  <pre className="bg-black/40 p-4 rounded-lg overflow-x-auto">
                    <code className="text-purple-400 text-sm">{codeExamples.basic}</code>
                  </pre>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white">Language Features</h3>
                  <ul className="space-y-2 text-white/60">
                    <li>• Contract state management with 'save'</li>
                    <li>• Conditional logic with 'if/otherwise'</li>
                    <li>• Built-in transfer operations</li>
                    <li>• Automatic balance tracking</li>
                    <li>• Safe mathematical operations</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/40 backdrop-blur-xl border border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Simplicity IDE Features</CardTitle>
              <CardDescription className="text-white/60">
                Our specialized development environment for writing and testing smart contracts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-black/40 rounded-xl p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all">
                  <div className="flex items-center space-x-3 mb-4">
                    <Code2 className="w-6 h-6 text-purple-400" />
                    <h3 className="text-lg font-medium text-white">Code Editor</h3>
                  </div>
                  <p className="text-white/60 text-sm">Syntax highlighting, auto-completion, and real-time error checking for Simply-lang</p>
                </div>

                <div className="bg-black/40 rounded-xl p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all">
                  <div className="flex items-center space-x-3 mb-4">
                    <Play className="w-6 h-6 text-purple-400" />
                    <h3 className="text-lg font-medium text-white">Live Testing</h3>
                  </div>
                  <p className="text-white/60 text-sm">Test your contracts in real-time with our built-in blockchain simulator</p>
                </div>

                <div className="bg-black/40 rounded-xl p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all">
                  <div className="flex items-center space-x-3 mb-4">
                    <Archive className="w-6 h-6 text-purple-400" />
                    <h3 className="text-lg font-medium text-white">Contract Templates</h3>
                  </div>
                  <p className="text-white/60 text-sm">Start quickly with pre-built contract templates for common use cases</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-black/40 backdrop-blur-xl border border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-xl text-white">Quick Deploy</CardTitle>
                <CardDescription className="text-white/60">Deploy contracts directly from the IDE</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-purple-500/10">
                    <Server className="w-8 h-8 text-purple-400" />
                    <div>
                      <h4 className="text-white font-medium">One-Click Deployment</h4>
                      <p className="text-white/60 text-sm">Test and deploy your contracts with a single click</p>
                    </div>
                    <a href="https://simplicity-ide.web.app/" class="ml-auto px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
    Try Simplicity IDE
</a>

                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 backdrop-blur-xl border border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-xl text-white">Developer Resources</CardTitle>
                <CardDescription className="text-white/60">Additional tools and documentation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-purple-500/10">
                    <Book className="w-8 h-8 text-purple-400" />
                    <div>
                      <h4 className="text-white font-medium">Documentation</h4>
                      <p className="text-white/60 text-sm">Comprehensive guides and API references</p>
                    </div>
                    <button className="ml-auto px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-all">
                      View Docs
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartContractsPage;