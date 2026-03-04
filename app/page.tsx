
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center bg-slate-50">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Hire the best. <br /><span className="text-primary">Work with the best.</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          The world's work marketplace. Sign up as a buyer to find talent, or as a seller to grow your career.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/signup"><Button size="lg" className="px-8">Get Started</Button></Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 container mx-auto">
        <h2 className="text-3xl font-bold mb-8">About MarketPlace</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-200 aspect-video rounded-xl" /> {/* Placeholder for image */}
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              We connect businesses with independent professionals and agencies around the globe. 
              Our platform makes it easy to collaborate and get work done securely.
            </p>
            <ul className="space-y-2 font-medium">
              <li>✅ Verified Talent Pool</li>
              <li>✅ Secure Payment Protection</li>
              <li>✅ 24/7 Support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section (Inside Footer) */}
      <footer id="contact" className="bg-slate-900 text-white py-16 px-6">
        <div className="container mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">MarketPlace</h3>
            <p className="text-slate-400">Building the future of remote work, one project at a time.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <p className="text-slate-400">Email: support@marketplace.com</p>
            <p className="text-slate-400">Phone: +1 (555) 000-0000</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4 text-slate-400">
              <span className="hover:text-white cursor-pointer transition">Twitter</span>
              <span className="hover:text-white cursor-pointer transition">LinkedIn</span>
              <span className="hover:text-white cursor-pointer transition">GitHub</span>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} MarketPlace Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}