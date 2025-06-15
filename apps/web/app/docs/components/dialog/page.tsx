import React from "react";
import { CodeBlock } from "@/components/app/code-block";
import { Terminal } from "lucide-react";

export default function DialogPage() {
  return (
    <div className="space-y-8">
      {/* Component Header */}
      <div>
        <h1 className="text-3xl font-bold mb-4">Dialog</h1>
        <p className="text-lg text-muted-foreground">
          A modal dialog component for displaying content in an overlay with
          customizable header, content, and footer sections.
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
            code="npx natively-ui add dialog"
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
            filename="DialogDemo.jsx"
            code={`import { Dialog, AlertDialog } from '@natively-ui/dialog';

export default function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Dialog 
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="Dialog Title"
      description="This is a dialog description."
    >
      <Text>Dialog content goes here</Text>
    </Dialog>
  );
}`}
          />
        </div>
      </section>

      {/* Props - Dialog */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Dialog Props</h2>

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
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">
                  Controls whether the dialog is visible.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">onClose</td>
                <td className="p-3 font-mono text-sm">() =&gt; void</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">
                  Function called when the dialog should be closed.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">title</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">
                  Optional title displayed in the dialog header.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">description</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">
                  Optional description text displayed below the title.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">children</td>
                <td className="p-3 font-mono text-sm">React.ReactNode</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">
                  Content to display in the dialog body.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">footer</td>
                <td className="p-3 font-mono text-sm">React.ReactNode</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">
                  Custom footer content, typically action buttons.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">className</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">""</td>
                <td className="p-3 text-sm">
                  Additional CSS classes for the dialog container.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">contentClassName</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">""</td>
                <td className="p-3 text-sm">
                  Additional CSS classes for the dialog content area.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">overlayClassName</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">""</td>
                <td className="p-3 text-sm">
                  Additional CSS classes for the dialog overlay.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Props - AlertDialog */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">AlertDialog Props</h2>
        <p className="text-muted-foreground">
          AlertDialog extends Dialog with additional props for common
          confirmation dialogs.
        </p>

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
                <td className="p-3 font-mono text-sm">cancelText</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">'Cancel'</td>
                <td className="p-3 text-sm">Text for the cancel button.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">confirmText</td>
                <td className="p-3 font-mono text-sm">string</td>
                <td className="p-3 font-mono text-sm">'OK'</td>
                <td className="p-3 text-sm">Text for the confirm button.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">onConfirm</td>
                <td className="p-3 font-mono text-sm">() =&gt; void</td>
                <td className="p-3 font-mono text-sm">-</td>
                <td className="p-3 text-sm">
                  Function called when the confirm button is pressed.
                </td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-sm">danger</td>
                <td className="p-3 font-mono text-sm">boolean</td>
                <td className="p-3 font-mono text-sm">false</td>
                <td className="p-3 text-sm">
                  Whether to style the confirm button as destructive.
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
          <li>Modal overlay with backdrop tap to close</li>
          <li>Responsive sizing with maximum width constraints</li>
          <li>Optional header with title and description</li>
          <li>Flexible content area for custom components</li>
          <li>Customizable footer with action buttons</li>
          <li>AlertDialog variant for common confirmation dialogs</li>
          <li>Close button in header for better UX</li>
          <li>Fade animation for smooth transitions</li>
          <li>Customizable styling with className props</li>
          <li>Built with React Native Modal and Expo Vector Icons</li>
        </ul>
      </section>

      {/* Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Examples</h2>

        <div className="space-y-6">
          {/* Basic Dialog Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Basic Dialog</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="DialogDemo.jsx"
                code={`const [isOpen, setIsOpen] = useState(false);

<View>
  <Button onPress={() => setIsOpen(true)}>
    Open Dialog
  </Button>
  
  <Dialog
    isOpen={isOpen}
    onClose={() => setIsOpen(false)}
    title="Basic Dialog"
    description="This is a simple dialog with a title and description."
  >
    <Text>This is the dialog content area.</Text>
  </Dialog>
</View>`}
              />
            </div>
          </div>

          {/* Dialog with Custom Footer */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Custom Footer</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="DialogDemo.jsx"
                code={`<Dialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Custom Actions"
  description="Dialog with custom footer buttons."
  footer={
    <>
      <Button 
        variant="ghost" 
        size="sm" 
        onPress={() => setIsOpen(false)}
        className="mr-2"
      >
        Cancel
      </Button>
      <Button 
        variant="default" 
        size="sm"
        onPress={handleSave}
        className="mr-2"
      >
        Save
      </Button>
      <Button 
        variant="destructive" 
        size="sm"
        onPress={handleDelete}
      >
        Delete
      </Button>
    </>
  }
>
  <Text>Are you sure you want to perform this action?</Text>
</Dialog>`}
              />
            </div>
          </div>

          {/* AlertDialog Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">AlertDialog</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="DialogDemo.jsx"
                code={`const [showAlert, setShowAlert] = useState(false);

<View>
  <Button onPress={() => setShowAlert(true)}>
    Show Alert
  </Button>
  
  <AlertDialog
    isOpen={showAlert}
    onClose={() => setShowAlert(false)}
    title="Confirm Action"
    description="Are you sure you want to proceed? This action cannot be undone."
    onConfirm={() => {
      console.log('Action confirmed');
      // Perform action here
    }}
    confirmText="Yes, proceed"
    cancelText="Cancel"
  />
</View>`}
              />
            </div>
          </div>

          {/* Destructive AlertDialog */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Destructive Alert</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="DialogDemo.jsx"
                code={`<AlertDialog
  isOpen={showDeleteAlert}
  onClose={() => setShowDeleteAlert(false)}
  title="Delete Item"
  description="This will permanently delete the item. This action cannot be undone."
  onConfirm={handleDelete}
  confirmText="Delete"
  cancelText="Keep"
  danger={true}
/>`}
              />
            </div>
          </div>

          {/* Dialog with Form Content */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Form Dialog</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="DialogDemo.jsx"
                code={`const [formData, setFormData] = useState({ name: '', email: '' });

<Dialog
  isOpen={isFormOpen}
  onClose={() => setIsFormOpen(false)}
  title="Add New User"
  description="Please fill in the user details below."
  contentClassName="space-y-4"
  footer={
    <>
      <Button 
        variant="ghost" 
        size="sm" 
        onPress={() => setIsFormOpen(false)}
        className="mr-2"
      >
        Cancel
      </Button>
      <Button 
        variant="default" 
        size="sm"
        onPress={handleSubmit}
      >
        Add User
      </Button>
    </>
  }
>
  <View className="space-y-4">
    <TextInput
      placeholder="Full Name"
      value={formData.name}
      onChangeText={(text) => setFormData({...formData, name: text})}
      className="border border-gray-300 rounded p-3"
    />
    <TextInput
      placeholder="Email Address"
      value={formData.email}
      onChangeText={(text) => setFormData({...formData, email: text})}
      className="border border-gray-300 rounded p-3"
    />
  </View>
</Dialog>`}
              />
            </div>
          </div>

          {/* Custom Styling Example */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Custom Styling</h3>
            <div className="bg-card rounded-lg p-6 border space-y-4">
              <CodeBlock
                language="jsx"
                filename="DialogDemo.jsx"
                code={`<Dialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Custom Styled Dialog"
  className="border-2 border-blue-500"
  contentClassName="bg-blue-50"
  overlayClassName="bg-blue-900/30"
>
  <Text className="text-blue-800">
    This dialog has custom styling applied.
  </Text>
</Dialog>`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
