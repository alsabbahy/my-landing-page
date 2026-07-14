// Third-party imports
import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  HeartIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

// Local component imports
import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// Image imports
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import profilepic from '../images/profilepic-2.png';
import testimonialImage from '../images/testimonial.webp';
// Type imports
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Ahmed Alsabbahy — Senior Backend Engineer',
  description:
    'Senior Backend Engineer designing distributed systems and AI-driven platforms. Currently at Netguru; Owner of Alsabbahy Technology.',
  ogImageUrl: 'https://ahmed.alsabbahy.com/sabbahy.png',
  twitterCardType: 'summary_large_image',
  twitterTitle: 'Ahmed Alsabbahy — Senior Backend Engineer',
  twitterUrl: 'https://ahmed.alsabbahy.com',
  twitterDescription:
    'Senior Backend Engineer with deep expertise in Node.js/NestJS, FastAPI, PostgreSQL, and AWS. Building high-performance backends and AI-driven platforms.',
  twitterImageUrl: 'https://ahmed.alsabbahy.com/sabbahy.png',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Ahmed Alsabbahy.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I&apos;m an Egyptian <strong className="text-stone-100">Senior Backend Engineer</strong> focused on{' '}
        <strong className="text-stone-100">distributed systems</strong> and{' '}
        <strong className="text-stone-100">AI-driven platforms</strong>, currently at{' '}
        <strong className="text-stone-100">Netguru</strong> (DigitalZone Iraq engagement).
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I also own <strong className="text-stone-100">Alsabbahy Technology</strong>, shipping product and platform work
        alongside my primary engineering role. Outside work you&apos;ll find me in the{' '}
        <strong className="text-stone-100">gym</strong>, with family, or digging into new tech.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: 'https://calendly.com/ahmed-alsabbahy/free-discussion-meeting',
      text: 'Schedule a 30 min meeting',
      primary: true,
      Icon: CalendarIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Senior Backend Engineer with 8+ years designing and scaling high-performance backend systems and APIs. Deep expertise in Python, Node.js/NestJS, FastAPI, PostgreSQL, and AWS, with a strong track record in microservices, observability (LGTM), AI/LLM pipelines, and CI/CD. Owns services end-to-end — architecture through production — in startup and high-autonomy environments. Passionate about clean architecture, system reliability, and mentoring engineering teams. Concurrently Owner at Alsabbahy Technology.`,
  aboutItems: [
    {label: 'Location', text: 'Giza, Egypt · Open to Remote / GMT+3', Icon: MapIcon},
    {label: 'Nationality', text: 'Egyptian', Icon: FlagIcon},
    {label: 'Interests', text: 'Family, Tech, Clean architecture', Icon: SparklesIcon},
    {label: 'Study', text: 'Modern Academy Maadi — Electrical & Electronics Engineering', Icon: AcademicCapIcon},
    {
      label: 'Employment',
      text: 'Netguru (primary); Alsabbahy Technology (Owner, concurrent)',
      Icon: BuildingOffice2Icon,
    },
    {label: 'Hobbies', text: 'Gym, Reading, Cooking, Traveling', Icon: HeartIcon},
  ],
};

/**
 * Skills section — aligned to my-cv Core Skills rows
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {name: 'Arabic (Native)', level: 10},
      {name: 'English (Fluent)', level: 9},
    ],
  },
  {
    name: 'Backend',
    skills: [
      {name: 'Node.js / NestJS', level: 9},
      {name: 'Python / FastAPI', level: 9},
      {name: 'TypeScript', level: 8},
      {name: 'Django / Express', level: 7},
    ],
  },
  {
    name: 'Architecture & data',
    skills: [
      {name: 'Microservices / DDD', level: 8},
      {name: 'PostgreSQL / Prisma', level: 9},
      {name: 'Redis / BullMQ', level: 8},
      {name: 'Event-driven / AI pipelines', level: 8},
    ],
  },
  {
    name: 'Cloud, DevOps & observability',
    skills: [
      {name: 'AWS', level: 8},
      {name: 'Docker / CI/CD', level: 8},
      {name: 'OpenTelemetry / LGTM', level: 8},
      {name: 'React / Next.js', level: 7},
    ],
  },
];

/**
 * Portfolio section — curated flagships from my-cv
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'ChartiAI — Medical AI Note Platform',
    description:
      'Founding / product engineering: Whisper ASR + LLM SOAP-note pipeline, clinician + admin (RBAC, plans, Stripe), FastAPI/React stack.',
    image: porfolioImage1,
  },
  {
    title: 'Khuta — Multi-tenant Logistics (KSA)',
    description:
      'Full-stack platform: Next.js 15 + NestJS 11 monorepo for shipments, fleet, and real-time driver tracking on Supabase/Drizzle.',
    image: porfolioImage2,
  },
  {
    title: 'ABMFY — LinkedIn & Email Outreach Automation',
    description:
      'Backend architect: multi-tenant NestJS campaigns, BullMQ workers, enrichment, rate limits, quiet hours, and OTEL/LGTM observability.',
    image: porfolioImage3,
  },
  {
    title: 'Zillog (LogZilla) — Observability SaaS',
    description:
      'Founder / architect: NestJS + Next.js multi-tenant logging SaaS on Loki/Grafana with JWT tenant context and PayPal billing.',
    image: porfolioImage4,
  },
  {
    title: 'n8n Lead-Gen & Outreach System',
    description:
      'Self-hosted n8n + Postgres pipelines (web/Reddit → LLM qualify → outreach drafts) with a Next.js approve/reject dashboard.',
    image: porfolioImage5,
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: '2013 – 2018',
    location: 'Modern Academy Maadi, Cairo',
    title: 'B.Sc. Electrical & Electronics Engineering — Computer Engineering',
    content: <p>Undergraduate foundation in electrical and computer engineering.</p>,
  },
  {
    date: '2024',
    location: 'ALX Africa',
    title: 'ALX AI Career Essentials',
    content: <p>AI fundamentals and applied AI career essentials.</p>,
  },
  {
    date: '2022',
    location: 'Udacity',
    title: 'Advanced Cloud Developer Nanodegree',
    content: <p>AWS-focused fullstack and DevOps cloud development projects.</p>,
  },
  {
    date: 'LinkedIn Learning',
    location: 'LinkedIn',
    title: 'Building RESTful APIs with Node.js & Express',
    content: <p>API design and Node/Express REST fundamentals.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Apr 2025 – Present',
    location: 'Netguru · Remote — Primary employment',
    title: 'Senior Software Engineer',
    content: (
      <p>
        B2B contractor for DigitalZone Iraq as Senior Backend Engineer (Node.js/NestJS) on a multi-tenant e-commerce
        platform (consumer, merchant, dashboard APIs). Owned Checkout.com Flow payment sessions (tokenization, 3DS,
        webhooks, abandoned-session processors). Built NestJS modules on Prisma/PostgreSQL with BullMQ, Redis, Cognito,
        and OpenTelemetry; mentor teammates and translate product requirements into technical plans.
      </p>
    ),
  },
  {
    date: 'Apr 2025 – Present',
    location: 'Alsabbahy Technology · Concurrent ownership',
    title: 'Owner',
    content: (
      <p>
        Own Alsabbahy Technology alongside primary employment — founding and product/platform engineering across
        ChartiAI, Khuta, ABMFY, Zillog, and automation systems. Focus on clean architecture, reliability, and shipping
        AI- and ops-heavy products in high-autonomy environments.
      </p>
    ),
  },
  {
    date: 'Nov 2023 – Oct 2025',
    location: 'LXT · Egypt (Remote)',
    title: 'Senior Backend Engineer',
    content: (
      <p>
        Led end-to-end backend product delivery while keeping systems stable and scalable. Architected REST APIs and
        microservices with clean-architecture principles and TDD. Drove observability (structured logging, correlation
        IDs, tracing) and mentored juniors via 1:1s, PR reviews, and knowledge-sharing with Product.
      </p>
    ),
  },
  {
    date: 'Jul 2023 – Oct 2023',
    location: 'Sword Software Solutions · Egypt',
    title: 'Senior Fullstack Developer',
    content: (
      <p>
        Designed REST APIs (Django/Node) for internal and partner consumption; modernized legacy React modules.
        Integrated DataDog for request logging; participated in architecture and API design with stakeholders.
      </p>
    ),
  },
  {
    date: 'Feb 2022 – Jul 2023',
    location: 'Amjaad Technology · Cairo, Egypt',
    title: 'Backend Engineer',
    content: (
      <p>
        Reduced API latency by ~33% rewriting critical services in Node.js; migrated auth to JWT + 2FA. Built NestJS
        microservices for Payments and Notifications; integrated Paymob and Fawry. Acting Senior from Feb 2023 —
        mentoring, reviews, and Agile practices.
      </p>
    ),
  },
  {
    date: 'Jan 2021 – Feb 2022',
    location: 'Symbios Consulting · Cairo, Egypt',
    title: 'Software Engineer',
    content: (
      <p>
        Built full-stack MERN/Django apps; delivered RPA for SIDC invoicing and an Azure ML audio filter service (React
        + Django). Technology consulting for client integrations.
      </p>
    ),
  },
  {
    date: 'Aug 2020 – Dec 2020',
    location: 'Override · Cairo, Egypt',
    title: 'Backend Developer',
    content: (
      <p>
        Built NestJS/Node REST backends for hiring, delivery, e-learning, and e-commerce products; integrated PayPal.
      </p>
    ),
  },
];

/**
 * Testimonial section — Aly Abdelrahman LinkedIn recommendation
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Aly Abdelrahman',
      text: 'Ahmed is a great team leader with a lot of software & hardware skills which allow him to be an effective team member also with a lot of soft skills he makes any project organized and good planned',
      image:
        'https://media.licdn.com/dms/image/v2/D5603AQEp623K8T2Puw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1713224286571?e=2147483647&v=beta',
    },
  ],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description:
    'The fastest way to reach me is email. For a live conversation, use the Schedule CTA above or connect on LinkedIn or GitHub.',
  items: [
    {
      type: ContactType.Email,
      text: 'ahmed@alsabbahy.com',
      href: 'mailto:ahmed@alsabbahy.com',
    },
    {
      type: ContactType.Location,
      text: 'Giza, Egypt',
      href: 'https://www.google.com/maps/place/Giza,+Egypt',
    },
    {
      type: ContactType.LinkedIn,
      text: 'ahmedmostafaalsabbahy',
      href: 'https://www.linkedin.com/in/ahmedmostafaalsabbahy/',
    },
    {
      type: ContactType.Github,
      text: 'alsabbahy',
      href: 'https://github.com/alsabbahy',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/alsabbahy'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/13487030/ahmed-alsabbahy'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ahmedmostafaalsabbahy/'},
];
