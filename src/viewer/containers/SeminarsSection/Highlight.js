import React, { Component } from 'react';

class Highlight extends Component {
    render() {
        const { seminar } = this.props;

        return (
            <div className="4u 12u(mobile)">
                <section className="highlight">
                    <a href="#" className="image featured"><img src="images/pic03.jpg" alt="" /></a>
                    <h3>
                        <a href="#">
                            {
                                seminar.title
                            }
                        </a>
                    </h3>
                    <p>Eget mattis at, laoreet vel amet sed velit aliquam diam ante, dolor aliquet sit amet vulputate mattis amet laoreet lorem.</p>
                    <ul className="actions">
                        <li><a href="#" className="button style1">Learn More</a></li>
                    </ul>
                </section>
            </div>
        )
    }
}

export default Highlight;
