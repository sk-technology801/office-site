import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="text-white bg-black min-h-screen">
   <section
  className="relative min-h-[90vh] flex items-center justify-center text-center px-4"
  style={{
    backgroundImage: "url('https://images.pexels.com/photos/28460120/pexels-photo-28460120.jpeg?_gl=1*17654mf*_ga*NzkyMzc1MjE0LjE3NDk5MjY2OTQ.*_ga_8JE65Q40S6*czE3NTExMzU3MTYkbzMkZzEkdDE3NTExMzU3NzAkajYkbDAkaDA.')", // ← your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>

  {/* Content */}
  <div className="relative z-10 max-w-3xl mx-auto text-white">
    <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-4">
      We Build <span className="text-gray-300">Next-Gen</span> Software
    </h1>
    <p className="text-gray-400 text-lg md:text-xl mb-8">
      Custom software solutions that power businesses and inspire innovation.
    </p>
    <Link
      href="/contact"
      className="bg-white text-black px-6 py-3 rounded-full font-semibold uppercase hover:bg-transparent hover:text-white hover:border hover:border-white transition"
    >
      Let’s Talk
    </Link>
  </div>
</section>


      {/* Services */}
      <section className="py-20 px-6 bg-white text-black">
        <h2 className="text-3xl font-bold text-center mb-12 uppercase tracking-widest">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { title: 'Web Development', desc: 'Fast, responsive, scalable web apps.' },
            { title: 'Mobile Apps', desc: 'iOS/Android apps with great UX.' },
            { title: 'UI/UX Design', desc: 'Designs that convert and engage.' },
            { title: 'Cloud Solutions', desc: 'Deploy, scale, and monitor apps.' },
          ].map((service, i) => (
            <div
              key={i}
              className="border border-black p-6 rounded-xl hover:bg-black hover:text-white transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-700 group-hover:text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <p className="text-gray-400 mb-10 text-lg">
          We're not just developers — we're your product partners. From ideation to deployment,
          we care about quality, speed, and long-term success.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-8 text-left">
          <div>
            <h3 className="font-bold text-lg mb-2">🚀 Fast Execution</h3>
            <p className="text-gray-400">We deliver on-time without cutting corners.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">🎨 Clean UI</h3>
            <p className="text-gray-400">User experience is at the center of everything we build.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">🛠 Full Stack Team</h3>
            <p className="text-gray-400">From frontend to backend, we've got it covered.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white text-black py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to build something great?</h2>
        <Link
          href="/contact"
          className="inline-block mt-4 bg-black text-white px-6 py-3 rounded-full font-medium uppercase hover:bg-white hover:text-black hover:border hover:border-black transition"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
