import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const CodeExample = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-gray-700 text-gray-300"
          >
            Get Started
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            From zero to app in
            <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              under 2 minutes
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Use our CLI to scaffold your project and start building immediately
            with pre-built components and best practices.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="install" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-800 border-gray-700">
              <TabsTrigger
                value="install"
                className="data-[state=active]:bg-gray-700 data-[state=active]:text-white"
              >
                Install CLI
              </TabsTrigger>
              <TabsTrigger
                value="create"
                className="data-[state=active]:bg-gray-700 data-[state=active]:text-white"
              >
                Create Project
              </TabsTrigger>
              <TabsTrigger
                value="component"
                className="data-[state=active]:bg-gray-700 data-[state=active]:text-white"
              >
                Use Components
              </TabsTrigger>
            </TabsList>

            <TabsContent value="install">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <span className="text-green-400">$</span>
                    Install natively-cli
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto border border-gray-700">
                    <code className="text-green-400 font-mono text-sm sm:text-base">
                      npm install -g natively-cli
                    </code>
                  </div>
                  <p className="text-gray-400 mt-4">
                    Install the natively-cli globally to access all commands and
                    generators.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="create">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <span className="text-blue-400">$</span>
                    Create new project
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto border border-gray-700">
                    <code className="text-green-400 font-mono text-sm sm:text-base block mb-2">
                      natively create my-awesome-app
                    </code>
                    <code className="text-blue-400 font-mono text-sm sm:text-base block mb-2">
                      cd my-awesome-app
                    </code>
                    <code className="text-purple-400 font-mono text-sm sm:text-base block">
                      npm start
                    </code>
                  </div>
                  <p className="text-gray-400 mt-4">
                    Scaffold a new React Native project with natively-ui
                    components pre-configured.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="component">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <span className="text-purple-400">📱</span>
                    Use components
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto border border-gray-700">
                    <pre className="text-sm sm:text-base">
                      <code className="text-blue-400">import</code>
                      <code className="text-white"> {"{ Button, Card }"} </code>
                      <code className="text-blue-400">from</code>
                      <code className="text-green-400"> 'natively-ui'</code>
                      <code className="text-white">;</code>
                      <br />
                      <br />
                      <code className="text-blue-400">
                        export default function
                      </code>
                      <code className="text-yellow-400"> App</code>
                      <code className="text-white">() {"{"}</code>
                      <br />
                      <code className="text-white"> </code>
                      <code className="text-blue-400">return</code>
                      <code className="text-white"> (</code>
                      <br />
                      <code className="text-white"> </code>
                      <code className="text-red-400">{"<Card"}</code>
                      <code className="text-green-400"> className</code>
                      <code className="text-white">=</code>
                      <code className="text-green-400">"p-4 m-4"</code>
                      <code className="text-red-400">{">"}</code>
                      <br />
                      <code className="text-white"> </code>
                      <code className="text-red-400">{"<Button"}</code>
                      <code className="text-green-400"> variant</code>
                      <code className="text-white">=</code>
                      <code className="text-green-400">"primary"</code>
                      <code className="text-red-400">{">"}</code>
                      <br />
                      <code className="text-white"> Hello natively-ui!</code>
                      <br />
                      <code className="text-white"> </code>
                      <code className="text-red-400">{"</Button>"}</code>
                      <br />
                      <code className="text-white"> </code>
                      <code className="text-red-400">{"</Card>"}</code>
                      <br />
                      <code className="text-white"> );</code>
                      <br />
                      <code className="text-white">{"}"}</code>
                    </pre>
                  </div>
                  <p className="text-gray-400 mt-4">
                    Import and use components with NativeWind classes for
                    consistent styling.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};
