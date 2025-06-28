// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8 text-sm">
        {/* About */}
        <div>
          <h4 className="font-bold text-lg mb-3">About Us</h4>
          <p className="text-gray-400">
            We are a modern software house building solutions that are fast, scalable, and future-proof.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold text-lg mb-3">Services</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/services/web-development" className="hover:text-white">Web Development</a></li>
            <li><a href="/services/ui-ux" className="hover:text-white">UI/UX Design</a></li>
            <li><a href="/services/branding" className="hover:text-white">Branding</a></li>
            <li><a href="/services/seo" className="hover:text-white">SEO</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/projects" className="hover:text-white">Projects</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-lg mb-3">Contact</h4>
          <p className="text-gray-400 mb-2">Email: contact@yourcompany.com</p>
          <p className="text-gray-400 mb-2">Phone: +92 300 1234567</p>
          <p className="text-gray-400">Lahore, Pakistan</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Your Software House. All rights reserved.
      </div>
    </footer>
  );
}
