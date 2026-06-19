import Image from 'next/image';
import { Nanny } from '@/lib/nannies';

interface NannyCardProps {
  nanny: Nanny;
}

export default function NannyCard({ nanny }: NannyCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-2xl">
      <div className="aspect-[3/4] overflow-hidden">
        <Image
          src={nanny.photo}
          alt={`${nanny.name} - British Nanny`}
          width={400}
          height={533}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-charcoal mb-2">{nanny.name}</h3>
        <p className="text-sm text-gold font-semibold mb-3">{nanny.certification}</p>

        <div className="space-y-2 mb-4">
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-charcoal">Experience:</span> {nanny.experience}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-charcoal">Availability:</span> {nanny.availability}
          </p>
        </div>

        <div className="mb-4">
          <p className="text-sm font-semibold text-charcoal mb-2">Specialties:</p>
          <div className="flex flex-wrap gap-2">
            {nanny.specialties.map((specialty) => (
              <span
                key={specialty}
                className="inline-flex items-center rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold ring-1 ring-inset ring-gold/20"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed">{nanny.bio}</p>
      </div>
    </div>
  );
}
