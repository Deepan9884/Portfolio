# Deepan D Portfolio - React Implementation

This is a pixel-perfect React implementation of the ALEXIS portfolio design featuring a "Liquid Glass" aesthetic with glassmorphism effects.

## Features

- ✨ Glassmorphic UI with deep background blurs
- 🎨 Vibrant gradient accents (Red to Violet to Blue)
- 📱 Fully responsive design (Desktop & Mobile)
- ⚡ Built with React + Vite
- 🎯 Tailwind CSS for styling
- 🔤 Montserrat & Inter fonts
- 💫 Smooth animations and transitions
- 🌊 Animated timeline with flowing wave SVG

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Google Fonts** - Montserrat & Inter typography
- **Material Symbols** - Icon system

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
.
├── src/
│   ├── components/
│   │   ├── Navigation.jsx         # Desktop sidebar navigation
│   │   ├── MobileHeader.jsx       # Mobile top header
│   │   ├── HeroSection.jsx        # Hero section with portrait
│   │   ├── ExperienceSection.jsx  # Experience cards
│   │   └── TimelineSection.jsx    # Timeline with wave animation
│   ├── App.jsx                    # Main app component
│   ├── main.jsx                   # React entry point
│   └── index.css                  # Global styles & animations
├── index.html                     # HTML template
├── tailwind.config.js             # Tailwind configuration
├── vite.config.js                 # Vite configuration
└── package.json                   # Dependencies

```

## Design System

### Colors

The design uses a high-contrast dark palette with vibrant accents:

- **Background**: `#050505` (Deep black)
- **Primary**: `#ffb4aa` (Soft red)
- **Secondary**: `#ecb2ff` (Electric violet)
- **Accent**: `#f4ff00` (Vibrant yellow)
- **Glass surfaces**: Semi-transparent whites with blur

### Typography

- **Display**: Montserrat (Bold, 64px desktop / 40px mobile)
- **Headings**: Montserrat (Semi-bold, 32px)
- **Body**: Inter (Regular, 16-18px)
- **Labels**: Inter (Semi-bold, 12px, uppercase)

### Glassmorphism Effects

The glass panels feature:
- 80px backdrop blur with 180% saturation
- Layered inset shadows for depth
- Specular highlights on edges
- Hover animations with increased blur and lift effect
- Sweeping light reflection on hover

## Key Components

### Navigation
- Fixed left sidebar on desktop (280px width)
- Collapsible mobile header
- Smooth scroll navigation
- Stats display (80+ projects, 7+ years)

### Hero Section
- Massive background text ("ALEXIS")
- Central portrait with gradient mask
- Floating glass cards (Projects & Experience)
- Feature badges (Creative, Reliable, etc.)
- Dual CTAs (Book a Call, About Me)

### Timeline Section
- Animated SVG wave path
- Staggered zig-zag card layout
- Pulsing connection nodes
- Year-based milestones
- Glass panel cards with avatars

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

This project is created for portfolio purposes.

## Credits

Design: ALEXIS Portfolio Design System
Implementation: React + Vite + Tailwind CSS
