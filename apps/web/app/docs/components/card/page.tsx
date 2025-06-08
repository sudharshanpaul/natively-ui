import { Terminal } from "lucide-react";

export default function CardPage() {
  return (
    <div className="text-gray-100 space-y-8 min-h-screen">
      {/* Component Header */}
      <div>
        <h1 className="text-3xl font-bold mb-4 text-white">Card</h1>
        <p className="text-lg text-gray-400">
          A versatile container component for grouping related content and
          actions.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Installation</h2>
        <div className="bg-gray-900 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Terminal className="w-4 h-4 text-gray-300" />
            <p className="font-mono text-sm text-gray-300">
              Install the component:
            </p>
          </div>
          <pre className="bg-gray-800 p-4 rounded-md overflow-x-auto text-gray-300">
            <code>npx nativly add card</code>
          </pre>
        </div>
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Usage</h2>
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 space-y-4">
          <pre className="bg-gray-800 p-4 rounded-md overflow-x-auto text-gray-300">
            <code>{`import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter, 
  PressableCard 
} from '@natively/card';

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
}`}</code>
          </pre>
        </div>
      </section>

      {/* Component API */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Component API</h2>

        <div className="border border-gray-800 rounded-lg overflow-hidden">
          <table className="w-full border-collapse">
            <thead className="bg-gray-800">
              <tr>
                <th className="text-left p-3 border-b border-gray-700 text-gray-300">
                  Component
                </th>
                <th className="text-left p-3 border-b border-gray-700 text-gray-300">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr>
                <td className="p-3 font-mono text-sm text-gray-300">Card</td>
                <td className="p-3 text-sm text-gray-400">
                  Base container component with default styling
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm text-gray-300">
                  CardHeader
                </td>
                <td className="p-3 text-sm text-gray-400">
                  Container for card title and description with appropriate
                  spacing
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm text-gray-300">
                  CardTitle
                </td>
                <td className="p-3 text-sm text-gray-400">
                  Title component with proper typography styling
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm text-gray-300">
                  CardDescription
                </td>
                <td className="p-3 text-sm text-gray-400">
                  Description text with subdued styling
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm text-gray-300">
                  CardContent
                </td>
                <td className="p-3 text-sm text-gray-400">
                  Main content area with appropriate padding
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm text-gray-300">
                  CardFooter
                </td>
                <td className="p-3 text-sm text-gray-400">
                  Footer area with row layout for actions
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm text-gray-300">
                  PressableCard
                </td>
                <td className="p-3 text-sm text-gray-400">
                  Interactive card with press handling capabilities
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Props */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Props</h2>

        <div className="border border-gray-800 rounded-lg overflow-hidden">
          <table className="w-full border-collapse">
            <thead className="bg-gray-800">
              <tr>
                <th className="text-left p-3 border-b border-gray-700 text-gray-300">
                  Component
                </th>
                <th className="text-left p-3 border-b border-gray-700 text-gray-300">
                  Props
                </th>
                <th className="text-left p-3 border-b border-gray-700 text-gray-300">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              <tr>
                <td className="p-3 font-mono text-sm text-gray-300">Card</td>
                <td className="p-3 font-mono text-sm text-gray-300">
                  ...ViewProps
                </td>
                <td className="p-3 text-sm text-gray-400">
                  Accepts all standard View props
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm text-gray-300">
                  CardHeader
                </td>
                <td className="p-3 font-mono text-sm text-gray-300">
                  ...ViewProps
                </td>
                <td className="p-3 text-sm text-gray-400">
                  Accepts all standard View props
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm text-gray-300">
                  CardTitle
                </td>
                <td className="p-3 font-mono text-sm text-gray-300">
                  ...TextProps
                </td>
                <td className="p-3 text-sm text-gray-400">
                  Accepts all standard Text props
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm text-gray-300">
                  CardDescription
                </td>
                <td className="p-3 font-mono text-sm text-gray-300">
                  ...TextProps
                </td>
                <td className="p-3 text-sm text-gray-400">
                  Accepts all standard Text props
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm text-gray-300">
                  CardContent
                </td>
                <td className="p-3 font-mono text-sm text-gray-300">
                  ...ViewProps
                </td>
                <td className="p-3 text-sm text-gray-400">
                  Accepts all standard View props
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm text-gray-300">
                  CardFooter
                </td>
                <td className="p-3 font-mono text-sm text-gray-300">
                  ...ViewProps
                </td>
                <td className="p-3 text-sm text-gray-400">
                  Accepts all standard View props
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm text-gray-300">
                  PressableCard
                </td>
                <td className="p-3 font-mono text-sm text-gray-300">
                  ...PressableProps
                </td>
                <td className="p-3 text-sm text-gray-400">
                  Accepts all standard Pressable props including onPress
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Features */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-400 pl-2">
          <li>Compound component pattern for flexible layouts</li>
          <li>Interactive variants with PressableCard</li>
          <li>Customizable styling through className prop</li>
          <li>Support for header, content, and footer sections</li>
          <li>Accessible press handling</li>
          <li>React Native compatible with proper View and Text components</li>
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
                <code>{`<Card className="bg-gray-900 border-gray-700">
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
</Card>`}</code>
              </pre>
            </div>
          </div>

          {/* Interactive Card */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-white">
              Interactive Card
            </h3>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 space-y-4">
              <pre className="bg-gray-800 p-4 rounded-md overflow-x-auto text-gray-300">
                <code>{`<PressableCard 
  className="bg-gray-900 border-gray-700" 
  onPress={() => {
    // Handle card press
    navigation.navigate('Details');
  }}
>
  <CardContent>
    <View className="flex flex-row items-center">
      <Icon name="arrow-right" size={24} />
      <Text className="ml-2">Tap to view details</Text>
    </View>
  </CardContent>
</PressableCard>`}</code>
              </pre>
            </div>
          </div>

          {/* Custom Styling */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-white">Custom Styling</h3>
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 space-y-4">
              <pre className="bg-gray-800 p-4 rounded-md overflow-x-auto text-gray-300">
                <code>{`<Card className="bg-gray-900 border-gray-700 rounded-xl">
  <CardHeader className="p-5">
    <CardTitle className="text-blue-400">
      Custom Card
    </CardTitle>
  </CardHeader>
  <CardContent className="p-5">
    <Text className="text-gray-300">Content with custom styling</Text>
  </CardContent>
</Card>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
