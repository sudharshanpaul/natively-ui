import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "Native Performance",
    description:
      "Built for React Native with optimized components that deliver native performance across iOS and Android.",
    icon: "",
    badge: "Fast",
  },
  {
    title: "NativeWind Integration",
    description:
      "Seamlessly integrated with NativeWind for utility-first styling that works across all platforms.",
    icon: "",
    badge: "Styled",
  },
  {
    title: "CLI Tools",
    description:
      "Powerful CLI for scaffolding, component generation, and project management. Get started instantly.",
    icon: "",
    badge: "Tooling",
  },
  {
    title: "TypeScript Support",
    description:
      "Full TypeScript support with comprehensive type definitions for better developer experience.",
    icon: "",
    badge: "Typed",
  },
  {
    title: "Cross Platform",
    description:
      "Write once, run everywhere. Components work seamlessly on iOS, Android, and web.",
    icon: "",
    badge: "Universal",
  },
  {
    title: "Developer Experience",
    description:
      "Hot reload, excellent documentation, and intuitive APIs designed for developer productivity.",
    icon: "",
    badge: "DX",
  },
];

export const Features = () => {
  return (
    <section className="py-24 pt-0 px-4 sm:px-6 lg:px-8 bg-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 text-gray-300"
          >
            Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Everything you need to build
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              amazing mobile apps
            </span>
          </h2>
          <p className="text-xl font-geist text-gray-400 max-w-3xl mx-auto">
            Natively provides all the tools and components you need to create
            beautiful, performant React Native applications with ease.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-neutral-800/50  backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </CardTitle>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-gray-700 text-gray-300"
                  >
                    {feature.badge}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-gray-400">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
