import { Terminal } from 'lucide-react';

export default function GettingStartedPage() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Getting Started with natively</h1>
      
      {/* Installation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Installation</h2>
        <div className="bg-accent rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="w-5 h-5" />
            <p className="font-mono text-sm">Install the CLI globally:</p>
          </div>
          <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
            <code>npm install -g natively-cli</code>
          </pre>
        </div>
      </section>

      {/* Usage */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Basic Usage</h2>
        <div className="space-y-6">
          <div className="bg-accent rounded-lg p-6">
            <p className="font-mono text-sm mb-3">1. List available components:</p>
            <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
              <code>natively list</code>
            </pre>
          </div>
          <div className="bg-accent rounded-lg p-6">
            <p className="font-mono text-sm mb-3">2. Install a component:</p>
            <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
              <code>natively install ComponentName</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Help & Support */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Help & Support</h2>
        <div className="bg-card rounded-lg p-6 border">
          <p className="mb-4">Need help? Here are some useful commands:</p>
          <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
            <code>{`natively --help
natively install --help
natively list --help`}</code>
          </pre>
        </div>
      </section>
    </div>
  );
}
