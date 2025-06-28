import projects from '@/data/projects';
import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Intro */}
      <section className="pt-[80px] pb-20 px-4 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold uppercase mb-4">Our Work</h1>
        <p className="text-gray-600 text-lg">
          We design and build digital products for startups, businesses, and enterprises. Here’s a selection of our recent work.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-black rounded-xl p-6 group hover:bg-black hover:text-white transition-all"
            >
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-sm text-gray-700 group-hover:text-gray-200 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 border border-gray-400 rounded-full group-hover:border-white group-hover:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={project.link}
                target="_blank"
                className="text-sm font-medium underline hover:text-gray-300"
              >
                View Project →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process */}
      <section className="bg-black text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold uppercase mb-4">How We Build</h2>
          <p className="text-gray-400 text-lg">
            We follow a modern agile workflow that delivers high-quality code with fast iterations and constant feedback.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
          {[
            { step: '01', title: 'Research & Strategy', desc: 'Understand goals, users, and scope' },
            { step: '02', title: 'Design & Prototype', desc: 'Craft elegant interfaces & UX flows' },
            { step: '03', title: 'Develop & Launch', desc: 'Write code, deploy fast, iterate often' },
          ].map(({ step, title, desc }, i) => (
            <div key={i} className="border border-white/10 p-6 rounded-xl hover:bg-white hover:text-black transition">
              <h3 className="text-4xl font-bold mb-2 text-white/20">{step}</h3>
              <h4 className="text-lg font-semibold mb-1">{title}</h4>
              <p className="text-sm text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-24 px-4 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold uppercase mb-6">Industries We Serve</h2>
        <p className="text-gray-600 text-lg mb-10">
          Our projects span across various domains — we bring deep knowledge to every challenge.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
          {[
            'E-commerce',
            'Healthcare',
            'EdTech',
            'Finance',
            'SaaS Platforms',
            'Real Estate',
            'Travel',
            'Retail',
          ].map((industry, idx) => (
            <span
              key={idx}
              className="px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
            >
              {industry}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to build your next big idea?</h2>
        <p className="text-gray-400 mb-8">Let’s turn your vision into reality.</p>
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
