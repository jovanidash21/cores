import React, { Component } from 'react';

class Highlight extends Component {
    render() {
        const { seminar } = this.props;

        return (
            <div className="4u 12u(mobile)">
                <section className="highlight">
                    <a href="#" className="image featured">
                        <img src={seminar.featuredImage} alt="" />
                    </a>
                    <h3>
                        <a href="#">
                            {
                                seminar.title
                            }
                        </a>
                    </h3>
                    <p>
                        {
                            seminar.description
                        }
                    </p>
                </section>
            </div>
        )
    }
}

export default Highlight;
