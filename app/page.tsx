
import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function LandingPage() {
  return (
    
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Contact Section (Inside Footer) */}
      <Footer />
    </div>
  );
}