import React, { Component } from 'react';
import { Link } from 'react-router';

class SpeakerItem extends Component {
    render() {
        const { speaker } = this.props;

        return(
            <Link to={'/admin/speaker/' + speaker._id} className="list-group-item">
                <span className="badge badge-success">
                    {
                        speaker.position
                    }
                </span>
                {
                    speaker.firstName
                }
                &nbsp;
                {
                    speaker.lastName
                }
            </Link>
        )
    }
}

export default SpeakerItem;