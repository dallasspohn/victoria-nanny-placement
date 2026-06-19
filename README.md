# British Nanny Co.

Highland Park's premier British nanny placement service. Connecting discerning families with thoroughly vetted, British-trained nannies.

## Features

- ✅ Professional landing page with British-themed design
- ✅ Nanny showcase with 6 profiles
- ✅ About page with company story and vetting process
- ✅ Contact form with validation
- ✅ Fully responsive design
- ✅ SEO-optimized
- ✅ Production-ready

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Icons:** Heroicons
- **Forms:** react-hook-form
- **Deployment:** Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/dallasspohn/victoria-nanny-placement.git
cd victoria-nanny-placement

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub (already done)
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select this repository
5. Click "Deploy"

Vercel will auto-detect Next.js and deploy with zero configuration.

### Alternative: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## Configuration

### Contact Form

The contact form uses Formspree for submissions. To activate:

1. Sign up at [formspree.io](https://formspree.io) (free tier: 50 submissions/month)
2. Create a new form
3. Get your form endpoint
4. Update `app/components/ContactForm.tsx` line 25:
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```

### Color Palette

British-themed colors defined in `app/globals.css`:

- **Navy:** `#1e3a5f` - Header, footer, hero backgrounds
- **Gold:** `#d4af37` - Accents, buttons, highlights
- **Cream:** `#f5f5dc` - Background
- **Charcoal:** `#36454f` - Text

## Project Structure

```
victoria-nanny-site/
├── app/
│   ├── components/       # Reusable React components
│   ├── about/           # About page
│   ├── contact/         # Contact page
│   ├── nannies/         # Nannies showcase page
│   ├── globals.css      # Global styles + Tailwind
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── lib/
│   └── nannies.ts       # Nanny data
├── public/
│   └── nannies/         # Nanny profile photos (AI-generated)
└── README.md
```

## Future Enhancements (Ecommerce Phase)

When ready to add payment processing and booking:

- [ ] Stripe integration for placement fees
- [ ] User authentication (Next-Auth.js)
- [ ] Database for bookings (Prisma + PostgreSQL)
- [ ] Booking calendar system
- [ ] Admin dashboard for nanny management
- [ ] Client account portal

The Next.js foundation is already ecommerce-ready - no rebuild needed.

## Customization

### Update Company Name

The placeholder "British Nanny Co." can be globally replaced:

```bash
# Find and replace all instances
grep -rl "British Nanny Co." app/ lib/ | xargs sed -i 's/British Nanny Co./Your New Name/g'
```

### Update Nanny Profiles

Edit `lib/nannies.ts` to add/modify nanny profiles and photos in `public/nannies/`.

### Change Color Scheme

Modify CSS variables in `app/globals.css` under `:root`.

## License

Private - All rights reserved

## Contact

For questions about this website, contact Dallas Spohn.
