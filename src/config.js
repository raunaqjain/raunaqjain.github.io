module.exports = {
  siteTitle: 'Raunaq Jain | MS Computer Science Graduate Student',
  siteDescription:
    'Raunaq Jain is a computer science graduate student based in Buffalo, NY who specializes in building machine learning models and developing applications.',
  siteKeywords:
    'Raunaq Jain, Raunaq, Jain, raunaqjain, software engineer, machine learning engineer, python, University at Buffalo',
  siteUrl: 'https://raunaqjain.com',
  siteLanguage: 'en_US',
  // googleAnalyticsID: 'UA-45666519-2',
  // googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Raunaq Jain',
  location: 'Buffalo, NY',
  email: 'raunaqja@buffalo.edu',
  github: 'https://github.com/raunaqjain',
  twitterHandle: '@raunaqjain',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/raunaqjain',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/raunaqjain',
    },
    // {
    //   name: 'Codepen',
    //   url: 'https://codepen.io/bchiang7',
    // },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/jraunaq18',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/raunaqjain',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
