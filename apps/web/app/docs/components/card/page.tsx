import React from "react";
import { CodeBlock } from "@/components/app/code-block";
import { Terminal } from "lucide-react";

export default function CardPage() {
  return (
    <div className="space-y-8">
      {/* Component Header */}
      <div>
        <h1 className="text-3xl font-bold mb-4">Card</h1>
        <p className="text-lg text-muted-foreground">
          A versatile container component for grouping related content and
          actions.
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
            code="npx natively-ui add card"
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
            filename="CardDemo.jsx"
            code={`import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter, 
  PressableCard 
} from '@natively-ui/card';

export default function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <Text>Main content area</Text>
      </CardContent>
      <CardFooter>
        <Text>Footer content</Text>
      </CardFooter>
    </Card>
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
                <td className="p-3 font-mono text-sm">Card</td>
                <td className="p-3 text-sm">
                  Base container component with default styling
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">CardHeader</td>
                <td className="p-3 text-sm">
                  Container for card title and description with appropriate
                  spacing
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">CardTitle</td>
                <td className="p-3 text-sm">
                  Title component with proper typography styling
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">CardDescription</td>
                <td className="p-3 text-sm">
                  Description text with subdued styling
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">CardContent</td>
                <td className="p-3 text-sm">
                  Main content area with appropriate padding
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">CardFooter</td>
                <td className="p-3 text-sm">
                  Footer area with row layout for actions
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">PressableCard</td>
                <td className="p-3 text-sm">
                  Interactive card with press handling capabilities
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
                <th className="text-left p-3 border-b">Type</th>
                <th className="text-left p-3 border-b">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="p-3 font-mono text-sm">Card</td>
                <td className="p-3 font-mono text-sm">ViewProps</td>
                <td className="p-3 text-sm">
                  Accepts all standard React Native View props including
                  className
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">CardHeader</td>
                <td className="p-3 font-mono text-sm">ViewProps</td>
                <td className="p-3 text-sm">
                  Accepts all standard React Native View props including
                  className
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">CardTitle</td>
                <td className="p-3 font-mono text-sm">TextProps</td>
                <td className="p-3 text-sm">
                  Accepts all standard React Native Text props including
                  className
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">CardDescription</td>
                <td className="p-3 font-mono text-sm">TextProps</td>
                <td className="p-3 text-sm">
                  Accepts all standard React Native Text props including
                  className
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">CardContent</td>
                <td className="p-3 font-mono text-sm">ViewProps</td>
                <td className="p-3 text-sm">
                  Accepts all standard React Native View props including
                  className
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">CardFooter</td>
                <td className="p-3 font-mono text-sm">ViewProps</td>
                <td className="p-3 text-sm">
                  Accepts all standard React Native View props including
                  className
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">PressableCard</td>
                <td className="p-3 font-mono text-sm">PressableProps</td>
                <td className="p-3 text-sm">
                  Accepts all standard React Native Pressable props including
                  onPress and className
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
          <li>Compound component pattern for flexible layouts</li>
          <li>Interactive variants with PressableCard</li>
          <li>Customizable styling through className prop</li>
          <li>Support for header, content, and footer sections</li>
          <li>Accessible press handling</li>
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
                filename="CardDemo.jsx"
                code={`<Card>
  <CardHeader>
    <CardTitle>Featured Post</CardTitle>
    <CardDescription>Check out this amazing content!</CardDescription>
  </CardHeader>
  <CardContent>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
  </CardContent>
  <CardFooter>
    <Button>Read More</Button>
  </CardFooter>
</Card>`}
              />
            </div>
          </div>

          {/* Interactive Card Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Interactive Card</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="CardDemo.jsx"
                code={`<PressableCard 
  onPress={() => {
    // Handle card press
    navigation.navigate('Details');
  }}
>
  <CardContent>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Icon name="arrow-right" size={24} />
      <Text style={{ marginLeft: 8 }}>Tap to view details</Text>
    </View>
  </CardContent>
</PressableCard>`}
              />
            </div>
          </div>

          {/* Custom Styling Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Custom Styling</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="CardDemo.jsx"
                code={`<Card className="bg-slate-100 border-slate-300 rounded-xl">
  <CardHeader className="p-6">
    <CardTitle className="text-blue-600">
      Custom Card
    </CardTitle>
    <CardDescription className="text-slate-600">
      Card with custom styling applied
    </CardDescription>
  </CardHeader>
  <CardContent className="p-6">
    <Text>Content with custom styling</Text>
  </CardContent>
</Card>`}
              />
            </div>
          </div>

          {/* Card with Actions Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Card with Actions</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="CardDemo.jsx"
                code={`<Card>
  <CardHeader>
    <CardTitle>Confirm Action</CardTitle>
    <CardDescription>
      Are you sure you want to proceed with this action?
    </CardDescription>
  </CardHeader>
  <CardFooter style={{ gap: 8 }}>
    <Button variant="outline" style={{ flex: 1 }}>
      Cancel
    </Button>
    <Button style={{ flex: 1 }}>
      Confirm
    </Button>
  </CardFooter>
</Card>`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
