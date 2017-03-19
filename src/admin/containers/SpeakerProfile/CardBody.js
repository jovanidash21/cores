import React, { Component } from 'react';
import { Link } from 'react-router';

class CardBody extends Component {
    render() {
        const { speaker } = this.props;

        return(
            <div className="card-body">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section">
                            <div className="section-title">
                                Position
                            </div>
                            <div className="section-body">
                                {
                                    speaker.position
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="section">
                            <div className="section-title">
                                School
                            </div>
                            <div className="section-body">
                                {
                                    speaker.school
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="section">
                            <div className="section-title">
                               Course
                            </div>
                            <div className="section-body">
                                {
                                    speaker.course
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="section">
                            <div className="section-title">
                                Office
                            </div>
                            <div className="section-body">
                                {
                                    speaker.office
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="section">
                            <div className="section-title">
                                Seminar
                            </div>
                            <div className="section-body">
                                <p>
                                    <Link to={'/admin/seminar/' + speaker.seminar._id}>
                                        {speaker.seminar.title}
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardBody;