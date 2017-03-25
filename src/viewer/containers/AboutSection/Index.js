import React from 'react';
import Header from './Header';
import FeatureList from './FeatureList';

const AboutSection = () => {
    return (
        <div className="wrapper style2">
            <div className="title">
                About
            </div>
            <div id="main" className="container">
                <a href="#" className="image featured">
                    <img src="/images/about.png" alt="" />
                </a>
                <section id="features">
                    <Header />
                    <FeatureList />
                </section>
            </div>
        </div>
    )
};

export default AboutSection;