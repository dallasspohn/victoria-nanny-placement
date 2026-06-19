import { nannies } from '@/lib/nannies';
import NannyCard from '../components/NannyCard';

export const metadata = {
  title: 'Our Nannies | British Nanny Co.',
  description: 'Meet our carefully selected British nannies. Each nanny is thoroughly vetted and professionally trained to British childcare standards.',
};

export default function NanniesPage() {
  return (
    <div className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
            Meet Our Nannies
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Each of our nannies has been carefully selected and thoroughly vetted.
            All hold professional British childcare certifications and bring years of experience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {nannies.map((nanny) => (
            <NannyCard key={nanny.id} nanny={nanny} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Don't see the perfect match? Contact us to discuss your specific needs.
          </p>
          <a
            href="/contact"
            className="inline-block rounded-md bg-gold px-6 py-3 text-sm font-semibold text-navy shadow-sm hover:bg-opacity-90 transition-all"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
