import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import moment from 'moment-timezone';
import Select2 from 'react-select2-wrapper';
import 'react-select2-wrapper/css/select2.min.css';

class Body extends Component {
    constructor(props) {
        super(props);

        const {
            user,
            seminars
        } = this.props;
        let seminarsValue = [];
        let seminarsData = [];

        for (var i = 0; i < user.seminars.length; i++) {
            seminarsValue.push(user.seminars[i]._id);
        }

        for (var j = 0; j < seminars.length; j++) {
            seminarsData.push({
                text: seminars[j].title,
                id: seminars[j]._id
            });
        }

        this.state = {
            seminarsValue: seminarsValue,
            seminarsData: seminarsData
        };

        this.handleSeminarsValueChange = this.handleSeminarsValueChange.bind(this);
        this.handleEditUserSeminarsSubmit = this.handleEditUserSeminarsSubmit.bind(this);
    }
    handleSeminarsValueChange() {
        let seminars = this.refs.seminars.el.select2('data');
        let seminarsValue = [];

        for (var i = 0; i < seminars.length; i++) {
            seminarsValue.push(seminars[i].id);
        }

        this.setState({seminarsValue: seminarsValue})
    }
    handleEditUserSeminarsSubmit(event) {
        event.preventDefault();

        const {
            user,
            handleEditUserSeminarsSubmit
        } = this.props;
        let editUserSeminars = [];
        let seminars = this.state.seminarsValue;

        editUserSeminars.push ({
            seminars
        });
        handleEditUserSeminarsSubmit(user._id, editUserSeminars);
        browserHistory.push('/');
    }

    render() {
        const {
            handleSeminarsValueChange,
            handleEditUserSeminarsSubmit
        } = this;
        const { user } = this.props;
        const {
            seminarsValue,
            seminarsData
        } = this.state;

        return(
            <div id="user-details-body">
                <div className="row 150%">
                    <div className="6u 12u(mobile)">
                        <p className="style2">
                            <strong>
                                Username:&nbsp;
                            </strong>
                            {
                                user.username
                            }
                        </p>
                        <hr />
                        <p className="style1">
                            <strong>
                                First Name:&nbsp;
                            </strong>
                            {
                                user.firstName
                            }
                        </p>
                        <hr />
                        <p className="style1">
                            <strong>
                                Last Name:&nbsp;
                            </strong>
                            {
                                user.lastName
                            }
                        </p>
                        <hr />
                        <p className="style1">
                            <strong>
                                Gender:&nbsp;
                            </strong>
                            {
                                user.gender
                            }
                        </p>
                        <hr />
                        <p className="style1">
                            <strong>
                                Birthdate:&nbsp;
                            </strong>
                            {
                                moment(user.birthDate)
                                    .tz("Asia/Manila")
                                    .format("MMM DD, YYYY")
                            }
                        </p>
                    </div>
                    <div className="6u 12u(mobile)">
                        <p className="style1">
                            <strong>
                                Email:&nbsp;
                            </strong>
                            {
                                user.email
                            }
                        </p>
                        <hr />
                        <p className="style1">
                            <strong>
                                School:&nbsp;
                            </strong>
                            {
                                user.school
                            }
                        </p>
                        <hr />
                        <p className="style1">
                            <strong>
                                Student Number:&nbsp;
                            </strong>
                            {
                                user.studentNumber
                            }
                        </p>
                        <hr />
                        <p>
                            <strong>
                                Course:&nbsp;
                            </strong>
                            {
                                user.course
                            }
                        </p>
                    </div>
                    <div className="12u$">
                        <hr />
                        <p>
                            <strong>
                               Seminars
                            </strong>
                        </p>
                        <ul>
                            {
                                user.seminars.map(userSeminar =>
                                    <li>
                                        <Link to={'/seminar/' + userSeminar._id}>
                                            {userSeminar.title}
                                        </Link>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;