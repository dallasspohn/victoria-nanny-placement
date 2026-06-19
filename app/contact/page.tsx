import ContactForm from '../components/ContactForm';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Contact Us | British Nanny Co.',
  description: 'Get in touch with British Nanny Co. to discuss your family\'s childcare needs. We\'re here to help you find the perfect British nanny.',
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-navy to-charcoal px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Get In Touch
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We'd love to learn about your family and help you find the perfect nanny
          </p>
        </div>
      </div>

      {/* Contact Form and Info */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl mb-8">
              Contact Information
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to find your family's perfect nanny? Fill out the form and we'll be in touch within 24 hours to schedule a consultation.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <MapPinIcon className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Location</h3>
                  <p className="text-gray-600">Highland Park, Dallas, TX</p>
                  <p className="text-sm text-gray-500">Serving Highland Park and surrounding areas</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <EnvelopeIcon className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Email</h3>
                  <a href="mailto:info@britishnanny.co" className="text-gold hover:underline">
                    info@britishnanny.co
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <PhoneIcon className="h-6 w-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-charcoal mb-1">Phone</h3>
                  <a href="tel:+12145556266" className="text-gold hover:underline">
                    (214) 555-NANNY
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Monday-Friday, 9am-6pm CST</p>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-cream p-6 rounded-lg">
              <h3 className="font-semibold text-charcoal mb-4">What to Expect</h3>
              <ol className="space-y-3 text-sm text-gray-600">
                <li className="flex gap-3">
                  <span className="font-bold text-gold">1.</span>
                  <span>We'll contact you within 24 hours to schedule an initial consultation</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-gold">2.</span>
                  <span>During our consultation, we'll discuss your family's needs, schedule, and preferences</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-gold">3.</span>
                  <span>We'll present 2-3 carefully matched nanny profiles for your consideration</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-gold">4.</span>
                  <span>Arrange interviews with your top choices and provide guidance throughout the process</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-gold">5.</span>
                  <span>Ongoing support to ensure a successful long-term placement</span>
                </li>
              </ol>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl mb-8">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
