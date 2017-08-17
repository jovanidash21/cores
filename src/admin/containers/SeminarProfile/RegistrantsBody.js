import React, { Component } from 'react';
import { Link } from 'react-router';
import SpicyDatatable from 'spicy-datatable';
import 'spicy-datatable/src/sample-styles.css';

class RegistrantsBody extends Component {
  render() {
    const { seminar } = this.props;
    const seminarRegistrantsColumns = [
      { key: 'username', label: 'Username' },
      { key: 'firstName', label: 'First Name' },
      { key: 'lastName', label: 'Last Name' },
      { key: 'email', label: 'Email' },
      { key: 'role', label: 'Role' }
    ];
    const seminarRegistrantsRows = [];

    for (var i = 0; i < seminar.registrants.length; i++) {
      seminarRegistrantsRows.push({
        username:
          <Link to={'/admin/user/' + seminar.registrants[i]._id}>
            {seminar.registrants[i].username}
          </Link>,
        firstName: seminar.registrants[i].firstName,
        lastName: seminar.registrants[i].lastName,
        email: seminar.registrants[i].email,
        role: seminar.registrants[i].role,
      });
    }

    return(
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <div className="card-title">Registrants</div>
            </div>
            <div className="card-body">
             <SpicyDatatable
                tableKey="seminarRegistrantsTable"
                columns={seminarRegistrantsColumns}
                rows={seminarRegistrantsRows}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RegistrantsBody;
