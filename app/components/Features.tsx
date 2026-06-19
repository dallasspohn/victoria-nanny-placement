import { CheckCircleIcon, AcademicCapIcon, HeartIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Thoroughly Vetted',
    description: 'Every nanny undergoes comprehensive background checks, reference verification, and in-person interviews. We ensure the highest standards of safety and professionalism.',
    icon: CheckCircleIcon,
  },
  {
    name: 'British-Trained Excellence',
    description: 'Our nannies are trained to Norland College standards and British childcare excellence. Traditional values combined with modern early childhood education methodologies.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Personalized Matching',
    description: 'We take time to understand your family\'s unique needs, values, and preferences to ensure the perfect fit. Your family\'s happiness is our priority.',
    icon: HeartIcon,
  },
];

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-gold">Why Choose Us</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
            The British Standard of Childcare
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We bring traditional British excellence in childcare to Highland Park families,
            ensuring your children receive the finest care from professionally trained nannies.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-charcoal">
                  <feature.icon className="h-8 w-8 flex-none text-gold" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
