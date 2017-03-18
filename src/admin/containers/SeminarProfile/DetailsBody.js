import React, { Component } from 'react';

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
                                            Jovani Warguez
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
                                                seminar.schedule
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