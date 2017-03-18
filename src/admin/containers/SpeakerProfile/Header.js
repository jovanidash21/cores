import React, { Component } from 'react';

class Header extends Component {
    render() {
        const { speaker } = this.props;

        return(
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body app-heading">
                            <img className="profile-img" src={speaker.profileImage} />
                            <div className="app-title">
                                <div className="title">
                                    <span className="highlight">
                                        {
                                            speaker.firstName
                                        }
                                        &nbsp;
                                        {
                                            speaker.lastName
                                        }
                                    </span>
                                </div>
                                <div className="description">
                                    Email:&nbsp;
                                    {
                                        speaker.email
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;