import React from 'react';
import { ParallaxBanner, BannerLayer } from 'react-scroll-parallax';
import './Pillars.css';

export const Pillars: React.FC = () => {
    const pillarsData = [
        {
            id: 1,
            title: 'Creative Design',
            description: 'Crafting beautiful and intuitive user interfaces that enhance user experience and engagement.',
            icon: (
                <svg aria-label="Creative Design icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="30" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M 35 50 L 50 45 L 65 50 L 60 70 L 40 70 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="25" cy="75" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="75" cy="75" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
            )
        },
        {
            id: 2,
            title: 'Development',
            description: 'Building robust and scalable solutions with modern technologies and best practices.',
            icon: (
                <svg aria-label="Development icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" rx="5" />
                    <path d="M 35 45 L 50 60 L 65 45" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="50" cy="35" r="3" fill="currentColor" />
                </svg>
            )
        },
        {
            id: 3,
            title: 'Problem Solving',
            description: 'Analyzing challenges and implementing efficient solutions with innovative approaches.',
            icon: (
                <svg aria-label="Problem Solving icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M 50 30 L 65 50 L 50 70 L 35 50 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="50" cy="50" r="5" fill="currentColor" />
                </svg>
            )
        }
    ];

    const background: BannerLayer = {
        translateY: [0, 30],
        opacity: [1, 0.8],
        scale: [1, 1.05, 'easeOutCubic'],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: <div className="pillars-gradient-bg" aria-hidden="true" />
    };

    const content: BannerLayer = {
        translateY: [0, 20],
        scale: [1, 1, 'easeOutCubic'],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
            <section className="pillars-container" aria-label="Main Pillars Section">
                <div className="pillars-header">
                    <h2>Core Pillars</h2>
                    <p>Foundation of excellence in every project</p>
                </div>
                <div className="pillars-grid">
                    {pillarsData.map((pillar) => (
                        <article key={pillar.id} className="pillar-card" role="article">
                            <div className="pillar-icon" aria-hidden="false">
                                {pillar.icon}
                            </div>
                            <h3>{pillar.title}</h3>
                            <p>{pillar.description}</p>
                        </article>
                    ))}
                </div>
            </section>
        )
    };

    return (
        <ParallaxBanner
            layers={[background, content]}
            className="pillars-banner"
        />
    );
};
