export const site = {
  name: 'Anup Sedhain',
  role: 'Fullstack AI Engineer',
  company: 'Airvet',
  companyUrl: 'https://www.airvet.com',
  description:
    'Anup Sedhain is a fullstack AI engineer at Airvet building AI systems for veterinary care. Writing about software, AI engineering and life.',
  email: 'npsedhain@gmail.com',
  url: 'https://www.npsedhain.com',
  // Short plain-spoken bio for the home page hero.
  bio: [
    "I'm a fullstack AI engineer building AI products for veterinary telehealth. Right now that mostly means building <a href=\"https://atlas.vet\">Atlas</a> at Airvet, where vets ask clinical questions and get answers that quote their sources, and making sure it doesn't make things up.",
    "I started dabbling with the web back in high school. Now I try out new AI products, build something small with each one, and <a href=\"/writing\">write</a> about what works and what doesn't.",
    "This is how my career has been so far: Leapfrog in Kathmandu, then freelancing for Polydelic in Oslo (my sleepless era), then Airvet, then a move to the U.S. for a master's at the University of Florida, then back to Airvet. About seven years of shipping things so far.",
  ],
  // One line about what I'm working on right now. Keep it current.
  now: 'Building Atlas at Airvet, cited clinical answers for vets.',
  socials: [
    { label: 'GitHub', href: 'https://github.com/npsedhain' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/npsedhain/' },
    { label: 'X', href: 'https://x.com/npsedhain' },
  ],
  nav: [
    { label: 'Writing', href: '/writing' },
    { label: 'Resume', href: '/resume.pdf' },
  ],
  // giscus comments, stored as GitHub Discussions on this site's repo (ids from https://giscus.app).
  giscus: {
    repo: 'npsedhain/npsedhain',
    repoId: 'R_kgDOG1TY_Q',
    category: 'Announcements',
    categoryId: 'DIC_kwDOG1TY_c4DKF63',
  },
} as const;
