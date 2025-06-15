import React from "react";
import { CodeBlock } from "@/components/app/code-block";
import { Terminal } from "lucide-react";

export default function AvatarPage() {
  return (
    <div className="space-y-8">
      {/* Component Header */}
      <div>
        <h1 className="text-3xl font-bold mb-4">Avatar</h1>
        <p className="text-lg text-muted-foreground">
          A flexible avatar component for displaying user profile images with
          fallback support.
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
            code="npx natively-ui add avatar"
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
            filename="AvatarDemo.jsx"
            highlightLines={[6]}
            code={`import Avatar from '@natively-ui/avatar';

export default function MyComponent() {
  return (
    <Avatar 
      src="https://example.com/user-avatar.jpg"
      alt="John Doe"
      size="default"
      variant="circle"
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
                <td className="p-3 font-mono text-sm">src</td>
                <td className="p-3 font-mono text-sm">string | null</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">
                  The source URL of the avatar image.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">alt</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">""</td>
                <td className="p-3 text-sm">
                  Alternative text for the image, used for accessibility and
                  generating initials.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">fallback</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">
                  Custom fallback text to display when image fails to load.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">size</td>
                <td className="p-3 font-mono text-sm">
                  'sm' | 'default' | 'lg' | 'xl'
                </td>
                <td className="p-3 font-mono text-sm">'default'</td>
                <td className="p-3 text-sm">The size of the avatar.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">variant</td>
                <td className="p-3 font-mono text-sm">
                  'circle' | 'rounded' | 'square'
                </td>
                <td className="p-3 font-mono text-sm">'circle'</td>
                <td className="p-3 text-sm">
                  The shape variant of the avatar.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">className</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">""</td>
                <td className="p-3 text-sm">
                  Additional CSS classes for the avatar container.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">fallbackClassName</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">""</td>
                <td className="p-3 text-sm">
                  Additional CSS classes for the fallback text.
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
          <li>Multiple size options (sm, default, lg, xl)</li>
          <li>Three shape variants (circle, rounded, square)</li>
          <li>Automatic fallback to initials when image fails to load</li>
          <li>Smart initial generation from alt text or fallback prop</li>
          <li>Error handling for broken image URLs</li>
          <li>Customizable styling with className props</li>
          <li>Accessibility support with alt text</li>
          <li>Built with Tailwind CSS and React Native</li>
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
                filename="AvatarDemo.jsx"
                code={`<Avatar 
  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" 
  alt="John Doe" 
/>`}
              />
            </div>
          </div>

          {/* Sizes Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Sizes</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="AvatarDemo.jsx"
                code={`<View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
  <Avatar 
    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" 
    alt="Small Avatar" 
    size="sm" 
  />
  <Avatar 
    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" 
    alt="Default Avatar" 
    size="default" 
  />
  <Avatar 
    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" 
    alt="Large Avatar" 
    size="lg" 
  />
  <Avatar 
    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" 
    alt="Extra Large Avatar" 
    size="xl" 
  />
</View>`}
              />
            </div>
          </div>

          {/* Variants Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Shape Variants</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="AvatarDemo.jsx"
                code={`<View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
  <Avatar 
    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" 
    alt="Circle Avatar" 
    variant="circle" 
    size="lg"
  />
  <Avatar 
    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" 
    alt="Rounded Avatar" 
    variant="rounded" 
    size="lg"
  />
  <Avatar 
    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" 
    alt="Square Avatar" 
    variant="square" 
    size="lg"
  />
</View>`}
              />
            </div>
          </div>

          {/* Fallback Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Fallback Initials</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="AvatarDemo.jsx"
                code={`<View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
  {/* Will show "JD" initials */}
  <Avatar 
    alt="John Doe" 
    size="lg"
  />
  
  {/* Will show "AB" initials */}
  <Avatar 
    alt="Alice Smith" 
    fallback="AB"
    size="lg"
  />
  
  {/* Will show "?" as default */}
  <Avatar size="lg" />
  
  {/* Custom fallback text */}
  <Avatar 
    fallback="Admin"
    size="lg"
  />
</View>`}
              />
            </div>
          </div>

          {/* Error Handling Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Error Handling</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="AvatarDemo.jsx"
                code={`<View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
  {/* Valid image */}
  <Avatar 
    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" 
    alt="Valid Image" 
    size="lg"
  />
  
  {/* Broken image URL - will fallback to initials */}
  <Avatar 
    src="https://broken-url.com/image.jpg" 
    alt="Broken Image" 
    size="lg"
  />
  
  {/* No image provided - shows initials */}
  <Avatar 
    alt="No Image User" 
    size="lg"
  />
</View>`}
              />
            </div>
          </div>

          {/* Custom Styling Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Custom Styling</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="AvatarDemo.jsx"
                code={`<View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
  {/* Custom border */}
  <Avatar 
    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" 
    alt="Custom Border" 
    size="lg"
    className="border-2 border-blue-500"
  />
  
  {/* Custom fallback styling */}
  <Avatar 
    alt="Custom Fallback" 
    size="lg"
    fallbackClassName="text-white font-bold"
    className="bg-gradient-to-r from-purple-500 to-pink-500"
  />
  
  {/* Shadow effect */}
  <Avatar 
    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" 
    alt="Shadow Effect" 
    size="lg"
    className="shadow-lg"
  />
</View>`}
              />
            </div>
          </div>

          {/* User List Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">User List</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="AvatarDemo.jsx"
                code={`const users = [
  { id: 1, name: "John Doe", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" },
  { id: 2, name: "Jane Smith", avatar: null },
  { id: 3, name: "Bob Johnson", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" },
];

<View style={{ gap: 12 }}>
  {users.map(user => (
    <View key={user.id} style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
      <Avatar 
        src={user.avatar}
        alt={user.name}
        size="default"
      />
      <Text style={{ fontSize: 16, fontWeight: '500' }}>
        {user.name}
      </Text>
    </View>
  ))}
</View>`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
