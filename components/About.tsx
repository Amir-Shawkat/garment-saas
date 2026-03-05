const About = () => {
  return (
    <>
        <section id="about" className="py-24 px-6 container mx-auto">
        <h2 className="text-3xl font-bold mb-8">About Garment Solutions</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-slate-200 aspect-video rounded-xl" /> 
          {/* Placeholder for image */}
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              The Design-to-Production Workflow Platform fills the gap between design creation and
              factory execution with an integrated, user-friendly solution tailored specifically for the
              garment industry. Our platform empowers designers and manufacturers to collaborate seamlessly,
              ensuring that creative visions are brought to life efficiently and with the highest quality standards.
                          </p>
            <ul className="space-y-2 font-medium">
              <li>✅ Streamlining Communication</li>
              <li>✅ Real-time Updates</li>
              <li>✅ Robust Project Management Tools</li>
            </ul>
          </div>
        </div>
      </section>
    </>

    );
};

export default About;