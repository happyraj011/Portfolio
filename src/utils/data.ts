
import { html, css, js, react, ts, node, mongo, git, cpp, nextjs, tailwind,  python, mysql, redux, express, vs, github, postman } from 
 "../../public/skills"

import {expiryNotifier,noteTrade,technicalBlog,pathcraftAI} from "../../public"

const skills = [
    {
      id: 1,
      name: "HTML",
      image: html,
      field: "languages",
    },
    {
      id: 2,
      name: "CSS",
      image: css,
      field: "languages",
    },
    {
      id: 3,
      name: "JavaScript",
      image: js,
      field: "languages",
    },
    {
        id: 4,
        name: "TypeScript",
        image: ts,
        field: "languages",
      },
      {
        id: 5,
        name: "C++",
        image: cpp,
        field: "languages",
      },
      {
        id: 6,
        name: "Python",
        image: python,
        field: "languages",
      },
      {
        id: 7,
        name: "React.js",
        image: react,
        field: "frameworks",
      },
      {
        id: 8,
        name: "Node.js",
        image: node,
        field: "frameworks",
      },
      {
        id: 9,
        name: "Next.js",
        image: nextjs,
        field: "frameworks",
      },
      {
        id: 10,
        name: "Express.js",
        image: express,
        field: "frameworks",
      },
      {
        id: 11,
        name: "Tailwind CSS",
        image: tailwind,
        field: "frameworks",
      },
      {
        id: 12,
        name: "Redux",
        image: redux,
        field: "frameworks",
      },
      
      {
        id: 13,
        name: "Git",
        image: git,
        field: "others",
      },
      {
        id: 14,
        name: "GitHub",
        image: github,
        field: "others",
      },
      {
        id: 15,
        name: "VS Code",
        image: vs,
        field: "others",
      },
      {
        id: 16,
        name: "Postman",
        image: postman,
        field: "others",
      },
      {
        id: 17,
        name: "MongoDB",
        image: mongo,
        field: "others",
      },
      {
        id: 18,
        name: "MySQL",
        image: mysql,
        field: "others",
      },
    ];



const projects = [
  {
    id:1,
    name:"NoteTrade",
    description:"Bookstore website where you can sell and buy books and notes",
    image:noteTrade,
    link:"https://note-trade-liard.vercel.app/",
    github:"https://github.com/happyraj011/NoteTrade",
    tech: [" Next.js"," TypeScript"," ExpressJs","MongoDB","Tailwind CSS","Node.js"," Flowbite React"],
  },
  {
    id:2,
    name:"Expiry Notifier",
    description:" Created email alert platform for product expirations using Mailtrap.",
    image:expiryNotifier,
    link:"https://expiry-notifier.vercel.app/",
    github:"https://github.com/happyraj011/Expiry-Notifier",
    tech: [" Next.js"," TypeScript"," ExpressJs","MongoDB","Tailwind CSS","Node.js"," Flowbite React"],
  },
  {
    id:3,
    name:"PathCraftAI",
    description:"Engineered PathCraftAI using Next.js, Gemini AI, and Prisma to deliver AI-powered career coaching and smart resume generation.",
    image:pathcraftAI,
    link:"https://path-craft-ai.vercel.app/",
    github:"https://github.com/happyraj011/PathCraftAI",
    tech: [" Next.js"," JavaScript"," Gemini AI"," Neon"," Clerk"," Inngest","  Prisma"," Shadcn UI"],
  },
  {
    id:4,
    name:"Technical Blog",
    description:"  Create a secure, responsive MERN stack blog with rich text editing, subscriptions, and notifications.",
    image:technicalBlog,
    link:"https://mern-blog-ccd1.onrender.com",
    github:"https://github.com/happyraj011/mern-blog",
    tech: ["ReactJs"," ExpressJs","MongoDB","Tailwind CSS","Redux","Node.js"," Flowbite React"],
  },
];

const experience = [
  {
    id: 1,
    name: "Backend Developer Intern",
    company: "Welcro",
    duration: "Feb 2025 - May 2025",
    points: [
      "Developed a scalable onboarding system for advisors, streamlining the process and improving user activation efficiency.",
      "Engineered 15+ reusable, modular components with Next.js and Tailwind CSS, optimizing frontend performance and ensuring a consistent UI/UX.",
      "Implemented a secure authentication system with login and signup functionalities, enhancing data security and user management."
    ],
  },
]


export {skills,projects,experience};
    