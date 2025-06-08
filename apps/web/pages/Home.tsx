import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Layers, Smartphone, Zap } from "lucide-react";
import { Footer } from "@/components/app/footer";
import { HeroCode } from "@/components/app/hero-code";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="flex flex-row justify-center py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    Beautiful React Native components with Tailwind CSS
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    natively-ui is a collection of reusable, accessible React
                    Native components that you can copy and paste into your
                    apps, styled with Tailwind CSS.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/docs">
                    <Button size="lg" className="gap-1">
                      Get Started <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/components">
                    <Button size="lg" variant="outline">
                      Browse Components
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[500px] rounded-lg border bg-background p-4 shadow-lg">
                  <HeroCode />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted/40 py-24 md:py-32">
          <div className="flex flex-col items-center justify-center px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Features
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed">
                natively-ui provides everything you need to build beautiful
                React Native apps.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center gap-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Native First</h3>
                <p className="text-center text-muted-foreground">
                  Built specifically for React Native with mobile-first design
                  principles.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Tailwind Powered</h3>
                <p className="text-center text-muted-foreground">
                  Uses familiar Tailwind CSS classnames for consistent styling
                  across platforms.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Composable</h3>
                <p className="text-center text-muted-foreground">
                  Primitives-based architecture for maximum flexibility and
                  customization.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Performance</h3>
                <p className="text-center text-muted-foreground">
                  Optimized for React Native with minimal overhead and maximum
                  performance.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                    <path d="M10 2c1 .5 2 2 2 5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">iOS & Android</h3>
                <p className="text-center text-muted-foreground">
                  Consistent look and feel across both iOS and Android
                  platforms.
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <circle cx="18" cy="18" r="3" />
                    <circle cx="6" cy="6" r="3" />
                    <path d="M13 6h3a2 2 0 0 1 2 2v7" />
                    <path d="M11 18H8a2 2 0 0 1-2-2V9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Accessible</h3>
                <p className="text-center text-muted-foreground">
                  Built with accessibility in mind, following best practices for
                  mobile.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Components Preview Section */}
        <section className="py-24 md:py-32">
          <div className="px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Components
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed">
                A comprehensive collection of UI components for your React
                Native applications.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {["Button", "Card", "Input", "Avatar", "Tabs", "Modal"].map(
                (component) => (
                  <Link
                    key={component}
                    href={`/components/${component.toLowerCase()}`}
                    className="group flex flex-col items-center gap-2 rounded-lg border bg-background p-6 shadow-sm transition-colors hover:border-primary/50 hover:bg-slate-900"
                  >
                    <div className="rounded-md bg-muted p-4 transition-colors group-hover:bg-muted/70">
                      <div className="h-32 w-full rounded-md bg-muted/50"></div>
                    </div>
                    <h3 className="text-xl font-bold">{component}</h3>
                  </Link>
                )
              )}
            </div>
            <div className="flex justify-center">
              <Link href="/components">
                <Button variant="outline" size="lg">
                  View All Components
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Installation Section */}
        <section className="bg-muted/40 py-24 md:py-32">
          <div className="px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Installation
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed">
                Get started with natively-ui in your React Native project.
              </p>
            </div>
            <div className="mx-auto mt-8 max-w-3xl rounded-lg border bg-background p-6 shadow-md">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">1. Install the package</h3>
                <pre className="overflow-x-auto rounded-lg bg-muted p-4">
                  <code>npm install natively-ui</code>
                </pre>

                <h3 className="text-xl font-bold">2. Set up Tailwind CSS</h3>
                <pre className="overflow-x-auto rounded-lg bg-muted p-4">
                  <code>npm install tailwindcss-react-native</code>
                </pre>

                <h3 className="text-xl font-bold">
                  3. Import and use components
                </h3>
                <pre className="overflow-x-auto rounded-lg bg-muted p-4">
                  <code>{`import { Button } from 'natively-ui';\n\nexport default function App() {\n  return (\n    <Button variant="primary" className="px-4 py-2">\n      Click me\n    </Button>\n  );\n}`}</code>
                </pre>
              </div>
              <div className="mt-6 flex justify-center">
                <Link href="/docs/installation">
                  <Button>Read Full Documentation</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
