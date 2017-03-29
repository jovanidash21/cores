import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment-timezone';

class Highlight extends Component {
    render() {
        const { seminar } = this.props;

        return (
            <div className="4u 12u(mobile)">
                <section className="highlight">
                    <Link to={'/seminar/' + seminar._id} className="image featured">
                        <img src={seminar.featuredImage} alt="" />
                    </Link>
                    <h3>
                        <Link to={'/seminar/' + seminar._id}>
                            {
                                seminar.title
                            }
                        </Link>
                    </h3>
                    <p>
                        {
                            moment(seminar.schedule)
                                .tz("Asia/Manila")
                                .format("MMM DD, YYYY hh:mm A")
                        }
                    </p>
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
