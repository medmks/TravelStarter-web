import type { MetaFunction } from "@remix-run/node";
import AboutComponent from "~/components/about.component";
import FAQsComponent from "~/components/FAQs.component";
import Hero from "~/components/hero.component";
import LogoTickerComponent from "~/components/LogoTicker.component";
import Navbar from "~/components/navbar.component";
import PackageComponent from "~/components/package.component";
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
      <LogoTickerComponent/>
      <FAQsComponent />
      {/* <PackageComponent /> */}
    </div>
  );
}
