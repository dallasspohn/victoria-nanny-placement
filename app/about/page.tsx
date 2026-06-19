export const metadata = {
  title: 'About Us | British Nanny Co.',
  description: 'Learn about our mission to bring British excellence in childcare to Highland Park families through thoroughly vetted, professionally trained nannies.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-navy to-charcoal px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            About British Nanny Co.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Bringing traditional British excellence in childcare to Highland Park families
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl mb-8">
            Our Story
          </h2>
          <div className="space-y-6 text-lg leading-8 text-gray-600">
            <p>
              British Nanny Co. was founded on a simple observation: when people in Highland Park saw our British founder,
              they assumed she was a nanny for a wealthy family. Rather than correct the assumption, she recognized an opportunity
              to bring authentic British childcare excellence to Dallas.
            </p>
            <p>
              Having experienced firsthand the traditional British approach to childcare—with its emphasis on structure,
              education, and nurturing development—our founder saw a gap in the American market. Many families desired this
              level of professional care but didn't know where to find genuinely trained British nannies.
            </p>
            <p>
              Today, we connect discerning Highland Park families with thoroughly vetted British nannies who bring not just
              professional training, but a cultural tradition of excellence in childcare that spans generations.
            </p>
          </div>
        </div>
      </div>

      {/* Vetting Process Section */}
      <div className="bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl mb-12">
              Our Vetting Process
            </h2>
            <div className="space-y-10">
              <div className="relative pl-9">
                <dt className="inline font-semibold text-charcoal">
                  <span className="absolute left-0 top-1 h-6 w-6 rounded-full bg-gold text-navy flex items-center justify-center text-sm font-bold">1</span>
                  Professional Credentials
                </dt>
                <dd className="inline text-gray-600 ml-2">
                  We verify all professional childcare certifications, including Norland College diplomas, CACHE qualifications, and specialized training credentials.
                </dd>
              </div>

              <div className="relative pl-9">
                <dt className="inline font-semibold text-charcoal">
                  <span className="absolute left-0 top-1 h-6 w-6 rounded-full bg-gold text-navy flex items-center justify-center text-sm font-bold">2</span>
                  Comprehensive Background Checks
                </dt>
                <dd className="inline text-gray-600 ml-2">
                  Every nanny undergoes thorough background screening, including Enhanced DBS checks (the British equivalent of FBI background checks) and international criminal record verification.
                </dd>
              </div>

              <div className="relative pl-9">
                <dt className="inline font-semibold text-charcoal">
                  <span className="absolute left-0 top-1 h-6 w-6 rounded-full bg-gold text-navy flex items-center justify-center text-sm font-bold">3</span>
                  Reference Verification
                </dt>
                <dd className="inline text-gray-600 ml-2">
                  We personally contact previous employers and verify employment history, conducting in-depth conversations about work ethic, reliability, and childcare approach.
                </dd>
              </div>

              <div className="relative pl-9">
                <dt className="inline font-semibold text-charcoal">
                  <span className="absolute left-0 top-1 h-6 w-6 rounded-full bg-gold text-navy flex items-center justify-center text-sm font-bold">4</span>
                  In-Person Assessment
                </dt>
                <dd className="inline text-gray-600 ml-2">
                  Each nanny meets with us personally for extensive interviews, practical assessments, and discussions of childcare philosophy to ensure alignment with our standards.
                </dd>
              </div>

              <div className="relative pl-9">
                <dt className="inline font-semibold text-charcoal">
                  <span className="absolute left-0 top-1 h-6 w-6 rounded-full bg-gold text-navy flex items-center justify-center text-sm font-bold">5</span>
                  Family Matching
                </dt>
                <dd className="inline text-gray-600 ml-2">
                  We take time to understand both family needs and nanny preferences, ensuring personality fit, compatible values, and shared expectations for the best long-term relationships.
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl mb-12">
            Our Values
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in everything we do, from nanny selection to family service.
                Excellence isn't just a goal—it's our baseline.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Trust</h3>
              <p className="text-gray-600">
                Families trust us with their most precious responsibility: their children. We honor that trust through
                thorough vetting, ongoing support, and unwavering commitment to safety.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Tradition</h3>
              <p className="text-gray-600">
                British childcare tradition emphasizes structure, education, and nurturing development. We preserve
                these time-tested approaches while adapting to modern family needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Personal Service</h3>
              <p className="text-gray-600">
                Every family is unique. We provide personalized attention, taking time to understand your specific
                needs and ensuring the perfect nanny match for your household.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
