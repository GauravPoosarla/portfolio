import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { SiSamsung } from "react-icons/si";

import spotSaver from "@/public/spotSaver.png";
import contentManagement from "@/public/contentManagement.png";
import sprintPlanner from "@/public/sprintPlanner.png"

// Navigation links
export const LINKS = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// External links
export const EXTRA_LINKS = {
  linkedin: "https://www.linkedin.com/in/gauravpoosarla/",
  github: "https://github.com/GauravPoosarla",
  resume: "/resume.pdf",
  email: "poosarlagaurav@gmail.com",
} as const;


export const EXPERIENCES_DATA: any = [
  {
    title: "Software Engineer-1 @ Goldman Sachs",
    location: "Bangalore, IN",
    description: "Working in the Securities lending team of Global Banking & Markets",
    icon: React.createElement(LuGraduationCap),
    isGoldman: true,
    date: "Oct 2025 - present"
  },
  {
    title: "Software Engineer-1 @ Samsung",
    location: "Chennai, IN",
    description:
      "Worked in the Order fulfillment team of D2C Samsung India E-commerce",
    icon: React.createElement(SiSamsung), 
    date: "Aug 2023 - Oct 2025",
  },
  {
    title: "Software Engineer Intern @ McKinsey & Company",
    location: "Bangalore, IN",
    description:
      "Worked as a software engineer intern at McKinsey & Company",
    isMcKinsey: true,
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2023 - Jul 2023",
  }
] as const;

// Data for projects
export const PROJECTS_DATA = [ 
  {
    title: "SpotSaver",
    description:
      "A web application built using ReactJS and HapiJS enables users in the office building to reserve their parking slots. It has QR code integration which marks the entry and exit using an interface",
    tags: ["React", "Hapi", "Javascript", "Tailwind", "Docker"],
    imageUrl: spotSaver,
    projectUrl: "https://github.com/GauravPoosarla/Parking_Reservation_Frontend",
  },
  {
    title: "Content Management System",
    description:
      "A web application built using ReactJS and ExpressJS, implemented a user-friendly interface for managing and updating content.",
    tags: ["React", "Express", "Javascript", "Tailwind", "React Icons", "Docker"],
    imageUrl: contentManagement,
    projectUrl: "https://github.com/GauravPoosarla/Evaluation-4",
  },
  {
    title: "Sprint Planner",
    description:
      "A web application built using ReactJS and ExpressJS, focused on automating the sprint planning process and helping product owners increase the efficiency of the entire project planning",
    tags: ["React", "Express", "Tailwind", "React Router", "Okta"],
    imageUrl: sprintPlanner,
    projectUrl: "https://github.com/GauravPoosarla/Sprint-Planner",
  },
] as const;

// Data for skills
export const SKILLS_DATA = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Redis",
  "Git",
  "Tailwind",
  "Redux",
  "Express",
  "Hapi",
  "PostgreSQL",
  "ElasticSearch",
  "Mocha",
  "Jest",
  "Docker",
  "RabbitMQ"
] as const;

// Owner name
export const OWNER_NAME = "Gaurav Poosarla";
