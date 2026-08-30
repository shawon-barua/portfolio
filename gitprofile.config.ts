// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'shawon-barua', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Featured GitHub Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'shawon-barua/API-RestAssured-TestNG-Automation',
          'shawon-barua/Playwright-Pom',
          'shawon-barua/cypress-pom',
          'shawon-barua/Android_iOS-App-Automation',
          'shawon-barua/automation-test-reviewer',
          'shawon-barua/protractor-POM',
          'shawon-barua/TourSight',
        ],
      },
    },
    external: {
      header: 'Entrepreneurial Work',
      projects: [
        {
          title: 'TourSight',
          description:
            'A travel tech platform helping travelers efficiently explore and book before traveling to popular destinations, optimizing itineraries and travel reservations.',
          imageUrl:
            'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80',
          link: 'https://github.com/shawon-barua/TourSight',
        },
        {
          title: 'Automation Test Reviewer',
          description:
            'An intelligent code review and QA mentoring platform that inspects existing test automation repositories, refactors test code, and guides engineers to merge high-quality automated tests.',
          imageUrl:
            'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
          link: 'https://github.com/shawon-barua/automation-test-reviewer',
        },
      ],
    },
  },
  seo: {
    title: 'Shawon Barua | Senior QA Automation Engineer & SDET (12+ Yrs Exp)',
    description:
      'Portfolio of Shawon Barua - Results-driven QA Engineer & SDET with 12+ years of experience across web, mobile, AI, and cloud test automation (Playwright, Cypress, Selenium, Appium, RestAssured, JMeter, Docker, CI/CD).',
    imageURL: '',
  },
  social: {
    linkedin: 'shawon-barua',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: '',
    phone: '+8801911053670',
    email: 'shawon.cse.ku@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1FARFQ1b92L-H8XbrbBQcgw3ctHRTQOeE/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Test Automation',
    'Playwright',
    'Cypress',
    'Selenium WebDriver',
    'Appium (iOS & Android)',
    'REST Assured',
    'Karate',
    'Postman',
    'Detox',
    'Protractor',
    'WebdriverIO',
    'Performance Testing (JMeter, Gatling)',
    'Security Testing (OWASP ZAP)',
    'Java',
    'JavaScript',
    'TypeScript',
    'Python',
    'Swift',
    'SQL',
    'CI/CD (Jenkins, GitHub Actions)',
    'Docker',
    'Kubernetes',
    'Maven & Gradle',
    'TestNG & JUnit',
    'Jest & Jasmine',
    'Cucumber BDD',
    'Jira & Agile / Scrum',
    'AI & Agentic Automation',
    'QA Team Management',
  ],
  experiences: [
    {
      company: 'Accenture (Tokyo, Japan)',
      position: 'Quality Assurance Engineer',
      from: 'April 2025',
      to: 'September 2025',
      companyLink: 'https://www.accenture.com/',
    },
    {
      company: 'Allegis Group Japan - Apple Inc. (Tokyo, Japan)',
      position: 'Quality Assurance Engineer (Siri Modules)',
      from: 'October 2023',
      to: 'March 2024',
      companyLink: 'https://www.apple.com/',
    },
    {
      company: 'Rakuten Group, Inc. (Tokyo, Japan)',
      position: 'Software Engineer In Test (SDET)',
      from: 'May 2022',
      to: 'March 2023',
      companyLink: 'https://global.rakuten.com/',
    },
    {
      company: 'UPAY Fintech (Dhaka, Bangladesh)',
      position: 'QA Manager (Led team of 7)',
      from: 'November 2021',
      to: 'May 2022',
      companyLink: 'https://www.upaybd.com/',
    },
    {
      company: 'Infolytx Inc. (Dhaka, Bangladesh)',
      position: 'Sr. Software Engineer In Test / Project Manager',
      from: 'June 2016',
      to: 'October 2021',
      companyLink: 'https://infolytx.com/',
    },
    {
      company: 'Walton Group (Dhaka, Bangladesh)',
      position: 'QA Lead (Led team of 10)',
      from: 'September 2015',
      to: 'June 2016',
      companyLink: 'https://waltonbd.com/',
    },
    {
      company: 'Samsung R&D Institute (Dhaka, Bangladesh)',
      position: 'Sr. Software Engineer (Tizen OS & Mobile Verification)',
      from: 'December 2012',
      to: 'August 2015',
      companyLink: 'https://research.samsung.com/srbd',
    },
  ],
  certifications: [
    {
      name: 'Google Project Management: Professional Certificate',
      body: 'Coursera (2024)',
      year: '2024',
      link: 'https://coursera.org',
    },
    {
      name: 'Introduction to Generative AI Learning Path Specialization',
      body: 'Coursera (2024)',
      year: '2024',
      link: 'https://coursera.org',
    },
    {
      name: 'Machine Learning by Stanford',
      body: 'Coursera (2023)',
      year: '2023',
      link: 'https://coursera.org',
    },
    {
      name: 'Introduction to Docker & Kubernetes',
      body: 'Coursera (2023)',
      year: '2023',
      link: 'https://coursera.org',
    },
    {
      name: 'Playwright with JavaScript',
      body: 'Test Automation University (2021)',
      year: '2021',
      link: 'https://testautomationu.applitools.com',
    },
    {
      name: 'Introduction to Cypress',
      body: 'Test Automation University (2021)',
      year: '2021',
      link: 'https://testautomationu.applitools.com',
    },
    {
      name: 'Selenium WebDriver with Java',
      body: 'Test Automation University (2019)',
      year: '2019',
      link: 'https://testautomationu.applitools.com',
    },
    {
      name: 'JMeter: Performance and Load Testing',
      body: 'LinkedIn Learning (2019)',
      year: '2019',
      link: 'https://linkedin.com/learning',
    },
    {
      name: 'Jest JavaScript Testing Framework',
      body: 'Test Automation University (2020)',
      year: '2020',
      link: 'https://testautomationu.applitools.com',
    },
    {
      name: 'Software Security',
      body: 'Coursera (2020)',
      year: '2020',
      link: 'https://coursera.org',
    },
  ],
  educations: [
    {
      institution: 'Jahangirnagar University',
      degree: 'Masters in Applied Statistics and Data Science (Research in MFS Data Analysis & AI)',
      from: '2020',
      to: '2022',
    },
    {
      institution: 'Khulna University (KU)',
      degree: 'Bachelor of Science in Computer Science and Engineering (CSE)',
      from: '2008',
      to: '2012',
    },
  ],
  publications: [
    {
      title: 'National NLP Clinical Challenges (N2C2) - Harvard University Showcase',
      conferenceName: 'Harvard University NLP Clinical Challenges',
      journalName: '',
      authors: 'Shawon Barua & Team',
      link: 'https://github.com/shawon-barua',
      description:
        'Rigorously verified the NLP system developed for a global 3-month competition hosted by Harvard University, contributing to the project selection for showcase at Harvard.',
    },
    {
      title: 'Samsung Web App Building Challenge Prize & Top Bug Finder Recognition',
      conferenceName: 'Samsung R&D Institute (Top Bug Finder among 300+ QA Engineers)',
      journalName: '',
      authors: 'Shawon Barua',
      link: 'https://github.com/shawon-barua',
      description:
        'Awarded Prize for Samsung Web App Building Challenge (2013) and recognized as Top Bug Finder among 300 QA engineers at Samsung R&D Institute during Tizen OS & mobile verification.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'night',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'night',
      'dark',
      'dracula',
      'luxury',
      'nord',
      'dim',
      'sunset',
      'business',
      'corporate',
      'emerald',
      'synthwave',
      'retro',
      'cyberpunk',
      'halloween',
      'forest',
      'aqua',
      'lofi',
      'black',
      'light',
      'winter',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#38bdf8',
      secondary: '#818cf8',
      accent: '#f472b6',
      neutral: '#1e293b',
      'base-100': '#0f172a',
      '--rounded-box': '1rem',
      '--rounded-btn': '0.75rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Crafted with ❤️ by <a class="text-primary font-semibold" href="https://github.com/shawon-barua" target="_blank" rel="noreferrer">Shawon Barua</a> using <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">GitProfile</a>`,

  enablePWA: true,
};

export default CONFIG;
