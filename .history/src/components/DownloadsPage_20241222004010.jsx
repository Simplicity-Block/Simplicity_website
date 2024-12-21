import React, { useState } from 'react';
import { 
  Download, 
  Terminal, 
  Shield, 
  Cpu, 
  HardDrive, 
  HardDriveIcon,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const DownloadsPage = () => {
  const [downloadStarted, setDownloadStarted] = useState(false);

  const handleDownload = () => {
    // Simulating download start
    setDownloadStarted(true);
    // Redirect to the actual file
    window.location.href = '/src/download/simplicity.exe';
  };

  const systemRequirements = [
    { icon: <Cpu className="w-5 h-5" />, label: "CPU", value: "64-bit processor, 2 cores minimum" },
    { icon: <Ram className="w-5 h-5" />, label: "RAM", value: "8 GB minimum" },
    { icon: <HardDrive className="w-5 h-5" />, label: "Storage", value: "500 GB available space" }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-purple-500/20 mb-8">
              <Download className="w-10 h-10 text-purple-400" />
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Download Simplicity Node
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Start mining and transacting with Simplicity. Our node software is optimized for Windows and includes everything you need to participate in the network.
            </p>
          </div>

          {/* Download Card */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Simplicity Node v1.0.0</h2>
                  <p className="text-white/60">Windows 64-bit</p>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm">Verified</span>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-3 text-white/60">
                  <Terminal className="w-5 h-5" />
                  <span>Full node with mining capabilities</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <CheckCircle className="w-5 h-5" />
                  <span>Built-in wallet functionality</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <AlertCircle className="w-5 h-5" />
                  <span>Requires Windows 10 or later</span>
                </div>
              </div>

              <button
                onClick={handleDownload}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all flex items-center justify-center gap-3"
              >
                {downloadStarted ? (
                  <>
                    <CheckCircle className="w-6 h-6" />
                    Download Started
                  </>
                ) : (
                  <>
                    <Download className="w-6 h-6" />
                    Download Now
                  </>
                )}
              </button>
            </div>
          </div>

          {/* System Requirements */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-white text-center mb-12">
              System Requirements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {systemRequirements.map((req, index) => (
                <div
                  key={index}
                  className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-purple-400">
                      {req.icon}
                    </div>
                    <h3 className="text-lg font-medium text-white">{req.label}</h3>
                  </div>
                  <p className="text-white/60">{req.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadsPage;