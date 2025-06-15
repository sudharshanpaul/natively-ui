import React from "react";
import { CodeBlock } from "@/components/app/code-block";
import { Terminal } from "lucide-react";

export default function BadgePage() {
  return (
    <div className="space-y-8">
      {/* Component Header */}
      <div>
        <h1 className="text-3xl font-bold mb-4">Badge</h1>
        <p className="text-lg text-muted-foreground">
          A versatile badge component for displaying status, labels, and
          notifications with multiple variants and sizes.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Installation</h2>
        <div className="bg-neutral-900 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Terminal className="w-4 h-4" />
            <p className="text-sm font-mono">Install the component:</p>
          </div>
          <CodeBlock
            language="bash"
            filename=""
            code="npx natively-ui add badge"
            showLineNumbers={false}
          />
        </div>
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Usage</h2>
        <div className="bg-card rounded-lg space-y-4">
          <CodeBlock
            language="jsx"
            filename="BadgeDemo.jsx"
            highlightLines={[6]}
            code={`import { Badge } from '@natively-ui/badge';

export default function MyComponent() {
  return (
    <Badge 
      variant="default" 
      size="default"
    >
      New
    </Badge>
  );
}`}
          />
        </div>
      </section>

      {/* Props */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Props</h2>

        <div className="border rounded-lg overflow-hidden">
          <table className="w-full border-collapse">
            <thead className="bg-neutral-900">
              <tr>
                <th className="text-left p-3 border-b">Prop</th>
                <th className="text-left p-3 border-b">Type</th>
                <th className="text-left p-3 border-b">Default</th>
                <th className="text-left p-3 border-b">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-3 font-mono text-sm">children</td>
                <td className="p-3 font-mono text-sm">React.ReactNode</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">
                  The content to display inside the badge.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">variant</td>
                <td className="p-3 font-mono text-sm">
                  'default' | 'secondary' | 'destructive' | 'outline' |
                  'success' | 'warning'
                </td>
                <td className="p-3 font-mono text-sm">'default'</td>
                <td className="p-3 text-sm">
                  The visual style variant of the badge.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">size</td>
                <td className="p-3 font-mono text-sm">
                  'default' | 'sm' | 'lg'
                </td>
                <td className="p-3 font-mono text-sm">'default'</td>
                <td className="p-3 text-sm">The size of the badge.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">icon</td>
                <td className="p-3 font-mono text-sm">React.ReactNode</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">
                  Optional icon to display before the badge text.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">className</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">""</td>
                <td className="p-3 text-sm">
                  Additional CSS classes for the badge container.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">textClassName</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">""</td>
                <td className="p-3 text-sm">
                  Additional CSS classes for the badge text.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Features */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>
            Six visual variants (default, secondary, destructive, outline,
            success, warning)
          </li>
          <li>Three size options (default, sm, lg)</li>
          <li>Icon support with automatic spacing</li>
          <li>Semantic color coding for different states</li>
          <li>Self-adjusting width based on content</li>
          <li>Customizable styling with className props</li>
          <li>Accessible text contrast ratios</li>
          <li>Built with Tailwind CSS and React Native</li>
        </ul>
      </section>

      {/* Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Examples</h2>

        <div className="space-y-6">
          {/* Basic Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Basic Usage</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="BadgeDemo.jsx"
                code={`<Badge>New</Badge>`}
              />
            </div>
          </div>

          {/* Variants Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Variants</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="BadgeDemo.jsx"
                code={`<View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
  <Badge variant="default">Default</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="destructive">Destructive</Badge>
  <Badge variant="outline">Outline</Badge>
  <Badge variant="success">Success</Badge>
  <Badge variant="warning">Warning</Badge>
</View>`}
              />
            </div>
          </div>

          {/* Sizes Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Sizes</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="BadgeDemo.jsx"
                code={`<View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
  <Badge size="sm">Small</Badge>
  <Badge size="default">Default</Badge>
  <Badge size="lg">Large</Badge>
</View>`}
              />
            </div>
          </div>

          {/* With Icons Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">With Icons</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="BadgeDemo.jsx"
                code={`<View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
  <Badge 
    variant="success" 
    icon={<Icon name="check" size={12} />}
  >
    Completed
  </Badge>
  
  <Badge 
    variant="warning" 
    icon={<Icon name="alert-triangle" size={12} />}
  >
    Warning
  </Badge>
  
  <Badge 
    variant="destructive" 
    icon={<Icon name="x" size={12} />}
  >
    Error
  </Badge>
  
  <Badge 
    variant="default" 
    icon={<Icon name="star" size={12} />}
  >
    Featured
  </Badge>
</View>`}
              />
            </div>
          </div>

          {/* Status Indicators Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Status Indicators</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="BadgeDemo.jsx"
                code={`<View style={{ gap: 12 }}>
  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
    <Text>Order Status:</Text>
    <Badge variant="success">Delivered</Badge>
  </View>
  
  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
    <Text>Payment Status:</Text>
    <Badge variant="warning">Pending</Badge>
  </View>
  
  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
    <Text>Server Status:</Text>
    <Badge variant="destructive">Offline</Badge>
  </View>
  
  <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
    <Text>Account Type:</Text>
    <Badge variant="outline">Free</Badge>
  </View>
</View>`}
              />
            </div>
          </div>

          {/* Notification Badges Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Notification Badges</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="BadgeDemo.jsx"
                code={`<View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
  <Badge variant="destructive" size="sm">3</Badge>
  <Badge variant="warning" size="sm">12</Badge>
  <Badge variant="success" size="sm">99+</Badge>
  <Badge variant="default" size="sm">New</Badge>
</View>`}
              />
            </div>
          </div>

          {/* Category Tags Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Category Tags</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="BadgeDemo.jsx"
                code={`<View style={{ gap: 16 }}>
  <View>
    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>
      React Native Best Practices
    </Text>
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
      <Badge variant="default" size="sm">React Native</Badge>
      <Badge variant="secondary" size="sm">JavaScript</Badge>
      <Badge variant="outline" size="sm">Mobile</Badge>
      <Badge variant="success" size="sm">Tutorial</Badge>
    </View>
  </View>
  
  <View>
    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>
      Advanced TypeScript Guide
    </Text>
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
      <Badge variant="warning" size="sm">TypeScript</Badge>
      <Badge variant="default" size="sm">Advanced</Badge>
      <Badge variant="outline" size="sm">Web Dev</Badge>
    </View>
  </View>
</View>`}
              />
            </div>
          </div>

          {/* Custom Styling Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Custom Styling</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="BadgeDemo.jsx"
                code={`<View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
  {/* Custom background gradient */}
  <Badge 
    className="bg-gradient-to-r from-purple-500 to-pink-500"
    textClassName="text-white font-bold"
  >
    Premium
  </Badge>
  
  {/* Custom border and shadow */}
  <Badge 
    variant="outline"
    className="border-2 border-blue-500 shadow-md"
    textClassName="text-blue-600 font-semibold"
  >
    Featured
  </Badge>
  
  {/* Custom size and padding */}
  <Badge 
    variant="success"
    className="px-4 py-2 rounded-full"
    textClassName="text-sm"
  >
    Verified
  </Badge>
</View>`}
              />
            </div>
          </div>

          {/* Interactive Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Interactive Usage</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="BadgeDemo.jsx"
                code={`const [filter, setFilter] = useState('all');

const filters = [
  { id: 'all', label: 'All', variant: 'outline' },
  { id: 'active', label: 'Active', variant: 'success' },
  { id: 'pending', label: 'Pending', variant: 'warning' },
  { id: 'inactive', label: 'Inactive', variant: 'destructive' },
];

<View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
  {filters.map(filterItem => (
    <TouchableOpacity 
      key={filterItem.id}
      onPress={() => setFilter(filterItem.id)}
    >
      <Badge 
        variant={filter === filterItem.id ? filterItem.variant : 'outline'}
        className={filter === filterItem.id ? '' : 'opacity-60'}
      >
        {filterItem.label}
      </Badge>
    </TouchableOpacity>
  ))}
</View>`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
