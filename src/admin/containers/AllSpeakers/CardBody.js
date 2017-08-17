import React, { Component } from 'react';
import { Link } from 'react-router';
import SpicyDatatable from 'spicy-datatable';
import moment from 'moment-timezone';
import 'spicy-datatable/src/sample-styles.css'

class CardBody extends Component {
  render() {
    const { speakers } = this.props;
    const speakersColumns = [
      { key: 'firstName', label: 'First Name' },
      { key: 'lastName', label: 'Last Name' },
      { key: 'position', label: 'Position' },
      { key: 'school', label: 'School' },
      { key: 'office', label: 'Office' },
      { key: 'createdAt', label: 'Date Created' },
      { key: 'updatedAt', label: 'Last Update' }
    ];
    const speakersRows = [];

    for (var i = 0; i < speakers.length; i++) {
      speakersRows.push({
        firstName:
          <Link to={'/admin/speaker/' + speakers[i]._id}>
            {speakers[i].firstName}
          </Link>,
        lastName:
          <Link to={'/admin/speaker/' + speakers[i]._id}>
            {speakers[i].lastName}
          </Link>,
        position: speakers[i].position,
        school: speakers[i].school,
        office: speakers[i].office,
        createdAt: moment(speakers[i].createdAt)
          .tz("Asia/Manila")
          .format("MM/DD/YYYY hh:mm A"),
        updatedAt: moment(speakers[i].updatedAt)
          .tz("Asia/Manila")
          .format("MM/DD/YYYY hh:mm A")
      });
    }

    return(
      <div className="card-body no-padding">
        <SpicyDatatable
          tableKey="seminarsTable"
          columns={speakersColumns}
          rows={speakersRows}
        />
      </div>
    )
  }
}

export default CardBody;
