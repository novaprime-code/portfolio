// src/app/config/projects.ts - Jay Shyam Patel (Nova)'s Projects
import { Project } from '../types/types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Enterprise HRIS System',
    description:
      'Comprehensive Human Resource Information System built from scratch serving multiple organizations. Features employee management, payroll processing, multi-country compliance, and API integrations. Currently in production use.',
    tags: ['Laravel', 'Vue.js', 'MySQL', 'AWS', 'Multi-tenancy', 'API Integration'],
    githubLink: 'https://github.com/novaprime-code', // Company project
    type: 'Enterprise SaaS',
    thumbnail: '/projects/hris-thumbnail.png',
    carouselImages: [
      '/projects/hris-dashboard.png',
      '/projects/hris-employee.png',
      '/projects/hris-payroll.png',
      '/projects/hris-reports.png',
    ],
    carouselConfig: {
      interval: 3500,
      infinite: true,
    },
  },
  {
    id: 2,
    title: "Handyman's Hub Marketplace",
    description:
      'Full-featured multivendor marketplace connecting customers with verified service providers. Includes secure authentication, geolocation-based matching using Haversine algorithm, OTP verification, and comprehensive admin dashboard.',
    tags: ['Laravel', 'React', 'Inertia.js', 'MySQL', 'TypeScript', 'Sanctum', 'Geolocation'],
    githubLink: 'https://github.com/novaprime-code/handymans-hub',
    liveLink: '', // Add if deployed
    type: 'Marketplace Platform',
    thumbnail: '/projects/handymans-hub-thumbnail.png',
    carouselImages: [
      '/projects/handymans-hub-home.png',
      '/projects/handymans-hub-services.png',
      '/projects/handymans-hub-admin.png',
      '/projects/handymans-hub-mobile.png',
    ],
    carouselConfig: {
      interval: 3000,
      infinite: true,
    },
  },
  {
    id: 3,
    title: 'Multi-Country HRM System',
    description:
      'Licensed-based Human Resource Management system for international clients with branches in India, Bangladesh, and UK. Custom solutions accommodating diverse legal and regulatory requirements across different regions.',
    tags: ['Laravel', 'Multi-tenancy', 'Compliance', 'API Integration', 'International'],
    githubLink: 'https://github.com/novaprime-code',
    type: 'International HRM',
    thumbnail: '/projects/international-hrm-thumbnail.png',
    carouselImages: [
      '/projects/hrm-dashboard.png',
      '/projects/hrm-compliance.png',
      '/projects/hrm-reports.png',
    ],
    carouselConfig: {
      interval: 3500,
      infinite: true,
    },
  },
  {
    id: 4,
    title: 'AI Parking Detection System',
    description:
      'Smart parking solution using OpenCV and machine learning to analyze real-time camera feeds and detect available parking slots. Developed to address parking challenges in Kathmandu Valley with web dashboard.',
    tags: ['Python', 'Django', 'OpenCV', 'Machine Learning', 'Computer Vision', 'Real-time'],
    githubLink: 'https://github.com/novaprime-code/parking-detection',
    type: 'AI/ML Application',
    thumbnail: '/projects/parking-detection-thumbnail.png',
    carouselImages: [
      '/projects/parking-detection-demo.png',
      '/projects/parking-dashboard.png',
      '/projects/parking-analytics.png',
    ],
    carouselConfig: {
      interval: 3000,
      infinite: true,
    },
  },
  {
    id: 5,
    title: 'Real-time Communication App',
    description:
      'Feature-rich video calling and messaging application with WebSocket integration for instant messaging, secure authentication, session management, and chat history. Built with modern web technologies.',
    tags: ['Laravel', 'Vue.js', 'WebSockets', 'MySQL', 'WebRTC', 'Real-time'],
    githubLink: 'https://github.com/novaprime-code/video-chat-app',
    type: 'Communication Platform',
    thumbnail: '/projects/video-chat-thumbnail.png',
    carouselImages: [
      '/projects/video-call-interface.png',
      '/projects/chat-interface.png',
      '/projects/video-features.png',
    ],
    carouselConfig: {
      interval: 3000,
      infinite: true,
    },
  },
  {
    id: 6,
    title: 'GitHub Chess Game',
    description:
      "Interactive chess game played through GitHub issues and pull requests. Features automatic board updates, move validation, game state persistence, and community engagement through GitHub's social features.",
    tags: ['Python', 'GitHub API', 'Chess Logic', 'Automation', 'Community'],
    githubLink: 'https://github.com/novaprime-code/github-chess',
    liveLink: 'https://github.com/novaprime-code/github-chess/issues',
    type: 'Open Source Game',
    thumbnail: '/projects/github-chess-thumbnail.png',
    carouselImages: [
      '/projects/chess-board.png',
      '/projects/chess-issues.png',
      '/projects/chess-moves.png',
    ],
    carouselConfig: {
      interval: 3500,
      infinite: true,
    },
  },
  {
    id: 7,
    title: 'Connect4 Game Engine',
    description:
      'Classic Connect4 game implementation with save/load functionality, game state management, winner detection algorithm, and multiplayer support. Features persistent game storage and turn-based gameplay.',
    tags: ['Python', 'Game Logic', 'Pickle', 'Algorithm', 'Multiplayer'],
    githubLink: 'https://github.com/novaprime-code/connect4',
    type: 'Game Development',
    thumbnail: '/projects/connect4-thumbnail.png',
    carouselImages: ['/projects/connect4-game.png', '/projects/connect4-logic.png'],
    carouselConfig: {
      interval: 3000,
      infinite: true,
    },
  },
  {
    id: 8,
    title: 'MahaNagar Home Services',
    description:
      'Comprehensive web portal for home maintenance and repair services including painting, pest control, cleaning, plumbing, and electrical work. Features standardized pricing and professional booking system.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'jQuery', 'Service Platform'],
    githubLink: 'https://github.com/novaprime-code/mahanagar-services',
    type: 'Service Marketplace',
    thumbnail: '/projects/mahanagar-thumbnail.png',
    carouselImages: [
      '/projects/mahanagar-home.png',
      '/projects/mahanagar-services.png',
      '/projects/mahanagar-booking.png',
    ],
    carouselConfig: {
      interval: 3000,
      infinite: true,
    },
  },
];
