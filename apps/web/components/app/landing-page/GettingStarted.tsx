import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Book, Github } from "lucide-react";

const resources = [
  {
    title: "Documentation",
    description:
      "Comprehensive guides, API references, and tutorials to get you started.",
    icon: <Book className="h-6 w-6" />,
    action: "Read Docs",
    href: "#",
  },
  {
    title: "GitHub Repository",
    description:
      "Browse the source code, report issues, and contribute to the project.",
    icon: <Github className="h-6 w-6" />,
    action: "View Source",
    href: "#",
  },
  {
    title: "Example Projects",
    description:
      "Explore real-world examples and templates built with natively-ui.",
    icon: <span className="text-lg">🚀</span>,
    action: "See Examples",
    href: "#",
  },
];

export const GettingStarted = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Ready to start?
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Start building today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Everything you need to create amazing React Native apps is at your
            fingertips.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              View Examples
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                    {resource.icon}
                  </div>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4 leading-relaxed">
                  {resource.description}
                </CardDescription>
                <Button
                  variant="ghost"
                  className="group-hover:bg-blue-50 dark:group-hover:bg-blue-950 transition-colors"
                >
                  {resource.action} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
