import ffLogo from '../assets/ff.jpg';
import ffScreenshot1 from '../assets/ff-screenshot-1.webp';
import ffScreenshot2 from '../assets/ff-screenshot-2.webp';
import ffScreenshot3 from '../assets/ff-screenshot-3.webp';
import tadaLogo from '../assets/tada.jpg';
import tadaScreenshot1 from '../assets/tada-screenshot-1.webp';
import tadaScreenshot2 from '../assets/tada-screenshot-2.webp';
import tadaScreenshot3 from '../assets/tada-screenshot-3.webp';
import tadaScreenshot4 from '../assets/tada-screenshot-4.webp';
import mxLogo from '../assets/mx.jpg';
import mxScreenshot1 from '../assets/mx-screenshot-1.png';
import mxScreenshot2 from '../assets/mx-screenshot-2.png';
import mentalHealthLogo from '../assets/mental-health.jpg';
import roadSafetyLogo from '../assets/road-safety.png';
import roadSafetyScreenshot1 from '../assets/road-safety-screenshot-1.webp';
import iGotYouLogo from '../assets/i-got-you.png';
import loveNeighbourhoodLogo from '../assets/love-neighbour.png';
import loveNeighbourhoodScreenshot1 from '../assets/love-neighbour-screenshot-1.jpg';
import loveNeighbourhoodScreenshot2 from '../assets/love-neighbour-screenshot-2.png';
import loveNeighbourhoodScreenshot3 from '../assets/love-neighbour-screenshot-3.png';
import aliceLogo from '../assets/alice.jpg';
import aliceScreenshot1 from '../assets/alice-screenshot-1.webp';
import aliceScreenshot2 from '../assets/alice-screenshot-2.webp';
import aliceScreenshot3 from '../assets/alice-screenshot-3.webp';
import clpLogo from '../assets/clp.png';
import clpScreenshot1 from '../assets/clp-screenshot-1.png';
import clpScreenshot2 from '../assets/clp-screenshot-2.png';
import clpScreenshot3 from '../assets/clp-screenshot-3.png';
import tiltBrushLogo from '../assets/tilt-brush.jpg';
import tiltBrushScreenshot1 from '../assets/tilt-brush-screenshot-1.png';
import tiltBrushScreenshot2 from '../assets/tilt-brush-screenshot-2.png';
import tiltBrushScreenshot3 from '../assets/tilt-brush-screenshot-3.png';
import cyclingLogo from '../assets/cycling.jpg';
import cyclingScreenshot1 from '../assets/cycling-screenshot-1.jpg';

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
        'Optimized asset bundle loading, reducing bundle size from 500MB to 150MB, significantly improving load times and memory usage'
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
  {
    id: 3,
    title: 'myVEGAS Slots',
    description: 'A popular social casino slot game available on mobile and web, where players spin slot machines to earn chips and collect loyalty points redeemable for real-world rewards.',
    detailedDescription: 'Built with Unity (C#), myVEGAS Slots delivers a feature-rich, live-operated experience with frequent content updates and event-driven gameplay. The game includes slot machines, daily missions, clubs, albums, and dynamic live operations such as events, promotions, and sales.',
    image: mxLogo,
    videoUrl: 'https://youtu.be/mGHEUC0JCA0?si=D_dx9LBB162ILweg',
    technologies: ['Unity', 'C#', 'Lua', 'JavaScript', 'TypeScript', 'Python', '.NET', 'Agile'],
    tags: ['Unity', 'Mobile', 'Web', 'Game', 'Tool'],
    live: 'https://www.playstudios.com/myvegas-slots/',
    featured: true,
    details: {
      team: 'PlayStudios Asia',
      role: 'Associate Frontend Engineer - Unity',
      features: [
        'Enhanced core features, such as a level milestone system, and supported live ops with content integrations and sales blockers',
        'Built Unity editor tools, including an asset pipeline, reducing slot release time from 5 weeks to 2 weeks',
        'Implemented a scalable in-game cheat panel to streamline QA and developer debugging',
        'Developed a headless test client in C# (.NET) for automated backend testing and load simulation',
        'Created tools using Google Colab, Python, and Apps Script to help Product Managers visualize and format live ops content',
        'Maintained internal tooling including Unity gadgets and a custom VS Code extension',
      ]
    },
    projectType: 'professional',
    images: [
      mxScreenshot1,
      mxScreenshot2,
    ]
  },
  {
    id: 4,
    title: 'Mental Health (Emotional Stress) VR',
    description: 'A local multiplayer VR game where players team up over a local network to combat AI-controlled enemies in a collaborative, immersive environment.',
    detailedDescription: 'A local multiplayer VR game built with Unreal Engine, designed to support real-time interaction and teamwork. The game features a character selection lobby, a local network matchmaking room, and cooperative combat against enemies with basic AI behaviors, all within an immersive VR environment.',
    image: mentalHealthLogo,
    videoUrl: 'https://youtu.be/i_dpuBZ2_rQ',
    technologies: ['Unreal Engine', 'C++', 'Blueprint', 'Multiplayer'],
    tags: ['Unreal Engine', 'VR', 'Game'],
    live: 'https://eteamxr.com/en/portfolio/mental-health-emotional-stress-vr/',
    featured: false,
    details: {
      team: 'Eteam Entertainment',
      role: 'XR Software Developer',
      client: 'Tung Wah Group of Hospitals',
      features: [
        'Built core gameplay flow, including character selection lobby, matchmaking room, and game session transitions',
        'Implemented local multiplayer using Unreal Online Subsystem, enabling seamless peer discovery and matchmaking over a local network',
        'Developed enemy AI with basic behavior logic, including detection, navigation, and attack patterns to support cooperative gameplay',
      ]
    },
    projectType: 'professional',
  },
  {
    id: 5,
    title: 'Road Safety VR Game',
    description: 'An educational VR simulation game supporting both single-player and multiplayer modes, where players take on the role of a traffic police officer.',
    detailedDescription: 'An educational VR simulation game built with Unreal Engine, where players act as traffic police to issue commands to vehicles and pedestrians while responding to dynamic road situations. In multiplayer mode, a connected iPad allows a second player to trigger real-time events, adding interactivity and unpredictability to the gameplay.',
    image: roadSafetyLogo,
    videoUrl: 'https://youtu.be/zxnvcKwdX4Y',
    technologies: ['Unreal Engine', 'C++', 'Blueprint', 'Multiplayer'],
    tags: ['Unreal Engine', 'VR', 'Game'],
    live: 'https://eteamxr.com/en/portfolio/road-safety-vr-game/',
    featured: false,
    details: {
      team: 'Eteam Entertainment',
      role: 'XR Software Developer',
      client: 'Road Safety Council',
      features: [
        'Sole developer responsible for the full game implementation in Unreal Engine (Blueprint + C++)',
        'Developed immersive VR interaction systems for commanding AI-controlled vehicles and pedestrians',
        'Implemented cross-platform multiplayer interaction, allowing an iPad to trigger dynamic in-game events on a connected VR headset via local network',
        'Created a flexible event system for generating real-time traffic scenarios (e.g. accidents, jaywalking, hazards)',
      ]
    },
    projectType: 'professional',
    images: [
      roadSafetyScreenshot1,
    ]
  },
  {
    id: 6,
    title: 'I Got You VR',
    description: 'A networked multiplayer VR survival game where players take on the roles of a witch or elves, combining stealth and strategy in a haunted mansion escape scenario.',
    detailedDescription: 'A networked multiplayer VR survival game built with Unreal Engine, where one player becomes the witch, tasked with capturing the others—elves—who must work together to explore a haunted mansion, find hidden keys, and unlock the escape door without being caught. The game blends stealth, strategy, and exploration in a tense, immersive VR environment.',
    image: iGotYouLogo,
    videoUrl: 'https://youtu.be/Xc4i59tbHgQ',
    technologies: ['Unreal Engine', 'C++', 'Blueprint', 'Multiplayer', 'Voice Chat', 'AWS GameLift'],
    tags: ['Unreal Engine', 'VR', 'Game'],
    live: 'https://eteamxr.com/en/portfolio/i-got-you-vr/',
    featured: false,
    details: {
      team: 'Eteam Entertainment',
      role: 'XR Software Developer',
      client: ' SmarTone',
      features: [
        'Integrated Vivox voice chat for real-time multiplayer communication',
        'Developed AI behavior for both witch and elf roles to support incomplete lobbies',
        'Implemented core game flow logic, including role assignment, session management, and win/lose conditions',
      ]
    },
    projectType: 'professional'
  },
  {
    id: 7,
    title: 'Love the Neighbourhood AR',
    description: 'An AR multiplayer room escape game where up to 8 players collaborate using physical puzzles and AR clues to solve mysteries and rescue missing residents.',
    detailedDescription: 'An AR multiplayer room escape game built with Unity, supporting up to 8 players. Set in the fictional housing estate, players collaborate to solve puzzles, uncover clues, and rescue missing residents amid a series of mysterious incidents. The game blends real-life escape room elements—such as physical locks and evidence—with AR gameplay to create an immersive, interactive experience.',
    image: loveNeighbourhoodLogo,
    videoUrl: 'https://youtu.be/zwLBh8nzBpo',
    technologies: ['Unity', 'C#', 'ARCore', 'Multiplayer', 'Photon', 'Voice Chat'],
    tags: ['Unity', 'AR', 'Mobile', 'Game'],
    live: 'https://eteamxr.com/en/portfolio/love-the-neighbourhood-ar/',
    featured: false,
    details: {
      team: 'Eteam Entertainment',
      role: 'XR Software Developer',
      client: 'The Hong Kong Federation of Youth Groups',
      features: [
        'Developed local network multiplayer using Photon, with a dedicated admin role for real-time game monitoring',
        'Integrated Photon Voice Chat for seamless in-game communication among players',
        'Built the complete game flow, including narrative progression, puzzle stages, and win/lose conditions',
        'Designed and implemented all puzzle interactions, blending physical escape room elements with interactive AR mechanics for a cohesive experience',
      ]
    },
    projectType: 'professional',
    images: [
      loveNeighbourhoodScreenshot1,
      loveNeighbourhoodScreenshot2,
      loveNeighbourhoodScreenshot3,
    ]
  },
  {
    id: 8,
    title: 'Alice in the Underland AR',
    description: 'An AR multiplayer room escape game where up to 8 players collaborate using physical puzzles and AR clues to solve mysteries and rescue Alice.',
    detailedDescription: 'An AR multiplayer room escape game built with Unity, where up to 8 players collaborate to rescue Alice. Players must solve puzzles, uncover clues, and avoid hidden dangers. The game combines real-world escape room elements with AR interactions and educational storytelling.',
    image: aliceLogo,
    videoUrl: 'https://youtu.be/2r7huyDv2Do',
    technologies: ['Unity', 'C#', 'ARCore', 'Multiplayer', 'Photon', 'Voice Chat'],
    tags: ['Unity', 'AR', 'Mobile', 'Game'],
    live: 'https://eteamxr.com/en/portfolio/alice-in-underland-ar/',
    featured: false,
    details: {
      team: 'Eteam Entertainment',
      role: 'XR Software Developer',
      client: 'The Hong Kong Federation of Youth Groups',
      features: [
        'Developed local network multiplayer using Photon, with a dedicated admin role for real-time game monitoring',
        'Integrated Photon Voice Chat for seamless in-game communication among players',
        'Built the complete game flow, including narrative progression, puzzle stages, and win/lose conditions',
      ]
    },
    projectType: 'professional',
    images: [
      aliceScreenshot1,
      aliceScreenshot2,
      aliceScreenshot3,
    ]
  },
  {
    id: 9,
    title: 'Natural Gas Terminal MR Visualisation',
    description: 'An MR experience that supports local multiplayer sessions to explore infrastructure in both full-scale on-site and mini-scale meeting modes.',
    detailedDescription: 'A HoloLens 2 mixed reality experience built with Unreal Engine that offers two viewing modes: a full-scale visualization for on-site exploration, and a tabletop-scale version for indoor meetings. The experience supports local multiplayer, enabling multiple users to collaboratively view and interact with the infrastructure model using shared AR anchors via Azure Spatial Anchors.',
    image: clpLogo,
    videoUrl: 'https://youtu.be/ME9hwpRCIM8',
    technologies: ['Unreal Engine', 'C++', 'Blueprint', 'Multiplayer', 'Azure Spatial Anchors'],
    tags: ['Unreal Engine', 'MR', 'Interactive Experience'],
    live: 'https://eteamxr.com/en/portfolio/clp-natural-gas-terminal-mr-visualisation/',
    featured: false,
    details: {
      team: 'Eteam Entertainment',
      role: 'XR Software Developer',
      client: 'CLP Power Hong Kong',
      features: [
        'Sole developer responsible for full implementation in Unreal Engine',
        'Integrated Azure Spatial Anchors for local multiplayer with shared AR alignment',
        'Implemented intuitive HoloLens 2 interactions using hand gestures and MRTK',
      ]
    },
    projectType: 'professional',
    images: [
      clpScreenshot1,
      clpScreenshot2,
      clpScreenshot3,
    ]
  },
  {
    id: 10,
    title: 'Mixed Reality Art Creation',
    description: 'A HoloLens 2 mixed reality adaptation of Google Tilt Brush, reimagined for MR input and interaction.',
    detailedDescription: 'Originally designed as a VR painting tool by Google, Tilt Brush was open-sourced and built in Unity. This project adapts the experience for HoloLens 2, transforming the immersive painting environment for mixed reality. To overcome the limitations of MR hand tracking for complex interactions, a Nintendo Switch controller was integrated to provide precise input and an intuitive user experience.',
    image: tiltBrushLogo,
    videoUrl: 'https://youtu.be/5pt7kF8DVJA',
    technologies: ['Unity', 'C#'],
    tags: ['Unity', 'MR', 'Interactive Experience'],
    live: 'https://eteamxr.com/en/portfolio/mixed-reality-art-creation/',
    featured: false,
    details: {
      team: 'Eteam Entertainment',
      role: 'XR Software Developer',
      features: [
        'Adapted the open-source Tilt Brush Unity project for HoloLens 2 with MRTK integration',
        'Redesigned user interaction to work with a physical controller, replacing VR hand controllers',
        'Modified existing brush tools and UI to function in an MR spatial environment',
      ]
    },
    projectType: 'professional',
    images: [
      tiltBrushScreenshot1,
      tiltBrushScreenshot2,
      tiltBrushScreenshot3,
    ]
  },
  {
    id: 11,
    title: 'HK Cycling VR',
    description: 'An interactive VR cycling experience where players ride a stationary gym bike while wearing a VR headset, pedaling through iconic Hong Kong locations in a virtual tour.',
    detailedDescription: 'An interactive VR cycling experience built with Unreal Engine, where players ride a stationary gym bike while wearing a VR headset, pedaling through iconic Hong Kong locations. Designed for an HKTDC exhibition, the game highlights Hong Kong’s status as a global financial hub through immersive, activity-based gameplay.',
    image: cyclingLogo,
    videoUrl: 'https://youtu.be/1YiSiqaAjk8',
    technologies: ['Unreal Engine', 'C++', 'Blueprint', 'Arduino'],
    tags: ['Unreal Engine', 'VR', 'Interactive Experience'],
    live: 'https://eteamxr.com/en/portfolio/hk-cycling-tour-vr/',
    featured: false,
    details: {
      team: 'Eteam Entertainment',
      role: 'XR Software Developer',
      features: [
        'Integrated Arduino hardware with the VR game, enabling real-time pedaling input from a physical gym bike',
        'Contributed to the core game flow',
      ]
    },
    projectType: 'professional',
    images: [
      cyclingScreenshot1,
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