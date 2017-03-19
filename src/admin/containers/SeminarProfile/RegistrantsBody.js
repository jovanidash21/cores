import React, { Component } from 'react';
import { Link } from 'react-router';

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
                            <ul>
                                {
                                    seminar.registrants.map(seminarRegistrants =>
                                        <li>
                                            <Link to={'/admin/user/' + seminarRegistrants._id}>
                                                {seminarRegistrants.username}
                                            </Link>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegistrantsBody;