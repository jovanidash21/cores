import React, { Component } from 'react';
import { connect } from 'react-refetch';
import moment from 'moment-timezone';
import LoadingAnimation from '../LoadingAnimation/Index';
import Error from '../Error/Index';

class SeminarDescription extends Component {
    render() {
        const { seminarProfileDataFetch } = this.props;

        if (seminarProfileDataFetch.pending) {
            return <LoadingAnimation />
        }
        else if (seminarProfileDataFetch.rejected) {
            return <Error error={seminarProfileDataFetch.reason} />
        }
        else if (seminarProfileDataFetch.fulfilled) {
            const [seminar] = seminarProfileDataFetch.value;

            return(
                <div id="intro-wrapper" className="wrapper style1">
                    <div className="title">
                        More Info
                    </div>
                    <section id="intro" className="container">
                        <p>
                            <img src={seminar.featuredImage} alt="" />
                        </p>
                        <p className="style2">
                            {
                                moment(seminar.schedule)
                                    .tz("Asia/Manila")
                                    .format("MMM DD, YYYY hh:mm A")
                            }
                            <br className="mobile-hide" />
                            {
                                seminar.location
                            }
                        </p>
                        <p className="style3">
                            <strong>
                                Speaker/s:
                            </strong>
                            <ul>
                                {
                                    seminar.speakers.length > 0
                                        ?
                                        seminar.speakers.map(seminarSpeaker =>
                                            <li>
                                                {seminarSpeaker.firstName}
                                                &nbsp;
                                                {seminarSpeaker.lastName}
                                            </li>
                                        )
                                        :
                                        <li>
                                            None as of now
                                        </li>
                                }
                            </ul>
                        </p>
                        <p className="style1">
                            {
                                seminar.description
                            }
                        </p>
                    </section>
                </div>
            )
        }
    }
}

export default connect((props) => {
    return {
        seminarProfileDataFetch: {
            url: `/api/seminar/${props.seminarID}`,
            force: true,
            refreshing: true
        },
    }
})(SeminarDescription);