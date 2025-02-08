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
    date: 'Sep 2013 - May 2018',
    location: 'Faculty of Engineering, Modern Academy',
    title: 'Bachelor of Engineering in Electrical Engineering',
    content: (
      <p>
        I studied Electrical Engineering at Modern Academy, which is one of the best engineering schools in Egypt. I
        learned a lot about the principles of electrical engineering, and I also majored in computer engineering.
      </p>
    ),
  },
  {
    date: 'October 2022 - December 2022',
    location: 'Udacity',
    title: 'Advanced Cloud Developer Nanodegree',
    content: (
      <p>
        I studied Advanced Cloud Developer Nanodegree at Udacity, which I completed in 3 months. I learned a lot about
        the principles of cloud development, and I also made a lot of projects using AWS services, Fullstack
        development, and DevOps.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'November 2023 - Present',
    location: 'LXT, inc.',
    title: 'Senior Software Engineer',
    content: (
      <p>
        I'm working at{' '}
        <a className="text-blue-500 font-bold" href="https://lxt.ai/">
          LXT
        </a>
        , inc. as a Senior Software Engineer. I'm responsible for the development of the LXT data platform. I'm also
        responsible for the mentoring of the junior engineers.
      </p>
    ),
  },
  {
    date: 'July 2023 - October 2023',
    location: 'Sword Egypt',
    title: 'Senior Fullstack Developer',
    content: (
      <p>
        I was working at{' '}
        <a className="text-blue-500 font-bold" href="https://swordeg.com/">
          Sword Egypt
        </a>{' '}
        as a Senior Fullstack Developer. I was responsible for the developing and mainting a Facility Management System
        in React and Python Django. I was also responsible for part of the DevOps Operations on AWS, and the mentoring
        of the junior engineers.
      </p>
    ),
  },
  {
    date: 'February 2022 - July 2023',
    location: 'Amjaad Technology',
    title: 'Node.js Developer',
    content: (
      <p>
        I was working at{' '}
        <a className="text-blue-500 font-bold" href="https://amjaadiot.com/">
          Amjaad Technology
        </a>{' '}
        as a Node.js Developer. I was responsible for the development of the{' '}
        <a
          className="text-blue-500 font-bold"
          href="https://play.google.com/store/apps/details?id=com.thed.iometer&hl=en">
          IOMeter
        </a>{' '}
        backend API services, which is a solution for smart meters, energy management and customer accounts billing for
        multiple utilities in (Egypt, Jordan, Saudi Arabia, Turkey, Nigeria, and UAE).
      </p>
    ),
  },
  {
    date: 'January 2021 - January 2022',
    location: 'Symbios Consulting',
    title: 'Software Engineer & Technology Consultant',
    content: (
      <p>
        I was working at{' '}
        <a className="text-blue-500 font-bold" href="https://symbios-consulting.com/">
          Symbios Consulting
        </a>{' '}
        as a Software Engineer & Technology Consultant. I was responsible for the development of the{' '}
        <a className="text-blue-500 font-bold" href="http://journey-opex.com/">
          Operational Excellence
        </a>{' '}
        platform. I was also a consultant for the company to help them with their clients needs in technology and
        software integrations.
      </p>
    ),
  },
  {
    date: 'August 2020 - December 2020',
    location: 'Override',
    title: 'Backend Developer',
    content: (
      <p>
        Override a software house, I was working at Override as a Backend Developer. I was responsible for the
        development of Backend projects using Node.js, Nest.js.
      </p>
    ),
  },
];

/**
 * Testimonial section */
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
