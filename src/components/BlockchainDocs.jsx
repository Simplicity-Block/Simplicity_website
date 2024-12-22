import React, { useState } from 'react';
import { 
  Server, 
  Database, 
  GitBranch,
  Box,
  Cpu,
  Shield,
  Copy,
} from 'lucide-react';

const BlockchainDocs = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [codeCopied, setCodeCopied] = useState(false);

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 2000);
  };

  // Example implementation of proof of work
  const proofOfWorkCode = `
import hashlib
import time
from typing import List, Dict

class Block:
    def __init__(self, index: int, transactions: List[Dict], timestamp: float, previous_hash: str):
        self.index = index
        self.transactions = transactions
        self.timestamp = timestamp
        self.previous_hash = previous_hash
        self.nonce = 0
        self.hash = self.calculate_hash()

    def calculate_hash(self) -> str:
        """Calculate block hash using SHA-256"""
        block_string = f"{self.index}{self.transactions}{self.timestamp}{self.previous_hash}{self.nonce}"
        return hashlib.sha256(block_string.encode()).hexdigest()

class Blockchain:
    def __init__(self, difficulty: int = 4):
        self.chain = [self.create_genesis_block()]
        self.difficulty = difficulty
        self.pending_transactions = []
        
    def create_genesis_block(self) -> Block:
        """Create the first block in the chain"""
        return Block(0, [], time.time(), "0")

    def get_latest_block(self) -> Block:
        """Return the most recent block"""
        return self.chain[-1]

    def add_block(self, block: Block) -> bool:
        """Add a new block to the chain after verification"""
        if self.is_block_valid(block):
            self.chain.append(block)
            return True
        return False

    def is_block_valid(self, block: Block) -> bool:
        """Verify block's hash meets difficulty requirement"""
        return (block.previous_hash == self.get_latest_block().hash and
                block.hash.startswith('0' * self.difficulty))

    def mine_pending_transactions(self, miner_address: str):
        """Mine pending transactions into a new block"""
        block = Block(
            len(self.chain),
            self.pending_transactions,
            time.time(),
            self.get_latest_block().hash
        )

        while not block.hash.startswith('0' * self.difficulty):
            block.nonce += 1
            block.hash = block.calculate_hash()

        print(f"Block mined! Nonce: {block.nonce}, Hash: {block.hash}")
        self.chain.append(block)
        self.pending_transactions = [
            {"from": "network", "to": miner_address, "amount": 10}  # Mining reward
        ]
`;

  return (
    <div className="min-h-screen mt-12 bg-black pt-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Understanding Simplicity Blockchain
          </h1>
          <p className="text-lg text-white/60">
            A comprehensive guide to Simplicity's blockchain architecture, proof of work implementation, and primary nodes.
          </p>
        </div>

        {/* Documentation Navigation */}
        <div className="flex space-x-1 mb-8 bg-white/5 rounded-lg p-1">
          {[
            { id: 'overview', label: 'Overview', icon: GitBranch },
            { id: 'pow', label: 'Proof of Work', icon: Cpu },
            { id: 'nodes', label: 'Primary Nodes', icon: Server },
            { id: 'storage', label: 'Data Storage', icon: Database },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                activeTab === id 
                  ? 'bg-purple-500 text-white' 
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {/* Documentation Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Side Navigation */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white/5 rounded-xl p-6">
              <h3 className="text-white font-medium mb-4">On This Page</h3>
              <ul className="space-y-2">
                {activeTab === 'overview' && [
                  'Architecture Overview',
                  'Consensus Mechanism',
                  'Transaction Flow',
                ].map((item) => (
                  <li key={item} className="text-white/60 hover:text-white cursor-pointer">
                    {item}
                  </li>
                ))}
                {activeTab === 'pow' && [
                  'Implementation',
                  'Mining Process',
                  'Difficulty Adjustment',
                ].map((item) => (
                  <li key={item} className="text-white/60 hover:text-white cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Architecture Overview</h2>
                  <p className="text-white/60 leading-relaxed">
                    Simplicity utilizes a dual primary node architecture with proof of work consensus. 
                    This design ensures high availability while maintaining decentralization through 
                    the mining process. All transactions are verified by both primary nodes before being 
                    added to the blockchain.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-white mb-4">Key Components</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        icon: Server,
                        title: "Primary Nodes",
                        description: "Two high-availability nodes hosted on Render.com"
                      },
                      {
                        icon: Database,
                        title: "Data Storage",
                        description: "Firebase for temporary transaction pool and node state"
                      },
                      {
                        icon: Shield,
                        title: "Security",
                        description: "PoW consensus with dynamic difficulty adjustment"
                      },
                      {
                        icon: Box,
                        title: "Smart Contracts",
                        description: "Support for basic smart contract execution"
                      }
                    ].map((item, index) => (
                      <div key={index} className="bg-white/5 rounded-xl p-6">
                        <item.icon className="w-6 h-6 text-purple-400 mb-4" />
                        <h4 className="text-white font-medium mb-2">{item.title}</h4>
                        <p className="text-white/60">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'pow' && (
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Proof of Work Implementation</h2>
                  <p className="text-white/60 leading-relaxed mb-6">
                    Simplicity uses a SHA-256 based proof of work system with dynamic difficulty 
                    adjustment. Below is the core implementation of our mining algorithm:
                  </p>

                  <div className="relative">
                    <div className="absolute top-4 right-4">
                      <button
                        onClick={() => handleCopyCode(proofOfWorkCode)}
                        className="text-white/60 hover:text-white"
                      >
                        <Copy className="w-5 h-5" />
                      </button>
                    </div>
                    <pre className="bg-black/50 rounded-xl p-6 overflow-x-auto">
                      <code className="text-white/80 text-sm">
                        {proofOfWorkCode}
                      </code>
                    </pre>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-white mb-4">Mining Process</h3>
                  <p className="text-white/60 leading-relaxed">
                    The mining process involves:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-white/60 mt-4">
                    <li>Collection of pending transactions from the pool</li>
                    <li>Block creation with previous block hash</li>
                    <li>Nonce adjustment until hash meets difficulty requirement</li>
                    <li>Block verification by primary nodes</li>
                    <li>Distribution of mining rewards</li>
                  </ul>
                </section>
              </div>
            )}

            {activeTab === 'nodes' && (
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Primary Nodes</h2>
                  <p className="text-white/60 leading-relaxed">
                    Simplicity operates two primary nodes hosted on Render.com, ensuring high 
                    availability and consistent blockchain state:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-white/5 rounded-xl p-6">
                      <h4 className="text-white font-medium mb-4">Primary Node Alpha</h4>
                      <ul className="space-y-2 text-white/60">
                        <li>Location: Frankfurt, Germany</li>
                        <li>Status: Active</li>
                        <li>Type: Full Node</li>
                        <li>Provider: Render.com</li>
                      </ul>
                    </div>

                    <div className="bg-white/5 rounded-xl p-6">
                      <h4 className="text-white font-medium mb-4">Primary Node Beta</h4>
                      <ul className="space-y-2 text-white/60">
                        <li>Location: Singapore</li>
                        <li>Status: Active</li>
                        <li>Type: Full Node</li>
                        <li>Provider: Render.com</li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'storage' && (
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Data Storage Architecture</h2>
                  <p className="text-white/60 leading-relaxed">
                    Simplicity currently uses Firebase for temporary data storage and node state 
                    management. This includes:
                  </p>

                  <div className="bg-white/5 rounded-xl p-6 mt-6">
                    <h4 className="text-white font-medium mb-4">Firebase Implementation</h4>
                    <ul className="space-y-4 text-white/60">
                      <li>
                        <strong className="text-white">Transaction Pool:</strong>
                        <br />
                        Pending transactions awaiting confirmation
                      </li>
                      <li>
                        <strong className="text-white">Node State:</strong>
                        <br />
                        Current blockchain state and node synchronization data
                      </li>
                      <li>
                        <strong className="text-white">User Accounts:</strong>
                        <br />
                        Wallet addresses and associated metadata
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainDocs;