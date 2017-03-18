import React, { Component } from 'react';

class RegistrantsBody extends Component {
    render() {
        const { seminar } = this.props;

        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-title">Registrants</div>
                        </div>
                        <div className="card-body">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegistrantsBody;