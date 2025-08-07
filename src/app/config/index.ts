// src/app/config/index.ts - Enhanced for Jay Shyam Patel (Nova)
import { PortfolioConfig } from '@/app/types/config';
import { socials } from '@/app/config/socials';
import { projects } from '@/app/config/projects';
import { skills } from '@/app/config/skills';

export const portfolioConfig: PortfolioConfig = {
  siteMetadata: {
    title: 'Jay Shyam Patel (Nova) - Full Stack Developer',
    description:
      'Passionate full stack developer from Nepal specializing in ATS, HRIS, and enterprise web applications. Also known as Nova in the developer community.',
    author: 'Jay Shyam Patel',
  },
  navigation: {
    logo: {
      text: 'Nova', // Using your developer alias
    },
    links: [
      { href: 'home', label: 'Home' },
      { href: 'about', label: 'About' },
      { href: 'projects', label: 'Projects' },
      { href: 'skills', label: 'Skills' },
      { href: 'connect', label: 'Connect' },
    ],
  },
  sections: {
    home: {
      greeting: "Hi 👋, I'm",
      name: 'Jay Shyam Patel',
      typingTexts: [
        'Building ATS & HRIS systems',
        'Creating enterprise web applications',
        'Developing online service platforms',
        'Full-stack problem solving',
        'Contributing to open source',
      ],
      description:
        "I'm Nova, a passionate full stack developer from Nepal with expertise in building enterprise-grade applications. I've successfully completed projects related to ATS (Applicant Tracking System), HRIS/HRM (Human Resource Information System), Online Service Platform Web Applications, and more. I love turning complex business requirements into elegant technical solutions.",
      scrollIndicatorText: 'Scroll to explore my journey',
    },
    about: {
      title: 'About',
      subtitle: 'Nova',
      bio: [
        "Hi, I'm Jay Shyam Patel, but most people in the developer community know me as Nova. I'm a passionate full stack developer from the beautiful country of Nepal, where I've been crafting digital solutions that make a real difference.",
        'Currently working as an Associate Software Engineer at Talent Connects, I specialize in building enterprise-level systems including ATS, HRIS, and CRM platforms that serve organizations across multiple countries. I have a particular passion for creating systems that streamline business processes and improve user experiences.',
        "When I'm not coding professionally, you'll find me contributing to open-source projects, experimenting with new technologies, writing tech content on Dev.to, and sharing my journey on social media. I believe in continuous learning and love sharing knowledge with the developer community.",
        "I'm also into gaming (you might find me on YouTube as EgoGamer8832) and enjoy exploring the intersection of technology and creativity through various side projects and experiments.",
      ],
      details: [
        { label: 'Location', value: 'Based in Nepal 🇳🇵' },
        { label: 'Experience', value: '2+ Years in Enterprise Development' },
        { label: 'Alias', value: 'Known as "Nova" in dev community' },
        { label: 'Specialization', value: 'ATS, HRIS & Web Applications' },
      ],
      qualities: [
        {
          icon: 'Rocket',
          title: 'Enterprise Systems Expert',
          description:
            'Specialized in building large-scale ATS and HRIS systems that serve organizations across multiple countries with complex compliance requirements.',
          gradient: 'from-emerald-500 to-blue-500',
        },
        {
          icon: 'Code',
          title: 'Full-Stack Craftsman',
          description:
            'Proficient across the entire technology stack - from PHP/Laravel and Python/Django backends to React/Vue.js frontends, with strong database design skills.',
          gradient: 'from-blue-500 to-violet-500',
        },
        {
          icon: 'Lightbulb',
          title: 'Open Source Contributor',
          description:
            'Active in the developer community, contributing to open source projects and sharing knowledge through Dev.to articles and social media.',
          gradient: 'from-purple-500 to-indigo-500',
        },
        {
          icon: 'BarChart3',
          title: 'Problem Solver',
          description:
            'I approach complex business challenges with analytical thinking, breaking them down into scalable technical solutions that drive real business value.',
          gradient: 'from-indigo-500 to-cyan-500',
        },
      ],
    },
    projects: {
      title: 'My',
      subtitle: 'Projects',
      description:
        "Here's a showcase of enterprise applications, AI-powered solutions, and creative projects that demonstrate my expertise across different domains and technologies.",
      projects: projects,
      viewMoreButton: {
        label: 'View More on GitHub',
        url: 'https://github.com/novaprime-code',
      },
    },
    skills: {
      title: 'Technical',
      subtitle: 'Arsenal',
      description:
        'From enterprise backend systems to modern frontend frameworks, here are the technologies I use to build robust, scalable applications that solve real-world problems.',
      categories: skills,
    },
    connect: {
      title: 'Connect',
      subtitle: 'With Nova',
      description:
        "Feel free to reach out for collaboration, tech discussions, or just to say hi! I'm always excited to connect with fellow developers and share knowledge.",
      socials: socials,
    },
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Jay Shyam Patel (Nova). All rights reserved.`,
    tagline: 'Built with ❤️ from Nepal 🇳🇵',
  },
};

export default portfolioConfig;
