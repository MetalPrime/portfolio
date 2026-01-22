export interface ProjectData {
    id: string;
    title: string;
    description: string;
    shortDescription?: string;
    fullDescription: string;
    image: string;
    images?: string[];
    tools: string[];
    category: string;
    technologies: Array<{
        name: string;
        description: string;
    }>;
    codeLinks?: {
        github?: string;
        demo?: string;
    };
}

export type ProjectDataPreview = Omit<ProjectData, "fullDescription" | "images" | "technologies" | "codeLinks" >