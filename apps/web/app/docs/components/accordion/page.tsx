import { Terminal } from 'lucide-react';

export default function AccordionPage() {
  return (
    <div className="space-y-8">
      {/* Component Header */}
      <div>
        <h1 className="text-3xl font-bold mb-4">Accordion</h1>
        <p className="text-lg text-muted-foreground">
          A vertically stacked set of interactive headings that each reveal a section of content.
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
            <code>natively install accordion</code>
          </pre>
        </div>
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Usage</h2>
        <div className="bg-card rounded-lg p-6 border space-y-4">
          <pre className="bg-slate-800 p-4 rounded-md overflow-x-auto">
            <code>{`import { Accordion } from '@natively/accordion';

export default function MyComponent() {
  return (
    <Accordion>
      <Accordion.Item>
        <Accordion.Trigger>
          Is it accessible?
        </Accordion.Trigger>
        <Accordion.Content>
          Yes. It adheres to the WAI-ARIA design pattern.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
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
                <td className="p-3 font-mono text-sm">type</td>
                <td className="p-3 font-mono text-sm">'single' | 'multiple'</td>
                <td className="p-3 font-mono text-sm">'single'</td>
                <td className="p-3 text-sm">Determines if one or multiple items can be opened at once.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">defaultValue</td>
                <td className="p-3 font-mono text-sm">string | string[]</td>
                <td className="p-3 font-mono text-sm">[]</td>
                <td className="p-3 text-sm">The default opened items.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">value</td>
                <td className="p-3 font-mono text-sm">string | string[]</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">The controlled opened items.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">onValueChange</td>
                <td className="p-3 font-mono text-sm">function</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">Callback when opened items change.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Features */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Full keyboard navigation</li>
          <li>Supports single or multiple expanded items</li>
          <li>Animated expand/collapse transitions</li>
          <li>WAI-ARIA compliant</li>
          <li>Customizable styles and animations</li>
          <li>Controlled and uncontrolled modes</li>
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
              <pre className="bg-slate-800 p-4 rounded-md overflow-x-auto">
                <code>{`<Accordion type="single" defaultValue="item-1">
  <Accordion.Item value="item-1">
    <Accordion.Trigger>Section 1</Accordion.Trigger>
    <Accordion.Content>Content for section 1</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-2">
    <Accordion.Trigger>Section 2</Accordion.Trigger>
    <Accordion.Content>Content for section 2</Accordion.Content>
  </Accordion.Item>
</Accordion>`}</code>
              </pre>
            </div>
          </div>

          {/* Multiple Selection Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Multiple Selection</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <pre className="bg-slate-800 p-4 rounded-md overflow-x-auto">
                <code>{`<Accordion type="multiple" defaultValue={['item-1', 'item-2']}>
  <Accordion.Item value="item-1">
    <Accordion.Trigger>Section 1</Accordion.Trigger>
    <Accordion.Content>Content for section 1</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-2">
    <Accordion.Trigger>Section 2</Accordion.Trigger>
    <Accordion.Content>Content for section 2</Accordion.Content>
  </Accordion.Item>
</Accordion>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}