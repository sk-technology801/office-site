import services from '@/data/services';
import { notFound } from 'next/navigation';

export default function ServiceDetail({ params }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) return notFound();

  return (
    <div className="min-h-screen bg-black text-white px-4 py-12 flex items-center justify-center">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl font-bold mb-6 text-center">{service.title}</h1>
        <p className="text-gray-400 mb-10 text-center">{service.description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-center border-t border-white/10 pt-8">
          <div>
            <h3 className="font-semibold text-white mb-1">Duration</h3>
            <p>{service.duration}</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-1">Price</h3>
            <p>{service.price}</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-1">Level</h3>
            <p>{service.level}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
