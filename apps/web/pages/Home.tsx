import { Footer } from "@/components/app/Footer";
import { CodeExample } from "@/components/app/landing-page/CodeExample";
import { Features } from "@/components/app/landing-page/Features";
import { GettingStarted } from "@/components/app/landing-page/GettingStarted";
import { Hero } from "@/components/app/landing-page/Hero";
import { Testimonials } from "@/components/app/landing-page/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <CodeExample />
      <Testimonials />
      <GettingStarted />
      <Footer />
    </div>
  );
};

export default Index;
