import Link from 'next/link';
import services from '@/data/services';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-black px-4 py-12">
      {/* Intro */}
 <section className="pt-[80px] mb-16 px-4">
  <div className="max-w-3xl mx-auto text-center">
    <h1 className="text-4xl font-bold uppercase tracking-wide mb-4">Our Services</h1>
    <p className="text-gray-600 text-lg">
      We craft tailored software solutions that align with your business goals. Our approach is collaborative, fast, and quality-focused.
    </p>
  </div>
</section>



      {/* Service Cards */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="border border-black p-6 rounded-xl shadow-md hover:bg-black hover:text-white transition-all"
          >
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-sm text-gray-700 group-hover:text-gray-200">{service.short}</p>
          </Link>
        ))}
      </section>

      {/* Our Process */}
      <section className="bg-black text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 uppercase">How We Work</h2>
          <p className="text-gray-400 text-lg">
            Transparent, collaborative, and agile — we keep you in the loop at every step.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center max-w-6xl mx-auto">
          {[
            { title: 'Discovery', desc: 'Understand your needs, define scope & success' },
            { title: 'Build & Iterate', desc: 'Rapid development with constant feedback' },
            { title: 'Deliver & Support', desc: 'Launch, monitor & scale with confidence' },
          ].map((step, i) => (
            <div key={i} className="border border-white/10 p-6 rounded-xl hover:bg-white hover:text-black transition">
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools/Tech Stack */}
      <section className="py-20 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 uppercase">Tech We Love</h2>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700">
          {['Next.js', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Figma', 'Firebase', 'Express.js'].map((tool, i) => (
            <span
              key={i}
              className="px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-black text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Have a project in mind?</h2>
        <p className="text-gray-400 mb-8">Let’s turn your idea into reality with powerful custom software.</p>
        <Link
          href="/contact"
          className="bg-white text-black px-6 py-3 rounded-full font-medium uppercase hover:bg-transparent hover:text-white hover:border hover:border-white transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
