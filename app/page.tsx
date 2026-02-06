import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Features from "./_components/Features";
import Analytics from "./_components/Analytics";
import Testimonials from "./_components/Testimonials";
import Pricing from "./_components/Pricing";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto">
        <Hero />
        <About />
        <Features />
        <Analytics />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
