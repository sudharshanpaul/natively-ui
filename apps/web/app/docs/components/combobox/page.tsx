import React from "react";
import { CodeBlock } from "@/components/app/code-block";
import { Terminal } from "lucide-react";

export default function ComboboxPage() {
  return (
    <div className="space-y-8">
      {/* Component Header */}
      <div>
        <h1 className="text-3xl font-bold mb-4">Combobox</h1>
        <p className="text-lg text-muted-foreground">
          A searchable dropdown component that combines the functionality of a
          select and input field with filtering capabilities.
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
            code="npx natively-ui add combobox"
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
            filename="ComboboxDemo.jsx"
            highlightLines={[11, 12, 13, 14]}
            code={`import { Combobox } from '@/components/ui/combobox';

const items = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "orange", label: "Orange" },
];

export default function MyComponent() {
  return (
    <Combobox 
      items={items}
      placeholder="Select a fruit..."
      onValueChange={(value) => console.log('Selected:', value)}
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
                <td className="p-3 font-mono text-sm">items</td>
                <td className="p-3 font-mono text-sm">ComboboxItem[]</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">
                  Array of items to display in the dropdown. Each item should
                  have value and label properties.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">defaultValue</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">""</td>
                <td className="p-3 text-sm">
                  Initial selected value for uncontrolled combobox.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">value</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">
                  Controlled value for the combobox. When provided, combobox
                  becomes controlled.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">onValueChange</td>
                <td className="p-3 font-mono text-sm">
                  (value: string) =&gt; void
                </td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">
                  Function called when the selected value changes.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">placeholder</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">"Select an option..."</td>
                <td className="p-3 text-sm">
                  Text displayed when no item is selected.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">searchPlaceholder</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">"Search..."</td>
                <td className="p-3 text-sm">
                  Placeholder text for the search input field.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">emptyMessage</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">"No results found."</td>
                <td className="p-3 text-sm">
                  Message shown when no items match the search query.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">disabled</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">false</td>
                <td className="p-3 text-sm">
                  Whether the combobox is disabled.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">className</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">""</td>
                <td className="p-3 text-sm">
                  Additional CSS classes for the combobox container.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">buttonClassName</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">""</td>
                <td className="p-3 text-sm">
                  Additional CSS classes for the trigger button.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">contentClassName</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">""</td>
                <td className="p-3 text-sm">
                  Additional CSS classes for the dropdown content.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">width</td>
                <td className="p-3 font-mono text-sm">number</td>
                <td className="p-3 font-mono text-sm">300</td>
                <td className="p-3 text-sm">
                  Width of the combobox and dropdown in pixels.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">maxHeight</td>
                <td className="p-3 font-mono text-sm">number</td>
                <td className="p-3 font-mono text-sm">300</td>
                <td className="p-3 text-sm">
                  Maximum height of the dropdown content in pixels.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Types */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Types</h2>
        <div className="bg-card rounded-lg p-6 border space-y-4">
          <CodeBlock
            language="typescript"
            filename="types.ts"
            code={`interface ComboboxItem {
  value: string;
  label: string;
}`}
          />
        </div>
      </section>

      {/* Features */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Real-time search filtering with case-insensitive matching</li>
          <li>
            Controlled and uncontrolled modes for flexible state management
          </li>
          <li>Modal-based dropdown with backdrop dismissal</li>
          <li>Built-in accessibility support with proper ARIA attributes</li>
          <li>Keyboard navigation and focus management</li>
          <li>Customizable sizing with width and maxHeight props</li>
          <li>Visual selection indicators with checkmarks</li>
          <li>Empty state handling with custom messages</li>
          <li>Responsive design that adapts to screen height</li>
          <li>Custom styling support with multiple className props</li>
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
                filename="ComboboxDemo.jsx"
                code={`const fruits = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "orange", label: "Orange" },
  { value: "grape", label: "Grape" },
  { value: "strawberry", label: "Strawberry" },
];

<Combobox 
  items={fruits}
  placeholder="Choose a fruit..."
  onValueChange={(value) => console.log('Selected:', value)}
/>`}
              />
            </div>
          </div>

          {/* Controlled Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Controlled Combobox</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="ComboboxDemo.jsx"
                code={`const [selectedValue, setSelectedValue] = useState("");

const countries = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "uk", label: "United Kingdom" },
  { value: "au", label: "Australia" },
];

<View style={{ gap: 16 }}>
  <Combobox 
    items={countries}
    value={selectedValue}
    onValueChange={setSelectedValue}
    placeholder="Select country..."
  />
  
  <Text>Selected: {selectedValue || 'None'}</Text>
</View>`}
              />
            </div>
          </div>

          {/* Custom Sizing Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Custom Sizing</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="ComboboxDemo.jsx"
                code={`const options = [
  { value: "option1", label: "Very long option name that might overflow" },
  { value: "option2", label: "Another lengthy option description" },
  { value: "option3", label: "Short option" },
];

<View style={{ gap: 16 }}>
  <Combobox 
    items={options}
    width={400}
    maxHeight={200}
    placeholder="Wide combobox..."
  />
  
  <Combobox 
    items={options}
    width={200}
    maxHeight={150}
    placeholder="Narrow combobox..."
  />
</View>`}
              />
            </div>
          </div>

          {/* Custom Messages Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Custom Messages</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="ComboboxDemo.jsx"
                code={`const products = [
  { value: "laptop", label: "Laptop" },
  { value: "phone", label: "Smartphone" },
  { value: "tablet", label: "Tablet" },
];

<Combobox 
  items={products}
  placeholder="Find your device..."
  searchPlaceholder="Type to search devices..."
  emptyMessage="No devices match your search."
  onValueChange={(value) => console.log('Product:', value)}
/>`}
              />
            </div>
          </div>

          {/* Large Dataset Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Large Dataset</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="ComboboxDemo.jsx"
                code={`// Generate a large list of options
const generateOptions = () => {
  const options = [];
  for (let i = 1; i <= 1000; i++) {
    options.push({
      value: \`item-\${i}\`,
      label: \`Item \${i} - Sample data entry\`
    });
  }
  return options;
};

const largeDataset = generateOptions();

<Combobox 
  items={largeDataset}
  placeholder="Search from 1000 items..."
  searchPlaceholder="Type to filter..."
  width={350}
  maxHeight={250}
  onValueChange={(value) => console.log('Selected item:', value)}
/>`}
              />
            </div>
          </div>

          {/* Custom Styling Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Custom Styling</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="ComboboxDemo.jsx"
                code={`const themes = [
  { value: "light", label: "Light Theme" },
  { value: "dark", label: "Dark Theme" },
  { value: "auto", label: "Auto Theme" },
];

<Combobox 
  items={themes}
  placeholder="Select theme..."
  buttonClassName="border-blue-500 bg-blue-50"
  contentClassName="border-blue-300"
  className="shadow-lg"
  width={280}
  onValueChange={(value) => console.log('Theme:', value)}
/>`}
              />
            </div>
          </div>

          {/* Disabled State Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Disabled State</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="ComboboxDemo.jsx"
                code={`const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
];

<View style={{ gap: 16 }}>
  <Combobox 
    items={options}
    placeholder="Disabled combobox"
    disabled
  />
  
  <Combobox 
    items={options}
    defaultValue="option1"
    disabled
  />
</View>`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
