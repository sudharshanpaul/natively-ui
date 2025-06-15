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
import Link from "next/link";

const resources = [
  {
    title: "Documentation",
    description:
      "Comprehensive guides, API references, and tutorials to get you started.",
    icon: <Book className="h-5 w-5" />,
    action: "Read Docs",
    href: "/docs",
  },
  {
    title: "GitHub Repository",
    description:
      "Browse the source code, report issues, and contribute to the project.",
    icon: <Github className="size-5" />,
    action: "View Source",
    href: "https://github.com/Ayushhgupta39/natively-ui",
  },
];

export const GettingStarted = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-950 to-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-gray-300">
            Ready to start?
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Start building today
          </h2>
          <p className="text-xl font-geist text-gray-400 max-w-3xl mx-auto mb-8">
            Everything you need to create amazing React Native apps is at your
            fingertips.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button className="font-geist bg-gradient-to-r text-white from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="font-geist text-gray-200 hover:bg-gray-800"
            >
              View Examples
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <Card
              key={index}
              className="group font-geist hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gray-800/30 border-gray-700 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 transition-colors">{resource.icon}</div>
                  <CardTitle className="text-xl text-white">
                    {resource.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4 leading-relaxed text-gray-400">
                  {resource.description}
                </CardDescription>
                <Link href={resource.href}>
                  <Button className="bg-black group-hover:bg-blue-900/30 transition-colors text-gray-300 hover:text-white">
                    {resource.action} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
