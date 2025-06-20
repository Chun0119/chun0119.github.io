import fluffyDogLogo from '../assets/fluffydog.png';
import gabiLogo from '../assets/gabi.png';
import canvaslandLogo from '../assets/canvasland.png';
import playstudiosLogo from '../assets/playstudios.png';
import eteamLogo from '../assets/eteam.webp';

export const experiences = [
  {
    id: 1,
    company: 'Fluffy Dog Studio',
    position: 'Intermediate Game Developer',
    location: 'Vancouver, BC, Canada',
    duration: '2023 Oct - Present',
    description: 'Developing mobile games featuring the Neopets IP',
    achievements: [
      'Contributed to 2 published mobile games: <a href="https://www.neopets.com/talesofdacardia/" target="_blank" rel="noopener noreferrer">Neopets: Tales of Dacardia</a> and <a href="https://www.neopets.com/faeriefragments/" target="_blank" rel="noopener noreferrer">Neopets: Faerie Fragments</a> collectively reaching 100K+ downloads',
      'Developed 5 internal tools to streamline workflows and boost cross-team efficiency',
      'Delivered 2 rapid prototypes for unannounced projects, accelerating early-stage concept validation',
    ],
    technologies: ['Unity', 'C#', 'Lua', 'JavaScript', 'TypeScript', 'Agile'],
    logo: fluffyDogLogo
  },
  {
    id: 2,
    company: 'Gabi Education',
    position: 'Software Developer (Freelance)',
    location: 'Hong Kong',
    duration: '2019 Nov - Present',
    description: 'Specialized in developing educational games and software for children, distributed directly to schools for internal classroom use',
    achievements: [
      'Developed 10+ educational games and software (including 60+ mini-games) as the sole full-stack developer, supporting 1K+ students',
      'Integrated various APIs such as ChatGPT and Speech Recognition to enhance interactivity',
      'Built custom web-based management system for real-time game data tracking, management, and visualization', 
      'Created multiple Python scripts to analyze gameplay metrics and user behavior',
    ],
    technologies: ['Unity', 'C#', 'Android Studio', 'Java', 'Python', 'PHP', 'HTML', 'JavaScript', 'SQL'],
    logo: gabiLogo
  },
  {
    id: 3,
    company: 'CanvasLand Metaverse Production',
    position: 'Game Developer (Freelance)',
    location: 'Hong Kong',
    duration: '2022 Aug - 2024 Aug',
    description: 'Delivered custom 3D metaverse solutions for brands and institutions, with immersive experiences across web, desktop, and VR platforms',
    achievements: [
      'Led full-stack development for 8 metaverse projects, serving clients in banking, education, and hospitality',
      'Integrated advanced tech stacks across Unity, Unreal, Decentraland, React, Three.js, AWS, and more',
      'Implemented multiplayer, voice chat, and avatar systems using Photon Fusion, Agora, and Ready Player Me',
      'Integrated Web3 features, including wallet support with thirdweb',
    ],
    technologies: ['Unity', 'C#', 'Unreal Engine', 'Blueprint', 'VR', 'JavaScript', 'TypeScript', 'Photon'],
    logo: canvaslandLogo
  },
  {
    id: 4,
    company: 'PlayStudios Asia',
    position: 'Associate Frontend Engineer - Unity',
    location: 'Hong Kong',
    duration: '2021 Oct - 2023 Jun',
    description: 'Worked on <a href="https://www.playstudios.com/myvegas-slots/" target="_blank" rel="noopener noreferrer">myVEGAS Slots</a>, a top-performing social casino mobile game',
    achievements: [
      'Enhanced and expanded core game features, including implementing a new level milestone system',
      'Contributed to live operations, integrating new slot games, sales blockers, and special event content to drive user engagement',
      'Developed 7 internal tools, reducing slot game release cadence from 5 weeks to 2 weeks and improving QA/debugging efficiency',
      'Created automation tools, including backend testing programs and content conversion scripts, streamlining collaboration with product owners',
    ],
    technologies: ['Unity', 'C#', 'Lua', 'JavaScript', 'TypeScript', '.NET', 'Python', 'Agile'],
    logo: playstudiosLogo
  },
  {
    id: 5,
    company: 'Eteam Entertainment',
    position: 'XR Software Developer',
    location: 'Hong Kong',
    duration: '2020 Jun - 2021 Oct',
    description: 'Focused on delivering AR/VR/MR solutions and original game development',
    achievements: [
      'Developed 20 XR applications and games across platforms including VR (4), AR (6), MR (3), and interactive games (7)',
      'Deployed on diverse devices such as Oculus Quest/Go, HoloLens, Nreal, and standard mobile/PC platforms',
      'Worked with multiple game engines and SDKs including Unreal Engine (C++), Unity (C#), SparkAR, and JavaScript',
      'Integrated cloud and spatial services like AWS, Photon, Azure Spatial Anchors, Vivox voice chat, and Kinect/Cubemos body tracking',
    ],
    technologies: ['Unreal Engine', 'C++', 'Blueprint', 'Unity', 'C#', 'VR', 'AR', 'MR', 'JavaScript'],
    logo: eteamLogo
  }
];