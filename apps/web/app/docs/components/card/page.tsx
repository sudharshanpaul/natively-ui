import { Terminal } from 'lucide-react';

export default function CardPage() {
  return (
    <div className="space-y-8">
      {/* Component Header */}
      <div>
        <h1 className="text-3xl font-bold mb-4">Card</h1>
        <p className="text-lg text-muted-foreground">
          A container component for grouping related content and actions.
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
            <code>natively install card</code>
          </pre>
        </div>
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Usage</h2>
        <div className="bg-card rounded-lg p-6 border space-y-4">
          <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
            <code>{`import { Card } from '@natively/card';

export default function MyComponent() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Description>Card description goes here.</Card.Description>
      </Card.Header>
      <Card.Content>
        Main content area
      </Card.Content>
      <Card.Footer>
        Footer content
      </Card.Footer>
    </Card>
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
                <td className="p-3 font-mono text-sm">variant</td>
                <td className="p-3 font-mono text-sm">'default' | 'outline'</td>
                <td className="p-3 font-mono text-sm">'default'</td>
                <td className="p-3 text-sm">The visual style variant of the card.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">elevation</td>
                <td className="p-3 font-mono text-sm">'none' | 'sm' | 'md' | 'lg'</td>
                <td className="p-3 font-mono text-sm">'sm'</td>
                <td className="p-3 text-sm">The elevation/shadow level of the card.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">onPress</td>
                <td className="p-3 font-mono text-sm">() => void</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">Optional press handler to make the card interactive.</td>
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
          <li>Multiple elevation options</li>
          <li>Optional interactive states</li>
          <li>Customizable padding and spacing</li>
          <li>Support for header, content, and footer sections</li>
          <li>Accessible press handling</li>
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
                <code>{`<Card>
  <Card.Header>
    <Card.Title>Featured Post</Card.Title>
    <Card.Description>Check out this amazing content!</Card.Description>
  </Card.Header>
  <Card.Content>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
  </Card.Content>
  <Card.Footer>
    <Button variant="primary">Read More</Button>
  </Card.Footer>
</Card>`}</code>
              </pre>
            </div>
          </div>

          {/* Interactive Card */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Interactive Card</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
                <code>{`<Card 
  elevation="md"
  onPress={() => {
    // Handle card press
    navigation.navigate('Details');
  }}
>
  <Card.Content>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Icon name="arrow-right" size={24} />
      <Text style={{ marginLeft: 8 }}>Tap to view details</Text>
    </View>
  </Card.Content>
</Card>`}</code>
              </pre>
            </div>
          </div>

          {/* Custom Styling */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Custom Styling</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <pre className="bg-secondary p-4 rounded-md overflow-x-auto">
                <code>{`<Card 
  variant="outline"
  style={{
    borderRadius: 16,
    borderColor: '#4F46E5',
    backgroundColor: '#EEF2FF'
  }}
>
  <Card.Header style={{ paddingHorizontal: 20 }}>
    <Card.Title style={{ color: '#4F46E5' }}>
      Custom Card
    </Card.Title>
  </Card.Header>
  <Card.Content style={{ paddingHorizontal: 20 }}>
    <Text>Content with custom styling</Text>
  </Card.Content>
</Card>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 