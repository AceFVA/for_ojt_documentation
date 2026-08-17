import type { About, WeeklyReport, Gallery, Home, Newsletter, Person, Social, Requirements } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ace Francis",
  lastName: "Agustin",
  name: "Ace Francis V. Agustin",
  role: "Computer Engineering Student Intern",
  avatar: "/images/avatar.png",
  email: "acefrancisagustin@gmail.com",
  location: "Asia/Manila", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Filipino"], // optional: Leave the array empty if you don't want to display languages
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: false,
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
        <strong className="ml-4">CMPE 205</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          OJT Requirements
        </Text>
      </Row>
    ),
    href: "/requirements/for_uploading_documents",
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
          "N/A",
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
          "Managed our team during our Work Immersion",
          "Organizing documents, assisting applicants for Land Transportation Management System (LTMS) Portal Examination required for getting a license.",
        ],
        images: [],
      },
    ],
  },
 company_profile: {
    display: true, // set to false to hide this section
    title: "Company Profile",
    institutions: [
      {
        name: "Commission on Audit",
        description: (
          <>
            <p><strong>About:</strong> The Commission on Audit (COA) is the country's highest audit body, responsible for ensuring accountability and transparency in government operations.</p>
            
            <br/>

            <h3>Address</h3>
            <p>COA Compound, Commonwealth Avenue, Quezon City, Philippines</p>

            <br/>

            <h3>Contact Information</h3>
            <p>Tel. Nos.: 8931-9207</p>
            <p>Trunk Line:  8952-5700</p>
            <p>Website: www.coa.gov.ph</p>

            <br/>
            
            <h3>Mission</h3>
            <p>To ensure accountability for public resources, promote transparency, and help improve government operations, in partnership with stakeholders, for the benefit of the Filipino people.</p>
            
            <br/>
            
            <h3>Vision</h3>
            <p>A trustworthy, respected and independent audit institution that is an enabling partner of government in ensuring a better life for every Filipino.</p>
        
            <br/>

            <h3>Core Values</h3>
            <ul>
              <li><strong>God Centeredness</strong> - We believe that everything comes from God and, therefore, our highest accountability is to Him.</li>
              <li><strong>Patriotism</strong> - We commit to serve the interest of the Filipino people and the country which shall have priority over all other considerations.</li>
              <li><strong>Excellence</strong> - We pursue world-class audit services availing of state-of-the-art technology in conformity with international standards and best practices.</li>
              <li><strong>Integrity</strong> - We discharge our mandate in adherence to moral and ethical principles and the highest degree of honesty, independence, objectivity and professionalism.</li>
              <li><strong>Professionalism</strong> - We believe in the continuous enhancement of the skills, competence and expertise of our personnel in the basic right of every member of the organization to self-development and well being.</li>
              <li><strong>Courtesy, Modesty and Humility</strong> - We uphold and practice courtesy, modesty and humility at all times, and acknowledge that we do not have a monopoly of technical expertise.</li>
              <li><strong>Reverence for Truth and the Rule of Law</strong> We pledge to remain steadfast in our sworn duty to uphold COA’s ideals out of reverence for truth and the rule of law.</li>
            </ul>

            <br/>

            <h3>Logo</h3>

            <img src="/images/coa_logo.png" alt="COA Logo" width="200" height="200" />

          </>
        ),
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
  title: "STUDENT’S WEEKLY REPORT ON ACTIVITIES",
  description: "Read what ${person.name} has been up to recently",
  // Create new weekly report posts by adding a new .mdx file to app/weeklyreport/posts
  // All posts will be listed on the /weeklyreport route
};

const requirements: Requirements = {
  path: "/requirements",
  label: "Requirements",
  title: "On-the-Job Training 1 Requirements",
  description: "Documented requirements for the On-the-Job Training program",
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
