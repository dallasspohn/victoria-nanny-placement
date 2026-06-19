import Hero from './components/Hero';
import Features from './components/Features';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />

      {/* CTA Section */}
      <div className="bg-navy">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Ready to find your perfect nanny?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Browse our carefully selected British nannies or contact us to discuss your family's specific needs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/nannies"
                className="rounded-md bg-gold px-6 py-3 text-sm font-semibold text-navy shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold transition-all"
              >
                View Our Nannies
              </Link>
              <Link href="/contact" className="text-sm font-semibold leading-6 text-white hover:text-gold transition-colors">
                Schedule Consultation <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
