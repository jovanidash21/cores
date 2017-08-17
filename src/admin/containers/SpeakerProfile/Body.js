import React, { Component } from 'react';
import CardBody from './CardBody';

class Body extends Component {
  render() {
    const { speaker } = this.props;

    return(
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <div className="card-title">Profile</div>
            </div>
            <CardBody speaker={speaker} />
          </div>
        </div>
      </div>
    )
  }
}

export default Body;
