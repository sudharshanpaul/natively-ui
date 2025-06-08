import { Terminal } from 'lucide-react';

export default function AlertDialogPage() {
  return (
    <div className="space-y-8">
      {/* Component Header */}
      <div>
        <h1 className="text-3xl font-bold mb-4">Alert Dialog</h1>
        <p className="text-lg text-muted-foreground">
          A modal dialog that interrupts the user with important content and expects a response.
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
            <code>natively install alert-dialog</code>
          </pre>
        </div>
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Usage</h2>
        <div className="bg-card rounded-lg p-6 border space-y-4">
          <pre className="bg-slate-800 p-4 rounded-md overflow-x-auto">
            <code>{`import { AlertDialog } from '@natively/alert-dialog';

export default function MyComponent() {
  return (
    <AlertDialog>
      <AlertDialog.Trigger>Delete Account</AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>Are you sure?</AlertDialog.Title>
        <AlertDialog.Description>
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        </AlertDialog.Description>
        <AlertDialog.Footer>
          <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
          <AlertDialog.Action>Delete Account</AlertDialog.Action>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
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
                <td className="p-3 font-mono text-sm">open</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">Controlled open state of the dialog.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">onOpenChange</td>
                <td className="p-3 font-mono text-sm">(open: boolean) =&gt; void</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">Callback when open state changes.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">defaultOpen</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">false</td>
                <td className="p-3 text-sm">Initial open state.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Features */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Focus is automatically trapped when opened</li>
          <li>WAI-ARIA compliant with aria-labels</li>
          <li>Supports keyboard navigation (Esc to close)</li>
          <li>Animated entrance and exit</li>
          <li>Customizable styling</li>
          <li>Backdrop click handling</li>
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
                <code>{`<AlertDialog>
  <AlertDialog.Trigger>Open Dialog</AlertDialog.Trigger>
  <AlertDialog.Content>
    <AlertDialog.Title>Confirm Action</AlertDialog.Title>
    <AlertDialog.Description>
      Are you sure you want to perform this action?
    </AlertDialog.Description>
    <AlertDialog.Footer>
      <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
      <AlertDialog.Action>Continue</AlertDialog.Action>
    </AlertDialog.Footer>
  </AlertDialog.Content>
</AlertDialog>`}</code>
              </pre>
            </div>
          </div>

          {/* Controlled Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Controlled Dialog</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <pre className="bg-slate-800 p-4 rounded-md overflow-x-auto">
                <code>{`const [isOpen, setIsOpen] = useState(false);

<AlertDialog open={isOpen} onOpenChange={setIsOpen}>
  <AlertDialog.Trigger>Open Controlled Dialog</AlertDialog.Trigger>
  <AlertDialog.Content>
    <AlertDialog.Title>Controlled Dialog</AlertDialog.Title>
    <AlertDialog.Description>
      This dialog's state is controlled externally.
    </AlertDialog.Description>
    <AlertDialog.Footer>
      <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
      <AlertDialog.Action>Continue</AlertDialog.Action>
    </AlertDialog.Footer>
  </AlertDialog.Content>
</AlertDialog>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}