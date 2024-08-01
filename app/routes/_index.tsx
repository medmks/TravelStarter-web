import type { MetaFunction } from "@remix-run/node";
import AboutComponent from "~/components/about.component";
import Hero from "~/components/hero.component";
import Navbar from "~/components/navbar.component";
import PartnersComponent from "~/components/partners.component";
import ServicesComponent from "~/components/services.component";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="relative z-1 scroll-smooth">
      <Navbar />
      <Hero />
      <AboutComponent />
      <ServicesComponent />
      <PartnersComponent />
    </div>
  );
}
