import * as React from 'react';
import './Index.css';
import Typed from 'react-typed';
import { ParallaxProvider } from "react-scroll-parallax";
import { AdvancedBannerTop } from '../../components/Banner/Banner';

interface Index {

}

export const Index: React.FC<Index> = () => {

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


    return (
        <ParallaxProvider>
            <AdvancedBannerTop/>

            
{/*             <section className='Index'>
            //aqui va el navigation
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
            </section> */}
        </ParallaxProvider>

    );
}