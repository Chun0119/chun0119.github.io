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
      'Contributed to 2 published mobile games: <a href="https://www.neopets.com/talesofdacardia/" target="_blank" rel="noopener noreferrer">Neopets: Tales of Dacardia</a> and <a href="https://www.neopets.com/faeriefragments/" target="_blank" rel="noopener noreferrer">Neopets: Faerie Fragments</a> with over 100K+ downloads',
      'Developed 5 internal tools to streamline workflows and boost cross-team efficiency',
      'Delivered 2 rapid prototypes for unannounced projects, accelerating early-stage concept validation',
    ],
    technologies: ['Unity', 'C#', 'Lua', 'JavaScript', 'TypeScript', 'Agile'],
    logo: fluffyDogLogo
  },
  {
    id: 2,
    company: 'Gabi Education',
    position: 'Freelance Software Developer',
    location: 'Hong Kong',
    duration: '2019 Nov - Present',
    description: 'Specialized in developing educational games and software for children, distributed directly to schools for internal classroom use',
    achievements: [
      'Sole full-stack developer of 10+ educational games and software, including 60+ mini-games used in classrooms by 1K+ students',
      'Integrated APIs like ChatGPT and Speech Recognition to enrich gameplay interactivity',
      'Built custom web-based management system for real-time data management and visualization',
      'Created multiple Python scripts to analyze gameplay metrics and user behavior',
    ],
    technologies: ['Unity', 'C#', 'Android Studio', 'Java', 'JavaScript', 'Python', 'React', 'PHP', 'Firebase', 'AWS', 'MySQL'],
    logo: gabiLogo
  },
  {
    id: 3,
    company: 'CanvasLand Metaverse Production',
    position: 'Freelance Game Developer',
    location: 'Hong Kong',
    duration: '2022 Aug - 2024 Aug',
    description: 'Delivered custom 3D metaverse solutions for brands and institutions, with immersive experiences across web, desktop, and VR platforms',
    achievements: [
      'Led full-stack development of 8 client-facing metaverses across finance, education, and hospitality',
      'Integrated advanced tech stacks using Unity, Unreal, Decentraland, Spatial, Three.js, and others',
      'Integrated multiplayer, voice chat, and avatar systems using Photon, Agora, and Ready Player Me; implemented Web3 wallet features using thirdweb',
    ],
    technologies: ['Unity', 'C#', 'Unreal Engine', 'Blueprint', 'VR', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'AWS', 'MongoDB'],
    logo: canvaslandLogo
  },
  {
    id: 4,
    company: 'PlayStudios Asia',
    position: 'Associate Frontend Engineer (Unity)',
    location: 'Hong Kong',
    duration: '2021 Oct - 2023 Jun',
    description: 'Worked on <a href="https://www.playstudios.com/myvegas-slots/" target="_blank" rel="noopener noreferrer">myVEGAS Slots</a>, a top-performing social casino mobile game with over 10M+ downloads',
    achievements: [
      'Enhanced and expanded core game features, including implementing a new level milestone system',
      'Contributed to live operations events, integrating new slot games, sales blockers, and special event content to drive user engagement',
      'Built 7 internal tools that accelerated slot game releases (from 5 to 2 weeks) and enhanced overall team efficiency',
      'Built backend testing tools and automated content converters to streamline collaboration with product teams',
    ],
    technologies: ['Unity', 'C#', 'Lua', 'Python', 'JavaScript', 'TypeScript', '.NET', 'Agile'],
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
      'Deployed on diverse devices such as Oculus Quest/Go, HoloLens, Nreal, and standard mobile/PC',
      'Integrated advanced tech stacks across Unity, Unreal, SparkAR, Arduino',
      'Integrated cloud and spatial services like AWS, Photon, Azure Spatial Anchors, Vivox voice chat, and Kinect/Cubemos body tracking',
    ],
    technologies: ['Unreal Engine', 'C++', 'Blueprint', 'Unity', 'C#', 'SparkAR', 'JavaScript', 'VR', 'AR', 'MR'],
    logo: eteamLogo
  }
];