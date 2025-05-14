import React from "react";
import { Terminal } from 'lucide-react';

export default function DialogPage() {
  return (
    <div className="space-y-8">
      {/* Component Header */}
      <div>
        <h1 className="text-3xl font-bold mb-4">Dialog</h1>
        <p className="text-lg text-muted-foreground">
          A modal dialog component that provides a focused interaction with custom content while temporarily blocking interactions with the rest of the application.
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
            <code>natively install dialog</code>
          </pre>
        </div>
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Usage</h2>
        <div className="bg-card rounded-lg p-6 border space-y-4">
          <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
            <code>{`import { Dialog } from '@natively/dialog';

export default function MyComponent() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onPress={() => setIsOpen(true)}>
        Open Dialog
      </Button>

      <Dialog 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)}
        title="Dialog Title"
      >
        <Text>Dialog content goes here</Text>
      </Dialog>
    </>
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
                <td className="p-3 font-mono text-sm">isOpen</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">false</td>
                <td className="p-3 text-sm">Controls the visibility of the dialog.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">onClose</td>
                <td className="p-3 font-mono text-sm">() => void</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">Callback when the dialog is closed.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">title</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">The title of the dialog.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">children</td>
                <td className="p-3 font-mono text-sm">ReactNode</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">The content of the dialog.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">overlayClose</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">true</td>
                <td className="p-3 text-sm">Whether clicking the overlay closes the dialog.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">closeOnEscape</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">true</td>
                <td className="p-3 text-sm">Whether pressing escape closes the dialog.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Features */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Modal overlay with customizable backdrop</li>
          <li>Focus trap within dialog</li>
          <li>Keyboard navigation and escape key handling</li>
          <li>Customizable animations</li>
          <li>Accessible ARIA attributes</li>
          <li>Scroll lock on body when open</li>
          <li>Responsive design</li>
          <li>Custom close triggers</li>
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
                <code>{`const [isOpen, setIsOpen] = React.useState(false);

<Dialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirmation"
>
  <Text>Are you sure you want to continue?</Text>
  <View style={{ flexDirection: 'row', gap: 8, marginTop: 16 }}>
    <Button onPress={() => setIsOpen(false)}>Cancel</Button>
    <Button variant="primary" onPress={handleConfirm}>
      Confirm
    </Button>
  </View>
</Dialog>`}</code>
              </pre>
            </div>
          </div>

          {/* Custom Animation */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Custom Animation</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
                <code>{`<Dialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  animationConfig={{
    duration: 200,
    easing: 'ease-in-out',
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.9, opacity: 0 }
  }}
>
  <Text>Animated dialog content</Text>
</Dialog>`}</code>
              </pre>
            </div>
          </div>

          {/* Nested Dialogs */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Nested Dialogs</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
                <code>{`<Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <Text>First dialog</Text>
  <Button onPress={() => setNestedOpen(true)}>
    Open nested dialog
  </Button>

  <Dialog
    isOpen={nestedOpen}
    onClose={() => setNestedOpen(false)}
  >
    <Text>Nested dialog content</Text>
  </Dialog>
</Dialog>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
