import React, { Component } from 'react';
import { Link } from 'react-router';

class SpeakerItem extends Component {
  render() {
    const { speaker } = this.props;

    return(
      <tr>
        <td>
          <Link to={'/admin/speaker/' + speaker._id}>
            {
              speaker.firstName
            }
            &nbsp;
            {
              speaker.lastName
            }
          </Link>
        </td>
        <td className="right">
          {
            speaker.email
          }
        </td>
      </tr>
    )
  }
}

export default SpeakerItem;
