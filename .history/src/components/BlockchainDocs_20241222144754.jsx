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
  class Blockchain(object):
      def __init__(self):
          \"""
          Initialize the Blockchain
  
          :param proof: <int> The proof given by the Proof of Work algorithm
          :param previous_hash: (Optional) <str> Hash of previous Block
          :return: <dict> New Block
          \"""
          self.chain = []
          self.current_transactions = []
          self.hash_list = set()
          self.nodes = set()
          self.public_address= ""
          self.private_address = ""
          self.ip_address = ""
          self.target = 4  # Easy target value
          self.max_block_size = 1000000  
          self.max_mempool  = 2
          self.new_block( proof=100 , prev_hash =1  )
          self.error = ""
          database = BlockchainDb()
          db_chain = database.load_blockchain(self)
          
          self.mining_thread = None
          self.should_mine = False
          
          accountDb = AccountReader()
          accountDb.load_accounts()
          accounts_data = accountDb.account_data
          for account in accounts_data:
              if account['publicKey']:
                  self.publoc_key = account['publicKey']
              if account['privateKey']:
                  self.private_address = account['privateKey']
                  
          if db_chain:
              self.chain = self.validate_loaded_chain()
                  # print("Loaded chain is invalid. Starting with a new blockchain.")
                  
                  # #getting the longest chain in the network
                  # self.resolve_conflicts()
                  # #resetting the blockchain
                  # # self.hash_list = set()
                  # # self.chain = []
                  # # self.nodes = set()
                  # # self.current_transactions = []
                  # # self.new_block( proof=100 , prev_hash =1 )
  
                  
          self.start_scheduled_mining()
      def Blockchain(self , public_address):
          self.public_address = public_address
      
      def create_coinbase_transaction(self, miner_address: str, reward: int = 50):
          \"""
          Creates a coinbase transaction for the miner.
  
          :param miner_address: <str> Address of the miner receiving the reward
          :param reward: <int> Amount of coins to reward the miner
          :return: <dict> The coinbase transaction
          \"""
          # Create the coinbase transaction structure
          coinbase_tx = {
              'sender': '0',  # Indicates it's a coinbase transaction
              'recipient': miner_address,
              'amount': reward,
              'timestamp': time(),
          }
  
          # Generate transaction ID
          coinbase_tx['transaction_id'] = self.generate_transaction_id(coinbase_tx)
  
          # Optionally set the public address and digital signature if needed
          # For the coinbase transaction, you may want to sign it with the miner's public key
          public_address = self.public_address # This should be set to the miner's public key
  
          digital_signature = self.sign_transaction(coinbase_tx)
          coinbase_tx["public_address"] = public_address
          
          transaction = {
              "transaction": coinbase_tx,
              "public_address": public_address,
              "digital_signature": digital_signature
          }
  
          return transaction
      def generate_transaction_id(self , coinbase_tx):
          transaction_data = json.dumps(coinbase_tx, sort_keys=True)
          return hashlib.sha256(transaction_data.encode()).hexdigest()
      
      def validate_loaded_chain(self):
          \"""Validate the loaded chain for integrity.\"""
          for i in range(1, len(self.chain)):
              current_block = self.chain[i]
              previous_block = self.chain[i-1]
              if current_block['previous_hash'] != self.hash(previous_block):
                  return self.chain[:i-1]
              if not self.valid_proof(previous_block['proof'], current_block['proof'] , self.target):
                  return self.chain[:i-1]
              
          return self.chain    
      def create_mining_reward(self, miners_address, block_height):
          # Calculate the reward based on block height
          base_reward = 50  # Starting reward
          halving_interval = 210000  # Number of blocks between reward halvings
          halvings = block_height // halving_interval
          current_reward = base_reward / (2 ** halvings)
  
          # Add a transaction fee reward
          transaction_fees = sum(tx['transaction']['amount'] for tx in self.current_transactions if tx['transaction']['sender'] != "0")
          total_reward = current_reward + transaction_fees
  
          # Create the coinbase transaction
          coinbase_tx = self.create_coinbase_transaction(
              miner_address=miners_address,
              reward=total_reward
          )
  
          # The coinbase transaction will be added as the first transaction in the new block
          return total_reward, coinbase_tx
      
      def register(self , ip_address):
              # Create a NodeManager instance
          node_manager = NodeManager()
          self.ip_address = ip_address
          # Get a random node
          random_node = node_manager.get_random_node()
          nodes = node_manager.load_nodes()
          if self.ip_address not in nodes:
              data = {
                      "nodes": [self.ip_address]
              }
              print("Registering node : {}".format(ip_address) )
              requests.post(f'http://{random_node}/nodes/register' , json=data)
      
      def register_node(self , address , current_address):
          \"""
          Adds a new node to the list of nodes
  
          :param address: <str> Address of node. Eg. 'http://192.168.0.5:5000'
          :return: None
          \"""
          parsed_url = urlparse(address)
          if parsed_url.netloc not in self.nodes:
              self.nodes.add(parsed_url.netloc)
          current_url = urlparse(current_address)
          requests.post(f'http://{parsed_url.netloc}/nodes/update_chain' , json=[self.chain , current_url.netloc , list(self.hash_list) , list(self.nodes)])
          requests.post(f'http://{parsed_url.netloc}/nodes/update_nodes' , json={
              "nodes": list(self.nodes)
          })
  `;
  
  return (
    

    <div className="relative min-h-screen  pt-24 z-20">
    {/* Overlay to ensure 3D blocks are below this section */}
    <div className="absolute inset-0  -z-10"></div>
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
                      
                    </ul>
                  </div>
                </section>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
</div>
  );
};

export default BlockchainDocs;