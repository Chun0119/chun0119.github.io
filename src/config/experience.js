export const experiences = [
  {
    id: 1,
    company: 'GameStudio Pro',
    position: 'Senior Game Developer',
    location: 'San Francisco, CA',
    duration: '2022 - Present',
    description: 'Leading development of VR and mobile games using Unity and Unreal Engine. Managing a team of 5 developers and overseeing project delivery.',
    achievements: [
      'Developed 3 successful VR games with over 100K downloads',
      'Optimized game performance by 40% across mobile platforms',
      'Implemented advanced AI systems for NPC behavior',
      'Mentored junior developers and established coding standards'
    ],
    technologies: ['Unity', 'C#', 'VR Development', 'Team Leadership', 'Performance Optimization'],
    logo: 'https://via.placeholder.com/60x60/667eea/ffffff?text=GSP'
  },
  {
    id: 2,
    company: 'Virtual Reality Labs',
    position: 'VR Developer',
    location: 'Seattle, WA',
    duration: '2020 - 2022',
    description: 'Specialized in VR application development using SteamVR and Oculus SDK. Created immersive experiences for training and entertainment.',
    achievements: [
      'Built 5 VR applications for corporate training programs',
      'Reduced motion sickness in VR experiences by 60%',
      'Developed custom VR interaction frameworks',
      'Collaborated with UX designers to improve user experience'
    ],
    technologies: ['SteamVR', 'Oculus SDK', 'C++', 'VR Optimization', '3D Modeling'],
    logo: 'https://via.placeholder.com/60x60/764ba2/ffffff?text=VRL'
  },
  {
    id: 3,
    company: 'Mobile Gaming Inc',
    position: 'Mobile Game Developer',
    location: 'Austin, TX',
    duration: '2018 - 2020',
    description: 'Developed cross-platform mobile games for iOS and Android. Focused on casual games with social features and monetization.',
    achievements: [
      'Released 4 mobile games with 500K+ combined downloads',
      'Implemented in-app purchase systems generating $200K+ revenue',
      'Optimized games for various device specifications',
      'Integrated social features and leaderboards'
    ],
    technologies: ['Unity', 'C#', 'iOS/Android', 'Monetization', 'Social Features'],
    logo: 'https://via.placeholder.com/60x60/667eea/ffffff?text=MGI'
  },
  {
    id: 4,
    company: 'Indie Game Studio',
    position: 'Game Developer',
    location: 'Remote',
    duration: '2016 - 2018',
    description: 'Worked on independent game projects, handling all aspects of development from concept to release.',
    achievements: [
      'Completed 2 indie games with positive reviews',
      'Learned full game development pipeline',
      'Developed skills in game design and user experience',
      'Built a strong foundation in game development principles'
    ],
    technologies: ['Unity', 'C#', 'Game Design', 'Project Management', 'User Experience'],
    logo: 'https://via.placeholder.com/60x60/764ba2/ffffff?text=IGS'
  }
];

// Helper function to get experience by ID
export const getExperienceById = (id) => {
  return experiences.find(experience => experience.id === id);
};

// Helper function to get experiences by company
export const getExperiencesByCompany = (company) => {
  return experiences.filter(experience => 
    experience.company.toLowerCase().includes(company.toLowerCase())
  );
};

// Helper function to get experiences by technology
export const getExperiencesByTechnology = (technology) => {
  return experiences.filter(experience => 
    experience.technologies.some(tech => 
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
}; 