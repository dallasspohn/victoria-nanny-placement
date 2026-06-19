import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-br from-navy via-navy to-charcoal">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <span className="inline-flex items-center space-x-2 rounded-full bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold ring-1 ring-inset ring-gold/20">
              <span>Highland Park's Premier Service</span>
            </span>
          </div>
          <h1 className="mt-10 text-5xl font-bold tracking-tight text-white sm:text-7xl">
            British Excellence in Childcare
          </h1>
          <p className="mt-8 text-lg leading-8 text-gray-300">
            Connecting discerning families with thoroughly vetted, British-trained nannies.
            Traditional standards of care meeting modern family needs in Highland Park and surrounding Dallas areas.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="/nannies"
              className="rounded-md bg-gold px-6 py-3 text-sm font-semibold text-navy shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold transition-all"
            >
              View Our Nannies
            </Link>
            <Link href="/contact" className="text-sm font-semibold leading-6 text-white hover:text-gold transition-colors">
              Contact Us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="w-[76rem] rounded-md bg-white/5 p-2 ring-1 ring-white/10 backdrop-blur">
              <div className="aspect-[3/2] w-full rounded bg-gradient-to-br from-gold/20 to-navy/40 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-3xl font-bold text-gold mb-4">Trusted by Highland Park Families</p>
                  <p className="text-white text-lg">Professional • Vetted • British-Trained</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
