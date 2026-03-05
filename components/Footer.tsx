const Footer = () => {
  return (
    <>
        <footer id="contact" className="bg-neutral-900 text-white py-16 px-6">
        <div className="container mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Garment Solutions</h3>
            <p className="text-slate-400">We connect businesses with independent manufacturers around the globe. </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <p className="text-slate-400">Email: support@garmentsolutions.com</p>
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
          © {new Date().getFullYear()} Garment Solutions Inc. All rights reserved.
        </div>
      </footer>
    </>
    );
};

export default Footer;