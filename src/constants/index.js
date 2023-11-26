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
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    amlak,
    himalia,
    deakin
  } from "../assets";
  










  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  



  const experiences = [
    {
      title: "React.js Developer",
      company_name: "AmlakEno",
      icon: amlak,
      iconBg: "#fff",
      date: "Apr 2022 - Oct 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies",
        "Collaborating with cross-functional teams, including backend developers.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to backend developers.",
      ],
    },
    {
      title: "AI Researcher and Content Strategist",
      company_name: "Collaboration with Deakin University, Australia",
      icon: deakin,
      iconBg: "#E6DEDD",
      date: "Des 2019 - Mar 2022",
      points: [
        "Creating and curating high-quality AI content, including research papers, articles, and documentation.",
        "Designing and developing AI algorithms and models to address specific challenges or enhance existing systems.",
        "Implementing and experimenting with state-of-the-art machine learning techniques to solve complex problems.",
        "Collaborating with interdisciplinary teams to integrate AI solutions into various applications and domains.",
      ],
    },
    {
      title: "Software support",
      company_name: "Himalia",
      icon: himalia,
      iconBg: "#fff",
      date: "July 2017 - Dec 2019",
      points: [
        "Providing timely and effective technical support to end-users, resolving software-related issues, and ensuring a positive user experience",
        "Troubleshooting software problems, identifying root causes, and implementing solutions to prevent recurrence.",
        "Collaborating with internal teams, including developers and QA, to communicate user feedback, report bugs, and contribute to the continuous improvement of software products.",
        "Developing and updating documentation helps users find answers independently and contributes to the efficiency of the support process.",
      ],
    },
   
  ];






  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  




  const projects = [
    {
      name: "Amlak Eeno",
      description:
        "Web-based platform designed for users to effortlessly search home rentals and purchases in Tehran, offering a convenient and efficient solution for housing needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "django",
          color: "orange-text-gradient",
        },
        {
          name: "postGIS",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/maryamHabibpourr/AmlakEenoClient-React-LeafLet/tree/main/src",
    },
    {
      name: "Tee Trends",
      description:
        "Web application exclusively for buying T-shirts for both women and men – explore, choose, and purchase your favorite styles easily!",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "three.js",
          color: "pink-text-gradient",
        },
        {
          name: "django",
          color: "orange-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/maryamHabibpourr/TeetrendsClient-React-Redux/tree/main/src",
    },
    {
      name: "Eshop",
      description:
        "An all-in-one online shopping platform catering to your every need in life, from TVs and clothes to phones and more. Discover, shop, and order everything effortlessly!",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "SCSS",
          color: "pink-text-gradient",
        },
        {
          name: "firebase",
          color: "orange-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/maryamHabibpourr/Eshop-Firebase-React-Redux/tree/main/src",
    },
  ];
  



  export { services, technologies, experiences, testimonials, projects };