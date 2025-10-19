import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustIndicators } from "@/components/sections/TrustIndicators";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { About } from "@/components/sections/About";
import { Packages } from "@/components/sections/Packages";
import { ContactCTA } from "@/components/sections/ContactCTA";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustIndicators />
        <Services />
        <Testimonials />
        <About />
        <Packages />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
