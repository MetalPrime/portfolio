import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetail.css';
import { ProjectData } from '../../interfaces/Project.interface';
import { projectsData } from '../../data/projects-data';

const PROJECTS_DATABASE: Record<string, ProjectData> = projectsData.reduce(
    (acc, project) => ({ ...acc, [project.id]: project }),
    {}
);

export const ProjectDetail: React.FC = () => {
    const { projectId } = useParams<{ projectId: string }>();
    const navigate = useNavigate();
    const [project, setProject] = useState<ProjectData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch project data from projectsData
        if (projectId && PROJECTS_DATABASE[projectId]) {
            setProject(PROJECTS_DATABASE[projectId]);
            setLoading(false);
        } else {
            setLoading(false);
        }
    }, [projectId]);

    if (loading) {
        return <div className="loading" aria-label="Loading project details">Loading...</div>;
    }

    if (!project) {
        return (
            <div className="error-container" role="alert">
                <h2>Project Not Found</h2>
                <p>The project you're looking for doesn't exist.</p>
                <button onClick={() => navigate(-1)} className="back-button">
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <main className="project-detail" role="main">
            <div className="project-detail-container">
                {/* Back Button */}
                <button
                    className="back-button"
                    onClick={() => navigate(-1)}
                    aria-label="Go back to previous page"
                >
                    ← Back
                </button>

                {/* Hero Section */}
                <section className="project-hero" aria-label="Project header">
                    <div className="project-hero-content">
                        <span className="project-category-detail">{project.category}</span>
                        <h1>{project.title}</h1>
                        <p className="project-lead">{project.description}</p>
                    </div>

                    <div className="project-hero-image">
                        <div className="image-placeholder" aria-hidden="true">
                            {project.image}
                        </div>
                    </div>
                </section>

                {/* Description Section */}
                <section className="project-description-section" aria-label="Project description">
                    <h2>Overview</h2>
                    <p>{project.fullDescription}</p>
                </section>

                {/* Technologies Section */}
                <section className="project-technologies" aria-label="Technologies and tools used">
                    <div className="tech-section">
                        <h2>Technologies & Tools</h2>
                        <div className="tech-grid">
                            {project.technologies.map((tech) => (
                                <article key={tech.name} className="tech-card">
                                    <h3>{tech.name}</h3>
                                    <p>{tech.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>

                    <div className="tools-section">
                        <h2>Tech Stack</h2>
                        <div className="tools-list" role="list" aria-label="Technologies used">
                            {project.tools.map((tool) => (
                                <span key={tool} className="tool-badge" role="listitem">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Code Links Section */}
                {project.codeLinks && (
                    <section className="project-links" aria-label="Project links">
                        <h2>Explore the Code</h2>
                        <div className="links-container">
                            {project.codeLinks.github && (
                                <a
                                    href={project.codeLinks.github}
                                    className="link-button github"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`View ${project.title} on GitHub`}
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    View GitHub
                                </a>
                            )}
                            {project.codeLinks.demo && (
                                <a
                                    href={project.codeLinks.demo}
                                    className="link-button demo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`View ${project.title} live demo`}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3" />
                                    </svg>
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </section>
                )}
            </div>
        </main>
    );
};
