import React from "react";
import { CodeBlock } from "@/components/app/code-block";
import { Terminal } from "lucide-react";

export default function DatePickerPage() {
  return (
    <div className="space-y-8">
      {/* Component Header */}
      <div>
        <h1 className="text-3xl font-bold mb-4">Date Picker</h1>
        <p className="text-lg text-muted-foreground">
          A flexible date picker component with calendar popup and various
          configuration options.
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
            code="npx natively-ui add datepicker"
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
            filename="DatePickerDemo.jsx"
            code={`import { DatePicker } from '@natively-ui/datepicker';

export default function MyComponent() {
  const [selectedDate, setSelectedDate] = useState();
  
  return (
    <DatePicker 
      value={selectedDate}
      onValueChange={setSelectedDate}
      placeholder="Select a date"
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
                <td className="p-3 font-mono text-sm">value</td>
                <td className="p-3 font-mono text-sm">Date</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">
                  Controlled value of the date picker.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">defaultValue</td>
                <td className="p-3 font-mono text-sm">Date</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">
                  Default value for uncontrolled usage.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">onValueChange</td>
                <td className="p-3 font-mono text-sm">
                  (date: Date | undefined) =&gt; void
                </td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">
                  Function called when the selected date changes.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">disabled</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">false</td>
                <td className="p-3 text-sm">
                  Whether the date picker is disabled.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">placeholder</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">'Select date'</td>
                <td className="p-3 text-sm">
                  Placeholder text when no date is selected.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">className</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">""</td>
                <td className="p-3 text-sm">
                  Additional CSS classes for the date picker container.
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
                <td className="p-3 font-mono text-sm">calendarClassName</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">""</td>
                <td className="p-3 text-sm">
                  Additional CSS classes for the calendar popup.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">disabledDates</td>
                <td className="p-3 font-mono text-sm">Date[]</td>
                <td className="p-3 font-mono text-sm">[]</td>
                <td className="p-3 text-sm">
                  Array of dates that should be disabled for selection.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">minDate</td>
                <td className="p-3 font-mono text-sm">Date</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">Minimum selectable date.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">maxDate</td>
                <td className="p-3 font-mono text-sm">Date</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">Maximum selectable date.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Features */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Controlled and uncontrolled component patterns</li>
          <li>Calendar popup with month/year navigation</li>
          <li>Today's date highlighting</li>
          <li>Disabled dates support</li>
          <li>Min/max date range restrictions</li>
          <li>Customizable styling with className props</li>
          <li>Responsive calendar sizing</li>
          <li>Accessibility support with proper labels</li>
          <li>Built with React Native and Expo Vector Icons</li>
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
                filename="DatePickerDemo.jsx"
                code={`const [selectedDate, setSelectedDate] = useState();

<DatePicker 
  value={selectedDate}
  onValueChange={setSelectedDate}
  placeholder="Choose a date"
/>`}
              />
            </div>
          </div>

          {/* Uncontrolled Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Uncontrolled</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="DatePickerDemo.jsx"
                code={`<DatePicker 
  defaultValue={new Date()}
  onValueChange={(date) => console.log('Selected:', date)}
  placeholder="Select date"
/>`}
              />
            </div>
          </div>

          {/* Date Range Restrictions */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Date Range Restrictions</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="DatePickerDemo.jsx"
                code={`const today = new Date();
const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());

<DatePicker 
  value={selectedDate}
  onValueChange={setSelectedDate}
  minDate={today}
  maxDate={nextMonth}
  placeholder="Select date within range"
/>`}
              />
            </div>
          </div>

          {/* Disabled Dates Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Disabled Dates</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="DatePickerDemo.jsx"
                code={`const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

const disabledDates = [
  today,
  tomorrow,
  new Date(2024, 11, 25), // Christmas
];

<DatePicker 
  value={selectedDate}
  onValueChange={setSelectedDate}
  disabledDates={disabledDates}
  placeholder="Select available date"
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
                filename="DatePickerDemo.jsx"
                code={`<DatePicker 
  value={selectedDate}
  onValueChange={setSelectedDate}
  className="mb-4"
  buttonClassName="border-blue-500 bg-blue-50"
  calendarClassName="border-2 border-blue-200"
  placeholder="Custom styled picker"
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
                filename="DatePickerDemo.jsx"
                code={`<DatePicker 
  value={selectedDate}
  onValueChange={setSelectedDate}
  disabled={true}
  placeholder="Disabled date picker"
/>`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
