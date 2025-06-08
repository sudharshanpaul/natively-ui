import React from "react";
import { Terminal } from 'lucide-react';

export default function DrawerPage() {
  return (
    <div className="text-gray-100 space-y-8 min-h-screen">
      {/* Component Header */}
      <div>
        <h1 className="text-3xl font-bold mb-4 text-white">Drawer</h1>
        <p className="text-lg text-gray-400">
          A sliding panel that enters from the edge of the screen, commonly used for navigation or filters in mobile applications.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Installation</h2>
        <div className="bg-gray-900 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Terminal className="w-4 h-4 text-gray-300" />
            <p className="font-mono text-sm text-gray-300">Install the component:</p>
          </div>
          <pre className="bg-gray-800 p-4 rounded-md overflow-x-auto text-gray-300">
            <code>natively install drawer</code>
          </pre>
        </div>
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Usage</h2>
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 space-y-4">
          <pre className="bg-gray-800 p-4 rounded-md overflow-x-auto text-gray-300">
            <code>{`import { Drawer } from '@natively/drawer';

export default function MyComponent() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onPress={() => setIsOpen(true)}>
        Open Drawer
      </Button>

      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        side="left"
      >
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            Navigation
          </Text>
          <View style={{ marginTop: 16 }}>
            <Text>Menu Item 1</Text>
            <Text>Menu Item 2</Text>
            <Text>Menu Item 3</Text>
          </View>
        </View>
      </Drawer>
    </>
  );
}`}</code>
          </pre>
        </div>
      </section>

      {/* Props */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Props</h2>
        
        <div className="border border-gray-800 rounded-lg overflow-hidden">
          <table className="w-full border-collapse">
            <thead className="bg-gray-800">
              <tr>
                <th className="text-left p-3 border-b border-gray-700 text-gray-300">Prop</th>
                <th className="text-left p-3 border-b border-gray-700 text-gray-300">Type</th>
                <th className="text-left p-3 border-b border-gray-700 text-gray-300">Default</th>
                <th className="text-left p-3 border-b border-gray-700 text-gray-300">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr>
                <td className="p-3 font-mono text-sm text-gray-300">isOpen</td>
                <td className="p-3 font-mono text-sm text-gray-300">boolean</td>
                <td className="p-3 font-mono text-sm text-gray-300">false</td>
                <td className="p-3 text-sm text-gray-400">Controls the visibility of the drawer.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm text-gray-300">onClose</td>
                <td className="p-3 font-mono text-sm text-gray-300">() =&gt; void</td>
                <td className="p-3 font-mono text-sm text-gray-300">-</td>
                <td className="p-3 text-sm text-gray-400">Callback when the drawer is closed.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm text-gray-300">side</td>
                <td className="p-3 font-mono text-sm text-gray-300">'left' | 'right' | 'top' | 'bottom'</td>
                <td className="p-3 font-mono text-sm text-gray-300">'left'</td>
                <td className="p-3 text-sm text-gray-400">The side from which the drawer appears.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm text-gray-300">width</td>
                <td className="p-3 font-mono text-sm text-gray-300">number</td>
                <td className="p-3 font-mono text-sm text-gray-300">300</td>
                <td className="p-3 text-sm text-gray-400">Width of the drawer (for left/right drawers).</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm text-gray-300">height</td>
                <td className="p-3 font-mono text-sm text-gray-300">number</td>
                <td className="p-3 font-mono text-sm text-gray-300">300</td>
                <td className="p-3 text-sm text-gray-400">Height of the drawer (for top/bottom drawers).</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm text-gray-300">overlayColor</td>
                <td className="p-3 font-mono text-sm text-gray-300">string</td>
                <td className="p-3 font-mono text-sm text-gray-300">'rgba(0, 0, 0, 0.5)'</td>
                <td className="p-3 text-sm text-gray-400">Color of the overlay behind the drawer.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm text-gray-300">overlayClose</td>
                <td className="p-3 font-mono text-sm text-gray-300">boolean</td>
                <td className="p-3 font-mono text-sm text-gray-300">true</td>
                <td className="p-3 text-sm text-gray-400">Whether clicking the overlay closes the drawer.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm text-gray-300">closeOnEscape</td>
                <td className="p-3 font-mono text-sm text-gray-300">boolean</td>
                <td className="p-3 font-mono text-sm text-gray-300">true</td>
                <td className="p-3 text-sm text-gray-400">Whether pressing escape closes the drawer.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Features */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-400 pl-2">
          <li>Smooth slide animations</li>
          <li>Multiple placement options (left, right, top, bottom)</li>
          <li>Customizable dimensions</li>
          <li>Backdrop overlay with tap-to-close</li>
          <li>Gesture-based interactions</li>
          <li>Keyboard navigation support</li>
          <li>Accessible focus management</li>
          <li>Safe area insets handling</li>
        </ul>
      </section>

      {/* Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Examples</h2>
        
        <div className="space-y-6">
          {/* Basic Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-white">Basic Usage</h3>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 space-y-4">
              <pre className="bg-gray-800 p-4 rounded-md overflow-x-auto text-gray-300">
                <code>{`const [isOpen, setIsOpen] = React.useState(false);

<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  side="left"
>
  <View style={{ padding: 16 }}>
    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
      Menu
    </Text>
    <View style={{ marginTop: 16 }}>
      <Text>Home</Text>
      <Text>Profile</Text>
      <Text>Settings</Text>
    </View>
  </View>
</Drawer>`}</code>
              </pre>
            </div>
          </div>

          {/* Custom Placement */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-white">Custom Placement</h3>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 space-y-4">
              <pre className="bg-gray-800 p-4 rounded-md overflow-x-auto text-gray-300">
                <code>{`<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  side="bottom"
  height={400}
  overlayColor="rgba(0, 0, 0, 0.7)"
>
  <View style={{ padding: 16 }}>
    <Text>Bottom drawer content</Text>
  </View>
</Drawer>`}</code>
              </pre>
            </div>
          </div>

          {/* With Gestures */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-white">With Gestures</h3>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 space-y-4">
              <pre className="bg-gray-800 p-4 rounded-md overflow-x-auto text-gray-300">
                <code>{`<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  enableGestures={true}
  gestureHandlerProps={{
    activeOffsetX: [-20, 20],
    failOffsetY: [-20, 20]
  }}
>
  <View style={{ padding: 16 }}>
    <Text>Swipe to close</Text>
  </View>
</Drawer>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}