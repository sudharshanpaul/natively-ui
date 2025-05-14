import { Terminal } from 'lucide-react';

export default function CheckboxPage() {
  return (
    <div className="space-y-8">
      {/* Component Header */}
      <div>
        <h1 className="text-3xl font-bold mb-4">Checkbox</h1>
        <p className="text-lg text-muted-foreground">
          A control that allows users to select one or multiple items from a list.
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
            <code>natively install checkbox</code>
          </pre>
        </div>
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Usage</h2>
        <div className="bg-card rounded-lg p-6 border space-y-4">
          <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
            <code>{`import { Checkbox } from '@natively/checkbox';

export default function MyComponent() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      checked={checked}
      onCheckedChange={setChecked}
      label="Accept terms and conditions"
    />
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
                <td className="p-3 font-mono text-sm">checked</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">false</td>
                <td className="p-3 text-sm">The controlled checked state of the checkbox.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">defaultChecked</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">false</td>
                <td className="p-3 text-sm">The default checked state when uncontrolled.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">onCheckedChange</td>
                <td className="p-3 font-mono text-sm">(checked: boolean) => void</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">Function called when the checked state changes.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">disabled</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">false</td>
                <td className="p-3 text-sm">Whether the checkbox is disabled.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">label</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">The label text for the checkbox.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">size</td>
                <td className="p-3 font-mono text-sm">'sm' | 'md' | 'lg'</td>
                <td className="p-3 font-mono text-sm">'md'</td>
                <td className="p-3 text-sm">The size of the checkbox.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Features */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Controlled and uncontrolled modes</li>
          <li>Multiple size options</li>
          <li>Customizable colors and styles</li>
          <li>Support for disabled state</li>
          <li>Accessible label support</li>
          <li>Haptic feedback</li>
          <li>Custom check icon</li>
          <li>Group support for multiple checkboxes</li>
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
              <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
                <code>{`<View style={{ gap: 10 }}>
  <Checkbox
    label="Option 1"
    onCheckedChange={(checked) => console.log('Option 1:', checked)}
  />
  <Checkbox
    label="Option 2"
    onCheckedChange={(checked) => console.log('Option 2:', checked)}
  />
</View>`}</code>
              </pre>
            </div>
          </div>

          {/* Checkbox Group */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Checkbox Group</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
                <code>{`const [selected, setSelected] = useState(['option1']);

<Checkbox.Group
  value={selected}
  onValueChange={setSelected}
>
  <Checkbox value="option1" label="Option 1" />
  <Checkbox value="option2" label="Option 2" />
  <Checkbox value="option3" label="Option 3" />
</Checkbox.Group>`}</code>
              </pre>
            </div>
          </div>

          {/* Custom Styling */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Custom Styling</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
                <code>{`<Checkbox
  size="lg"
  style={{
    backgroundColor: checked ? '#4F46E5' : 'transparent',
    borderColor: '#4F46E5',
    borderRadius: 6,
  }}
  checkIconStyle={{
    color: 'white',
    width: 16,
    height: 16,
  }}
  label="Custom styled checkbox"
/>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}