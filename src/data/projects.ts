// Selected work for the home page. Leave `href` out for internal systems with no public page.

export interface Project {
  name: string;
  blurb: string;
  href?: string;
  linkLabel?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    name: 'Atlas',
    blurb: "A RAG product I'm building at Airvet. It's where most of my time goes right now.",
    tags: ['RAG', 'Claude API', 'Python'],
  },
  {
    name: 'Vet case classification',
    blurb: 'Teaching Claude to classify veterinary cases, with chain-of-thought prompts and contrastive few-shot examples.',
    tags: ['Python', 'Claude API'],
  },
  {
    name: 'MCP release pipeline',
    blurb: 'Agents that tie Jira, Figma and GitHub together to run regression tests. QA time dropped 80% and releases went from 4 weeks to 2.',
    tags: ['MCP', 'Jira', 'GitHub'],
  },
  {
    name: 'Spotting AI posts on BlueSky',
    blurb: 'Research at UF. BERT, K-means and TF-IDF over 2M+ events, plus a temporal graph to see how attitudes shift.',
    tags: ['Python', 'BERT', 'NetworkX'],
  },
  {
    name: 'Care Portal',
    blurb: 'The real-time tool Airvet vet techs used to talk with pet parents. I built it from scratch back in 2021.',
    tags: ['Go', 'React', 'SSE', 'Redis'],
  },
  {
    name: 'airvet.com',
    blurb: 'Moved the marketing site off a legacy WordPress setup to Next.js, with WordPress kept around as a headless CMS.',
    href: 'https://www.airvet.com',
    linkLabel: 'airvet.com',
    tags: ['Next.js', 'WordPress'],
  },
  {
    name: 'Rubato',
    blurb: 'An artist booking marketplace. I worked on search, contract signing and subscriptions.',
    href: 'https://www.polydelic.com/case-studies',
    linkLabel: 'polydelic.com',
    tags: ['GraphQL', 'Elasticsearch'],
  },
  {
    name: 'Ultify',
    blurb: 'A real-time knowledge sharing platform. Video transcoding, live streams and peer-to-peer calls.',
    href: 'https://ultify.io/',
    linkLabel: 'ultify.io',
    tags: ['WebRTC', 'Mux', 'Node.js'],
  },
  {
    name: 'vDom',
    blurb: 'A tiny React clone with its own diffing, written to find out how the real one works.',
    href: 'https://github.com/npsedhain/vDom',
    linkLabel: 'github',
    tags: ['JavaScript'],
  },
  {
    name: 'reddit-clone',
    blurb: 'A Reddit backend simulation in Go with actors, nested comments and karma.',
    href: 'https://github.com/npsedhain/reddit-clone',
    linkLabel: 'github',
    tags: ['Go', 'Proto.Actor'],
  },
];
