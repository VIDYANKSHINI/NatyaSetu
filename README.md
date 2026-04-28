# NatyaSetu - Theatre Discovery Platform

**NatyaSetu** (meaning "Bridge to Drama" in Sanskrit) is a modern web platform designed to connect audiences with local theatre performances, talented artists, and live events across India. From Marathi plays to street theatre, discover the magic of Indian performing arts.

---

## Features

### For Audiences
- **Event Discovery** - Browse upcoming theatre performances with detailed information including venue, timing, language, and genre
- **Artist Profiles** - Explore profiles of talented theatre artists, their portfolios, and upcoming performances
- **Smart Search** - Filter events and artists by city, language, genre, and keywords
- **Responsive Design** - Seamless experience across desktop, tablet, and mobile devices

### Platform Highlights
- **Cinematic Hero Section** - Immersive video background featuring theatre curtains opening
- **Featured Events** - Curated selection of must-see performances
- **Testimonials** - Reviews from theatre enthusiasts and patrons
- **Authentication System** - User login and signup functionality

---

## Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 |
| **UI Components** | shadcn/ui + Radix UI |
| **Icons** | Lucide React |
| **Forms** | React Hook Form + Zod |
| **Animations** | tw-animate-css |
| **Charts** | Recharts |
| **Package Manager** | pnpm |

---

## Project Structure

```
natyasetu/
├── app/
│   ├── globals.css          # Global styles and Tailwind configuration
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main landing page
├── components/
│   ├── natyasetu/           # Feature-specific components
│   │   ├── header.tsx       # Navigation header
│   │   ├── hero-section.tsx # Hero with video background
│   │   ├── search-section.tsx
│   │   ├── search-results.tsx
│   │   ├── featured-events.tsx
│   │   ├── artists-section.tsx
│   │   ├── why-section.tsx
│   │   ├── how-it-works.tsx
│   │   ├── testimonials.tsx
│   │   ├── cta-section.tsx
│   │   ├── footer.tsx
│   │   ├── auth-modal.tsx
│   │   ├── artist-profile-modal.tsx
│   │   └── event-detail-modal.tsx
│   ├── ui/                  # Reusable UI components (shadcn/ui)
│   └── theme-provider.tsx   # Theme context provider
├── lib/
│   ├── auth-context.tsx     # Authentication context
│   ├── search-data.ts       # Mock data and search logic
│   └── utils.ts             # Utility functions
├── hooks/
│   ├── use-mobile.ts        # Mobile detection hook
│   └── use-toast.ts         # Toast notification hook
├── public/
│   ├── hero-theatre-bg.mp4  # Hero background video
│   └── images/              # Static images
└── styles/
    └── globals.css          # Additional global styles
```

---


