import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  inspacco,
  sushiv,
  codeDocs,
  tactical,
  zealWeb,
  campus_capture,
  rollWeb,
  CodeCrafters,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "NodeJs Developer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: creator,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Inspacco",
    company_website: "https://inspacco.com/",
    icon: inspacco,
    iconBg: "#000000",
    date: "Aug 2024 - Dec 2024",
    points: [
      "Developing and maintaining web and mobile applications using React.js, React-native and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "App Developer",
    company_name: "Sushiv Technologies",
    company_website: "https://sushiv.in/",
    icon: sushiv,
    iconBg: "#E6DEDD",
    date: " Feb 2023 – June 2023",
    points: [
      "Developed an Android application from scratch combining features of Tinder, Omegle, and Instagram",
      "Enhanced collaboration skills working within an industrial environment.",
      "Optimized frontend performance by achieving 20% reduction in page loading time and make it responsive.",
    ],
  },
];

const projects = [
  {
    name: "CodeDocs",
    description:
      "Introducing an AI-powered solution that transforms the way you document code! No more tedious manual documentation-our tool automatically generates clear, concise explanations from your code snippets. Boost your productivity by instantly writing, running, and testing code with seamless IDE integration, and collaborate with your team in real-time using Collaborative Coding for effortless teamwork!",
    tags: [
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
    ],
    image: codeDocs,
    hosted_link: "https://github.com/prajwalpkp2106/CodeDocs",
  },
  {
    name: "Tactical Trends",
    description:
      "This project is part of the MindSpark Hackathon and involves building a news aggregation application using a Django backend, integrated with Qdrant for vector storage and MySQL for data management",
    tags: [
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Docker(Qdrant)",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
    ],
    image: tactical,
    hosted_link: "https://github.com/prajwalpkp2106/Tactical_Trends-MindSpark24",
  },
  {
    name: "PriceHunt",
    description:
      "This project offers a platform to compare product prices across multiple e-commerce sites. Integrated with Gemini chatbot, users can search products via images or text, and inquire about them. Also, it provides graphical representation of price trends over 6 months for informed decisions",
    tags: [
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: zealWeb,
    hosted_link: "https://github.com/prajwalpkp2106/PriceHunt",
  },
  {
    name: "InstaSwipeChat",
    description:  
      "Flutter-based mobile application that integrates functionalities inspired by Tinder (swipe-based matching), Omegle (anonymous video chatting), and Instagram (photo sharing and social networking). It utilizes Firebase for the backend services, including authentication, real-time database, cloud storage, and messaging.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "FireBase",
        color: "green-text-gradient",
      },
      {
        name: "cloud_firestore",
        color: "pink-text-gradient",
      },
    ],
    image: rollWeb,
    hosted_link: "https://github.com/prajwalpkp2106/InstaSwipeChat",
  },

  {
    name: "CAMPUS CAPTURES",
    description:
      "Campus Captures is a secure web application for storing and organizing college event photos. It addresses photo management challenges by offering effective organization, easy accessibility, and long-term preservation. Key features include robust security, an intuitive interface, and tools for efficient categorizing and retrieval of photos.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "PHPMyAdmin",
        color: "green-text-gradient",
      },
      {
        name: "HTML-CSS ",
        color: "pink-text-gradient",
      },
    ],
    image: campus_capture,
    hosted_link:
      "https://github.com/prajwalpkp2106/CAMPUS-CAPTURES",
  },
  {
    name: "E-MANDI",
    description:
      "CodeCrafters: Digital and analytics technologies offer a way to create value by optimizing the supply chain in agriculture.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: CodeCrafters,
    hosted_link:
      "https://github.com/prajwalpkp2106/CodeCrafters.git",
  },
];

const personalInfo = {
  name: "Prajwal",
  fullName: "Prajwal Padole",
  email: "padoleprajwal2106@gmail.com",
  role: "Software Developer",
  about: `I'm a skilled software developer with experience in JavaScript, and expertise in frameworks like React.Js, React-naitve,
  Node.js etc. I'm a quick learner and collaborate closely with clients to
  create efficient, scalable, and user-friendly solutions that solve
  real-world problems. Let's work together to bring your ideas to life!`,
  projectsIntro: `Following projects showcases my skills and experience through
  real-world examples of my work. Each project is briefly described with
  live demos. It reflects my ability to solve complex problems, work
  with different technologies, and manage projects effectively.`,
};

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1vbgoMr3-V2XRaym1k0qSLqu7Tw5Ukt0D/view?usp=sharing",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/prajwalpadole/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/prajwalpkp2106",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
