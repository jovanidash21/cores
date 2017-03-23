import React, { Component } from 'react';

class SpeakersCount extends Component {
    render() {
        const { speakers } = this.props;

        return(
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <a className="card card-banner card-yellow-light">
                    <div className="card-body">
                        <i className="icon fa fa-microphone fa-4x" />
                        <div className="content">
                            <div className="title">Speakers</div>
                            <div className="value">
                                {
                                    speakers.count
                                }
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        )
    }
}

export default SpeakersCount;