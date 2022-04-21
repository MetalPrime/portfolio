import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";
import Typed from 'react-typed';


export const AdvancedBannerTop = () => {

    const talkAbout: string[] = [
        'React',
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

    const background: BannerLayer = {
        image: `./assets/Part2.png`,
        translateY: [0, 50],
        opacity: [1, 0.3],
        scale: [1.05, 1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true
    };

    const headline: BannerLayer = {
        translateY: [0, 30],
        scale: [1, 1.05, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: (
            <section className='Index headline'>
                {/* //aqui va el navigation */}
                <div className="Index_titleBg">

                </div>
                <div className="Index__title">
                    <h1>¡Qué tranza! I'm Jhon Sebastian Garcia Izquierdo</h1>
                    <p>
                        A student of Interactive Media Design with a focus on digital
                        product development hand in hand with research and programming.
                        I want to make products that make people's lives easier and help
                        us grow as a species. You can tell me about {''}
                        <Typed
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
                        .
                    </p>
                </div>


            </section>
        )
    };

    const foreground: BannerLayer = {
        image:
            `./assets/Part4.png`,
        translateY: [0, 15],
        scale: [1, 1.1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true
    };

    const foregroundUp: BannerLayer = {
        image:
            `./assets/Part1.png`,
        translateY: [0, 20],
        scale: [1, 1.1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true
    };

    const foregroundCenter: BannerLayer = {
        image:
            `./assets/Part3.png`,
        translateY: [0, 30],
        scale: [1, 1.1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true
    };

    const gradientOverlay: BannerLayer = {
        opacity: [0, 1, "easeOutCubic"],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: <div className="gradient inset" />
    };

    return (
        <ParallaxBanner
            layers={[background, foreground, foregroundCenter, headline, foregroundUp, gradientOverlay]}
            className="full"
        />
    );
};
