import React from "react";
import { CodeBlock } from "@/components/app/code-block";
import { Terminal } from "lucide-react";

export default function AlertDialogPage() {
  return (
    <div className="space-y-8">
      {/* Component Header */}
      <div>
        <h1 className="text-3xl font-bold mb-4">AlertDialog</h1>
        <p className="text-lg text-muted-foreground">
          A modal dialog that interrupts the user with important content and
          expects a response.
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
            code="npx natively-ui add alert-dialog"
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
            filename="AlertDialogDemo.jsx"
            code={`import { 
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction
} from '@natively-ui/alert-dialog';

export default function MyComponent() {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button>Delete Account</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}`}
          />
        </div>
      </section>

      {/* Component API */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Component API</h2>

        <div className="border rounded-lg overflow-hidden">
          <table className="w-full border-collapse">
            <thead className="bg-neutral-900">
              <tr>
                <th className="text-left p-3 border-b">Component</th>
                <th className="text-left p-3 border-b">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-3 font-mono text-sm">AlertDialog</td>
                <td className="p-3 text-sm">
                  Root component that manages dialog state and provides context
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">AlertDialogTrigger</td>
                <td className="p-3 text-sm">
                  Button or element that opens the dialog when pressed
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">AlertDialogContent</td>
                <td className="p-3 text-sm">
                  Modal container that displays the dialog content
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">AlertDialogHeader</td>
                <td className="p-3 text-sm">
                  Container for dialog title and description with proper spacing
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">AlertDialogTitle</td>
                <td className="p-3 text-sm">
                  Title text component with appropriate typography
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">
                  AlertDialogDescription
                </td>
                <td className="p-3 text-sm">
                  Description text with subdued styling
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">AlertDialogFooter</td>
                <td className="p-3 text-sm">
                  Container for action buttons with proper layout
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">AlertDialogCancel</td>
                <td className="p-3 text-sm">
                  Cancel button that closes the dialog without action
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">AlertDialogAction</td>
                <td className="p-3 text-sm">
                  Action button that performs the primary action and closes
                  dialog
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Props */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Props</h2>

        <div className="border rounded-lg overflow-hidden">
          <table className="w-full border-collapse">
            <thead className="bg-neutral-900">
              <tr>
                <th className="text-left p-3 border-b">Component</th>
                <th className="text-left p-3 border-b">Prop</th>
                <th className="text-left p-3 border-b">Type</th>
                <th className="text-left p-3 border-b">Default</th>
                <th className="text-left p-3 border-b">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-3 font-mono text-sm">AlertDialog</td>
                <td className="p-3 font-mono text-sm">defaultOpen</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">false</td>
                <td className="p-3 text-sm">
                  Whether the dialog is open by default
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">AlertDialogTrigger</td>
                <td className="p-3 font-mono text-sm">asChild</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">false</td>
                <td className="p-3 text-sm">
                  Render as child element instead of button
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">AlertDialogTrigger</td>
                <td className="p-3 font-mono text-sm">onPress</td>
                <td className="p-3 font-mono text-sm">() =&gt; void</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">
                  Additional function called when trigger is pressed
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">AlertDialogTrigger</td>
                <td className="p-3 font-mono text-sm">className</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">""</td>
                <td className="p-3 text-sm">
                  Additional CSS classes for styling
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">AlertDialogContent</td>
                <td className="p-3 font-mono text-sm">className</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">""</td>
                <td className="p-3 text-sm">
                  Additional CSS classes for modal content
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">AlertDialogAction</td>
                <td className="p-3 font-mono text-sm">variant</td>
                <td className="p-3 font-mono text-sm">
                  'default' | 'destructive'
                </td>
                <td className="p-3 font-mono text-sm">'default'</td>
                <td className="p-3 text-sm">
                  Visual style variant of the action button
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">AlertDialogAction</td>
                <td className="p-3 font-mono text-sm">onPress</td>
                <td className="p-3 font-mono text-sm">() =&gt; void</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">
                  Function called when action button is pressed
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">AlertDialogCancel</td>
                <td className="p-3 font-mono text-sm">onPress</td>
                <td className="p-3 font-mono text-sm">() =&gt; void</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">
                  Function called when cancel button is pressed
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
          <li>Modal overlay with backdrop blur and darkening</li>
          <li>Keyboard accessible with proper focus management</li>
          <li>Compound component pattern for flexible composition</li>
          <li>Support for destructive and default action variants</li>
          <li>Automatic dialog state management</li>
          <li>Customizable styling through className props</li>
          <li>Support for custom trigger elements with asChild prop</li>
          <li>Built with Tailwind CSS and React Native</li>
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
                filename="AlertDialogDemo.jsx"
                code={`<AlertDialog>
  <AlertDialogTrigger>
    <Button variant="destructive">Delete Item</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Delete Item</AlertDialogTitle>
      <AlertDialogDescription>
        Are you sure you want to delete this item? This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
              />
            </div>
          </div>

          {/* Custom Trigger Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Custom Trigger</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="AlertDialogDemo.jsx"
                code={`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Pressable style={{ padding: 12, backgroundColor: '#ef4444', borderRadius: 8 }}>
      <Text style={{ color: 'white', fontWeight: 'bold' }}>
        Custom Delete Button
      </Text>
    </Pressable>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Confirm Deletion</AlertDialogTitle>
      <AlertDialogDescription>
        This will permanently remove the selected items.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Keep Items</AlertDialogCancel>
      <AlertDialogAction variant="destructive">Delete Items</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
              />
            </div>
          </div>

          {/* With Action Handlers Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">With Action Handlers</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="AlertDialogDemo.jsx"
                code={`const [isLoading, setIsLoading] = useState(false);

<AlertDialog>
  <AlertDialogTrigger>
    <Button>Save Changes</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Save Changes</AlertDialogTitle>
      <AlertDialogDescription>
        Do you want to save your changes before leaving?
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel 
        onPress={() => {
          console.log('Changes discarded');
        }}
      >
        Discard
      </AlertDialogCancel>
      <AlertDialogAction 
        onPress={async () => {
          setIsLoading(true);
          await saveChanges();
          setIsLoading(false);
          console.log('Changes saved');
        }}
      >
        Save Changes
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
              />
            </div>
          </div>

          {/* Custom Styling Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Custom Styling</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="AlertDialogDemo.jsx"
                code={`<AlertDialog>
  <AlertDialogTrigger className="bg-blue-500 px-4 py-2 rounded-lg">
    <Text style={{ color: 'white' }}>Open Dialog</Text>
  </AlertDialogTrigger>
  <AlertDialogContent className="bg-slate-50 border-slate-200 rounded-xl max-w-sm">
    <AlertDialogHeader>
      <AlertDialogTitle className="text-blue-700">
        Custom Dialog
      </AlertDialogTitle>
      <AlertDialogDescription className="text-slate-600">
        This dialog has custom styling applied to all components.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter className="gap-3">
      <AlertDialogCancel className="bg-slate-200 text-slate-700">
        Cancel
      </AlertDialogCancel>
      <AlertDialogAction className="bg-blue-600">
        Confirm
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
              />
            </div>
          </div>

          {/* Default Open Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Default Open</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="AlertDialogDemo.jsx"
                code={`// Dialog opens automatically when component mounts
<AlertDialog defaultOpen={true}>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Welcome!</AlertDialogTitle>
      <AlertDialogDescription>
        This dialog opened automatically when the page loaded.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogAction>Got it</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
