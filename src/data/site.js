export const site = {
  name: 'Devowll',
  mark: 'devowll',
  url: import.meta.env.VITE_SITE_URL || 'https://devowll.com',
  email: 'hello@devowll.com',
  description:
    'Devowll is a studio for websites, products, and AI-assisted workflows. Design, engineering, and launch in one team.',
};

export const nav = [
  { label: 'Work', to: '/#work' },
  { label: 'Services', to: '/#services' },
  { label: 'Insights', to: '/#insights' },
  { label: 'Pricing', to: '/#pricing' },
  { label: 'Company', to: '/about' },
];

export const projects = [
  {
    slug: 'northline',
    name: 'Northline',
    sector: 'Commerce',
    summary: 'A storefront rebuilt around clearer product discovery and a checkout people finish.',
    outcome: 'The catalog, the story, and the cart now live in one system the team can edit without a developer on every change.',
    stats: [
      { value: '6 wks', label: 'First release' },
      { value: '18', label: 'Templates' },
      { value: '1', label: 'Checkout' },
      { value: '3', label: 'Markets' },
    ],
    colors: ['#14210f', '#d6ff4a', '#f2c14e'],
  },
  {
    slug: 'harbor',
    name: 'Harbor',
    sector: 'Product',
    summary: 'A launch site that explains a technical product without flattening it.',
    outcome: 'Sales and product now share one narrative, from the first screen through the demo request.',
    stats: [
      { value: '5 wks', label: 'To launch' },
      { value: '12', label: 'Screens' },
      { value: '4', label: 'Proof points' },
      { value: '2', label: 'Audiences' },
    ],
    colors: ['#101820', '#9ad7ff', '#f4f4f1'],
  },
  {
    slug: 'fieldnote',
    name: 'Fieldnote',
    sector: 'Brand',
    summary: 'A visual system and marketing site for a studio that had outgrown its first identity.',
    outcome: 'Type, color, and page structure now travel from the site into decks and proposals.',
    stats: [
      { value: '4 wks', label: 'Identity' },
      { value: '9', label: 'Pages' },
      { value: '1', label: 'System' },
      { value: '6', label: 'Components' },
    ],
    colors: ['#1c140f', '#ffb086', '#f4f4f1'],
  },
  {
    slug: 'lumen',
    name: 'Lumen',
    sector: 'Platform',
    summary: 'An internal desk for a services team that was running work out of five tools.',
    outcome: 'Requests, status, and handoff live in one place, with the repetitive routing taken out of the inbox.',
    stats: [
      { value: '8 wks', label: 'Build' },
      { value: '22', label: 'Views' },
      { value: '4', label: 'Roles' },
      { value: '1', label: 'Queue' },
    ],
    colors: ['#161226', '#c7b6ff', '#d6ff4a'],
  },
  {
    slug: 'kindred',
    name: 'Kindred',
    sector: 'Care',
    summary: 'A booking experience for a practice with more than one location.',
    outcome: 'People can see availability, choose a location, and arrive with the right context already collected.',
    stats: [
      { value: '7 wks', label: 'To launch' },
      { value: '3', label: 'Locations' },
      { value: '11', label: 'Flows' },
      { value: '1', label: 'Calendar' },
    ],
    colors: ['#10211c', '#8ef0c4', '#f4f4f1'],
  },
];

export const capabilities = [
  {
    index: '001',
    title: 'Product & brand sites',
    text: 'Marketing sites and brand platforms with a point of view. We shape the story, the interface, and the system your team updates after launch.',
  },
  {
    index: '002',
    title: 'Interfaces & design systems',
    text: 'Product UI, component libraries, and the flows people actually finish. The visual language and the engineering stay in the same conversation.',
  },
  {
    index: '003',
    title: 'Automation & AI workflows',
    text: 'Practical workflows that take repetitive work off a team. We use models where they help — drafting, routing, support, internal tools — and design the human path around them.',
  },
];

export const services = [
  {
    title: 'Web platforms',
    text: 'Marketing sites, landing systems, and content structures a team can keep current.',
  },
  {
    title: 'Product design',
    text: 'Interfaces, prototypes, and design systems tied to how the product actually ships.',
  },
  {
    title: 'Commerce',
    text: 'Catalogs, checkout, and the pages that have to earn the next step.',
  },
  {
    title: 'Growth systems',
    text: 'Campaign pages, lifecycle touchpoints, and measurement that matches the work.',
  },
];

export const process = [
  {
    index: '01',
    title: 'Listen',
    text: 'We map the offer, the audience, and the constraints. The goal is a short list of work that will actually move the business.',
  },
  {
    index: '02',
    title: 'Shape',
    text: 'Narrative, information architecture, and interface direction land before production spreads. You can see the system before it is built.',
  },
  {
    index: '03',
    title: 'Build',
    text: 'Design and engineering move in the same cycle. You review working software, not a deck that still has to be interpreted.',
  },
  {
    index: '04',
    title: 'Launch',
    text: 'We release, watch the first real use, and leave you with a codebase and a content model your team can own.',
  },
];

export const team = [
  {
    name: 'Mohammad Haroon',
    role: 'Founder',
    text: 'I keep the work specific. The site, the product, and the workflow should feel like one decision, not three vendors.',
  },
  {
    name: 'Usman Ali',
    role: 'Engineering',
    text: 'I build the thing people touch. Fast pages, clear systems, and code a team can keep working in after we step back.',
  },
  {
    name: 'Hira Shah',
    role: 'Design',
    text: 'I design the path, not just the frame. If a screen needs a paragraph to explain itself, the interface is not finished.',
  },
  {
    name: 'Bilal Ahmed',
    role: 'Partnerships',
    text: 'I make the engagement legible. Scope, timing, and what “done” means stay visible from the first conversation.',
  },
];

export const notes = [
  {
    quote: 'The first version went live while the old site was still the one we were apologizing for.',
    name: 'Product lead',
    org: 'Northline',
  },
  {
    quote: 'We stopped explaining the product in calls. The site started doing that work.',
    name: 'Founder',
    org: 'Harbor',
  },
  {
    quote: 'The queue used to live in inboxes. Now the team can see the work without asking where it went.',
    name: 'Operations',
    org: 'Lumen',
  },
  {
    quote: 'People book the right location the first time. That was the whole brief, and it held.',
    name: 'Practice manager',
    org: 'Kindred',
  },
];

export const plans = [
  {
    id: 'core',
    name: 'Core',
    monthly: 2400,
    annual: 1920,
    text: 'A focused site or landing system.',
    features: ['One primary website', 'Design and build', 'Editable content model', 'Launch support'],
  },
  {
    id: 'growth',
    name: 'Growth',
    monthly: 4800,
    annual: 3840,
    text: 'A product presence plus the pages around it.',
    featured: true,
    features: ['Multi-page product site', 'Design system starter', 'Two release cycles', 'Priority replies'],
  },
  {
    id: 'pro',
    name: 'Pro',
    monthly: 7200,
    annual: 5760,
    text: 'Product UI, site, and a working workflow.',
    features: ['Interface and web', 'Automation workflow', 'Shared component library', 'Weekly working session'],
  },
  {
    id: 'scale',
    name: 'Scale',
    monthly: null,
    annual: null,
    text: 'A dedicated studio partnership.',
    features: ['Full product squad', 'Ongoing design and build', 'Custom integrations', 'Named lead'],
  },
];

export const faqs = [
  {
    q: 'How long does a typical build take?',
    a: 'A focused marketing site is often five to seven weeks. A product interface or a workflow with integrations takes longer, and we say so before the work starts.',
  },
  {
    q: 'Do we own the code and the design?',
    a: 'Yes. You own the repository, the design files, and the accounts. We do not hold the work hostage at the end of an engagement.',
  },
  {
    q: 'Can you work with the stack we already have?',
    a: 'Usually. We ship most new sites on React and a modern host, and we integrate with the CMS, commerce, or internal tools you already rely on.',
  },
  {
    q: 'Where does AI actually show up?',
    a: 'Where it removes a repeated task: sorting requests, drafting first passes, answering from your own content, or moving data between tools. We do not bolt a chatbot onto a site and call it a strategy.',
  },
  {
    q: 'How do you price the work?',
    a: 'Partnerships on this page are starting points, billed monthly. A fixed project scope is available when the outcome is a single launch. Either way, the number is agreed before production.',
  },
  {
    q: 'What happens after launch?',
    a: 'You can run it, or stay on a partnership for the next releases. We leave documentation and a content model so the first option is real.',
  },
  {
    q: 'Who do we talk to?',
    a: 'A small team. Design, engineering, and the person who scoped the work stay on it. You are not handed to a rotating queue.',
  },
];

export const articles = [
  {
    slug: 'what-a-launch-site-is-for',
    category: 'Product',
    title: 'What a launch site is actually for',
    excerpt: 'A launch site is not a brochure. It is the shortest honest path from interest to a next step.',
    author: 'Hira Shah',
    read: '6 min',
    colors: ['#1a140c', '#f2c14e', '#f4f4f1'],
    body: [
      'Most launch sites try to say everything the company has ever believed. The page gets heavier, and the next step gets harder to find.',
      'A useful launch site does three things. It names the person it is for. It shows the product in the language of their problem. It offers one next step that a real human will answer.',
      'The design has to carry that structure. Huge type is not a point of view. A point of view is knowing which sentence can be the only sentence on the first screen.',
      'When we build these, we write the page before we decorate it. If the story does not hold in plain text, motion will not save it.',
    ],
  },
  {
    slug: 'design-systems-that-can-change',
    category: 'Design',
    title: 'Ship a design system without freezing the product',
    excerpt: 'A system should make the next screen faster, not turn every change into a committee.',
    author: 'Mohammad Haroon',
    read: '7 min',
    colors: ['#141226', '#c7b6ff', '#d6ff4a'],
    body: [
      'Teams ask for a design system when the product has started to look like several products. The risk is building a library so complete that shipping a new idea feels like breaking a rule.',
      'Start with the screens you are about to build, not a fictional inventory of every button you might need. Tokens, type, and a handful of components will outrun a hundred unused variants.',
      'Write down what is allowed to change. Color and type can be strict. Layout often should not be. Products live in awkward sizes and half-finished states.',
      'The system is working when a new page is mostly assembly. It is failing when every page needs a meeting to approve a margin.',
    ],
  },
  {
    slug: 'where-automation-helps',
    category: 'Workflow',
    title: 'Where automation helps, and where it gets in the way',
    excerpt: 'The useful question is which hour disappears, not which model is newest.',
    author: 'Usman Ali',
    read: '5 min',
    colors: ['#10211c', '#8ef0c4', '#f4f4f1'],
    body: [
      'Automation is easy to demo and easy to regret. A workflow that saves a minute and creates a new place to check has not helped.',
      'We look for work that is repeated, structured, and boring to do well: routing a request, drafting a reply from known answers, moving a record from one tool to another.',
      'Someone still owns the exception. If the system cannot show its work, the team will route around it within a week.',
      'Put the model behind a job the team already has a name for. If you cannot name the job, you are not ready to automate it.',
    ],
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getArticle(slug) {
  return articles.find((article) => article.slug === slug);
}
