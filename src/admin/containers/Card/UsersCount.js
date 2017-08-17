import React, { Component } from 'react';
import { Link } from 'react-router';

class UsersCount extends Component {
  render() {
    const { users } = this.props;

    return(
      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
        <Link to="/admin/speakers" className="card card-banner card-blue-light">
          <div className="card-body">
            <i className="icon fa fa-user fa-4x" />
            <div className="content">
              <div className="title">Users</div>
              <div className="value">
                {
                  users.count
                }
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default UsersCount;
