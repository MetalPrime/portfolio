import * as React from 'react';
import './Index.css';
import { ParallaxProvider } from "react-scroll-parallax";
import { AdvancedBannerTop } from '../../components/Banner/Banner';
import { Pillars } from '../../components/Pillars/Pillars'
import { Projects } from '../../components/Projects/Projects'
import { Footer } from '../../components/Footer/Footer'

interface Index {

}

export const Index: React.FC<Index> = () => {

    return (
        <ParallaxProvider>
            <AdvancedBannerTop />
            <Pillars />
            <Projects />
            <Footer />
        </ParallaxProvider>

    );
}