import { Terminal } from 'lucide-react';

export default function AvatarPage() {
  return (
    <div className="space-y-8">
      {/* Component Header */}
      <div>
        <h1 className="text-3xl font-bold mb-4">Avatar</h1>
        <p className="text-lg text-muted-foreground">
          An image element with a fallback for representing the user.
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
            <code>natively install avatar</code>
          </pre>
        </div>
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Usage</h2>
        <div className="bg-card rounded-lg p-6 border space-y-4">
          <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
            <code>{`import { Avatar } from '@natively/avatar';

export default function MyComponent() {
  return (
    <Avatar>
      <Avatar.Image
        source={{ uri: 'https://example.com/avatar.jpg' }}
        alt="User avatar"
      />
      <Avatar.Fallback>JD</Avatar.Fallback>
    </Avatar>
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
                <td className="p-3 font-mono text-sm">size</td>
                <td className="p-3 font-mono text-sm">number</td>
                <td className="p-3 font-mono text-sm">40</td>
                <td className="p-3 text-sm">The size of the avatar in pixels.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">borderRadius</td>
                <td className="p-3 font-mono text-sm">number</td>
                <td className="p-3 font-mono text-sm">20</td>
                <td className="p-3 text-sm">The border radius of the avatar.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">backgroundColor</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">'#E1E1E1'</td>
                <td className="p-3 text-sm">Background color for the fallback state.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Avatar.Image Props</h3>
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
                  <td className="p-3 font-mono text-sm">source</td>
                  <td className="p-3 font-mono text-sm">ImageSourcePropType</td>
                  <td className="p-3 font-mono text-sm">-</td>
                  <td className="p-3 text-sm">The image source for the avatar.</td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-sm">alt</td>
                  <td className="p-3 font-mono text-sm">string</td>
                  <td className="p-3 font-mono text-sm">-</td>
                  <td className="p-3 text-sm">Alternative text for accessibility.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Automatic fallback display when image fails to load</li>
          <li>Support for remote and local images</li>
          <li>Customizable size and shape</li>
          <li>Accessible by default with alt text support</li>
          <li>Smooth image loading transitions</li>
          <li>Flexible fallback content (initials, icons, etc.)</li>
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
                <code>{`<Avatar size={48}>
  <Avatar.Image
    source={{ uri: 'https://example.com/avatar.jpg' }}
    alt="John Doe"
  />
  <Avatar.Fallback>JD</Avatar.Fallback>
</Avatar>`}</code>
              </pre>
            </div>
          </div>

          {/* Custom Styling Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Custom Styling</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
                <code>{`<Avatar 
  size={60} 
  borderRadius={12}
  backgroundColor="#4F46E5"
>
  <Avatar.Image
    source={{ uri: 'https://example.com/avatar.jpg' }}
    alt="Custom avatar"
  />
  <Avatar.Fallback>
    <Icon name="user" size={24} color="#FFFFFF" />
  </Avatar.Fallback>
</Avatar>`}</code>
              </pre>
            </div>
          </div>

          {/* Group Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Avatar Group</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
                <code>{`<View style={{ flexDirection: 'row', marginLeft: 16 }}>
  <Avatar size={40} style={{ marginLeft: -16 }}>
    <Avatar.Image source={{ uri: 'user1.jpg' }} alt="User 1" />
    <Avatar.Fallback>U1</Avatar.Fallback>
  </Avatar>
  <Avatar size={40} style={{ marginLeft: -16 }}>
    <Avatar.Image source={{ uri: 'user2.jpg' }} alt="User 2" />
    <Avatar.Fallback>U2</Avatar.Fallback>
  </Avatar>
  <Avatar size={40} style={{ marginLeft: -16 }}>
    <Avatar.Fallback>+2</Avatar.Fallback>
  </Avatar>
</View>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
