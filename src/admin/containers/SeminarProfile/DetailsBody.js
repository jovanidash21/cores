import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment-timezone';

class DetailsBody extends Component {
    render() {
        const { seminar } = this.props;

        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-title">Profile</div>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="section">
                                        <div className="section-title">
                                            Speaker
                                        </div>
                                        <div className="section-body">
                                            {
                                                seminar.speakers.map(seminarSpeaker =>
                                                    <p>
                                                        <Link to={'/admin/speaker/' + seminarSpeaker._id}>
                                                            {seminarSpeaker.firstName}
                                                            &nbsp;
                                                            {seminarSpeaker.lastName}
                                                        </Link>
                                                    </p>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="section">
                                        <div className="section-title">
                                            Schedule
                                        </div>
                                        <div className="section-body">
                                            {
                                                moment(seminar.schedule)
                                                    .tz("Asia/Manila")
                                                    .format("MM/DD/YYYY hh:mm A")
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="section">
                                        <div className="section-title">
                                            Location
                                        </div>
                                        <div className="section-body">
                                            {
                                                seminar.location
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailsBody;