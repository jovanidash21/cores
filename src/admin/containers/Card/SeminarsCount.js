import React, { Component } from 'react';
import { Link } from 'react-router';

class SeminarsCount extends Component {
  render() {
    const { seminars } = this.props;

    return(
      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
        <Link to="/admin/seminars" className="card card-banner card-green-light">
          <div className="card-body">
            <i className="icon fa fa-line-chart fa-4x" />
            <div className="content">
              <div className="title">Seminars</div>
              <div className="value">
                {
                  seminars.count
                }
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

export default SeminarsCount;
