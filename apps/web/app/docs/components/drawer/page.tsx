import React from "react";
import { CodeBlock } from "@/components/app/code-block";
import { Terminal } from "lucide-react";

export default function DrawerPage() {
  return (
    <div className="space-y-8">
      {/* Component Header */}
      <div>
        <h1 className="text-3xl font-bold mb-4">Drawer</h1>
        <p className="text-lg text-muted-foreground">
          A sliding panel that enters from the edge of the screen, commonly used
          for navigation or filters in mobile applications.
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
            code="npx natively-ui add drawer"
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
            filename="DrawerDemo.jsx"
            highlightLines={[8, 9, 10]}
            code={`import { Drawer } from '@/components/ui/drawer';

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
                <td className="p-3 font-mono text-sm">isOpen</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">false</td>
                <td className="p-3 text-sm">
                  Controls the visibility of the drawer.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">onClose</td>
                <td className="p-3 font-mono text-sm">() =&gt; void</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">
                  Callback when the drawer is closed.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">side</td>
                <td className="p-3 font-mono text-sm">
                  'left' | 'right' | 'top' | 'bottom'
                </td>
                <td className="p-3 font-mono text-sm">'left'</td>
                <td className="p-3 text-sm">
                  The side from which the drawer appears.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">width</td>
                <td className="p-3 font-mono text-sm">number</td>
                <td className="p-3 font-mono text-sm">300</td>
                <td className="p-3 text-sm">
                  Width of the drawer (for left/right drawers).
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">height</td>
                <td className="p-3 font-mono text-sm">number</td>
                <td className="p-3 font-mono text-sm">300</td>
                <td className="p-3 text-sm">
                  Height of the drawer (for top/bottom drawers).
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">overlayColor</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">'rgba(0, 0, 0, 0.5)'</td>
                <td className="p-3 text-sm">
                  Color of the overlay behind the drawer.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">overlayClose</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">true</td>
                <td className="p-3 text-sm">
                  Whether clicking the overlay closes the drawer.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">closeOnEscape</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">true</td>
                <td className="p-3 text-sm">
                  Whether pressing escape closes the drawer.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">children</td>
                <td className="p-3 font-mono text-sm">React.ReactNode</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">
                  The content to display inside the drawer.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">className</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">""</td>
                <td className="p-3 text-sm">
                  Additional CSS classes for the drawer container.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">enableGestures</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">false</td>
                <td className="p-3 text-sm">
                  Enable swipe gestures to close the drawer.
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
          <li>Smooth slide animations with React Native Reanimated</li>
          <li>Multiple placement options (left, right, top, bottom)</li>
          <li>Customizable dimensions and overlay styling</li>
          <li>Backdrop overlay with tap-to-close functionality</li>
          <li>Gesture-based interactions for intuitive closing</li>
          <li>Keyboard navigation support with escape key</li>
          <li>Accessible focus management and screen reader support</li>
          <li>Safe area insets handling for notched devices</li>
          <li>Portal rendering for proper z-index stacking</li>
          <li>Customizable animation duration and easing</li>
        </ul>
      </section>

      {/* Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Examples</h2>

        <div className="space-y-6">
          {/* Basic Navigation Drawer */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Navigation Drawer</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="NavigationDrawer.jsx"
                code={`function NavigationDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { title: 'Home', icon: 'home' },
    { title: 'Profile', icon: 'user' },
    { title: 'Settings', icon: 'settings' },
    { title: 'Help', icon: 'help-circle' },
  ];

  return (
    <>
      <Button 
        leftIcon={<Icon name="menu" size={16} />}
        onPress={() => setIsOpen(true)}
      >
        Menu
      </Button>

      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        side="left"
        width={280}
      >
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
            Navigation
          </Text>
          
          {navigationItems.map((item, index) => (
            <Pressable
              key={index}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 12,
                paddingHorizontal: 16,
                borderRadius: 8,
              }}
              onPress={() => {
                console.log(\`Navigate to \${item.title}\`);
                setIsOpen(false);
              }}
            >
              <Icon name={item.icon} size={20} style={{ marginRight: 12 }} />
              <Text style={{ fontSize: 16 }}>{item.title}</Text>
            </Pressable>
          ))}
        </View>
      </Drawer>
    </>
  );
}`}
              />
            </div>
          </div>

          {/* Bottom Sheet Drawer */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Bottom Sheet</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="BottomSheet.jsx"
                code={`function BottomSheet() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onPress={() => setIsOpen(true)}>
        Show Options
      </Button>

      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        side="bottom"
        height={400}
        overlayColor="rgba(0, 0, 0, 0.7)"
        enableGestures={true}
      >
        <View style={{ padding: 20 }}>
          <View style={{
            width: 40,
            height: 4,
            backgroundColor: '#ccc',
            borderRadius: 2,
            alignSelf: 'center',
            marginBottom: 20
          }} />
          
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>
            Quick Actions
          </Text>
          
          <View style={{ gap: 12 }}>
            <Button variant="outline">Share</Button>
            <Button variant="outline">Edit</Button>
            <Button variant="outline">Duplicate</Button>
            <Button variant="destructive">Delete</Button>
          </View>
        </View>
      </Drawer>
    </>
  );
}`}
              />
            </div>
          </div>

          {/* Filter Drawer */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Filter Drawer</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="FilterDrawer.jsx"
                code={`function FilterDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: [0, 1000],
    inStock: false
  });

  return (
    <>
      <Button 
        rightIcon={<Icon name="filter" size={16} />}
        onPress={() => setIsOpen(true)}
      >
        Filters
      </Button>

      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        side="right"
        width={320}
        overlayClose={false}
      >
        <View style={{ padding: 20, flex: 1 }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 24
          }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
              Filters
            </Text>
            <Button
              size="icon"
              variant="ghost"
              onPress={() => setIsOpen(false)}
            >
              <Icon name="x" size={20} />
            </Button>
          </View>

          <View style={{ gap: 24, flex: 1 }}>
            <View>
              <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8 }}>
                Category
              </Text>
              {/* Category selection components */}
            </View>

            <View>
              <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8 }}>
                Price Range
              </Text>
              {/* Price range slider component */}
            </View>

            <View>
              <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 8 }}>
                Availability
              </Text>
              {/* Checkbox component */}
            </View>
          </View>

          <View style={{ flexDirection: 'row', gap: 12, marginTop: 'auto' }}>
            <Button 
              variant="outline" 
              style={{ flex: 1 }}
              onPress={() => setFilters({ category: 'all', priceRange: [0, 1000], inStock: false })}
            >
              Reset
            </Button>
            <Button 
              style={{ flex: 1 }}
              onPress={() => {
                console.log('Apply filters:', filters);
                setIsOpen(false);
              }}
            >
              Apply
            </Button>
          </View>
        </View>
      </Drawer>
    </>
  );
}`}
              />
            </div>
          </div>

          {/* Multi-directional Drawers */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Multiple Directions</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="MultiDirectionDrawers.jsx"
                code={`function MultiDirectionDrawers() {
  const [activeDrawer, setActiveDrawer] = useState(null);

  const drawers = [
    { side: 'left', label: 'Left Menu', width: 280 },
    { side: 'right', label: 'Right Panel', width: 320 },
    { side: 'top', label: 'Top Banner', height: 200 },
    { side: 'bottom', label: 'Bottom Sheet', height: 300 }
  ];

  return (
    <View style={{ gap: 12, padding: 20 }}>
      {drawers.map((drawer) => (
        <Button
          key={drawer.side}
          variant="outline"
          onPress={() => setActiveDrawer(drawer.side)}
        >
          Open {drawer.label}
        </Button>
      ))}

      {drawers.map((drawer) => (
        <Drawer
          key={drawer.side}
          isOpen={activeDrawer === drawer.side}
          onClose={() => setActiveDrawer(null)}
          side={drawer.side}
          width={drawer.width}
          height={drawer.height}
        >
          <View style={{ 
            padding: 20, 
            alignItems: 'center', 
            justifyContent: 'center',
            flex: 1 
          }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              {drawer.label}
            </Text>
            <Text style={{ marginTop: 8, textAlign: 'center' }}>
              This drawer slides in from the {drawer.side}
            </Text>
            <Button
              style={{ marginTop: 16 }}
              onPress={() => setActiveDrawer(null)}
            >
              Close
            </Button>
          </View>
        </Drawer>
      ))}
    </View>
  );
}`}
              />
            </div>
          </div>

          {/* Nested Drawers */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Nested Drawers</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="NestedDrawers.jsx"
                code={`function NestedDrawers() {
  const [primaryOpen, setPrimaryOpen] = useState(false);
  const [secondaryOpen, setSecondaryOpen] = useState(false);

  return (
    <>
      <Button onPress={() => setPrimaryOpen(true)}>
        Open Main Menu
      </Button>

      <Drawer
        isOpen={primaryOpen}
        onClose={() => setPrimaryOpen(false)}
        side="left"
        width={280}
      >
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>
            Main Menu
          </Text>
          
          <Button
            variant="outline"
            style={{ marginBottom: 12 }}
            onPress={() => setSecondaryOpen(true)}
          >
            Open Sub Menu
          </Button>
          
          <Button variant="outline">
            Other Option
          </Button>
        </View>
      </Drawer>

      <Drawer
        isOpen={secondaryOpen}
        onClose={() => setSecondaryOpen(false)}
        side="right"
        width={250}
        overlayColor="rgba(0, 0, 0, 0.3)"
      >
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>
            Sub Menu
          </Text>
          
          <Text>Nested drawer content</Text>
          
          <Button
            style={{ marginTop: 20 }}
            onPress={() => setSecondaryOpen(false)}
          >
            Close Sub Menu
          </Button>
        </View>
      </Drawer>
    </>
  );
}`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
