import React from "react";
import { CodeBlock } from "@/components/app/code-block";
import { Terminal } from 'lucide-react';


export default function AccordionPage() {
  return (
    <div className="space-y-8">
      {/* Component Header */}
      <div>
        <h1 className="text-3xl font-bold mb-4">Accordion</h1>
        <p className="text-lg text-muted-foreground">
          A collapsible content component with smooth animations, supporting
          both single and multiple item expansion.
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
            code="npx natively-ui add accordion"
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
            filename="AccordionDemo.jsx"
            highlightLines={[6, 7, 8, 9]}
            code={`import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

export default function MyComponent() {
  return (
    <Accordion type="single" defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`}
          />
        </div>
      </section>

      {/* API Reference */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">API Reference</h2>

        {/* Accordion Props */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Accordion</h3>
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
                  <td className="p-3 font-mono text-sm">type</td>
                  <td className="p-3 font-mono text-sm">
                    'single' | 'multiple'
                  </td>
                  <td className="p-3 font-mono text-sm">'single'</td>
                  <td className="p-3 text-sm">
                    Whether a single or multiple items can be opened at the same
                    time.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-sm">defaultValue</td>
                  <td className="p-3 font-mono text-sm">string | string[]</td>
                  <td className="p-3 font-mono text-sm">-</td>
                  <td className="p-3 text-sm">
                    The initial value(s) of the accordion when it is first
                    rendered.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-sm">value</td>
                  <td className="p-3 font-mono text-sm">string | string[]</td>
                  <td className="p-3 font-mono text-sm">-</td>
                  <td className="p-3 text-sm">
                    The controlled value of the accordion. Use when you need to
                    control the state externally.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-sm">onValueChange</td>
                  <td className="p-3 font-mono text-sm">
                    (value: string | string[]) =&gt; void
                  </td>
                  <td className="p-3 font-mono text-sm">-</td>
                  <td className="p-3 text-sm">
                    Event handler called when the value changes.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-sm">className</td>
                  <td className="p-3 font-mono text-sm">string</td>
                  <td className="p-3 font-mono text-sm">""</td>
                  <td className="p-3 text-sm">
                    Additional CSS classes for the accordion container.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* AccordionItem Props */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">AccordionItem</h3>
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
                  <td className="p-3 font-mono text-sm">value</td>
                  <td className="p-3 font-mono text-sm">string</td>
                  <td className="p-3 font-mono text-sm">-</td>
                  <td className="p-3 text-sm">
                    A unique value for the item. Required.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-sm">disabled</td>
                  <td className="p-3 font-mono text-sm">boolean</td>
                  <td className="p-3 font-mono text-sm">false</td>
                  <td className="p-3 text-sm">
                    When true, prevents the user from interacting with the item.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-sm">className</td>
                  <td className="p-3 font-mono text-sm">string</td>
                  <td className="p-3 font-mono text-sm">""</td>
                  <td className="p-3 text-sm">
                    Additional CSS classes for the item container.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* AccordionTrigger Props */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">AccordionTrigger</h3>
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
                  <td className="p-3 font-mono text-sm">className</td>
                  <td className="p-3 font-mono text-sm">string</td>
                  <td className="p-3 font-mono text-sm">""</td>
                  <td className="p-3 text-sm">
                    Additional CSS classes for the trigger button.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-sm">children</td>
                  <td className="p-3 font-mono text-sm">React.ReactNode</td>
                  <td className="p-3 font-mono text-sm">-</td>
                  <td className="p-3 text-sm">
                    The content to display in the trigger. Can be text or custom
                    components.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* AccordionContent Props */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">AccordionContent</h3>
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
                  <td className="p-3 font-mono text-sm">className</td>
                  <td className="p-3 font-mono text-sm">string</td>
                  <td className="p-3 font-mono text-sm">""</td>
                  <td className="p-3 text-sm">
                    Additional CSS classes for the content container.
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-mono text-sm">children</td>
                  <td className="p-3 font-mono text-sm">React.ReactNode</td>
                  <td className="p-3 font-mono text-sm">-</td>
                  <td className="p-3 text-sm">
                    The collapsible content to display when the item is open.
                  </td>
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
          <li>Single or multiple item expansion modes</li>
          <li>Smooth height animations with automatic content measurement</li>
          <li>Keyboard accessible with proper ARIA attributes</li>
          <li>Controlled and uncontrolled modes</li>
          <li>Disabled state support</li>
          <li>Customizable styling with className props</li>
          <li>Context-based component communication</li>
          <li>Built with React Native Animated API</li>
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
                filename="AccordionDemo.jsx"
                code={`<Accordion type="single" defaultValue="item-1">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      <Text>Yes. It adheres to the WAI-ARIA design pattern.</Text>
    </AccordionContent>
  </AccordionItem>
  
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      <Text>Yes. It comes with default styles that matches the other components' aesthetic.</Text>
    </AccordionContent>
  </AccordionItem>
  
  <AccordionItem value="item-3">
    <AccordionTrigger>Is it animated?</AccordionTrigger>
    <AccordionContent>
      <Text>Yes. It's animated by default, but you can disable it if you prefer.</Text>
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
              />
            </div>
          </div>

          {/* Multiple Type Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Multiple Items</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="AccordionDemo.jsx"
                code={`<Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
  <AccordionItem value="item-1">
    <AccordionTrigger>What is React Native?</AccordionTrigger>
    <AccordionContent>
      <Text>
        React Native is a framework for building native apps using React.
        It allows you to write mobile applications using JavaScript and React.
      </Text>
    </AccordionContent>
  </AccordionItem>
  
  <AccordionItem value="item-2">
    <AccordionTrigger>What is Expo?</AccordionTrigger>
    <AccordionContent>
      <Text>
        Expo is a platform for making React Native applications with tools 
        and services that help you develop, build, deploy, and iterate on iOS 
        and Android apps.
      </Text>
    </AccordionContent>
  </AccordionItem>
  
  <AccordionItem value="item-3">
    <AccordionTrigger>What is TypeScript?</AccordionTrigger>
    <AccordionContent>
      <Text>
        TypeScript is a programming language developed by Microsoft that builds 
        on JavaScript by adding static type definitions.
      </Text>
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
              />
            </div>
          </div>

          {/* Controlled Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Controlled State</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="AccordionDemo.jsx"
                code={`const [value, setValue] = useState("item-1");

<View style={{ gap: 16 }}>
  <View style={{ flexDirection: 'row', gap: 8 }}>
    <Button onPress={() => setValue("item-1")} size="sm">
      Open First
    </Button>
    <Button onPress={() => setValue("item-2")} size="sm">
      Open Second
    </Button>
    <Button onPress={() => setValue("")} size="sm">
      Close All
    </Button>
  </View>
  
  <Accordion type="single" value={value} onValueChange={setValue}>
    <AccordionItem value="item-1">
      <AccordionTrigger>First Item</AccordionTrigger>
      <AccordionContent>
        <Text>This is the first item's content.</Text>
      </AccordionContent>
    </AccordionItem>
    
    <AccordionItem value="item-2">
      <AccordionTrigger>Second Item</AccordionTrigger>
      <AccordionContent>
        <Text>This is the second item's content.</Text>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
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
                filename="AccordionDemo.jsx"
                code={`<Accordion type="single" className="bg-white rounded-lg shadow-md">
  <AccordionItem 
    value="item-1" 
    className="border-b border-slate-200 last:border-b-0"
  >
    <AccordionTrigger className="px-6 py-4 hover:bg-slate-50">
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <Icon name="settings" size={20} color="#3B82F6" />
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#1E293B' }}>
          Settings
        </Text>
      </View>
    </AccordionTrigger>
    <AccordionContent className="px-6 py-4 bg-slate-50">
      <Text style={{ color: '#64748B', lineHeight: 20 }}>
        Configure your application settings and preferences here.
      </Text>
    </AccordionContent>
  </AccordionItem>
  
  <AccordionItem 
    value="item-2" 
    className="border-b border-slate-200 last:border-b-0"
  >
    <AccordionTrigger className="px-6 py-4 hover:bg-slate-50">
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <Icon name="user" size={20} color="#10B981" />
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#1E293B' }}>
          Profile
        </Text>
      </View>
    </AccordionTrigger>
    <AccordionContent className="px-6 py-4 bg-slate-50">
      <Text style={{ color: '#64748B', lineHeight: 20 }}>
        Manage your profile information and account details.
      </Text>
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
              />
            </div>
          </div>

          {/* Disabled Items Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Disabled Items</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="AccordionDemo.jsx"
                code={`<Accordion type="single">
  <AccordionItem value="item-1">
    <AccordionTrigger>Available Feature</AccordionTrigger>
    <AccordionContent>
      <Text>This feature is available and can be accessed.</Text>
    </AccordionContent>
  </AccordionItem>
  
  <AccordionItem value="item-2" disabled>
    <AccordionTrigger>Coming Soon</AccordionTrigger>
    <AccordionContent>
      <Text>This feature is coming soon and is currently disabled.</Text>
    </AccordionContent>
  </AccordionItem>
  
  <AccordionItem value="item-3">
    <AccordionTrigger>Another Available Feature</AccordionTrigger>
    <AccordionContent>
      <Text>This is another feature that you can use right now.</Text>
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
              />
            </div>
          </div>

          {/* FAQ Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">FAQ Section</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="AccordionDemo.jsx"
                code={`const faqs = [
  {
    id: "faq-1",
    question: "How do I reset my password?",
    answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page. We'll send you an email with instructions to create a new password."
  },
  {
    id: "faq-2", 
    question: "Is my data secure?",
    answer: "Yes, we use industry-standard encryption and security measures to protect your data. All sensitive information is encrypted both in transit and at rest."
  },
  {
    id: "faq-3",
    question: "Can I cancel my subscription anytime?",
    answer: "Absolutely! You can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period."
  }
];

<View>
  <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
    Frequently Asked Questions
  </Text>
  
  <Accordion type="single">
    {faqs.map(faq => (
      <AccordionItem key={faq.id} value={faq.id}>
        <AccordionTrigger>
          <Text style={{ fontSize: 16, fontWeight: '500' }}>
            {faq.question}
          </Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text style={{ color: '#6B7280', lineHeight: 22 }}>
            {faq.answer}
          </Text>
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
</View>`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
