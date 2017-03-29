import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import moment from 'moment-timezone';
import Select2 from 'react-select2-wrapper';
import 'react-select2-wrapper/css/select2.min.css';

class Body extends Component {
    render() {
        const { user } = this.props;

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
                                        <strong>
                                            <Link to={'/seminar/' + userSeminar._id}>
                                                {userSeminar.title}
                                            </Link>
                                        </strong>
                                        &nbsp;
                                        {
                                            moment(userSeminar.schedule)
                                                .tz("Asia/Manila")
                                                .format("MMM DD, YYYY hh:mm A")
                                        }
                                        &nbsp;
                                        &#64;
                                        {
                                            userSeminar.location
                                        }
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