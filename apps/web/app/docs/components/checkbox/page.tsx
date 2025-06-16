import React from "react";
import { CodeBlock } from "@/components/app/code-block";
import { Terminal } from "lucide-react";

export default function CheckboxPage() {
  return (
    <div className="space-y-8">
      {/* Component Header */}
      <div>
        <h1 className="text-3xl font-bold mb-4">Checkbox</h1>
        <p className="text-lg text-muted-foreground">
          A customizable checkbox component with controlled and uncontrolled
          modes, disabled states, and label support.
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
            code="npx natively-ui add checkbox"
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
            filename="CheckboxDemo.jsx"
            highlightLines={[9]}
            code={`import { Checkbox } from '@/components/ui/checkbox';

export default function MyComponent() {
  return (
    <Checkbox 
      label="Accept terms and conditions"
      onCheckedChange={(checked) => console.log('Checked:', checked)}
    />
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
                <td className="p-3 font-mono text-sm">id</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">
                  Unique identifier for the checkbox element.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">checked</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">
                  Controlled state for the checkbox. When provided, checkbox
                  becomes controlled.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">defaultChecked</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">false</td>
                <td className="p-3 text-sm">
                  Initial checked state for uncontrolled checkbox.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">onCheckedChange</td>
                <td className="p-3 font-mono text-sm">
                  (checked: boolean) =&gt; void
                </td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">
                  Function called when the checkbox state changes.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">disabled</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">false</td>
                <td className="p-3 text-sm">
                  Whether the checkbox is disabled.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">required</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">false</td>
                <td className="p-3 text-sm">
                  Whether the checkbox is required for form validation.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">label</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">
                  Text label displayed next to the checkbox.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">className</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">""</td>
                <td className="p-3 text-sm">
                  Additional CSS classes for the checkbox container.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">checkboxClassName</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">""</td>
                <td className="p-3 text-sm">
                  Additional CSS classes for the checkbox element.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">labelClassName</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">""</td>
                <td className="p-3 text-sm">
                  Additional CSS classes for the label text.
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
            Controlled and uncontrolled modes for flexible state management
          </li>
          <li>Built-in accessibility support with proper ARIA attributes</li>
          <li>Disabled state with visual feedback</li>
          <li>Optional label with clickable interaction</li>
          <li>Customizable styling with className props</li>
          <li>Form validation support with required prop</li>
          <li>Built with React Native and Expo Vector Icons</li>
          <li>Forward ref support for external access</li>
        </ul>
      </section>

      {/* Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Examples</h2>

        <div className="space-y-6">
          {/* Basic Usage Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Basic Usage</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="CheckboxDemo.jsx"
                code={`<View style={{ gap: 12 }}>
  <Checkbox label="I agree to the terms" />
  <Checkbox label="Subscribe to newsletter" defaultChecked />
  <Checkbox label="Remember me" />
</View>`}
              />
            </div>
          </div>

          {/* Controlled Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Controlled Checkbox</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="CheckboxDemo.jsx"
                code={`const [isChecked, setIsChecked] = useState(false);

<Checkbox 
  checked={isChecked}
  onCheckedChange={setIsChecked}
  label="Controlled checkbox"
/>

<Text>Status: {isChecked ? 'Checked' : 'Unchecked'}</Text>`}
              />
            </div>
          </div>

          {/* Disabled State Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Disabled State</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="CheckboxDemo.jsx"
                code={`<View style={{ gap: 12 }}>
  <Checkbox 
    label="Disabled unchecked" 
    disabled 
  />
  <Checkbox 
    label="Disabled checked" 
    disabled 
    defaultChecked 
  />
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
                filename="CheckboxDemo.jsx"
                code={`<View style={{ gap: 12 }}>
  <Checkbox 
    label="Custom checkbox"
    checkboxClassName="border-blue-500 bg-blue-50"
    labelClassName="text-blue-700 font-semibold"
  />
  
  <Checkbox 
    label="Large checkbox"
    checkboxClassName="h-6 w-6"
    className="gap-3"
  />
</View>`}
              />
            </div>
          </div>

          {/* Form Integration Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Form Integration</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="CheckboxDemo.jsx"
                code={`const [formData, setFormData] = useState({
  terms: false,
  newsletter: false,
  notifications: true
});

const handleCheckboxChange = (field) => (checked) => {
  setFormData(prev => ({ ...prev, [field]: checked }));
};

<View style={{ gap: 16 }}>
  <Checkbox 
    label="I accept the terms and conditions *"
    checked={formData.terms}
    onCheckedChange={handleCheckboxChange('terms')}
    required
  />
  
  <Checkbox 
    label="Subscribe to newsletter"
    checked={formData.newsletter}
    onCheckedChange={handleCheckboxChange('newsletter')}
  />
  
  <Checkbox 
    label="Enable notifications"
    checked={formData.notifications}
    onCheckedChange={handleCheckboxChange('notifications')}
  />
</View>`}
              />
            </div>
          </div>

          {/* Without Label Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Without Label</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="CheckboxDemo.jsx"
                code={`<View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
  <Checkbox 
    onCheckedChange={(checked) => console.log('Item 1:', checked)}
  />
  <Text>Custom label arrangement</Text>
</View>`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
