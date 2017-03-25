import React, { Component } from 'react';

class SeminarsSection extends Component {
    render() {
        return (
            <div className="wrapper style3">
                <div className="title">Seminars</div>
                <div id="highlights" className="container">
                    <div className="row 150%">
                        <div className="4u 12u(mobile)">
                            <section className="highlight">
                                <a href="#" className="image featured"><img src="images/pic02.jpg" alt="" /></a>
                                <h3><a href="#">Aliquam diam consequat</a></h3>
                                <p>Eget mattis at, laoreet vel amet sed velit aliquam diam ante, dolor aliquet sit amet vulputate mattis amet laoreet lorem.</p>
                                <ul className="actions">
                                    <li><a href="#" className="button style1">Learn More</a></li>
                                </ul>
                            </section>
                        </div>
                        <div className="4u 12u(mobile)">
                            <section className="highlight">
                                <a href="#" className="image featured"><img src="images/pic03.jpg" alt="" /></a>
                                <h3><a href="#">Nisl adipiscing sed lorem</a></h3>
                                <p>Eget mattis at, laoreet vel amet sed velit aliquam diam ante, dolor aliquet sit amet vulputate mattis amet laoreet lorem.</p>
                                <ul className="actions">
                                    <li><a href="#" className="button style1">Learn More</a></li>
                                </ul>
                            </section>
                        </div>
                        <div className="4u 12u(mobile)">
                            <section className="highlight">
                                <a href="#" className="image featured"><img src="images/pic04.jpg" alt="" /></a>
                                <h3><a href="#">Mattis tempus lorem</a></h3>
                                <p>Eget mattis at, laoreet vel amet sed velit aliquam diam ante, dolor aliquet sit amet vulputate mattis amet laoreet lorem.</p>
                                <ul className="actions">
                                    <li><a href="#" className="button style1">Learn More</a></li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SeminarsSection;
