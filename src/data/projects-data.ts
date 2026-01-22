import { ProjectData } from "../interfaces/Project.interface";

export const projectsData: ProjectData[] = [
    {
        id: 'project-1',
        title: 'E-commerce Platform',
        description: 'A full-featured e-commerce solution with real-time inventory management and payment integration.',
        shortDescription: 'Full-featured e-commerce platform with real-time inventory',
        fullDescription: 'This comprehensive e-commerce platform was built to handle complex business requirements including real-time inventory management, secure payment processing, and seamless user experience. The application features advanced filtering, search capabilities, and a responsive design that works across all devices. The backend implements RESTful APIs with proper authentication and authorization mechanisms.',
        image: './assets/project-1.png',
        images: ['./assets/project-1.png', './assets/project-1-detail.png'],
        tools: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        category: 'Web Development',
        technologies: [
            {
                name: 'React',
                description: 'Frontend library for building interactive user interfaces with component-based architecture'
            },
            {
                name: 'Node.js',
                description: 'JavaScript runtime for server-side development with Express.js framework'
            },
            {
                name: 'MongoDB',
                description: 'NoSQL database for flexible and scalable data storage'
            },
            {
                name: 'Stripe',
                description: 'Payment processing platform for secure transaction handling'
            },
            {
                name: 'Redux',
                description: 'State management library for predictable state updates'
            }
        ],
        codeLinks: {
            github: 'https://github.com',
            demo: 'https://demo.example.com'
        }
    },
    {
        id: 'project-2',
        title: 'Mobile App Dashboard',
        description: 'An intuitive dashboard application for managing multiple projects and team collaboration.',
        shortDescription: 'Intuitive dashboard for project management and team collaboration',
        fullDescription: 'A powerful dashboard designed for team collaboration and project management. Users can track project progress, manage team members, assign tasks, and monitor KPIs in real-time. The application supports offline functionality and provides a native-like experience across iOS and Android platforms.',

        image: './assets/project-2.png',
        images: ['./assets/project-2.png'],

        tools: ['React Native', 'Firebase', 'Redux'],
        category: 'Mobile Development',
        technologies: [
            {
                name: 'React Native',
                description: 'Cross-platform mobile framework for iOS and Android development'
            },
            {
                name: 'Firebase',
                description: 'Backend-as-a-Service platform for authentication, database, and hosting'
            },
            {
                name: 'Redux',
                description: 'Predictable state container for JavaScript applications'
            },
            {
                name: 'TypeScript',
                description: 'Typed superset of JavaScript for safer and more maintainable code'
            }
        ],
        codeLinks: {
            github: 'https://github.com',
            demo: 'https://demo.example.com'
        }
    },
    {
        id: 'project-3',
        title: 'Data Visualization Tool',
        description: 'Interactive data visualization platform for analyzing complex datasets with real-time updates.',
        shortDescription: 'Interactive data visualization platform with real-time updates',
        fullDescription: 'An advanced data visualization platform that transforms complex datasets into interactive, understandable visual representations. The tool supports multiple chart types, real-time data streaming, and advanced analytics features. Users can create custom dashboards and export insights in various formats.',

        image: './assets/project-3.png',
        images: ['./assets/project-3.png'],

        tools: ['D3.js', 'TypeScript', 'Express', 'PostgreSQL'],
        category: 'Data Science',
        technologies: [
            {
                name: 'D3.js',
                description: 'Data-driven visualization library for creating custom visualizations'
            },
            {
                name: 'TypeScript',
                description: 'Typed programming language for JavaScript with enhanced tooling'
            },
            {
                name: 'Express.js',
                description: 'Minimal and flexible Node.js web application framework'
            },
            {
                name: 'PostgreSQL',
                description: 'Advanced open-source relational database with powerful features'
            }
        ],
        codeLinks: {
            github: 'https://github.com',
            demo: 'https://demo.example.com'
        }
    },
    {
        id: 'project-4',
        title: 'IoT Smart Home System',
        description: 'Smart home automation system with Arduino integration and mobile app control.',
        fullDescription: 'A comprehensive IoT solution for home automation that integrates Arduino-based sensors and actuators with a mobile application. The system allows users to control lighting, temperature, security, and other smart devices from anywhere. Real-time notifications and automated routines enhance user convenience and energy efficiency.',
        shortDescription: 'IoT smart home system with Arduino integration',
        image: './assets/project-4.png',
        images: ['./assets/project-4.png'],
        tools: ['Arduino', 'Node.js', 'React', 'MQTT'],
        category: 'IoT',
        technologies: [
            {
                name: 'Arduino',
                description: 'Microcontroller platform for building IoT and embedded systems'
            },
            {
                name: 'Node.js',
                description: 'JavaScript runtime for server-side IoT applications'
            },
            {
                name: 'React',
                description: 'JavaScript library for building user interfaces'
            },
            {
                name: 'MQTT',
                description: 'Lightweight messaging protocol for IoT communication'
            }
        ],
        codeLinks: {
            github: 'https://github.com',
            demo: 'https://demo.example.com'
        }
    }
];