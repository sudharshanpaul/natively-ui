import React from "react";
import { CodeBlock } from "@/components/app/code-block";
import { Terminal } from "lucide-react";

export default function ButtonPage() {
  return (
    <div className="space-y-8">
      {/* Component Header */}
      <div>
        <h1 className="text-3xl font-bold mb-4">Button</h1>
        <p className="text-lg text-muted-foreground">
          A versatile button component with multiple variants and states.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Installation</h2>
        <div className="bg-slate-900 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Terminal className="w-4 h-4" />
            <p className="font-mono text-sm">Install the component:</p>
          </div>
          <pre className="bg-slate-800 p-4 rounded-md overflow-x-auto">
            <code>npx nativly add button</code>
          </pre>
        </div>
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Usage</h2>
        <div className="bg-card rounded-lg space-y-4">
          <CodeBlock
            language="jsx"
            filename="ButtonDemo.jsx"
            highlightLines={[9]}
            code={`import { Button } from '@natively-ui/button';

export default function MyComponent() {
  return (
    <Button 
      variant="default" 
      onPress={() => console.log('Button pressed')}
    >
      Click me
    </Button>
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
            <thead className="bg-slate-900">
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
                <td className="p-3 font-mono text-sm">
                  'default' | 'destructive' | 'outline' | 'secondary' | 'ghost'
                  | 'link'
                </td>
                <td className="p-3 font-mono text-sm">'default'</td>
                <td className="p-3 text-sm">
                  The visual style variant of the button.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">size</td>
                <td className="p-3 font-mono text-sm">
                  'default' | 'sm' | 'lg' | 'icon'
                </td>
                <td className="p-3 font-mono text-sm">'default'</td>
                <td className="p-3 text-sm">The size of the button.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">disabled</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">false</td>
                <td className="p-3 text-sm">Whether the button is disabled.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">isLoading</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">false</td>
                <td className="p-3 text-sm">
                  Shows a loading spinner and disables the button.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">onPress</td>
                <td className="p-3 font-mono text-sm">() =&gt; void</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">
                  Function called when the button is pressed.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">href</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">
                  Navigation route. When provided, button acts as a link.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">leftIcon</td>
                <td className="p-3 font-mono text-sm">React.ReactNode</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">
                  Icon displayed on the left side of the button text.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">rightIcon</td>
                <td className="p-3 font-mono text-sm">React.ReactNode</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">
                  Icon displayed on the right side of the button text.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">className</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">""</td>
                <td className="p-3 text-sm">
                  Additional CSS classes for the button container.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">textClassName</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">""</td>
                <td className="p-3 text-sm">
                  Additional CSS classes for the button text.
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
            Multiple visual variants (default, destructive, outline, secondary,
            ghost, link)
          </li>
          <li>Different size options (default, sm, lg, icon)</li>
          <li>Loading state with spinner</li>
          <li>Disabled state styling</li>
          <li>Left and right icon support</li>
          <li>Navigation support with href prop</li>
          <li>Customizable styling with className props</li>
          <li>Built with Tailwind CSS and React Native</li>
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
              <CodeBlock
                language="jsx"
                filename="ButtonDemo.jsx"
                code={`<View style={{ gap: 8 }}>
  <Button variant="default">Default</Button>
  <Button variant="destructive">Destructive</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="link">Link</Button>
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
                filename="ButtonDemo.jsx"
                code={`<View style={{ gap: 8 }}>
  <Button size="sm">Small</Button>
  <Button size="default">Default</Button>
  <Button size="lg">Large</Button>
  <Button size="icon">
    <Icon name="settings" size={16} />
  </Button>
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
                filename="ButtonDemo.jsx"
                code={`<View style={{ gap: 8 }}>
  <Button leftIcon={<Icon name="plus" size={16} />}>
    Add Item
  </Button>
  
  <Button rightIcon={<Icon name="arrow-right" size={16} />}>
    Continue
  </Button>
  
  <Button 
    leftIcon={<Icon name="download" size={16} />}
    rightIcon={<Icon name="external-link" size={16} />}
  >
    Download & Open
  </Button>
</View>`}
              />
            </div>
          </div>

          {/* Loading State Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Loading State</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="ButtonDemo.jsx"
                code={`const [isLoading, setIsLoading] = useState(false);

<Button 
  isLoading={isLoading} 
  onPress={async () => {
    setIsLoading(true);
    await someAsyncOperation();
    setIsLoading(false);
  }}
>
  Save Changes
</Button>`}
              />
            </div>
          </div>

          {/* Navigation Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Navigation</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="ButtonDemo.jsx"
                code={`<View style={{ gap: 8 }}>
  <Button href="/profile">
    Go to Profile
  </Button>
  
  <Button 
    href="/settings"
    leftIcon={<Icon name="settings" size={16} />}
  >
    Settings
  </Button>
</View>`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
