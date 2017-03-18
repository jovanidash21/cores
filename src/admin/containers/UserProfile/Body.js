import React, { Component } from 'react';
import CardBody from './CardBody';

class Body extends Component {
    render() {
        const { user } = this.props;

        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-title">Profile</div>
                        </div>
                        <CardBody user={user} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;