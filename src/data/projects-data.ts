import { ProjectData } from "../interfaces/Project.interface";

export const projectsData: ProjectData[] = [
    {
        id: "marlo-innovation-catalog-client",
        title: "MARLO Innovation Catalog",
        description: "Client side code for the MARLO Innovation Catalog project.",
        shortDescription: "This repository contains the client-side application for the MARLO Innovation Catalog, part of the CCAFS MARLO-INNOVATION-CATALOG project. It provides a catalog of all innovations inside AICCRA MARLO for easy access and visualization",
        fullDescription: "This repository contains the client-side application for the MARLO Innovation Catalog, part of the CCAFS MARLO-INNOVATION-CATALOG project. It provides a catalog of all innovations inside AICCRA MARLO for easy access and visualization",
        image: "./assets/innovation-catalog.png", // no image in repo
        images: [],
        tools: ["Git", "JavaScript/TypeScript", "Astro.js", "Vue.js"],
        category: "Frontend / Web Client",
        technologies: [
            {
                name: "Next.js",
                description: "Likely a React-based framework given context of repository naming."
            },
            {
                name: "JavaScript / TypeScript",
                description: "Used for the application codebase."
            }
        ],
        codeLinks: {
            github: "https://github.com/CCAFS/MARLO-INNOVATION-CATALOG/tree/main/client"
        }
    },
    {
        id: "doppler",
        title: "Doppler",
        description: "A frontend Next.js application for Doppler a platform to report information about beans and research related it.",
        shortDescription: "A frontend Next.js application, with a separated backend in SpringBoot for Doppler a platform to report information about beans and research related it.",
        fullDescription: "This repository contains the frontend application for Doppler, a web interface presumably part of a larger Doppler stack. It’s a Next.js project created with create-next-app, and includes standard config files (e.g., Tailwind, ESLint). The project expects a backend and database to be running locally during development.",
        image: "./assets/doppler.png", // none provided
        images: [],
        tools: ["Next.js", "React", "Tailwind CSS", "Java", "Spring Boot"],
        category: "Frontend / Backend",
        technologies: [
            {
                name: "Next.js",
                description: "React framework for server-side rendered/SSG web apps"
            },
            {
                name: "Tailwind CSS",
                description: "Utility-first CSS framework used for styling"
            }
        ],
        codeLinks: {
            github: "https://github.com/MetalPrime/doppler-frontend"
        }
    },
    {
        id: "simsophos",
        title: "Simsophos",
        description: "An interactive platform with gamification to make easy to the students to learn english based on their needs and making it fun and creative to learn.",
        shortDescription: "An interactive platform with gamification to make easy to the students to learn english based on their needs and making it fun and creative to learn.",
        fullDescription: "",
        image: "./assets/simsophos.png",
        images: [],
        tools: ["React", "Tailwind CSS",],
        category: "Web Client",
        technologies: [],
        codeLinks: {
            github: "https://github.com/MetalPrime/symsophos"
        }
    },
    {
        id: "sos-colombia",
        title: "SOS Brigadista",
        description: "A JavaScript/HTML/SCSS project likely providing web UI for SOS Colombia.",
        shortDescription: "A collective development made in Vanilla JavaScript to make it easier to communicate with the people who supply the brigadistas. Done during the great Colombian national strike of 2021",
        fullDescription: "This repository contains the public codebase for SOS-Colombia. It appears to be a frontend or web-related project using JavaScript, HTML, and SCSS. The repository’s README is blank, so full descriptive context isn’t provided. Contributors include a small team of developers.",
        image: "./assets/sos-brigadista.jpg",
        images: [],
        tools: ["Git", "JavaScript"],
        category: "Web / Frontend",
        technologies: [
            {
                name: "JavaScript",
                description: "Core programming language used in the project."
            },
            {
                name: "HTML",
                description: "Markup for web content structure."
            },
            {
                name: "SCSS",
                description: "CSS preprocessor used for styling."
            }
        ],
        codeLinks: {
            github: "https://github.com/Sok4h/SOS-Colombia"
        }
    }
];