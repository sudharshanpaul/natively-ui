import { Terminal } from 'lucide-react';

export default function DropdownMenuPage() {
  return (
    <div className="space-y-8">
      {/* Component Header */}
      <div>
        <h1 className="text-3xl font-bold mb-4">Dropdown Menu</h1>
        <p className="text-lg text-muted-foreground">
          A menu that appears below a trigger element, containing a list of actions or options.
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
            <code>natively install dropdown-menu</code>
          </pre>
        </div>
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Usage</h2>
        <div className="bg-card rounded-lg p-6 border space-y-4">
          <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
            <code>{`import { DropdownMenu } from '@natively/dropdown-menu';

export default function MyComponent() {
  return (
    <DropdownMenu>
      <DropdownMenu.Trigger>
        <Button>Options</Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item onSelect={() => console.log('New')}>
          New
        </DropdownMenu.Item>
        <DropdownMenu.Item onSelect={() => console.log('Open')}>
          Open
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item onSelect={() => console.log('Save')}>
          Save
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu>
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
                <td className="p-3 font-mono text-sm">open</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">false</td>
                <td className="p-3 text-sm">The controlled open state of the menu.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">onOpenChange</td>
                <td className="p-3 font-mono text-sm">(open: boolean) =&gt; void</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">Function called when the open state changes.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">placement</td>
                <td className="p-3 font-mono text-sm">'top' | 'bottom' | 'left' | 'right'</td>
                <td className="p-3 font-mono text-sm">'bottom'</td>
                <td className="p-3 text-sm">The placement of the menu relative to the trigger.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">modal</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">true</td>
                <td className="p-3 text-sm">Whether the menu should be modal.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Features */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Compound component pattern</li>
          <li>Keyboard navigation</li>
          <li>Submenu support</li>
          <li>Item grouping</li>
          <li>Custom item rendering</li>
          <li>Multiple placement options</li>
          <li>Accessible menu implementation</li>
          <li>Automatic positioning</li>
        </ul>
      </section>

      {/* Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Examples</h2>
        
        <div className="space-y-6">
          {/* With Icons */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">With Icons</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
                <code>{`<DropdownMenu>
  <DropdownMenu.Trigger>
    <Button>
      <Icon name="more-vertical" />
    </Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Item>
      <Icon name="edit" />
      <Text>Edit</Text>
    </DropdownMenu.Item>
    <DropdownMenu.Item>
      <Icon name="copy" />
      <Text>Duplicate</Text>
    </DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item destructive>
      <Icon name="trash" />
      <Text>Delete</Text>
    </DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu>`}</code>
              </pre>
            </div>
          </div>

          {/* With Submenus */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">With Submenus</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
                <code>{`<DropdownMenu>
  <DropdownMenu.Trigger>
    <Button>More Actions</Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Item>New Tab</DropdownMenu.Item>
    <DropdownMenu.Sub>
      <DropdownMenu.SubTrigger>
        More Tools
      </DropdownMenu.SubTrigger>
      <DropdownMenu.SubContent>
        <DropdownMenu.Item>
          Developer Tools
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          Task Manager
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          Extensions
        </DropdownMenu.Item>
      </DropdownMenu.SubContent>
    </DropdownMenu.Sub>
    <DropdownMenu.Separator />
    <DropdownMenu.Item>Settings</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu>`}</code>
              </pre>
            </div>
          </div>

          {/* With Groups */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">With Groups</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
                <code>{`<DropdownMenu>
  <DropdownMenu.Trigger>
    <Button>Sort By</Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Group>
      <DropdownMenu.GroupLabel>
        Date
      </DropdownMenu.GroupLabel>
      <DropdownMenu.Item>Newest First</DropdownMenu.Item>
      <DropdownMenu.Item>Oldest First</DropdownMenu.Item>
    </DropdownMenu.Group>
    <DropdownMenu.Separator />
    <DropdownMenu.Group>
      <DropdownMenu.GroupLabel>
        Status
      </DropdownMenu.GroupLabel>
      <DropdownMenu.Item>Active</DropdownMenu.Item>
      <DropdownMenu.Item>Archived</DropdownMenu.Item>
    </DropdownMenu.Group>
  </DropdownMenu.Content>
</DropdownMenu>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}