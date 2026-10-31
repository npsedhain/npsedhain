export const site = {
  name: 'Anup Sedhain',
  role: 'Fullstack Engineer',
  company: 'Airvet',
  companyUrl: 'https://www.airvet.com',
  description:
    'Anup Sedhain is a fullstack engineer at Airvet building AI systems for veterinary care. Writing about software, AI engineering and life.',
  email: 'npsedhain@gmail.com',
  url: 'https://www.npsedhain.com',
  // Short plain-spoken bio for the home page hero.
  bio: [
    "I build AI things for veterinary telehealth at Airvet. Mostly that means looking after the Care Portal our vet techs live in, and teaching Claude to sort vet cases without making things up.",
    "I'm from Nepal, and I'm not a prodigy. I didn't write a line of code until high school. At Kathmandu University I started Dailo, which won the Hult Prize on campus and then lost the regional finals in Tokyo. I needed a real job that paid.",
    "So: Leapfrog in Kathmandu, then freelancing for Polydelic in Oslo (my sleepless era), then Airvet, then a master's at the University of Florida, then back to Airvet. About seven years of shipping things so far.",
  ],
  // One line about what I'm working on right now. Keep it current.
  now: 'Building veterinary case classification with Claude at Airvet.',
  socials: [
    { label: 'GitHub', href: 'https://github.com/npsedhain' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/npsedhain/' },
    { label: 'Twitter', href: 'https://twitter.com/codingfreshman' },
  ],
  nav: [
    { label: 'Writing', href: '/writing' },
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
