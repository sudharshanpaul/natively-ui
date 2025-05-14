import { Terminal } from 'lucide-react';

export default function BadgePage() {
  return (
    <div className="space-y-8">
      {/* Component Header */}
      <div>
        <h1 className="text-3xl font-bold mb-4">Badge</h1>
        <p className="text-lg text-muted-foreground">
          A small visual indicator for highlighting status, labels, or counts.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Installation</h2>
        <div className="bg-accent rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Terminal className="w-4 h-4" />
            <p className="font-mono text-sm">Install the component:</p>
          </div>
          <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
            <code>natively install badge</code>
          </pre>
        </div>
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Usage</h2>
        <div className="bg-card rounded-lg p-6 border space-y-4">
          <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
            <code>{`import { Badge } from '@natively/badge';

export default function MyComponent() {
  return (
    <Badge variant="primary">
      New
    </Badge>
  );
}`}</code>
          </pre>
        </div>
      </section>

      {/* Props */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Props</h2>
        
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full border-collapse">
            <thead className="bg-accent">
              <tr>
                <th className="text-left p-3 border-b">Prop</th>
                <th className="text-left p-3 border-b">Type</th>
                <th className="text-left p-3 border-b">Default</th>
                <th className="text-left p-3 border-b">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-3 font-mono text-sm">variant</td>
                <td className="p-3 font-mono text-sm">'primary' | 'secondary' | 'outline' | 'destructive'</td>
                <td className="p-3 font-mono text-sm">'primary'</td>
                <td className="p-3 text-sm">The visual style variant of the badge.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">size</td>
                <td className="p-3 font-mono text-sm">'sm' | 'md' | 'lg'</td>
                <td className="p-3 font-mono text-sm">'md'</td>
                <td className="p-3 text-sm">The size of the badge.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">rounded</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">false</td>
                <td className="p-3 text-sm">Whether to use fully rounded corners.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Features */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Multiple visual variants</li>
          <li>Customizable sizes</li>
          <li>Support for icons and text</li>
          <li>Flexible styling options</li>
          <li>Animated state changes</li>
          <li>Accessible by default</li>
        </ul>
      </section>

      {/* Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Examples</h2>
        
        <div className="space-y-6">
          {/* Variants Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Variants</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
                <code>{`<View style={{ flexDirection: 'row', gap: 8 }}>
  <Badge variant="primary">Primary</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="outline">Outline</Badge>
  <Badge variant="destructive">Destructive</Badge>
</View>`}</code>
              </pre>
            </div>
          </div>

          {/* Sizes Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Sizes</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
                <code>{`<View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
  <Badge size="sm">Small</Badge>
  <Badge size="md">Medium</Badge>
  <Badge size="lg">Large</Badge>
</View>`}</code>
              </pre>
            </div>
          </div>

          {/* With Icon Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">With Icon</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
                <code>{`<Badge variant="primary">
  <Icon name="check" size={12} />
  <Text>Completed</Text>
</Badge>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
  