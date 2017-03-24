import React from 'react';

const Intro = () => {
    return (
        <div id="intro-wrapper" className="wrapper style1">
            <div className="title">The Introduction</div>
            <section id="intro" className="container">
                <p className="style1">
                    Three Days of Inspiration!
                </p>
                <p className="style2">
                    Find The Best Solutions
                    <br className="mobile-hide" />
                    From People Who Share Same Interests.
                </p>
                <ul className="actions">
                    <li>
                        <a href="#" className="button style3 big">
                            Proceed
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    )
};

export default Intro;