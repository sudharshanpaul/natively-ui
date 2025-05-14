import React from "react";
import { Terminal } from 'lucide-react';

export default function DatePickerPage() {
  return (
    <div className="space-y-8">
      {/* Component Header */}
      <div>
        <h1 className="text-3xl font-bold mb-4">Datepicker</h1>
        <p className="text-lg text-muted-foreground">
          A flexible date picker component for selecting dates with various display formats and configurations.
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
            <code>natively install datepicker</code>
          </pre>
        </div>
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Usage</h2>
        <div className="bg-card rounded-lg p-6 border space-y-4">
          <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
            <code>{`import { DatePicker } from '@natively/datepicker';

export default function MyComponent() {
  const [date, setDate] = React.useState(new Date());

  return (
    <DatePicker
      value={date}
      onChange={setDate}
      format="MM/dd/yyyy"
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
                <td className="p-3 font-mono text-sm">value</td>
                <td className="p-3 font-mono text-sm">Date</td>
                <td className="p-3 font-mono text-sm">new Date()</td>
                <td className="p-3 text-sm">The currently selected date.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">onChange</td>
                <td className="p-3 font-mono text-sm">(date: Date) => void</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">Callback when the selected date changes.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">format</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">'MM/dd/yyyy'</td>
                <td className="p-3 text-sm">The format string for displaying the date.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">minDate</td>
                <td className="p-3 font-mono text-sm">Date</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">The minimum selectable date.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">maxDate</td>
                <td className="p-3 font-mono text-sm">Date</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">The maximum selectable date.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">disabled</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">false</td>
                <td className="p-3 text-sm">Whether the date picker is disabled.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Features */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Customizable date format</li>
          <li>Min/max date constraints</li>
          <li>Month and year navigation</li>
          <li>Localization support</li>
          <li>Custom date validation</li>
          <li>Keyboard navigation</li>
          <li>Accessible calendar view</li>
          <li>Native date picker fallback on mobile</li>
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
                <code>{`const [date, setDate] = React.useState(new Date());

<DatePicker
  value={date}
  onChange={setDate}
  format="MM/dd/yyyy"
/>`}</code>
              </pre>
            </div>
          </div>

          {/* With Min/Max Dates */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">With Min/Max Dates</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
                <code>{`const minDate = new Date('2024-01-01');
const maxDate = new Date('2024-12-31');

<DatePicker
  value={date}
  onChange={setDate}
  minDate={minDate}
  maxDate={maxDate}
  format="MM/dd/yyyy"
/>`}</code>
              </pre>
            </div>
          </div>

          {/* Custom Format */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Custom Format</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
                <code>{`<DatePicker
  value={date}
  onChange={setDate}
  format="MMMM dd, yyyy"
  placeholder="Select a date"
/>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}