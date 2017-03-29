import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Logo extends Component {
    constructor(props) {
        super(props);

        this.handleUserAddSeminarSubmit = this.handleUserAddSeminarSubmit .bind(this);
        this.handleUserRemoveSeminarSubmit = this.handleUserRemoveSeminarSubmit .bind(this);
    }
    handleUserAddSeminarSubmit(event) {
        event.preventDefault();

        const { handleUserAddSeminarSubmit } = this.props;

        handleUserAddSeminarSubmit(userID, seminarID);
    }
    handleUserRemoveSeminarSubmit(event) {
        event.preventDefault();

        const { handleUserRemoveSeminarSubmit } = this.props;

        handleUserRemoveSeminarSubmit(userID, seminarID);
    }

    render() {
        const {
            user,
            seminar
        } = this.props;
        const {
            handleUserAddSeminarSubmit,
            handleUserRemoveSeminarSubmit
        } = this;

        return(
            <div id="logo">
                <h1>
                    {
                        seminar.title
                    }
                </h1>
                <ul className="actions">
                    {
                        user._id != undefined
                            ?
                            <li>
                                <a href="#" className="button style1">
                                    Register
                                </a>
                            </li>
                            :
                            <li>
                                <a href="/auth/login" className="button style3">
                                    Login to Register
                                </a>
                            </li>
                    }
                </ul>
            </div>
        )
    }
}

export default Logo;