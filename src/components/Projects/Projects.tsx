import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import { ProjectDataPreview } from '../../interfaces/Project.interface';
import { projectsData } from '../../data/projects-data';



export const Projects: React.FC = () => {

    const [hoveredProject, setHoveredProject] = useState<string | null>(null);

    const PROJECTS_DATA : ProjectDataPreview[] = projectsData;

    return (
        <section className="projects-section" aria-label="Projects Showcase">
            <div className="projects-container">
                <div className="projects-header">
                    <h2>Featured Projects</h2>
                    <p>Discover the work that drives innovation and creativity</p>
                </div>

                <div className="projects-grid">
                    {PROJECTS_DATA.map((project) => (
                        <Link
                            key={project.id}
                            to={`/project/${project.id}`}
                            className="project-card-link"
                            aria-label={`View ${project.title} project details`}
                        >
                            <article
                                className={`project-card ${hoveredProject === project.id ? 'active' : ''}`}
                                onMouseEnter={() => setHoveredProject(project.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                                role="article"
                            >
                                <div className="project-image-wrapper">
                                    <div className="project-image-placeholder" aria-hidden="true">
                                        {project.image}
                                    </div>
                                    <div className="project-overlay" aria-hidden="true" />
                                </div>

                                <div className="project-content">
                                    <span className="project-category">{project.category}</span>
                                    <h3>{project.title}</h3>
                                    <p className="project-description">{project.shortDescription}</p>

                                    <div className="project-tools" role="list" aria-label="Technologies used">
                                        {project.tools.map((tool) => (
                                            <span key={tool} className="tool-tag" role="listitem">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="project-cta">
                                        <span className="cta-text">View Project</span>
                                        <svg
                                            className="cta-icon"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            aria-hidden="true"
                                        >
                                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                                        </svg>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
