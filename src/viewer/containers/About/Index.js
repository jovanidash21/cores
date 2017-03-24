import React from 'react';

const About = () => {
    return (
        <div className="wrapper style2">
            <div className="title">
                About
            </div>
            <div id="main" className="container">

                <a href="#" className="image featured">
                    <img src="/images/pic01.jpg" alt="" />
                </a>
                <section id="features">
                    <header className="style1">
                        <h2>Dolor consequat feugiat amet veroeros</h2>
                        <p>Feugiat dolor nullam orci pretium phasellus justo</p>
                    </header>
                    <div className="feature-list">
                        <div className="row">
                            <div className="6u 12u(mobile)">
                                <section>
                                    <h3 className="icon fa-comment">Mattis velit diam vulputate</h3>
                                    <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate. Eget mattis at, laoreet vel velit lorem.</p>
                                </section>
                            </div>
                            <div className="6u 12u(mobile)">
                                <section>
                                    <h3 className="icon fa-refresh">Lorem ipsum dolor sit veroeros</h3>
                                    <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate. Eget mattis at, laoreet vel velit lorem.</p>
                                </section>
                            </div>
                        </div>
                        <div className="row">
                            <div className="6u 12u(mobile)">
                                <section>
                                    <h3 className="icon fa-picture-o">Pretium phasellus justo lorem</h3>
                                    <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate. Eget mattis at, laoreet vel velit lorem.</p>
                                </section>
                            </div>
                            <div className="6u 12u(mobile)">
                                <section>
                                    <h3 className="icon fa-cog">Tempus sed pretium orci</h3>
                                    <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate. Eget mattis at, laoreet vel velit lorem.</p>
                                </section>
                            </div>
                        </div>
                        <div className="row">
                            <div className="6u 12u(mobile)">
                                <section>
                                    <h3 className="icon fa-wrench">Aliquam consequat et feugiat</h3>
                                    <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate. Eget mattis at, laoreet vel velit lorem.</p>
                                </section>
                            </div>
                            <div className="6u 12u(mobile)">
                                <section>
                                    <h3 className="icon fa-check">Dolore laoreet aliquam mattis</h3>
                                    <p>Eget mattis at, laoreet vel et velit aliquam diam ante, aliquet sit amet vulputate. Eget mattis at, laoreet vel velit lorem.</p>
                                </section>
                            </div>
                        </div>
                    </div>
                    <ul className="actions actions-centered">
                        <li><a href="#" className="button style1 big">Get Started</a></li>
                        <li><a href="#" className="button style2 big">More Info</a></li>
                    </ul>
                </section>
            </div>
        </div>
    )
};

export default About;