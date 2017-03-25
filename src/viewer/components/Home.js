import React from 'react';
import Intro from '../containers/Intro/Index';
import AboutSection from '../containers/AboutSection/Index';
import SeminarsSection from '../containers/SeminarsSection/Index';

const Home  = () => {
    return (
        <div>
            <Intro />
            <AboutSection />
            <SeminarsSection />
        </div>
    )
};

export default Home