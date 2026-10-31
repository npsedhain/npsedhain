export const site = {
  name: 'Anup Sedhain',
  role: 'Fullstack Engineer',
  company: 'Airvet',
  companyUrl: 'https://www.airvet.com',
  description:
    'Anup Sedhain is a fullstack engineer at Airvet building AI systems for veterinary care. Writing about software, AI engineering and life.',
  email: 'npsedhain@gmail.com',
  url: 'https://www.npsedhain.com',
  // One line about what I'm working on right now. Keep it current.
  now: 'Building veterinary case classification with Claude at Airvet.',
  socials: [
    { label: 'GitHub', href: 'https://github.com/npsedhain' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/npsedhain/' },
    { label: 'Twitter', href: 'https://twitter.com/codingfreshman' },
  ],
  nav: [
    { label: 'Writing', href: '/writing' },
    { label: 'About', href: '/about' },
    { label: 'Uses', href: '/uses' },
    { label: 'Resume', href: '/resume.pdf' },
  ],
  // giscus comments. Fill these in once the public GitHub repo has Discussions
  // enabled (https://giscus.app generates the ids). Comments stay hidden until then.
  giscus: {
    repo: '',
    repoId: '',
    category: 'Announcements',
    categoryId: '',
  },
} as const;
