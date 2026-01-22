import { useState } from 'react';
import { ParallaxBanner, BannerLayer } from "react-scroll-parallax";
import { ReactTyped } from "react-typed";
import './Banner.css';

export const AdvancedBannerTop = () => {

    const talkAbout: string[] = [
        'React.js',
        'Vue.js',
        'Astro.js',
        'Vue.js',
        'JavaScript',
        'TypeScript',
        'SCSS',
        'Express.js',
        'Node.js',
        'Java',
        'RESTful APIs',
        'Arduino',
        'CSS',
        'HTML',
    ];

    const [hoveredTech, setHoveredTech] = useState<string | null>(null);

    // Background image layer with parallax
    const background: BannerLayer = {
        image: `./assets/Part2.png`,
        translateY: [0, 50],
        opacity: [1, 0.3],
        scale: [1.05, 1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true
    };

    // Foreground layers with parallax
    const foreground: BannerLayer = {
        image: `./assets/Part4.png`,
        translateY: [0, 15],
        scale: [1, 1.1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true
    };

    const foregroundUp: BannerLayer = {
        image: `./assets/Part1.png`,
        translateY: [0, 20],
        scale: [1, 1.1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true
    };

    const foregroundCenter: BannerLayer = {
        image: `./assets/Part3.png`,
        translateY: [0, 30],
        scale: [1, 1.1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true
    };

    // Main content layer with gradient background
    const headline: BannerLayer = {
        translateY: [0, 20],
        scale: [1, 1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
            <section className='banner-container' role="banner" aria-label="Hero banner">
                <div className="banner-content">
                    <div className="banner-text">
                        <h1 className="banner-title">¡Qué tranza! I'm Jhon Sebastian Garcia Izquierdo</h1>
                        <div className='banner-info'>
                            <p className="banner-subtitle">
                                Interactive Media Designer & Full-Stack Developer focused on user experience, with over 3 years of experience in web development. I enjoy creating products that make people’s daily lives more accessible and help them feel connected to the tools they use, which is why I aim to be involved throughout the entire development process.
                            </p>
                            <p className="banner-tech-intro">
                                I specialize in:{' '}
                                <span className="tech-typing">
                                    <ReactTyped
                                        loop
                                        typeSpeed={80}
                                        backSpeed={20}
                                        strings={talkAbout}
                                        smartBackspace
                                        backDelay={1000}
                                        loopCount={0}
                                        showCursor
                                        cursorChar="|"
                                    />
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    };

    // Gradient overlay
    const gradientOverlay: BannerLayer = {
        opacity: [0, 1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: <div className="banner-gradient-overlay" />
    };

    return (
        <ParallaxBanner
            layers={[background, foreground, foregroundCenter, headline, foregroundUp, gradientOverlay]}
            className="banner-wrapper"
        />
    );
};
