import React, { Component } from 'react';

class Logo extends Component {
  constructor(props) {
    super(props);

    this.handleUserAddSeminarSubmit = this.handleUserAddSeminarSubmit.bind(this);
    this.handleUserRemoveSeminarSubmit = this.handleUserRemoveSeminarSubmit.bind(this);
  }
  handleUserAddSeminarSubmit(event) {
    event.preventDefault();

    const {
      user,
      seminar,
      handleUserAddSeminarSubmit
    } = this.props;

    handleUserAddSeminarSubmit(user._id, seminar._id);
  }
  handleUserRemoveSeminarSubmit(event) {
    event.preventDefault();

    const {
      user,
      seminar,
      handleUserRemoveSeminarSubmit
    } = this.props;

    handleUserRemoveSeminarSubmit(user._id, seminar._id);
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
    var userSeminars = [];
    var registered = false;

    if (user._id != undefined) {
      for (var i = 0; i < user.seminars.length; i++) {
        userSeminars.push(user.seminars[i]);
      }
      console.log(userSeminars);
      for (var j = 0; j < userSeminars.length; j++) {
        if (userSeminars[j] == seminar._id) {
          registered = true;
          break;
        }
      }
    }

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
                  registered == false
                  ?
                  <li>
                    <a className="button style1" onClick={handleUserAddSeminarSubmit}>
                      Register
                    </a>
                  </li>
                  :
                  <li>
                    <a className="button style3" onClick={handleUserRemoveSeminarSubmit}>
                      Unregister
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
