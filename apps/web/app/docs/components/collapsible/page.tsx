import React from "react";
import { CodeBlock } from "@/components/app/code-block";
import { Terminal } from "lucide-react";

export default function CollapsiblePage() {
  return (
    <div className="space-y-8">
      {/* Component Header */}
      <div>
        <h1 className="text-3xl font-bold mb-4">Collapsible</h1>
        <p className="text-lg text-muted-foreground">
          A collapsible container component with smooth animations for showing
          and hiding content.
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
            code="npx natively-ui add collapsible"
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
            filename="CollapsibleDemo.jsx"
            code={`import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible';

export default function MyComponent() {
  return (
    <Collapsible defaultExpanded={false}>
      <CollapsibleTrigger>
        Click to expand
      </CollapsibleTrigger>
      <CollapsibleContent>
        <View style={{ padding: 16 }}>
          <Text>This content can be collapsed!</Text>
        </View>
      </CollapsibleContent>
    </Collapsible>
  );
}`}
          />
        </div>
      </section>

      {/* Props */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Props</h2>

        {/* Collapsible Props */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Collapsible</h3>
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
                  <td className="p-3 font-mono text-sm">defaultExpanded</td>
                  <td className="p-3 font-mono text-sm">boolean</td>
                  <td className="p-3 font-mono text-sm">false</td>
                  <td className="p-3 text-sm">
                    Whether the collapsible is expanded by default.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-sm">onExpandedChange</td>
                  <td className="p-3 font-mono text-sm">
                    (expanded: boolean) =&gt; void
                  </td>
                  <td className="p-3 font-mono text-sm">-</td>
                  <td className="p-3 text-sm">
                    Callback function called when the expanded state changes.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-sm">className</td>
                  <td className="p-3 font-mono text-sm">string</td>
                  <td className="p-3 font-mono text-sm">""</td>
                  <td className="p-3 text-sm">
                    Additional CSS classes for the collapsible container.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CollapsibleTrigger Props */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">CollapsibleTrigger</h3>
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
                  <td className="p-3 font-mono text-sm">expanded</td>
                  <td className="p-3 font-mono text-sm">boolean</td>
                  <td className="p-3 font-mono text-sm">-</td>
                  <td className="p-3 text-sm">
                    Override the expanded state. Use for controlled components.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-sm">onExpandedChange</td>
                  <td className="p-3 font-mono text-sm">
                    (expanded: boolean) =&gt; void
                  </td>
                  <td className="p-3 font-mono text-sm">-</td>
                  <td className="p-3 text-sm">
                    Override the expanded change handler for controlled usage.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-sm">className</td>
                  <td className="p-3 font-mono text-sm">string</td>
                  <td className="p-3 font-mono text-sm">""</td>
                  <td className="p-3 text-sm">
                    Additional CSS classes for the trigger button.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CollapsibleContent Props */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">CollapsibleContent</h3>
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
                  <td className="p-3 font-mono text-sm">expanded</td>
                  <td className="p-3 font-mono text-sm">boolean</td>
                  <td className="p-3 font-mono text-sm">-</td>
                  <td className="p-3 text-sm">
                    Override the expanded state. Use for controlled components.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-sm">className</td>
                  <td className="p-3 font-mono text-sm">string</td>
                  <td className="p-3 font-mono text-sm">""</td>
                  <td className="p-3 text-sm">
                    Additional CSS classes for the content container.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Smooth height animations with configurable timing</li>
          <li>Automatic content height measurement</li>
          <li>Context-based state management between components</li>
          <li>Controlled and uncontrolled usage patterns</li>
          <li>Built-in chevron icons that rotate based on state</li>
          <li>Customizable styling with className props</li>
          <li>Optimized rendering with proper layout measurement</li>
          <li>Built with React Native Animated API for smooth performance</li>
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
                filename="CollapsibleDemo.jsx"
                code={`<Collapsible>
  <CollapsibleTrigger>
    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
      Frequently Asked Questions
    </Text>
  </CollapsibleTrigger>
  <CollapsibleContent>
    <View style={{ padding: 16, backgroundColor: '#f5f5f5' }}>
      <Text>Here are the answers to common questions about our service.</Text>
    </View>
  </CollapsibleContent>
</Collapsible>`}
              />
            </div>
          </div>

          {/* Default Expanded Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Default Expanded</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="CollapsibleDemo.jsx"
                code={`<Collapsible defaultExpanded={true}>
  <CollapsibleTrigger>
    <Text>Important Information (Expanded by default)</Text>
  </CollapsibleTrigger>
  <CollapsibleContent>
    <View style={{ padding: 16 }}>
      <Text>This content is visible when the component first renders.</Text>
    </View>
  </CollapsibleContent>
</Collapsible>`}
              />
            </div>
          </div>

          {/* Controlled Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Controlled Component</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="CollapsibleDemo.jsx"
                code={`const [isExpanded, setIsExpanded] = useState(false);

<View style={{ gap: 16 }}>
  <Button onPress={() => setIsExpanded(!isExpanded)}>
    {isExpanded ? 'Collapse' : 'Expand'} Externally
  </Button>
  
  <Collapsible onExpandedChange={setIsExpanded}>
    <CollapsibleTrigger expanded={isExpanded}>
      <Text>Controlled Collapsible</Text>
    </CollapsibleTrigger>
    <CollapsibleContent expanded={isExpanded}>
      <View style={{ padding: 16 }}>
        <Text>This collapsible is controlled by external state.</Text>
      </View>
    </CollapsibleContent>
  </Collapsible>
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
                filename="CollapsibleDemo.jsx"
                code={`<Collapsible className="border border-gray-200 rounded-lg overflow-hidden">
  <CollapsibleTrigger className="bg-blue-50 p-4 border-b border-gray-200">
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
      <Icon name="info-circle" size={20} color="#3b82f6" />
      <Text style={{ fontSize: 16, fontWeight: '600', color: '#3b82f6' }}>
        Product Details
      </Text>
    </View>
  </CollapsibleTrigger>
  <CollapsibleContent>
    <View style={{ padding: 20, backgroundColor: 'white' }}>
      <Text style={{ lineHeight: 20 }}>
        Detailed product information and specifications will be displayed here.
      </Text>
    </View>
  </CollapsibleContent>
</Collapsible>`}
              />
            </div>
          </div>

          {/* Multiple Collapsibles Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Accordion Pattern</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="CollapsibleDemo.jsx"
                code={`<View style={{ gap: 8 }}>
  <Collapsible>
    <CollapsibleTrigger>
      <Text>Section 1: Getting Started</Text>
    </CollapsibleTrigger>
    <CollapsibleContent>
      <View style={{ padding: 16 }}>
        <Text>Learn the basics of using our platform.</Text>
      </View>
    </CollapsibleContent>
  </Collapsible>

  <Collapsible>
    <CollapsibleTrigger>
      <Text>Section 2: Advanced Features</Text>
    </CollapsibleTrigger>
    <CollapsibleContent>
      <View style={{ padding: 16 }}>
        <Text>Explore advanced functionality and customization options.</Text>
      </View>
    </CollapsibleContent>
  </Collapsible>

  <Collapsible>
    <CollapsibleTrigger>
      <Text>Section 3: Troubleshooting</Text>
    </CollapsibleTrigger>
    <CollapsibleContent>
      <View style={{ padding: 16 }}>
        <Text>Common issues and their solutions.</Text>
      </View>
    </CollapsibleContent>
  </Collapsible>
</View>`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
