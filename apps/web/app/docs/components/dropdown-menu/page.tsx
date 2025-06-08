import React from "react";
import { CodeBlock } from "@/components/app/code-block";
import { Terminal } from "lucide-react";

export default function DropdownMenuPage() {
  return (
    <div className="space-y-8">
      {/* Component Header */}
      <div>
        <h1 className="text-3xl font-bold mb-4">Dropdown Menu</h1>
        <p className="text-lg text-muted-foreground">
          A versatile dropdown menu component with nested sub-menus,
          positioning, and animations.
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
            <code>npx natively-cli add dropdown-menu</code>
          </pre>
        </div>
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Usage</h2>
        <div className="bg-card rounded-lg space-y-4">
          <CodeBlock
            language="jsx"
            filename="DropdownMenuDemo.jsx"
            highlightLines={[3, 4, 8, 12]}
            code={`import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@natively-ui/dropdown-menu';

export default function MyComponent() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button>Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onPress={() => console.log('Item pressed')}>
          Menu Item
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`}
          />
        </div>
      </section>

      {/* Components */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Components</h2>

        <div className="space-y-6">
          {/* DropdownMenu */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">DropdownMenu</h3>
            <p className="text-muted-foreground">
              The root container for the dropdown menu.
            </p>
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
                    <td className="p-3 font-mono text-sm">children</td>
                    <td className="p-3 font-mono text-sm">ReactNode</td>
                    <td className="p-3 font-mono text-sm">-</td>
                    <td className="p-3 text-sm">
                      The content of the dropdown menu.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* DropdownMenuTrigger */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">DropdownMenuTrigger</h3>
            <p className="text-muted-foreground">
              The element that triggers the dropdown menu.
            </p>
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
                    <td className="p-3 font-mono text-sm">children</td>
                    <td className="p-3 font-mono text-sm">ReactNode</td>
                    <td className="p-3 font-mono text-sm">-</td>
                    <td className="p-3 text-sm">
                      The trigger element content.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-sm">asChild</td>
                    <td className="p-3 font-mono text-sm">boolean</td>
                    <td className="p-3 font-mono text-sm">false</td>
                    <td className="p-3 text-sm">
                      When true, merges props with the first child element
                      instead of wrapping it.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* DropdownMenuContent */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">DropdownMenuContent</h3>
            <p className="text-muted-foreground">
              The dropdown menu content container.
            </p>
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
                    <td className="p-3 font-mono text-sm">children</td>
                    <td className="p-3 font-mono text-sm">ReactNode</td>
                    <td className="p-3 font-mono text-sm">-</td>
                    <td className="p-3 text-sm">The menu items and content.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-sm">className</td>
                    <td className="p-3 font-mono text-sm">string</td>
                    <td className="p-3 font-mono text-sm">""</td>
                    <td className="p-3 text-sm">
                      Additional CSS classes for styling.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-sm">sideOffset</td>
                    <td className="p-3 font-mono text-sm">number</td>
                    <td className="p-3 font-mono text-sm">4</td>
                    <td className="p-3 text-sm">
                      Distance between trigger and content.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-sm">align</td>
                    <td className="p-3 font-mono text-sm">
                      'start' | 'center' | 'end'
                    </td>
                    <td className="p-3 font-mono text-sm">'start'</td>
                    <td className="p-3 text-sm">
                      Alignment of the dropdown relative to trigger.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* DropdownMenuItem */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">DropdownMenuItem</h3>
            <p className="text-muted-foreground">An individual menu item.</p>
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
                    <td className="p-3 font-mono text-sm">children</td>
                    <td className="p-3 font-mono text-sm">ReactNode</td>
                    <td className="p-3 font-mono text-sm">-</td>
                    <td className="p-3 text-sm">The menu item content.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-sm">className</td>
                    <td className="p-3 font-mono text-sm">string</td>
                    <td className="p-3 font-mono text-sm">""</td>
                    <td className="p-3 text-sm">
                      Additional CSS classes for styling.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-sm">disabled</td>
                    <td className="p-3 font-mono text-sm">boolean</td>
                    <td className="p-3 font-mono text-sm">false</td>
                    <td className="p-3 text-sm">
                      Whether the menu item is disabled.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-sm">onPress</td>
                    <td className="p-3 font-mono text-sm">() =&gt; void</td>
                    <td className="p-3 font-mono text-sm">-</td>
                    <td className="p-3 text-sm">
                      Function called when the item is pressed.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Smooth animations with React Native Reanimated</li>
          <li>Smart positioning that adjusts to screen boundaries</li>
          <li>Nested sub-menus with portal rendering</li>
          <li>Keyboard shortcuts display support</li>
          <li>Menu items with disabled states</li>
          <li>Customizable alignment and spacing</li>
          <li>Dark mode support</li>
          <li>Scrollable content for long menus</li>
          <li>Auto-close on item selection or outside press</li>
        </ul>
      </section>

      {/* Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Examples</h2>

        <div className="space-y-6">
          {/* Basic Menu Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Basic Menu</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="BasicMenuDemo.jsx"
                code={`<DropdownMenu>
  <DropdownMenuTrigger>
    <Button>Options</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem onPress={() => console.log('Profile')}>
      <Text>Profile</Text>
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem onPress={() => console.log('Settings')}>
      <Text>Settings</Text>
    </DropdownMenuItem>
    <DropdownMenuItem disabled>
      <Text>Disabled Item</Text>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
              />
            </div>
          </div>

          {/* With Icons Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">With Icons and Shortcuts</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="IconMenuDemo.jsx"
                code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">
      <Icon name="more-horizontal" size={16} />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Actions</DropdownMenuLabel>
    <DropdownMenuSeparator />
    
    <DropdownMenuItem onPress={() => console.log('Copy')}>
      <Icon name="copy" size={16} style={{ marginRight: 8 }} />
      <Text>Copy</Text>
      <DropdownMenuShortcut>⌘+C</DropdownMenuShortcut>
    </DropdownMenuItem>
    
    <DropdownMenuItem onPress={() => console.log('Cut')}>
      <Icon name="scissors" size={16} style={{ marginRight: 8 }} />
      <Text>Cut</Text>
      <DropdownMenuShortcut>⌘+X</DropdownMenuShortcut>
    </DropdownMenuItem>
    
    <DropdownMenuItem onPress={() => console.log('Paste')}>
      <Icon name="clipboard" size={16} style={{ marginRight: 8 }} />
      <Text>Paste</Text>
      <DropdownMenuShortcut>⌘+V</DropdownMenuShortcut>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
              />
            </div>
          </div>

          {/* Sub Menu Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Sub Menu</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="SubMenuDemo.jsx"
                code={`<DropdownMenu>
  <DropdownMenuTrigger>
    <Button>Menu with Submenu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>
      <Text>New File</Text>
    </DropdownMenuItem>
    
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <Icon name="share" size={16} style={{ marginRight: 8 }} />
        <Text>Share</Text>
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          <DropdownMenuItem onPress={() => console.log('Email')}>
            <Icon name="mail" size={16} style={{ marginRight: 8 }} />
            <Text>Email</Text>
          </DropdownMenuItem>
          <DropdownMenuItem onPress={() => console.log('Message')}>
            <Icon name="message-square" size={16} style={{ marginRight: 8 }} />
            <Text>Message</Text>
          </DropdownMenuItem>
          <DropdownMenuItem onPress={() => console.log('Copy Link')}>
            <Icon name="link" size={16} style={{ marginRight: 8 }} />
            <Text>Copy Link</Text>
          </DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
    
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <Text>Delete</Text>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
              />
            </div>
          </div>

          {/* Alignment Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Alignment Options</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="AlignmentDemo.jsx"
                code={`<View style={{ gap: 16, flexDirection: 'row' }}>
  {/* Start aligned */}
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Button>Start</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start">
      <DropdownMenuItem><Text>Left aligned</Text></DropdownMenuItem>
      <DropdownMenuItem><Text>Menu item</Text></DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>

  {/* Center aligned */}
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Button>Center</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="center">
      <DropdownMenuItem><Text>Center aligned</Text></DropdownMenuItem>
      <DropdownMenuItem><Text>Menu item</Text></DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>

  {/* End aligned */}
  <DropdownMenu>
    <DropdownMenuTrigger>
      <Button>End</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem><Text>Right aligned</Text></DropdownMenuItem>
      <DropdownMenuItem><Text>Menu item</Text></DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</View>`}
              />
            </div>
          </div>

          {/* Context Menu Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">As Context Menu</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="ContextMenuDemo.jsx"
                code={`function ContextMenuExample() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <View style={{ padding: 20 }}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Pressable 
            style={{
              padding: 20,
              backgroundColor: '#f3f4f6',
              borderRadius: 8,
              borderWidth: 2,
              borderStyle: 'dashed',
              borderColor: '#d1d5db'
            }}
          >
            <Text style={{ textAlign: 'center' }}>
              Right click me (or tap on mobile)
            </Text>
          </Pressable>
        </DropdownMenuTrigger>
        
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onPress={() => setSelectedItem('edit')}>
              <Text>Edit</Text>
            </DropdownMenuItem>
            <DropdownMenuItem onPress={() => setSelectedItem('duplicate')}>
              <Text>Duplicate</Text>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          
          <DropdownMenuSeparator />
          
          <DropdownMenuItem 
            onPress={() => setSelectedItem('delete')}
            className="text-red-600"
          >
            <Text style={{ color: '#dc2626' }}>Delete</Text>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
      {selectedItem && (
        <Text style={{ marginTop: 16 }}>
          Selected: {selectedItem}
        </Text>
      )}
    </View>
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
