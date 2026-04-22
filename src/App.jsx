import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Pricing from "./sections/Pricing";
import Footer from "./components/Footer";
import Stats from "./sections/Stats";
import CTA from "./sections/CTA";
import './styles/global.css';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-zinc-100 font-sans overflow-x-hidden hookurl-root">

      <Navbar />

      <main>
        <Hero />
        <Stats />
        <Features />
        <Pricing />
        <CTA />
      </main>

      <Footer />

    </div>
  );
}