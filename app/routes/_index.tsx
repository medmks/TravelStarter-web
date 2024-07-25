import type { MetaFunction } from "@remix-run/node";
import AboutComponent from "~/components/about.component";
import HeroComponent  from "~/components/hero.component";
import Navbar from "~/components/navbar.component";
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
      <Navbar/>
      <HeroComponent/>
      <AboutComponent/>
      <ServicesComponent/>
    </div>
  );
}
