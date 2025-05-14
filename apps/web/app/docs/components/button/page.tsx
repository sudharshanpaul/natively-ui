// pages/docs/components/button.tsx
import React from "react";
import { Tabs } from "@/components/ui/tabs";
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CodeBlock } from "@/components/app/code-block";
import { Terminal } from 'lucide-react';

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
        <div className="bg-accent rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Terminal className="w-4 h-4" />
            <p className="font-mono text-sm">Install the component:</p>
          </div>
          <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
            <code>natively install button</code>
          </pre>
        </div>
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Usage</h2>
        <div className="bg-card rounded-lg p-6 border space-y-4">
          <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
            <code>{`import { Button } from '@natively/button';

export default function MyComponent() {
  return (
    <Button 
      variant="primary" 
      onPress={() => console.log('Button pressed')}
    >
      Click me
    </Button>
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
                <td className="p-3 font-mono text-sm">'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive'</td>
                <td className="p-3 font-mono text-sm">'primary'</td>
                <td className="p-3 text-sm">The visual style variant of the button.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">size</td>
                <td className="p-3 font-mono text-sm">'sm' | 'md' | 'lg' | 'icon'</td>
                <td className="p-3 font-mono text-sm">'md'</td>
                <td className="p-3 text-sm">The size of the button.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">disabled</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">false</td>
                <td className="p-3 text-sm">Whether the button is disabled.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">loading</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">false</td>
                <td className="p-3 text-sm">Shows a loading spinner and disables the button.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">onPress</td>
                <td className="p-3 font-mono text-sm">() => void</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">Function called when the button is pressed.</td>
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
          <li>Different size options</li>
          <li>Loading state with spinner</li>
          <li>Disabled state styling</li>
          <li>Icon support</li>
          <li>Haptic feedback</li>
          <li>Accessible touch targets</li>
          <li>Customizable press animations</li>
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
                <code>{`<View style={{ gap: 8 }}>
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="link">Link</Button>
  <Button variant="destructive">Destructive</Button>
</View>`}</code>
              </pre>
            </div>
          </div>

          {/* With Icon Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">With Icon</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
                <code>{`<Button>
  <Icon name="plus" size={16} />
  <Text>Add Item</Text>
</Button>

<Button size="icon">
  <Icon name="settings" size={16} />
</Button>`}</code>
              </pre>
            </div>
          </div>

          {/* Loading State Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Loading State</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
                <code>{`const [isLoading, setIsLoading] = useState(false);

<Button 
  loading={isLoading} 
  onPress={async () => {
    setIsLoading(true);
    await someAsyncOperation();
    setIsLoading(false);
  }}
>
  Save Changes
</Button>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
