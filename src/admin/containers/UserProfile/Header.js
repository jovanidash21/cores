import React, { Component } from 'react';

class Header extends Component {
    render() {
        const { user } = this.props;

        return(
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body app-heading">
                            <img className="profile-img" src={user.profileImage} />
                            <div className="app-title">
                                <div className="title">
                                    <span className="highlight">
                                        {
                                            user.firstName
                                        }
                                        &nbsp;
                                        {
                                            user.lastName
                                        }
                                    </span>
                                </div>
                                <div className="description">
                                    &#64;
                                    {
                                        user.username
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