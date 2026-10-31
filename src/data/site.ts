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
    "I live in the U.S. and started dabbling with the web and the internet back in high school. These days a new AI product shows up every week, and I try out as many as I can. What is it really built for? What can you make with it? Where is it good, and where does it fall apart? I build something small with each one, or just put it through its paces, and write about what I find. That's what most of the <a href=\"/writing\">writing</a> here is going to be.",
    "This is how my career has been so far: Leapfrog in Kathmandu, then freelancing for Polydelic in Oslo (my sleepless era), then Airvet, then a master's at the University of Florida, then back to Airvet. About seven years of shipping things so far.",
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
