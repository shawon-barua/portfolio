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
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['shawon-barua/portfolio', 'portfolio'], // These projects will not be displayed.
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'shawon-barua/API-RestAssured-TestNG-Automation',
          'shawon-barua/test_cases',
          'shawon-barua/cypress-pom',
          'shawon-barua/Android_iOS-App-Automation',
          'shawon-barua/Playwright-Pom',
          'shawon-barua/Toyota_used_car_analysis',
          'shawon-barua/cucumber-jvm-selenium-example-master',
          'shawon-barua/Selenium-java-POM-TestNG',
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
      '/portfolio/shawon_resume.pdf', // Empty fileUrl will hide the `Download Resume` button.
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
      name: 'Agentic AI: Build Your First Agentic AI System',
      body: 'LinkedIn (Jun 2026)',
      year: 'Jun 2026',
      link: 'https://www.linkedin.com/learning/certificates/7bfbb47b917683eb3e89f3643b3f12665da095d081502d608d54d4b3deb63983/',
    },
    {
      name: 'Agentic AI Fundamentals: Architectures, Frameworks, and Applications',
      body: 'LinkedIn (Jun 2026)',
      year: 'Jun 2026',
      link: 'https://www.linkedin.com/learning/certificates/e2d16a8fcaa263c7ce9e0a7b9de9022f95a64689b2f324d2905a17caddb49afa/',
    },
    {
      name: 'Getting Started with Data Analytics on AWS',
      body: 'Amazon Web Services (AWS) - Coursera (Jun 2026)',
      year: 'Jun 2026',
      link: 'https://coursera.org/share/fc0d157586383b905f52af5356c17068',
    },
    {
      name: 'Semantic Segmentation with Amazon SageMaker',
      body: 'Amazon Web Services (AWS) - Coursera (Jun 2026)',
      year: 'Jun 2026',
      link: 'https://www.coursera.org/account/accomplishments/records/1JQVHISHKDGU',
    },
    {
      name: 'API Testing Foundations',
      body: 'LinkedIn (May 2026)',
      year: 'May 2026',
      link: 'https://www.linkedin.com/learning/certificates/b221ff89199de13347c44c50df1c7fe363a69b04e5e6e105d67389915497f79b/',
    },
    {
      name: 'AI Product Manager (62nd percentile)',
      body: 'TestGorilla (Jun 2026)',
      year: 'Jun 2026',
      link: 'https://www.testgorilla.com/',
    },
    {
      name: 'Communication (79th percentile)',
      body: 'TestGorilla (May 2026)',
      year: 'May 2026',
      link: 'https://www.testgorilla.com/',
    },
    {
      name: 'Google Project Management: Professional Certificate',
      body: 'Google - Coursera (Sep 2024)',
      year: 'Sep 2024',
      link: 'https://www.coursera.org/account/accomplishments/specialization/RGO020MOIZ78',
    },
    {
      name: 'Introduction to Generative AI Learning Path Specialization',
      body: 'Google Cloud - Coursera (Sep 2024)',
      year: 'Sep 2024',
      link: 'https://www.coursera.org/account/accomplishments/specialization/1ML1RLL2UM5S',
    },
    {
      name: 'Google AI Essentials',
      body: 'Google - Coursera (Sep 2024)',
      year: 'Sep 2024',
      link: 'https://www.coursera.org/account/accomplishments/records/1LUBVR2VE35C',
    },
    {
      name: 'Machine Learning',
      body: 'Stanford University - Coursera (Jun 2023)',
      year: 'Jun 2023',
      link: 'https://www.coursera.org/account/accomplishments/records/46VPH2GVM3CW',
    },
    {
      name: 'Introduction to Docker',
      body: 'Google - Coursera (Jun 2023)',
      year: 'Jun 2023',
      link: 'https://www.coursera.org/account/accomplishments/records/XCS5ZR3U7VDG',
    },
    {
      name: 'Getting Started with Google Kubernetes Engine',
      body: 'Google Cloud - Coursera (Jun 2023)',
      year: 'Jun 2023',
      link: 'https://www.coursera.org/account/accomplishments/records/WNPX88T8QTF5',
    },
    {
      name: 'Product Management Insights',
      body: 'Project Management Institute (Jun 2023)',
      year: 'Jun 2023',
      link: 'https://www.linkedin.com/learning/certificates/95aa4d2ac083de0dab4844c45aa7e86d3ab21cb03a8b1a022046f33c850a7241/',
    },
    {
      name: 'Technical Product Management',
      body: 'Project Management Institute (Jun 2023)',
      year: 'Jun 2023',
      link: 'https://www.linkedin.com/learning/certificates/6236407ee74850453ff681e67636985734586659e7f42ee990bb50cef4454991/',
    },
    {
      name: 'Planning and Releasing Software with Jira',
      body: 'LinkedIn (Aug 2023)',
      year: 'Aug 2023',
      link: 'https://www.linkedin.com/learning/certificates/ed756d807d90cb63dce7e3ab2a8375b610c78947195be3fb3245200e7ddcfa30/',
    },
    {
      name: 'Playwright with JavaScript',
      body: 'Test Automation University (2021)',
      year: '2021',
      link: 'https://testautomationu.applitools.com/certificate/?id=2dac085d',
    },
    {
      name: 'Introduction to Cypress',
      body: 'Test Automation University (2021)',
      year: '2021',
      link: 'https://testautomationu.applitools.com/certificate/?id=5901e3d3',
    },
    {
      name: 'Introduction to TestNG',
      body: 'Test Automation University (2021)',
      year: '2021',
      link: 'https://testautomationu.applitools.com/certificate/?id=257b0e64',
    },
    {
      name: 'Python Programming',
      body: 'Test Automation University (2021)',
      year: '2021',
      link: 'https://testautomationu.applitools.com/certificate/?id=232664c5',
    },
    {
      name: 'Source Control for Test Automation with Git',
      body: 'Test Automation University (2021)',
      year: '2021',
      link: 'https://testautomationu.applitools.com/certificate/?id=7e9b1f89',
    },
    {
      name: 'Codeless Test Automation with Selenium IDE',
      body: 'Test Automation University (2021)',
      year: '2021',
      link: 'https://testautomationu.applitools.com/certificate/?id=6f2f7810',
    },
    {
      name: 'Introduction to JavaScript',
      body: 'Test Automation University (2021)',
      year: '2021',
      link: 'https://testautomationu.applitools.com/certificate/?id=b37a19dc',
    },
    {
      name: 'McKinsey Data Science & Data Engineering Training',
      body: 'McKinsey & Company (May 2021)',
      year: 'May 2021',
      link: 'https://www.linkedin.com/in/shawon-barua/',
    },
    {
      name: 'Learning Java',
      body: 'LinkedIn (Jun 2020)',
      year: 'Jun 2020',
      link: 'https://www.linkedin.com/learning/certificates/16f84377952615cbe1148a5841ccf07062b7c1a835f1b52b895642fed20e765c/',
    },
    {
      name: 'JMeter: Performance and Load Testing',
      body: 'LinkedIn (Jun 2020)',
      year: 'Jun 2020',
      link: 'https://www.linkedin.com/learning/certificates/e21da8e9f2586f222145bf6ca7c0a33c42a0517123c40b78e416894156a39131/',
    },
    {
      name: 'Software Security',
      body: 'University of Maryland - Coursera (Apr 2020)',
      year: 'Apr 2020',
      link: 'https://www.coursera.org/account/accomplishments/records/BPE8PUZFT2KQ',
    },
    {
      name: 'Agile with Atlassian Jira',
      body: 'Atlassian - Coursera (Jun 2020)',
      year: 'Jun 2020',
      link: 'https://www.coursera.org/account/accomplishments/records/WKYMKMKTHRW8',
    },
    {
      name: 'Version Control with Git',
      body: 'Atlassian - Coursera (Feb 2020)',
      year: 'Feb 2020',
      link: 'https://www.coursera.org/account/accomplishments/records/6VSL4CH5969C',
    },
    {
      name: 'Practical Introduction to the Command Line',
      body: 'Coursera (Jul 2020)',
      year: 'Jul 2020',
      link: 'https://www.coursera.org/account/accomplishments/records/BPVS2PG5SHS8',
    },
    {
      name: 'Introduction to Bash Shell Scripting',
      body: 'Coursera (Jul 2020)',
      year: 'Jul 2020',
      link: 'https://www.coursera.org/account/accomplishments/records/PEAMTAHG4DES',
    },
    {
      name: 'Java Programming',
      body: 'Test Automation University (2020)',
      year: '2020',
      link: 'https://testautomationu.applitools.com/certificate/?id=3e19403a',
    },
    {
      name: 'Jest JavaScript Testing Framework',
      body: 'Test Automation University (2020)',
      year: '2020',
      link: 'https://testautomationu.applitools.com/certificate/?id=49e4e6a4',
    },
    {
      name: 'IntelliJ for Test Automation Engineers',
      body: 'Test Automation University (2020)',
      year: '2020',
      link: 'https://testautomationu.applitools.com/certificate/?id=7a182062',
    },
    {
      name: 'Web Element Locator Strategies',
      body: 'Test Automation University (2020)',
      year: '2020',
      link: 'https://testautomationu.applitools.com/certificate/?id=74416d7c',
    },
    {
      name: 'Data Analysis with Python',
      body: 'EMK Center (2020)',
      year: '2020',
      link: 'https://www.emk.com.bd/',
    },
    {
      name: 'Selenium with Java',
      body: 'IKM TeckChek (2020)',
      year: '2020',
      link: 'https://www.ikmnet.com/',
    },
    {
      name: '21st Century Core Employability Skills Program',
      body: 'Wadhwani Foundation (2020)',
      year: '2020',
      link: 'https://www.wfglobal.org/',
    },
    {
      name: 'Selenium WebDriver with Java',
      body: 'Test Automation University (2019)',
      year: '2019',
      link: 'https://testautomationu.applitools.com/certificate/?id=af3e358c',
    },
    {
      name: 'Setting a Foundation for Successful Test Automation',
      body: 'Test Automation University (2019)',
      year: '2019',
      link: 'https://testautomationu.applitools.com/certificate/?id=61425d5b',
    },
    {
      name: 'Programming Fundamentals',
      body: 'Duke University - Coursera (Oct 2018)',
      year: 'Oct 2018',
      link: 'https://www.coursera.org/account/accomplishments/records/D4GR59GSA39S',
    },
    {
      name: 'Front-End JavaScript Frameworks: AngularJS',
      body: 'The Hong Kong University of Science and Technology - Coursera (Jun 2018)',
      year: 'Jun 2018',
      link: 'https://www.coursera.org/account/accomplishments/records/6YT7SPE3YRXV',
    },
    {
      name: 'R Programming',
      body: 'The Johns Hopkins University - Coursera (Jul 2018)',
      year: 'Jul 2018',
      link: 'https://www.coursera.org/account/accomplishments/records/VX6MPSD2XKUH',
    },
    {
      name: 'The Data Scientist’s Toolbox',
      body: 'The Johns Hopkins University - Coursera (Jan 2017)',
      year: 'Jan 2017',
      link: 'https://www.coursera.org/account/accomplishments/records/9UTGBSSZZJ2T',
    },
    {
      name: 'Coursera Mentor Community and Training Course',
      body: 'Coursera (Mar 2017)',
      year: 'Mar 2017',
      link: 'https://www.coursera.org/account/accomplishments/records/HVHF4PPT9ECP',
    },
    {
      name: 'A Crash Course in Data Science',
      body: 'The Johns Hopkins University - Coursera (Dec 2016)',
      year: 'Dec 2016',
      link: 'https://www.coursera.org/account/accomplishments/records/DDSXKSF4YMU9',
    },
    {
      name: 'Managing an Agile Team',
      body: 'University of Virginia - Coursera (Aug 2016)',
      year: 'Aug 2016',
      link: 'https://www.coursera.org/account/accomplishments/records/9D6CBPAACBYX',
    },
    {
      name: 'HTML, CSS, and JavaScript',
      body: 'The Hong Kong University of Science and Technology - Coursera (Jul 2016)',
      year: 'Jul 2016',
      link: 'https://www.coursera.org/account/accomplishments/records/CSJNRVB4CYEF',
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
