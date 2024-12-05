import project2 from "../assets/projects/project-1.webp";
import project4 from "../assets/projects/project-2.webp";
import project1 from "../assets/projects/project-3.webp";
import project3 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a dedicated full stack developer with a talent for building robust and scalable web applications. Over 3 years of hands-on experience have allowed me to refine my expertise in front-end frameworks like React and Next.js, as well as back-end technologies such as Node.js and MySQL. My focus is on leveraging these skills to develop innovative solutions that foster business growth and provide outstanding user experiences.`;

export const ABOUT_TEXT = `I am a versatile and committed full stack developer with nearly 3 years of professional experience, specializing in building efficient and user-centric web applications. Proficient in a range of technologies, including React, Next.js, Node.js, MySQL, HTML, CSS and Javascript mainly, I bring both depth and adaptability to my work. My journey into web development was driven by a deep curiosity about how things work, evolving into a career marked by continuous learning and embracing new challenges. I thrive in collaborative settings and excel at tackling complex problems to deliver top-notch solutions. Beyond coding, I stay active, explore emerging technologies, and contribute to open-source initiatives.`;

export const EXPERIENCES = [
  {
    year: "2024",
    role: "Test Automation",
    company: "Karl Storz",
    description: `Developed and maintained automated test suites using Playwright framework for end-to-end testing of Angular applications.Implemented test scripts in TypeScript to ensure robust and scalable automation.Integrated Playwright tests with CI/CD pipelines using tools like GitLab CI and Jira to enable continuous testing and deployment.`,
    technologies: ["Typescript", "Angular", "HTML", "Playwright"],
  },
  {
    year: "2018 - 2023",
    role: "WMS IT Consultant",
    company: "Robert Bosch GmbH",
    description: `Led a team of logistics specialists in the implementation and optimization of Blue Yonder logistics modules to streamline warehouse operations and enhance efficiency.Developed various applications using Angular technology for the frontend with a strong HTML-CSS-Javascript/ Typescript core. Provided technical leadership and mentorship, guiding team members in best practices for using Blue Yonder modules, writing Mocha test scripts, and managing SQL databases.`,
    technologies: ["Eclipse", "Angular", "SQL", "Mocha", "Javascript"],
  },
  {
    year: "2017 - 2018",
    role: "Quality Technician",
    company: "Flex LTD",
    description: `Designed and developed an inventory tracking platform with a visual and user-friendly interface, enabling real- time monitoring and efficient management of stock items. Managed and implemented quality assurance programs, establishing standards and protocols to maintain a minimum of 95% yield in production lines. Collaborated with software development teams to create and refine the inventory tracking system, ensuring it meets operational requirements and user needs.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2017 - 2018",
    role: "Web Developer",
    company: "Coderhouse",
    description: `Diplomat in development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MySQL.`,
    technologies: ["HTML", "CSS", "JS", "React, SQL, Node.js"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "Firebase"],
  },
  {
    title: "Restock Management Minimarket App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Bootstrap", "JS"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
  {
    title: "Architecture and Interiorism Website",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Bootstrap", "Firebase", "Javascript"],
  },
];

export const CONTACT = {
  address: "Kreuzberg, Berlin, DE 10967 ",
  phoneNo: "+49 1520 3962 704",
  email: "j.cleon695@gmail.com",
};