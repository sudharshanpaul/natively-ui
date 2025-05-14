import { Terminal } from 'lucide-react';

export default function CollapsiblePage() {
  return (
    <div className="space-y-8">
      {/* Component Header */}
      <div>
        <h1 className="text-3xl font-bold mb-4">Collapsible</h1>
        <p className="text-lg text-muted-foreground">
          A component that can be expanded or collapsed to show or hide content with smooth animations.
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
            <code>natively install collapsible</code>
          </pre>
        </div>
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Usage</h2>
        <div className="bg-card rounded-lg p-6 border space-y-4">
          <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
            <code>{`import { Collapsible } from '@natively/collapsible';

export default function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <Collapsible.Trigger>
        Click to expand
      </Collapsible.Trigger>
      <Collapsible.Content>
        This content can be shown or hidden.
      </Collapsible.Content>
    </Collapsible>
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
                <td className="p-3 font-mono text-sm">open</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">false</td>
                <td className="p-3 text-sm">The controlled open state of the collapsible.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">onOpenChange</td>
                <td className="p-3 font-mono text-sm">(open: boolean) => void</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">Function called when the open state changes.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">defaultOpen</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">false</td>
                <td className="p-3 text-sm">The default open state when uncontrolled.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">disabled</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">false</td>
                <td className="p-3 text-sm">Whether the collapsible is disabled.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Features */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Smooth animations</li>
          <li>Controlled and uncontrolled modes</li>
          <li>Compound component pattern</li>
          <li>Accessible trigger button</li>
          <li>Custom animation timing</li>
          <li>Support for nested collapsibles</li>
          <li>Customizable trigger and content</li>
        </ul>
      </section>

      {/* Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Examples</h2>
        
        <div className="space-y-6">
          {/* Custom Animation */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Custom Animation</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
                <code>{`<Collapsible
  animationConfig={{
    duration: 300,
    easing: Easing.bezier(0.4, 0, 0.2, 1),
  }}
>
  <Collapsible.Trigger>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text>Toggle</Text>
      <Icon name={open ? 'chevron-up' : 'chevron-down'} />
    </View>
  </Collapsible.Trigger>
  <Collapsible.Content>
    <Text>Animated content</Text>
  </Collapsible.Content>
</Collapsible>`}</code>
              </pre>
            </div>
          </div>

          {/* Nested Collapsibles */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Nested Collapsibles</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
                <code>{`<Collapsible>
  <Collapsible.Trigger>Parent Section</Collapsible.Trigger>
  <Collapsible.Content>
    <Text>Parent content</Text>
    
    <Collapsible>
      <Collapsible.Trigger>Child Section</Collapsible.Trigger>
      <Collapsible.Content>
        <Text>Child content</Text>
      </Collapsible.Content>
    </Collapsible>
  </Collapsible.Content>
</Collapsible>`}</code>
              </pre>
            </div>
          </div>

          {/* With Icons and Styling */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">With Icons and Styling</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
                <code>{`<Collapsible
  style={{
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    overflow: 'hidden',
  }}
>
  <Collapsible.Trigger
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 16,
      backgroundColor: '#F9FAFB',
    }}
  >
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
      <Icon name="settings" size={20} />
      <Text>Settings</Text>
    </View>
    <Icon name={open ? 'chevron-up' : 'chevron-down'} size={20} />
  </Collapsible.Trigger>
  <Collapsible.Content style={{ padding: 16 }}>
    <Text>Settings content goes here</Text>
  </Collapsible.Content>
</Collapsible>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 