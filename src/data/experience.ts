// Work history for the home page, newest first. Source of truth: resume.latex.
// Keep `summary` to one short sentence, in my own voice.

export interface Role {
  start: string; // display string, e.g. 'Jan 2026'
  end: string; // 'Present' or display string
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  summary: string;
  tags: string[];
}

export interface School {
  start: string;
  end: string;
  school: string;
  schoolUrl?: string;
  degree: string;
}

export const roles: Role[] = [
  {
    start: 'Jan 2026',
    end: 'Present',
    title: 'Fullstack Engineer',
    company: 'Airvet',
    companyUrl: 'https://www.airvet.com',
    location: 'Los Angeles, CA',
    summary:
      'Same Airvet, new title. I own the Care Portal, and spend the rest of my time getting Claude to classify vet cases well.',
    tags: ['Next.js', 'TypeScript', 'Go', 'Python', 'Claude API'],
  },
  {
    start: 'May 2025',
    end: 'Dec 2025',
    title: 'Software Engineer',
    company: 'Airvet',
    companyUrl: 'https://www.airvet.com',
    location: 'Los Angeles, CA',
    summary:
      'My second leg at Airvet. Led the pet parent web app, and wired up MCP agents so regression testing stopped eating our release weeks.',
    tags: ['Next.js', 'Go', 'Twilio', 'AWS', 'MCP', 'LangChain'],
  },
  {
    start: 'Jan 2025',
    end: 'Jun 2025',
    title: 'Graduate Research Assistant',
    company: 'University of Florida',
    companyUrl: 'https://www.ufl.edu',
    location: 'Gainesville, FL',
    summary:
      'Ran 2M+ BlueSky events through a pipeline on HiPerGator to spot AI-written posts and watch how attitudes drift over time.',
    tags: ['Python', 'BERT', 'NetworkX', 'HPC'],
  },
  {
    start: 'May 2021',
    end: 'Jul 2024',
    title: 'Software Engineer',
    company: 'Airvet',
    companyUrl: 'https://www.airvet.com',
    location: 'Los Angeles, CA',
    summary:
      'Built the real-time Care Portal from scratch, rebuilt airvet.com on Next.js, and made a lot of admin tools nobody thanks you for.',
    tags: ['React', 'Redux', 'Go', 'Redis', 'Next.js'],
  },
  {
    start: 'Aug 2020',
    end: 'Jun 2021',
    title: 'Software Engineer (Freelance)',
    company: 'Polydelic',
    companyUrl: 'https://www.polydelic.com',
    location: 'Oslo, Norway',
    summary:
      'Freelanced on a handful of SaaS products for Norwegian startups, including a video platform and an artist booking marketplace. This was my sleepless era.',
    tags: ['React', 'Node.js', 'GraphQL', 'AWS', 'WebRTC'],
  },
  {
    start: 'Jul 2019',
    end: 'Dec 2020',
    title: 'Software Engineer',
    company: 'Leapfrog Technology',
    companyUrl: 'https://www.lftechnology.com',
    location: 'Kathmandu, Nepal',
    summary:
      'My first real job. Worked on a project management platform and a bioinformatics app for protein workflows, and learned what production means.',
    tags: ['Firebase', 'LitElement', 'Micronaut', 'MySQL'],
  },
];

export const education: School[] = [
  {
    start: '2024',
    end: '2025',
    school: 'University of Florida',
    schoolUrl: 'https://www.ufl.edu',
    degree: 'MS, Computer Science',
  },
  {
    start: '2015',
    end: '2019',
    school: 'Kathmandu University',
    schoolUrl: 'https://ku.edu.np',
    degree: 'BE, Computer Engineering',
  },
];
