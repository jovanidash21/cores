import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment-timezone';

class SeminarItem extends Component {
  render() {
    const { seminar } = this.props;

    return(
      <Link to={'/admin/seminar/' + seminar._id} className="list-group-item">
        <span className="badge badge-success">
          {
            moment(seminar.schedule)
            .tz("Asia/Manila")
            .format("MMM DD, YYYY hh:mm A")
          }
        </span>
        {
          seminar.title
        }
      </Link>
    )
  }
}

export default SeminarItem;
