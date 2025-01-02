import React, { useState } from 'react';
import { Code2, Terminal, Play, Book,Send ,  Archive, Server, Download  , Upload  ,  Wallet, Shield , CloudLightning, ChevronRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';

const SmartContractsPage = () => {
  const [selectedSection, setSelectedSection] = useState('basics');

  const sections = [
    { id: 'basics', name: 'Contract Basics', icon: <Book className="w-5 h-5" /> },
    { id: 'writing', name: 'Writing Contracts', icon: <Code2 className="w-5 h-5" /> },
    { id: 'ide', name: 'Using the IDE', icon: <Terminal className="w-5 h-5" /> },
    { id: 'deployment', name: 'Deployment', icon: <Server className="w-5 h-5" /> },
  ];

  const handleIDEClick = () => {
    window.open('https://simplicity-ide.web.app/', '_blank');
  };

  const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="bg-black/40 rounded-xl p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all group">
      <div className="flex items-center space-x-3 mb-4">
        <Icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
        <h3 className="text-lg font-medium text-white group-hover:text-purple-200">{title}</h3>
      </div>
      <p className="text-white/60 text-sm">{description}</p>
    </div>
  );

  const CodeExample = ({ title, code, features }) => (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-white">{title}</h3>
      <pre className="bg-black/40 p-4 rounded-lg overflow-x-auto border border-purple-500/10">
        <code className="text-purple-400 text-sm">{code}</code>
      </pre>
      {features && (
        <ul className="space-y-2 text-white/60">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <ChevronRight className="w-4 h-4 text-purple-400" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-purple-900/20 to-transparent pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              Smart Contract Development
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Learn how to write, test, and deploy smart contracts using Simply-lang and the Simplicity IDE. 
              Our intuitive tools make blockchain development accessible to everyone.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 gap-8">
          {/* Getting Started Section */}
          <Card className="bg-black/40 backdrop-blur-xl border border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Getting Started with Simply-lang</CardTitle>
              <CardDescription className="text-white/60">
                Simply-lang is our intuitive smart contract language designed for simplicity and safety
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CodeExample
                  title="Basic Contract Structure"
                  code={`contract wallet with amount, address does
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
    .`}
                />
                <div className="space-y-6">
                  <div className="bg-black/40 rounded-xl p-6 border border-purple-500/10">
                    <h3 className="text-lg font-medium text-white mb-4">Language Features</h3>
                    <ul className="space-y-3 text-white/60">
                      <li className="flex items-center space-x-2">
                        <CloudLightning className="w-4 h-4 text-purple-400" />
                        <span>Contract state management with 'save'</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Shield className="w-4 h-4 text-purple-400" />
                        <span>Built-in security features</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Wallet className="w-4 h-4 text-purple-400" />
                        <span>Automatic balance tracking</span>
                      </li>
                    </ul>
                  </div>
                  
                
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-black/40 backdrop-blur-xl border border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Money Transfer Operations</CardTitle>
              <CardDescription className="text-white/60">
                Learn how to implement secure money transfers using Simply-lang wallet contracts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-black/40 rounded-xl p-6 border border-purple-500/10">
                    <h3 className="text-lg font-medium text-white mb-4">Wallet Contract Example</h3>
                    <pre className="bg-black/60 p-4 rounded-lg overflow-x-auto">
                      <code className="text-purple-400 text-sm">{`contract wallet with amount, address does
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
    .
    
    transfer_to takes amount, address does
        transfer amount to address
        return "Success"
    .
.`}</code>
                    </pre>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-black/40 rounded-xl p-6 border border-purple-500/10">
                    <h3 className="text-lg font-medium text-white mb-4">Available Operations</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Upload className="w-6 h-6 text-purple-400" />
                        <div>
                          <h4 className="text-white font-medium">Deposit</h4>
                          <p className="text-white/60 text-sm">Add funds to your wallet balance</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Download className="w-6 h-6 text-purple-400" />
                        <div>
                          <h4 className="text-white font-medium">Withdraw</h4>
                          <p className="text-white/60 text-sm">Remove funds if sufficient balance exists</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Send className="w-6 h-6 text-purple-400" />
                        <div>
                          <h4 className="text-white font-medium">Transfer</h4>
                          <p className="text-white/60 text-sm">Send funds to another wallet address</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-black/40 rounded-xl p-6 border border-purple-500/10">
                    <h3 className="text-lg font-medium text-white mb-4">How to Use</h3>
                    <div className="space-y-3 text-white/60 text-sm">
                      <p>1. Deploy the wallet contract using the IDE</p>
                      <p>2. Use contract address for operations:</p>
                      <div className="bg-black/60 p-3 rounded-lg mt-2">
                        <code className="text-purple-400">
                          {`// Example parameters for transfer
{
  "amount": 100,
  "address": "recipient_wallet_address"
}`}
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-black/40 rounded-xl p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all">
                  <div className="flex items-center space-x-3 mb-4">
                    <RefreshCw className="w-6 h-6 text-purple-400" />
                    <h3 className="text-lg font-medium text-white">Transaction Status</h3>
                  </div>
                  <p className="text-white/60 text-sm">Track your transfers in real-time with transaction IDs</p>
                  <button onClick={handleIDEClick} className="mt-4 w-full px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-all">
                    Check Status
                  </button>
                </div>

                <div className="bg-black/40 rounded-xl p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all">
                  <div className="flex items-center space-x-3 mb-4">
                    <Terminal className="w-6 h-6 text-purple-400" />
                    <h3 className="text-lg font-medium text-white">Test Transfers</h3>
                  </div>
                  <p className="text-white/60 text-sm">Try transfers with test tokens in our sandbox environment</p>
                  <button onClick={handleIDEClick} className="mt-4 w-full px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-all">
                    Open Sandbox
                  </button>
                </div>

                <div className="bg-black/40 rounded-xl p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all">
                  <div className="flex items-center space-x-3 mb-4">
                    <Book className="w-6 h-6 text-purple-400" />
                    <h3 className="text-lg font-medium text-white">Transfer Guide</h3>
                  </div>
                  <p className="text-white/60 text-sm">Detailed documentation on transfer operations</p>
                  <button onClick={() => window.open('/docs/transfers', '_blank')} className="mt-4 w-full px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-all">
                    View Guide
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
          {/* IDE Features */}
          <Card className="bg-black/40 backdrop-blur-xl border border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Simplicity IDE Features</CardTitle>
              <CardDescription className="text-white/60">
                Our specialized development environment for writing and testing smart contracts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FeatureCard
                  icon={Code2}
                  title="Smart Editor"
                  description="Syntax highlighting, auto-completion, and real-time error checking for Simply-lang"
                />
                <FeatureCard
                  icon={Play}
                  title="Live Testing"
                  description="Test your contracts in real-time with our built-in blockchain simulator"
                />
                <FeatureCard
                  icon={Archive}
                  title="Contract Templates"
                  description="Start quickly with pre-built contract templates for common use cases"
                />
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-black/40 rounded-xl p-6 border border-purple-500/10">
                  <div className="flex items-center space-x-4">
                    <Server className="w-8 h-8 text-purple-400" />
                    <div>
                      <h4 className="text-white font-medium">One-Click Deployment</h4>
                      <p className="text-white/60 text-sm">Deploy contracts seamlessly to any network</p>
                    </div>
                    <button
                      onClick={handleIDEClick}
                      className="ml-auto px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-all"
                    >
                      Launch IDE
                    </button>
                  </div>
                </div>

                <div className="bg-black/40 rounded-xl p-6 border border-purple-500/10">
                  <div className="flex items-center space-x-4">
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
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SmartContractsPage;