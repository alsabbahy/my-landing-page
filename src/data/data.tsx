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
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
// Image imports
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
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
  title: 'Sabbahy Codes',
  description: 'Sabbahy Codes is a website built with Next.js, Tailwind CSS, and TypeScript.',
  ogImageUrl: 'https://sabbahy.codes/sabbahy.png',
  twitterCardType: 'summary_large',
  twitterTitle: 'Code Chronicles',
  twitterCreator: '@code__chronicle',
  twitterUrl: 'https://x.com/code__chronicle',
  twitterDescription:
    "Software Engineer, Fullstack developer, React, Node, TypeScript, JavaScript, E-Commerce, Web Application developer, It's my pleasure to be of service.",
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
  name: `I'm Ahmed AlSabbahy.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm an Egyptian <strong className="text-stone-100">Senior Software Engineer</strong>, currently working at{' '}
        <strong className="text-stone-100">LXT</strong> maintaining and developing the LXT data platform.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Gym</strong>, enjoying my
        time with my family, or learning new things <strong className="text-stone-100">Tech</strong>.
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
  description: `At LXT, I design secure and efficient backend solutions using Clean Coding and FastAPI. I collaborate closely with the Product team to translate technical requirements into robust solutions and mentor junior engineers to foster technical excellence.

With a Nanodegree in Advanced Cloud Development and a React Developer certification, alongside experience at Sword Egypt and Amjaad Technology, I combine a strong Computer Software Engineering foundation with hands-on expertise to drive successful backend projects.`,
  aboutItems: [
    {label: 'Location', text: 'Cairo, Egypt', Icon: MapIcon},
    {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Egyptian', Icon: FlagIcon},
    {label: 'Interests', text: 'Family, Tech', Icon: SparklesIcon},
    {label: 'Study', text: 'Faculty of Engineering, Modern Academy', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'LXT, inc.', Icon: BuildingOffice2Icon},
    {label: 'Hobbies', text: 'Gym, Reading, Cooking, Traveling', Icon: HeartIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Arabic',
        level: 10,
      },
      {
        name: 'English',
        level: 8,
      },
      {
        name: 'Dutch',
        level: 2,
      },
    ],
  },
  {
    name: 'Programming languages',
    skills: [
      {
        name: 'Javascript',
        level: 9,
      },
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 8,
      },
      {
        name: 'Golang',
        level: 3,
      },
      {
        name: 'C#',
        level: 5,
      },
    ],
  },

  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 9,
      },
      {
        name: 'Nest.js',
        level: 8,
      },
      {
        name: 'FastAPI',
        level: 8,
      },
      {
        name: 'Golang',
        level: 2,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'ahmed@sabbahy.codes',
      href: 'mailto:ahmed@sabbahy.codes',
    },
    {
      type: ContactType.Location,
      text: '6th of October City, Giza Governorate, Egypt',
      href: 'https://www.google.com/maps/place/6th+of+October+City,+Giza+Governorate/@29.9646504,30.860242,31254m/data=!3m2!1e3!4b1!4m15!1m8!3m7!1s0x548f738bddb06171:0x38e8f3741ebb48ed!2sVictoria,+BC,+Canada!3b1!8m2!3d48.4284207!4d-123.3656444!16zL20vMDd5cHQ!3m5!1s0x145855e126df199d:0x24a6cf9d2fda5678!8m2!3d29.9611066!4d30.9295985!16zL20vMGJtMjVq?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
    },
    {
      type: ContactType.Instagram,
      text: '@ahmedsabbahy',
      href: 'https://www.instagram.com/sabbahy.codes/',
    },
    {
      type: ContactType.Github,
      text: 'ahmedsabbahy',
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
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/sabbahy.codes/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/@code__chronicle'},
];
