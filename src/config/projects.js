import ffLogo from '../assets/ff.jpg';
import ffScreenshot1 from '../assets/ff-screenshot-1.webp';
import ffScreenshot2 from '../assets/ff-screenshot-2.webp';
import ffScreenshot3 from '../assets/ff-screenshot-3.webp';
import tadaLogo from '../assets/tada.jpg';
import tadaScreenshot1 from '../assets/tada-screenshot-1.webp';
import tadaScreenshot2 from '../assets/tada-screenshot-2.webp';
import tadaScreenshot3 from '../assets/tada-screenshot-3.webp';
import tadaScreenshot4 from '../assets/tada-screenshot-4.webp';

export const projects = [
  {
    id: 1,
    title: 'Neopets: Faerie Fragments',
    description: 'A story-rich Match 3 mobile puzzle game, where players help rebuild the magical world of Faerieland alongside beloved Neopets characters.',
    detailedDescription: 'A mobile Match 3 puzzle game built with Unity (C#) and Lua, set in the whimsical Neopets universe. The game combines casual puzzle gameplay with systems for live operations, world-building, and customization, offering features such as clans, achievements, and seasonal events.',
    image: ffLogo,
    videoUrl: 'https://www.youtube.com/watch?v=jnYBXAE59Gk',
    technologies: ['Unity', 'C#', 'Lua', 'Agile'],
    tags: ['Unity', 'Mobile', 'Game', 'Tool'],
    live: 'https://www.neopets.com/faeriefragments/',
    featured: true,
    details: {
      team: 'Fluffy Dog Studio',
      role: 'Intermediate Game Developer',
      features: [
        'Developed a reusable monthly live operations event system, enabling quick implementation and customization of time-limited events',
        'Integrated a game data tracking SDK to support analytics and improve data-driven decision-making for game design and live ops', 
        'Refactored and enhanced the in-game debug panel, improving the efficiency of QA testing and developer debugging workflows', 
      ]
    },
    projectType: 'professional',
    images: [
      ffScreenshot1,
      ffScreenshot2,
      ffScreenshot3,
    ]
  },
  {
    id: 2,
    title: 'Neopets: Tales of Dacardia',
    description: 'A narrative-driven mobile world-building game set in the Neopets universe. Players take on the role of Town Planner to help rebuild the island of Dacardia after a mysterious storm.',
    detailedDescription: 'A narrative-driven mobile world-building game built in Unity (C#) with Unity Cloud Code scripting. The game combines exploration, customization, mini-games, and quest-based storytelling. Players engage in narrative quests, decorate and rebuild towns, and participate in seasonal live-ops events.',
    image: tadaLogo,
    videoUrl: 'https://www.youtube.com/watch?v=hBiYKyXOHf0',
    technologies: ['Unity', 'C#', 'JavaScript', 'Agile'],
    tags: ['Unity', 'Mobile', 'Game', 'Tool'],
    live: 'https://www.neopets.com/talesofdacardia/',
    featured: true,
    details: {
      team: 'Fluffy Dog Studio',
      role: 'Intermediate Game Developer',
      features: [
        'Developed a scalable live-ops event system and a config exporter tool to enable designers to input content directly from Spreadsheets', 
        'Built internal tools including an in-game debug panel and a player data porting tool to streamline QA and debugging processes', 
        'Created a customer support item granting tool to assist the CS team in resolving player tickets efficiently', 
        'Optimized Addressables, reducing asset bundle size from 1GB to 500MB, improving load times, memory usage, and download size'
      ]
    },
    projectType: 'professional',
    images: [
      tadaScreenshot1,
      tadaScreenshot2,
      tadaScreenshot3,
      tadaScreenshot4,
    ]
  },
];

// Helper function to get featured projects
export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

// Helper function to get all unique tags
export const getAllTags = () => {
  return [...new Set(projects.flatMap(project => project.tags))];
};

// Helper function to filter projects by tag
export const filterProjectsByTag = (tag) => {
  if (tag === 'all') return projects;
  return projects.filter(project => project.tags.includes(tag));
};

// Helper function to convert YouTube URL to embed format
export const getYouTubeEmbedUrl = (url) => {
  if (!url) return null;
  
  // If already in embed format, return as is
  if (url.includes('youtube.com/embed/')) {
    return url;
  }
  
  // Extract video ID from various YouTube URL formats
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
  }
  
  return url; // Return original if no pattern matches
};