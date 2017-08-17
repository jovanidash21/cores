import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment-timezone';

class CardBody extends Component {
  render() {
    const { user } = this.props;

    return(
      <div className="card-body">
        <div className="row">
          <div className="col-md-4 col-xs-12">
            <div className="section">
              <div className="section-title">
                Role
              </div>
              <div className="section-body">
                {
                  user.role
                }
              </div>
            </div>
          </div>
          <div className="col-md-4 col-xs-12">
            <div className="section">
              <div className="section-title">
                Gender
              </div>
              <div className="section-body">
                {
                  user.gender
                }
              </div>
            </div>
          </div>
          <div className="col-md-4 col-xs-12">
            <div className="section">
              <div className="section-title">
               Birthdate
              </div>
              <div className="section-body">
                {
                  moment(user.birthDate)
                    .tz("Asia/Manila")
                    .format("MMM DD, YYYY")
                }
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="section">
              <div className="section-title">
                Email
              </div>
              <div className="section-body">
                {
                  user.email
                }
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="section">
              <div className="section-title">
                School
              </div>
              <div className="section-body">
                {
                  user.school
                }
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="section">
              <div className="section-title">
                Student Number
              </div>
              <div className="section-body">
                {
                  user.studentNumber
                }
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="section">
              <div className="section-title">
                Course
              </div>
              <div className="section-body">
                {
                  user.course
                }
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="section">
              <div className="section-title">
                Seminars
              </div>
              <div className="section-body">
                <ul>
                  {
                    user.seminars.map(userSeminar =>
                      <li>
                        <Link to={'/admin/seminar/' + userSeminar._id}>
                          {userSeminar.title}
                        </Link>
                      </li>
                    )
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CardBody;
