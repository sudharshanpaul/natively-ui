import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function DocsPage() {
  return (
    <div className="min-h-screen w-full max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Beautiful React Native Components</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          A collection of modern, accessible, and customizable components for your React Native applications.
        </p>
        <Link 
          href="/docs/getting-started"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          Get Started <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Featured Components */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Featured Components</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* DatePicker */}
          <div className="bg-card rounded-lg p-6 border">
            <h3 className="text-xl font-semibold mb-2">DatePicker</h3>
            <p className="text-muted-foreground mb-4">
              A flexible date picker with customizable calendar views and date range selection.
            </p>
            <div className="text-sm text-primary">npm install @natively/datepicker</div>
          </div>

          {/* Drawer */}
          <div className="bg-card rounded-lg p-6 border">
            <h3 className="text-xl font-semibold mb-2">Drawer</h3>
            <p className="text-muted-foreground mb-4">
              A sliding drawer component with gesture support and customizable positions.
            </p>
            <div className="text-sm text-primary">npm install @natively/drawer</div>
          </div>

          {/* Dialog */}
          <div className="bg-card rounded-lg p-6 border">
            <h3 className="text-xl font-semibold mb-2">Dialog</h3>
            <p className="text-muted-foreground mb-4">
              Modal dialogs with animations, backdrop handling, and accessibility features.
            </p>
            <div className="text-sm text-primary">npm install @natively/dialog</div>
          </div>

          {/* Combobox */}
          <div className="bg-card rounded-lg p-6 border">
            <h3 className="text-xl font-semibold mb-2">Combobox</h3>
            <p className="text-muted-foreground mb-4">
              An autocomplete input with filtering, keyboard navigation, and custom rendering.
            </p>
            <div className="text-sm text-primary">npm install @natively/combobox</div>
          </div>

          {/* Accordion */}
          <div className="bg-card rounded-lg p-6 border">
            <h3 className="text-xl font-semibold mb-2">Accordion</h3>
            <p className="text-muted-foreground mb-4">
              Expandable content sections with smooth animations and keyboard support.
            </p>
            <div className="text-sm text-primary">npm install @natively/accordion</div>
          </div>

          {/* Alert Dialog */}
          <div className="bg-card rounded-lg p-6 border">
            <h3 className="text-xl font-semibold mb-2">Alert Dialog</h3>
            <p className="text-muted-foreground mb-4">
              Accessible alert dialogs for important user confirmations and notifications.
            </p>
            <div className="text-sm text-primary">npm install @natively/alert-dialog</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Why Choose natively?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-accent rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Accessible by Default</h3>
            <p className="text-muted-foreground">
              Built with accessibility in mind, following WCAG guidelines and React Native best practices.
            </p>
          </div>
          <div className="bg-accent rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Customizable</h3>
            <p className="text-muted-foreground">
              Flexible theming system that works with your existing design tokens and styles.
            </p>
          </div>
          <div className="bg-accent rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Developer Experience</h3>
            <p className="text-muted-foreground">
              Simple installation process, comprehensive documentation, and TypeScript support.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
