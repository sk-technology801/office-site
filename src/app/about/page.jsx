import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Intro */}
      <section className="pt-[80px] pb-20 px-4 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold uppercase mb-4">About Us</h1>
        <p className="text-gray-600 text-lg">
          We are a passionate team of developers, designers, and strategists who craft exceptional digital products for the modern world.
        </p>
      </section>

      {/* What We Do */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold uppercase mb-10 text-center">What We Do</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          {[
            { title: 'Web Development', desc: 'Fast, scalable websites & apps.' },
            { title: 'UI/UX Design', desc: 'User-focused product design.' },
            { title: 'Mobile Apps', desc: 'Cross-platform mobile apps.' },
            { title: 'Custom Software', desc: 'Tailored software solutions.' },
            { title: 'Cloud Integration', desc: 'Modern, scalable infrastructure.' },
            { title: 'Tech Consulting', desc: 'Guiding tech transformations.' },
          ].map((item, idx) => (
            <div key={idx} className="border border-black p-6 rounded-xl hover:bg-black hover:text-white transition-all">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700 group-hover:text-gray-200">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-black text-white py-24 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold uppercase mb-6">What Makes Us Stand Out</h2>
          <p className="text-gray-400 text-lg mb-12">
            We don’t just build products. We build partnerships based on trust, innovation, and success.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Speed & Agility', 'Secure Development', 'Scalable Architecture', 'Modern UI/UX'].map((feature, idx) => (
              <div key={idx} className="border border-white/10 p-6 rounded-xl hover:bg-white hover:text-black transition">
                <p className="font-semibold">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold uppercase mb-4">Meet Our Team</h2>
          <p className="text-gray-700 mb-4">
            Behind every great product is a passionate team. We are developers, designers, and engineers who love what we do and are always pushing the limits of innovation.
          </p>
          <p className="text-gray-700">
            With expertise across industries and a culture of learning, our team delivers solutions that are smart, scalable, and user-focused.
          </p>
        </div>

        {/* Team Image */}
        <div className="md:w-1/2">
          <Image
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?_gl=1*ozolgs*_ga*NzkyMzc1MjE0LjE3NDk5MjY2OTQ.*_ga_8JE65Q40S6*czE3NTExMzk4ODAkbzQkZzEkdDE3NTExMzk5MjQkajE2JGwwJGgw" // ← Add your actual image in `public/team.jpg`
            alt="Our Team"
            width={600}
            height={400}
            className="rounded-xl shadow-lg object-cover w-full h-auto"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Build Something Great Together</h2>
        <p className="text-gray-400 mb-8">Tell us about your project idea — we’ll make it real.</p>
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
