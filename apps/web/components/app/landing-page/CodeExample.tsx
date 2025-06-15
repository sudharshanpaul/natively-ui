import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const CodeExample = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 text-gray-300"
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
      </div>
    </section>
  );
};
