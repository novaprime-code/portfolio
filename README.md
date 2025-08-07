# Portfolio ✨

<div align="center">

[![Deployment](https://img.shields.io/github/deployments/novaprime-code/portfolio/github-pages?style=flat-square&label=GitHub%20Pages)](https://github.com/novaprime-code/portfolio/deployments)
[![Next.js](https://img.shields.io/badge/Next.js-15.1.7-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-Apache%202.0-green?style=flat-square)](LICENSE)

  <div>
    <p></p>
    <p style="margin: 0; font-size: 16px; color: #eaeaea;">🚀 🚀 Full-stack developer passionate about creating innovative web solutions 🌟</p>   <p></p>
    <img src="https://raw.githubusercontent.com/novaprime-code/portfolio/refs/heads/main/docs/images/home.png" alt="Portfolio Home" width="90%" style="border-radius: 12px; margin-bottom: 20px; box-shadow: 0 8px 16px rgba(0,0,0,0.2);" />
  </div>
</div>

## 📸 Screenshots

<div align="center">
  <div style="display: flex; justify-content: space-between; gap: 20px; margin-top: 20px;">
    <div style="flex: 1;">
      <img src="https://raw.githubusercontent.com/novaprime-code/portfolio/refs/heads/main/docs/images/about.png" alt="About Section" width="100%" style="border-radius: 12px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
      <p><em>About section with personal journey and qualities</em></p>
    </div>
    <div style="flex: 1;">
      <img src="https://raw.githubusercontent.com/novaprime-code/portfolio/refs/heads/main/docs/images/projects.png" alt="Projects Section" width="100%" style="border-radius: 12px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
      <p><em>Projects showcase with carousel</em></p>
    </div>
  </div>
  
  <div style="display: flex; justify-content: space-between; gap: 20px; margin-top: 10px;">
    <div style="flex: 1;">
      <img src="https://raw.githubusercontent.com/novaprime-code/portfolio/refs/heads/main/docs/images/skills.png" alt="Skills Section" width="100%" style="border-radius: 12px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
      <p><em>Skills visualization with interactive elements</em></p>
    </div>
    <div style="flex: 1;">
      <img src="https://raw.githubusercontent.com/novaprime-code/portfolio/refs/heads/main/docs/images/connect.png" alt="Connect Section" width="100%" style="border-radius: 12px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
      <p><em>Connect section with animated social links</em></p>
    </div>
  </div>
</div>

## 🌈 Feature Highlights

### 🧠 About Me Section

- Professional journey highlights with responsive layout
- Core competencies with visual gradient indicators
- Personal qualities and areas of expertise

### 💻 Project Showcase

- Detailed project cards with:
  - Technology stack tags with custom styling
  - Live demo and GitHub links
  - Interactive carousels with hover effects
  - Animated project transitions

### 🛠️ Skills Visualization

- Interactive 3D technology sphere
- Categorized skill display with custom icons
- Visual representation of expertise areas

### 📞 Connect Section

- Social media integration with branded colors
- Animated interaction effects
- Professional contact information

## ✨ Key Design Principles

### Minimalist Elegance

- **UI/UX Approach**: Clean, purposeful design that prioritizes content and user experience
- **Color Palette**: Sophisticated emerald and dark mode color scheme with subtle gradient transitions
- **Typography**: Precision-crafted using Geist Font for maximum readability and modern aesthetics

### Interactive Storytelling

- Dynamic section transitions that guide users through my professional landscape
- Micro-interactions and hover effects that provide delightful user engagement
- Seamless navigation that feels more like a journey than a website

## 🚀 Technical Architecture

### Design Approach

- **Component-Driven Structure**: Modular, reusable components that maintain consistency throughout the site
- **Config-First Customization**: Core portfolio content and styling controlled through configuration files
- **Progressive Enhancement**: Core functionality works without JavaScript, enhanced with animations when available

### Performance Optimizations

- Optimized asset loading with automatic image optimization
- Efficient rendering with component memoization
- Smooth animations with hardware acceleration

### Accessibility & Responsiveness

- Semantic HTML structure with proper ARIA attributes
- Responsive design adapts to all device sizes
- Keyboard navigation support throughout the interface
- Color contrast ratios meeting WCAG guidelines

## 🔧 Getting Started

### Prerequisites

- Node.js 20+
- yarn

### Installation Steps

```bash
# Clone repository
git clone https://github.com/novaprime-code/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
yarn install

# Run development server
yarn dev
```

## 🛠️ Creating Your Own Portfolio

This portfolio template is designed to be easily customizable. Follow these steps to personalize it for your own use:

### Configuration Overview

The entire portfolio is driven by configuration files located in the `app/config` directory:

- `index.ts`: Main portfolio configuration
- `projects.ts`: Your project showcase
- `skills.ts`: Your technical skills
- `socials.tsx`: Your social media profiles

### Step 1: Update Main Configuration

Edit `app/config/index.ts` to customize:

```typescript
// Personal information
siteMetadata: {
  title: "Your Name",
  description: "Your portfolio description",
  author: "Your Name",
},

// Navigation
navigation: {
  logo: {
    text: "YN", // Your initials (should match what you put in logo.tsx)
  },
  // Navigation links (no need to change unless adding new sections)
},

// Home section (landing page)
sections: {
  home: {
    greeting: "Hi, I'm",
    name: "Your Name",
    typingTexts: [
      "Your custom typing text",
      "Add multiple lines",
      "They will rotate automatically",
    ],
    description: "Write a short engaging bio here...",
    // Update button links as needed
  },

  // Continue customizing other sections...
}
```

### Step 2: Add Your Projects

Edit `app/config/projects.ts` to showcase your own work:

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Describe what your project does and its key features',
    tags: ['React', 'TypeScript', 'Your Technologies'],
    githubLink: 'https://github.com/yourusername/your-repo',
    type: 'Web App', // Project type (Web, Mobile, Plugin, etc.)
    liveLink: 'https://your-project-url.com', // Optional
    thumbnail: 'https://your-image-url.com/image.jpg', // Main project thumbnail

    // Optional: GIF to display when hovering over the project
    gifUrl: 'https://your-project-animation.gif',

    // Optional: Multiple images for carousel display
    carouselImages: [
      'https://your-image-url.com/slide1.jpg',
      'https://your-image-url.com/slide2.jpg',
      'https://your-image-url.com/slide3.jpg',
    ],

    // Optional: Carousel configuration
    carouselConfig: {
      interval: 3000, // Time between slides in milliseconds
      infinite: true, // Whether to loop the carousel
    },
  },
  // Add more projects...
];
```

### Step 3: Update Your Skills

Edit `app/config/skills.ts` to reflect your technical expertise:

```typescript
export const skills: Skill[] = [
  {
    category: 'Your Category', // e.g., Frontend, Backend, Mobile
    technologies: [
      {
        name: 'Technology Name',
        color: '#HexColorCode', // Brand color of the technology
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/technology/technology-original.svg',
      },
      // Add more technologies...
    ],
  },
  // Add more skill categories...
];
```

### Step 4: Connect Your Social Media

Edit `app/config/socials.tsx` to link your social profiles:

```typescript
export const socials: Social[] = [
  {
    name: "GitHub",
    icon: <Github size={20} />, // Using Lucide React icons
    url: "https://github.com/novaprime-code",
    color: "#333333",
  },
  // Add more social profiles...
];
```

### Step 5: Update Favicon

- Replace the `app/icon.svg` file with your own favicon containing your initials (the code brackets are a signature part of the design)

### Step 6: Customize Styling (Optional)

For deeper customization:

- Edit `app/globals.css` to adjust the color scheme
- Modify component files in the `app/sections` directory for structural changes
- Update `app/components` for UI element customization

### Step 7: Replace Assets

- Replace `/public/resume.pdf` with your own resume
- Add your custom images to the `/public` directory

## 🏗️ Project Structure

```
portfolio/
├── app/                 # Next.js app directory
│   ├── config/          # Configuration files
│   │   ├── index.ts     # Main portfolio config
│   │   ├── projects.ts  # Projects data
│   │   ├── skills.ts    # Skills data
│   │   └── socials.tsx  # Social links
│   ├── components/      # Reusable UI components
│   │   ├── button.tsx   # Custom button component
│   │   ├── logo.tsx     # Portfolio logo
│   │   └── tech-sphere.tsx # 3D tech visualization
│   ├── sections/        # Main page sections
│   │   ├── about.tsx    # About me section
│   │   ├── connect.tsx  # Connect with me section
│   │   ├── home.tsx     # Home section (hero)
│   │   ├── projects.tsx # Projects showcase
│   │   └── skills.tsx   # Skills display
│   ├── types/           # TypeScript type definitions
|   |-- utils/           # Utility functions
│   ├── globals.css      # Global styles
│   └── layout.tsx       # Root layout
└── public/              # Static assets
```

## 🙏 Acknowledgements

This portfolio project wouldn't be possible without these amazing technologies and libraries:

- [Next.js](https://nextjs.org/) - The React framework for production
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript for better code quality
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library for React
- [Lucide React](https://lucide.dev/) - Beautiful & consistent icon toolkit
- [React Icon Cloud](https://icon-cloud.netlify.app/) - Interactive 3D icon rendering
- [Geist Font](https://vercel.com/font) - Beautiful, modern typeface by Vercel

## 📄 License & Attribution

This project is based on the [Portfolio Template](https://github.com/PraveenGongada/portfolio) by PraveenGongada, licensed under the Apache License 2.0.

Licensed under the Apache License, Version 2.0. See [LICENSE](LICENSE) for details.
