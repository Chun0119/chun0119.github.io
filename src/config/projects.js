export const projects = [
  {
    id: 1,
    title: 'VR Adventure Game',
    description: 'An immersive VR adventure game built with Unity. Features include hand tracking, physics interactions, and atmospheric environments.',
    detailedDescription: 'A fully immersive virtual reality adventure game that takes players on an epic journey through mysterious worlds. The game features advanced hand tracking, realistic physics interactions, and atmospheric environments that respond to player actions. Built with Unity and optimized for VR performance.',
    image: 'https://via.placeholder.com/400x250/667eea/ffffff?text=VR+Adventure',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    technologies: ['Unity', 'C#', 'VR', 'SteamVR'],
    tags: ['VR', 'Unity', 'Game'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
    details: {
      duration: '6 months',
      team: 'Solo Developer',
      role: 'Lead Developer',
      challenges: 'VR optimization, hand tracking implementation, physics interactions',
      solutions: 'Implemented custom VR interaction system, optimized rendering pipeline, created modular physics framework',
      features: ['Hand tracking and gesture recognition', 'Dynamic lighting and shadows', 'Interactive physics objects', 'Spatial audio system', 'Multiplayer support']
    }
  },
  {
    id: 2,
    title: 'Unreal VR Shooter',
    description: 'A fast-paced VR shooter game developed with Unreal Engine. Includes multiplayer support, weapon customization, and realistic physics.',
    detailedDescription: 'An intense VR shooter that pushes the boundaries of virtual reality gaming. Features realistic weapon physics, multiplayer combat, and extensive customization options. Built with Unreal Engine for maximum performance and visual fidelity.',
    image: 'https://via.placeholder.com/400x250/764ba2/ffffff?text=VR+Shooter',
    videoUrl: 'https://youtu.be/9bZkp7q19f0',
    technologies: ['Unreal Engine', 'C++', 'VR', 'Multiplayer'],
    tags: ['VR', 'Unreal', 'Game'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
    details: {
      duration: '8 months',
      team: '3 Developers',
      role: 'Lead Programmer',
      challenges: 'Multiplayer synchronization, VR performance optimization, weapon physics',
      solutions: 'Implemented client-server architecture, optimized VR rendering, created realistic weapon simulation',
      features: ['Multiplayer PvP combat', 'Weapon customization system', 'Realistic physics simulation', 'Advanced AI opponents', 'Cross-platform VR support']
    }
  },
  {
    id: 3,
    title: 'Mobile Puzzle Game',
    description: 'A casual mobile puzzle game with engaging mechanics and beautiful graphics. Features level progression and social features.',
    detailedDescription: 'A charming mobile puzzle game that combines addictive gameplay with beautiful visuals. Features hundreds of levels, social features, and regular content updates. Optimized for both iOS and Android platforms.',
    image: 'https://via.placeholder.com/400x250/667eea/ffffff?text=Mobile+Puzzle',
    technologies: ['Unity', 'C#', 'Mobile', 'iOS/Android'],
    tags: ['Mobile', 'Unity', 'Game'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
    details: {
      duration: '4 months',
      team: '2 Developers',
      role: 'Game Developer',
      challenges: 'Mobile optimization, cross-platform compatibility, engaging puzzle design',
      solutions: 'Implemented efficient rendering pipeline, created cross-platform build system, designed modular puzzle framework',
      features: ['200+ unique puzzle levels', 'Social leaderboards', 'Daily challenges', 'Achievement system', 'Regular content updates']
    }
  },
  {
    id: 4,
    title: 'Game Development Tools',
    description: 'A collection of custom tools and utilities for game development. Includes level editors, asset managers, and debugging tools.',
    detailedDescription: 'A comprehensive suite of development tools designed to streamline the game development process. Includes level editors, asset management systems, and debugging utilities that integrate seamlessly with Unity.',
    image: 'https://via.placeholder.com/400x250/764ba2/ffffff?text=Dev+Tools',
    technologies: ['C#', 'Unity', 'WPF', 'Tools'],
    tags: ['Tools', 'Unity', 'Development'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
    details: {
      duration: '3 months',
      team: 'Solo Developer',
      role: 'Tools Developer',
      challenges: 'Unity Editor integration, performance optimization, user-friendly interface',
      solutions: 'Created custom Unity Editor extensions, implemented efficient data structures, designed intuitive UI',
      features: ['Visual level editor', 'Asset management system', 'Performance profiler', 'Debug visualization tools', 'Automated testing framework']
    }
  },
  {
    id: 5,
    title: 'AR Mobile Experience',
    description: 'An augmented reality mobile application that overlays digital content on the real world using ARKit and ARCore.',
    detailedDescription: 'An innovative AR application that brings digital content into the real world. Features advanced AR tracking, interactive 3D objects, and seamless integration with mobile devices.',
    image: 'https://via.placeholder.com/400x250/667eea/ffffff?text=AR+Mobile',
    videoUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw',
    technologies: ['Unity', 'ARKit', 'ARCore', 'Mobile'],
    tags: ['AR', 'Mobile', 'Unity'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
    details: {
      duration: '5 months',
      team: '2 Developers',
      role: 'AR Developer',
      challenges: 'Cross-platform AR development, tracking accuracy, performance optimization',
      solutions: 'Implemented unified AR framework, optimized tracking algorithms, created efficient rendering system',
      features: ['Advanced AR tracking', 'Interactive 3D objects', 'Multi-user AR sessions', 'Real-time object recognition', 'Cloud-based content delivery']
    }
  },
  {
    id: 6,
    title: 'PC Strategy Game',
    description: 'A turn-based strategy game for PC with complex AI, procedural generation, and multiplayer capabilities.',
    detailedDescription: 'A deep strategy game that combines tactical combat with empire building. Features advanced AI, procedural world generation, and both single-player and multiplayer modes.',
    image: 'https://via.placeholder.com/400x250/764ba2/ffffff?text=Strategy+Game',
    technologies: ['Unity', 'C#', 'AI', 'PC'],
    tags: ['PC', 'Unity', 'Game'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
    details: {
      duration: '10 months',
      team: '4 Developers',
      role: 'Lead Developer',
      challenges: 'Complex AI systems, procedural generation, multiplayer synchronization',
      solutions: 'Implemented behavior tree AI, created procedural generation algorithms, designed robust networking system',
      features: ['Advanced AI opponents', 'Procedural world generation', 'Multiplayer campaigns', 'Mod support', 'Extensive customization options']
    }
  }
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

/*
 * How to add YouTube videos to projects:
 * 
 * 1. Add a videoUrl field to your project object
 * 2. You can use any of these formats:
 *    - Regular YouTube URL: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
 *    - Short YouTube URL: "https://youtu.be/dQw4w9WgXcQ"
 *    - Embed URL: "https://www.youtube.com/embed/dQw4w9WgXcQ"
 * 
 * 3. The system will automatically convert regular URLs to embed format
 * 4. Projects with videoUrl will show a "Video" badge on the card
 * 5. The video will appear in the modal when clicking on the project
 */ 