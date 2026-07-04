import { About, WeeklyReport, Gallery, Home, Newsletter, Person, Social, Requirements } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ace Francis",
  lastName: "Agustin",
  name: `Ace Francis V. Agustin`,
  role: "Student and QA Intern",
  avatar: "/images/avatar.png",
  email: "acefrancisagustin@gmail.com",
  location: "Asia/Manila", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Filipino"], // optional: Leave the array empty if you don't want to display languages
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/AceFVA",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/afva9/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/eiseu009/",
    essential: false,
  },
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://web.facebook.com/eiseu.1009",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website for OJT requirements as a ${person.role}`,
  headline: <>CMPE 205: <br /> On-the-Job Training 1</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          OJT Requirements
        </Text>
      </Row>
    ),
    href: "/requirements/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm {person.firstName}, a {person.role} at{" "}
      <Text as="span" size="xl" weight="strong">Commission on Audit</Text>, where I gain valuable skills and experience <br />  being a trainee in a working environment.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        A second-year Bachelor of Science in Computer Engineering student at the Polytechnic University of the Philippines. <br /> Section: BSCPE 2 - 6
      </>
    ),
  },
  requirements: {
    display: false, // set to false to hide this section
    title: "OJT Requirements",
    experiences: [
      {
        company: "Commission on Audit",
        timeframe: "2026 - Present",
        role: "Quality Assurance Intern",
        achievements: [
          <>
            N/A
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/a_agustin_loe.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Land Transportation Office",
        timeframe: "October 2023",
        role: "Internship Trainee",
        achievements: [
          <>
            Managed our team during our Work Immersion 
          </>,
          <>
            Organizing documents, assisting applicants for Land Transportation Management System (LTMS) Portal 
Examination required for getting a license. 
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Polytechnic University of the Philippines",
        description: <>Currently pursuing a Bachelor of Science in Computer Engineering.</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/a_agustin_good_moral.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/a_agustin_consent.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const weeklyreport: WeeklyReport = {
  path: "/weeklyreport",
  label: "Weekly Report",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new weekly report posts by adding a new .mdx file to app/weeklyreport/posts
  // All posts will be listed on the /weeklyreport route
};

const requirements: Requirements = {
  path: "/requirements",
  label: "Requirements",
  title: `OJT Requirements`,
  description: `Documented requirements for the On-the-Job Training program`,
  // Create new project pages by adding a new .mdx file to app/weeklyreport/posts
  // All projects will be listed on the /home and /requirements routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, weeklyreport, requirements, gallery };
