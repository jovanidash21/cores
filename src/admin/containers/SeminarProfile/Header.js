import React, { Component } from 'react';

class Header extends Component {
    render() {
        const { seminar } = this.props;

        return(
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body app-heading">
                            <div className="app-title">
                                <div className="title">
                                    <span className="highlight">
                                        {
                                            seminar.title
                                        }
                                    </span>
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