import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage0 from '../images/portfolio/portfolio-0.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.webp';
import porfolioImage2 from '../images/portfolio/portfolio-2.webp';
import porfolioImage3 from '../images/portfolio/portfolio-3.webp';
import porfolioImage4 from '../images/portfolio/portfolio-4.webp';
import porfolioImage5 from '../images/portfolio/portfolio-5.webp';
import porfolioImage6 from '../images/portfolio/portfolio-6.webp';
import porfolioImage7 from '../images/portfolio/portfolio-7.webp';
import porfolioImage8 from '../images/portfolio/portfolio-8.webp';
import porfolioImage9 from '../images/portfolio/portfolio-9.webp';
import porfolioImage10 from '../images/portfolio/portfolio-10.webp';
import porfolioImage11 from '../images/portfolio/portfolio-11.webp';
import profilepic from '../images/profilepic.webp';
import testimonialImage from '../images/testimonial.webp';
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
  title: 'George Theodorou Portfolio',
  description: 'George Theodorou Portfolio',
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
  name: `I'm George Theodorou.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Greece based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        at <strong className="text-stone-100">Elegento</strong> helping build a modern, mobile-first and unique e-shops.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Electric Guitar</strong>,
        playing some <strong className="text-stone-100">Games</strong>, or exploring the beautiful{' '}
        <strong className="text-stone-100">World</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
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
  description: `My primary experience is in the creation of successful websites, e-shops and mobile apps that are fast, easy to use, and built with best practices. I write standards-based code that is semantic, accessible, search-engine friendly, easy to maintain, cross-browser compatible, and performant. I can quickly and efficiently join your team using continuous-integration methods and tools such as Git and Agile.`,
  aboutItems: [
    {label: 'Location', text: 'Larissa, Greece', Icon: MapIcon},
    {label: 'Age', text: '31', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Greek', Icon: FlagIcon},
    {label: 'Interests', text: 'Metal Music, Traveling, Gaming', Icon: SparklesIcon},
    {label: 'Study', text: 'Aristotle University of Thessaloniki', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Elegento', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken Languages',
    skills: [
      {
        name: 'Greek',
        level: 10,
      },
      {
        name: 'English',
        level: 8,
      },
    ],
  },
  {
    name: 'CMS',
    skills: [
      {
        name: 'Magento',
        level: 10,
      },
      {
        name: 'Wordpress',
        level: 8,
      },
    ],
  },
  {
    name: 'Frontend Development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Alpine',
        level: 8,
      },
      {
        name: 'Tailwind',
        level: 8,
      },
      {
        name: 'Typescript',
        level: 5,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
      {
        name: 'HTML',
        level: 10,
      },
      {
        name: 'CSS',
        level: 9,
      },
      {
        name: 'SASS',
        level: 8,
      },
      {
        name: 'LESS',
        level: 10,
      },
      {
        name: 'Bootstrap',
        level: 6,
      },
      {
        name: 'jQuery',
        level: 10,
      },
      {
        name: 'Gatsby',
        level: 7,
      },
      {
        name: 'Next.js',
        level: 8,
      },
      {
        name: 'Google Tag Manager',
        level: 10,
      },
      {
        name: 'Google Analytics',
        level: 8,
      },
      {
        name: 'SEO',
        level: 9,
      },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      {
        name: 'Firebase',
        level: 8,
      },
      {
        name: 'MySQL',
        level: 9,
      },
      {
        name: 'PostgreSQL',
        level: 9,
      },
      {
        name: 'E-Shop Connector (PHP)',
        level: 10,
      },
      {
        name: 'Node.js',
        level: 7,
      },
    ],
  },
  {
    name: 'Mobile Development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Xamarin',
        level: 6,
      },
      {
        name: 'Ionic',
        level: 5,
      },
    ],
  },
  {
    name: 'Game Development',
    skills: [
      {
        name: 'Unity',
        level: 7,
      },
      {
        name: 'Godot',
        level: 6,
      },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'C',
        level: 10,
      },
      {
        name: 'C++',
        level: 9,
      },
      {
        name: 'C#',
        level: 9,
      },
      {
        name: 'Javascript',
        level: 10,
      },
      {
        name: 'PHP',
        level: 10,
      },
      {
        name: 'Java',
        level: 6,
      },
    ],
  },
  {
    name: 'Additional Skills',
    skills: [
      {
        name: 'Photoshop',
        level: 8,
      },
      {
        name: 'Adobe XD',
        level: 8,
      },
      {
        name: 'Github',
        level: 10,
      },
      {
        name: 'Bitbucket',
        level: 10,
      },
      {
        name: 'Matlab',
        level: 8,
      },
      {
        name: 'OpenMP',
        level: 5,
      },
      {
        name: 'Cuda',
        level: 7,
      },
      {
        name: 'OpenACC',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Elegento Projects',
    description: 'Every Elegento project I contributed to.',
    url: 'https://www.elegento.com/projects',
    image: porfolioImage0,
  },
  {
    title: 'Math App',
    description: 'A Xamarin App for Math Teachers.',
    url: 'https://github.com/thdgeorge/Xamarin-Math',
    image: porfolioImage1,
  },
  {
    title: 'Crazy Math Games',
    description: 'A React Native Game.',
    url: 'https://github.com/thdgeorge/React-Native-CrazyMathGame',
    image: porfolioImage2,
  },
  {
    title: 'Crazy Tools',
    description: 'A React Native App with Several Tools.',
    url: 'https://github.com/thdgeorge/React-Native-CrazyTools',
    image: porfolioImage3,
  },
  {
    title: 'Space Shooter',
    description: 'A Unity 2D Mobile Game.',
    url: 'https://github.com/thdgeorge/Unity-Space-Shooter',
    image: porfolioImage4,
  },
  {
    title: 'React Native E-Shop',
    description: 'A React Native E-Shop App.',
    url: 'https://github.com/thdgeorge/React-Native-MyShop',
    image: porfolioImage5,
  },
  {
    title: 'E-Shop (UI Only)',
    description: 'An Ionic App (UI Only).',
    url: 'https://github.com/thdgeorge/Ionic_RoyaltyApp',
    image: porfolioImage6,
  },
  {
    title: 'E-Shop',
    description: 'A WordPress WooCommerce E-Shop.',
    url: 'https://github.com/thdgeorge/e-shop-woocommerce',
    image: porfolioImage7,
  },
  {
    title: 'Fitness Blog',
    description: 'A WordPress Fitness Blog.',
    url: 'https://github.com/thdgeorge/fitness-blog-wordpress',
    image: porfolioImage8,
  },
  {
    title: 'Crazy Mathematician',
    description: 'A Website for Mathematicians.',
    url: 'https://github.com/thdgeorge/MathSite',
    image: porfolioImage9,
  },
  {
    title: 'Zombie Apocalypse',
    description: 'A Unity 3D Desktop Game.',
    url: 'https://github.com/thdgeorge/Unity-Zombie-Apocalypse',
    image: porfolioImage10,
  },
  {
    title: 'Calculator',
    description: 'A Xamarin Calculator App.',
    url: 'https://github.com/thdgeorge/Xamarin-Calculator',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2015 - 2019',
    location: 'University of Thessaly - Department of Electrical and Computer Engineering',
    title: 'Msc in Science and Technology of Electrical and Computer Engineering',
    content: <p></p>,
  },
  {
    date: '2010 - 2014',
    location: 'Aristotle University of Thessaloniki - Department of Mathematics',
    title: 'Degree in Mathematics',
    content: <p></p>,
  },
];

export const seminars: TimelineItem[] = [
  {
    date: '2020',
    location: 'Larissa',
    title: 'Seminar “Digital Marketing by Google”',
    content: <p></p>,
  },
  {
    date: '2020',
    location: 'Larissa',
    title: 'Unicert Certificate “Web & Mobile Apps Specialist”',
    content: <p></p>,
  },
  {
    date: '2020',
    location: 'Larissa',
    title: 'Seminar “Adult Education”',
    content: <p></p>,
  },
  {
    date: '2018',
    location: 'Larissa',
    title: 'Seminar “How to Design and Build a Website”',
    content: <p></p>,
  },
  {
    date: '2017',
    location: 'Larissa',
    title: 'Seminar “Basic Principles of Photoshop”',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'October 2022 - Present',
    location: 'Elegento, Athens (Remote)',
    title: 'Senior Full Stack Developer',
    content: <p></p>,
  },
  {
    date: 'September 2021 - October 2022',
    location: 'Elegento, Athens (Remote)',
    title: 'Full Stack Developer',
    content: <p></p>,
  },
  {
    date: 'December 2020 - September 2021',
    location: 'Elegento, Athens (Remote)',
    title: 'Web Developer',
    content: <p></p>,
  },
  {
    date: 'September 2020 - November 2020',
    location: 'Dr.Button, Larissa',
    title: 'Junior Front End Developer',
    content: <p></p>,
  },
  {
    date: 'March 2017 - August 2017',
    location: 'PC-TECH Solutions, Larissa',
    title: 'Designer, Analyst and Computer Systems Developer',
    content: <p></p>,
  },
  {
    date: 'September 2016 - June 2023',
    location: 'Self-Employed',
    title: 'Maths Teacher',
    content: <p></p>,
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    // {
    //   name: 'George Theodorou',
    //   text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
    //   image: 'person img',
    // },
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
      text: 'thdgeorge.se@gmail.com',
      href: 'mailto:thdgeorge.se@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Larissa, Greece',
      href: 'https://goo.gl/maps/Uyg9hgPcTcn3i9Ak6',
    },
    {
      type: ContactType.LinkedIn,
      text: 'George Theodorou',
      href: 'https://www.linkedin.com/in/thdgeorge/',
    },
    {
      type: ContactType.Github,
      text: 'thdgeorge',
      href: 'https://github.com/thdgeorge',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/thdgeorge'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/thdgeorge/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/thdgeorge/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
