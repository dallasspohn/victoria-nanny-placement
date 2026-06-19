export interface Nanny {
  id: number;
  name: string;
  photo: string;
  experience: string;
  specialties: string[];
  bio: string;
  availability: string;
  certification: string;
}

export const nannies: Nanny[] = [
  {
    id: 1,
    name: "Sarah Thompson",
    photo: "/nannies/nanny-1.jpg",
    experience: "8 years",
    specialties: ["Newborns", "Twins", "Sleep Training"],
    bio: "British-trained nanny with Norland College certification. Specialized in newborn care and sleep training methodologies. Previously worked with families in Kensington and Knightsbridge before relocating to Dallas.",
    availability: "Immediate",
    certification: "Norland College Diploma"
  },
  {
    id: 2,
    name: "Emma Richardson",
    photo: "/nannies/nanny-2.jpg",
    experience: "12 years",
    specialties: ["Special Needs", "Montessori", "Multiple Children"],
    bio: "Experienced British nanny with extensive training in special needs care and Montessori education. Passionate about creating structured, nurturing environments that foster independence and growth.",
    availability: "Available July 2026",
    certification: "CACHE Level 3 Diploma, Montessori Certified"
  },
  {
    id: 3,
    name: "Charlotte Davies",
    photo: "/nannies/nanny-3.jpg",
    experience: "6 years",
    specialties: ["Infants", "Early Education", "Bilingual (French)"],
    bio: "Warm and energetic British nanny fluent in French and English. Specializes in infant care and early childhood education with a focus on language development and cultural exposure.",
    availability: "Immediate",
    certification: "NNEB Diploma, First Aid Certified"
  },
  {
    id: 4,
    name: "Victoria Hayes",
    photo: "/nannies/nanny-4.jpg",
    experience: "10 years",
    specialties: ["Toddlers", "Preschool Prep", "Creative Play"],
    bio: "Creative and patient British nanny with a gift for making learning fun. Expert in toddler development and preparing children for preschool success through play-based learning.",
    availability: "Available August 2026",
    certification: "Norland College Diploma, Paediatric First Aid"
  },
  {
    id: 5,
    name: "Sophie Bennett",
    photo: "/nannies/nanny-5.jpg",
    experience: "15 years",
    specialties: ["School Age", "Homework Support", "Activity Planning"],
    bio: "Highly experienced British nanny specializing in school-age children. Excellent at homework support, after-school activities, and creating enriching experiences that complement formal education.",
    availability: "Immediate",
    certification: "CACHE Level 3, Enhanced DBS Check"
  },
  {
    id: 6,
    name: "Isabella Grant",
    photo: "/nannies/nanny-6.jpg",
    experience: "9 years",
    specialties: ["Newborns", "Postpartum Support", "Wellness"],
    bio: "Compassionate British nanny with specialized training in newborn care and postpartum family support. Creates calm, organized environments while supporting new parents through the transition.",
    availability: "Available July 2026",
    certification: "Norland College Diploma, Postpartum Doula Trained"
  }
];
