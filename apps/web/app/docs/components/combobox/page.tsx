import React from 'react'
import { Terminal } from 'lucide-react';

export default function ComboboxPage() {
  return (
    <div className="space-y-8">
      {/* Component Header */}
      <div>
        <h1 className="text-3xl font-bold mb-4">Combobox</h1>
        <p className="text-lg text-muted-foreground">
          An input component that combines a text input with a dropdown list, allowing users to filter and select from a list of options.
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
            <code>natively install combobox</code>
          </pre>
        </div>
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Usage</h2>
        <div className="bg-card rounded-lg p-6 border space-y-4">
          <pre className="bg-slate-800 p-4 rounded-md overflow-x-auto">
            <code>{`import { Combobox } from '@natively/combobox';

export default function MyComponent() {
  const [value, setValue] = useState('');
  const options = ['Apple', 'Banana', 'Cherry', 'Date'];

  return (
    <Combobox
      value={value}
      onValueChange={setValue}
      options={options}
      placeholder="Select a fruit..."
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
                <td className="p-3 font-mono text-sm">value</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">''</td>
                <td className="p-3 text-sm">The controlled value of the combobox.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">onValueChange</td>
                <td className="p-3 font-mono text-sm">(value: string) => void</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">Function called when the value changes.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">options</td>
                <td className="p-3 font-mono text-sm">string[] | Option[]</td>
                <td className="p-3 font-mono text-sm">[]</td>
                <td className="p-3 text-sm">Array of options to display in the dropdown.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">placeholder</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">Placeholder text for the input.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">disabled</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">false</td>
                <td className="p-3 text-sm">Whether the combobox is disabled.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">filter</td>
                <td className="p-3 font-mono text-sm">(query: string, option: Option) => boolean</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">Custom filter function for options.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Features */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Type-to-filter functionality</li>
          <li>Keyboard navigation support</li>
          <li>Custom filtering logic</li>
          <li>Support for complex option objects</li>
          <li>Customizable rendering of options</li>
          <li>Accessible dropdown interface</li>
          <li>Loading state support</li>
          <li>Virtual scrolling for large lists</li>
        </ul>
      </section>

      {/* Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Examples</h2>
        
        <div className="space-y-6">
          {/* Complex Options */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Complex Options</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <pre className="bg-slate-800 p-4 rounded-md overflow-x-auto">
                <code>{`const options = [
  { id: 1, label: 'Apple', value: 'apple', icon: '🍎' },
  { id: 2, label: 'Banana', value: 'banana', icon: '🍌' },
  { id: 3, label: 'Cherry', value: 'cherry', icon: '🍒' },
];

<Combobox
  options={options}
  value={value}
  onValueChange={setValue}
  renderOption={(option) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
      <Text>{option.icon}</Text>
      <Text>{option.label}</Text>
    </View>
  )}
/>`}</code>
              </pre>
            </div>
          </div>

          {/* Async Loading */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Async Loading</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <pre className="bg-slate-800 p-4 rounded-md overflow-x-auto">
                <code>{`const [loading, setLoading] = useState(false);
const [options, setOptions] = useState([]);

const loadOptions = async (query) => {
  setLoading(true);
  const results = await fetchSearchResults(query);
  setOptions(results);
  setLoading(false);
};

<Combobox
  options={options}
  value={value}
  onValueChange={setValue}
  onInputChange={loadOptions}
  loading={loading}
  loadingIndicator={<ActivityIndicator size="small" />}
/>`}</code>
              </pre>
            </div>
          </div>

          {/* Custom Filtering */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Custom Filtering</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <pre className="bg-slate-800 p-4 rounded-md overflow-x-auto">
                <code>{`<Combobox
  options={options}
  value={value}
  onValueChange={setValue}
  filter={(query, option) => {
    return option.label.toLowerCase().startsWith(query.toLowerCase()) ||
           option.tags.some(tag => tag.includes(query.toLowerCase()));
  }}
  placeholder="Search by name or tags..."
/>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}