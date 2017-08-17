import React, { Component } from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from 'react-bootstrap';
import Select2 from 'react-select2-wrapper';
import DateTime from 'react-datetime';
import 'react-datetime/css/react-datetime.css'

class Body extends Component {
  constructor(props) {
    super(props);

    const { seminars } = this.props;
    let seminarsData = [];

    for (var i = 0; i < seminars.length; i++) {
      seminarsData.push({
        text: seminars[i].title,
        id: seminars[i]._id
      });
    }

    this.state = {
      usernameValue: '',
      emailValue: '',
      firstNameValue: '',
      lastNameValue: '',
      birthDateValue: new Date(),
      genderValue: 'male',
      schoolValue: 'pup-manila',
      courseValue: 'bscpe',
      seminarsValue: [],
      seminarsData: seminarsData,
      passwordValue: '',
      roleValue: 'registrant'
    };
    this.handleUsernameValueChange = this.handleUsernameValueChange.bind(this);
    this.handleEmailValueChange = this.handleEmailValueChange.bind(this);
    this.handleFirstNameValueChange = this.handleFirstNameValueChange.bind(this);
    this.handleLastNameValueChange = this.handleLastNameValueChange.bind(this);
    this.handleBirthDateValueChange = this.handleBirthDateValueChange.bind(this);
    this.handleGenderValueChange = this.handleGenderValueChange.bind(this);
    this.handleSchoolValueChange = this.handleSchoolValueChange.bind(this);
    this.handleCourseValueChange = this.handleCourseValueChange.bind(this);
    this.handleSeminarsValueChange = this.handleSeminarsValueChange.bind(this);
    this.handlePasswordValueChange = this.handlePasswordValueChange.bind(this);
    this.handleRoleValueChange = this.handleRoleValueChange.bind(this);
    this.handleAddNewUserSubmit = this.handleAddNewUserSubmit.bind(this);
  }
  handleUsernameValueChange(event) {
    this.setState({usernameValue: event.target.value})
  }
  handleEmailValueChange(event) {
    this.setState({emailValue: event.target.value})
  }
  handleFirstNameValueChange(event) {
    this.setState({firstNameValue: event.target.value})
  }
  handleLastNameValueChange(event) {
    this.setState({lastNameValue: event.target.value})
  }
  handleBirthDateValueChange(newDate) {
    this.setState({birthDateValue: newDate});
  }
  handleGenderValueChange(event) {
    this.setState({genderValue: event.target.value})
  }
  handleSchoolValueChange(event) {
    this.setState({schoolValue: event.target.value})
  }
  handleCourseValueChange(event) {
    this.setState({courseValue: event.target.value})
  }
  handleSeminarsValueChange() {
    let seminars = this.refs.seminars.el.select2('data');
    let seminarsValue = [];

    for (var i = 0; i < seminars.length; i++) {
      seminarsValue.push(seminars[i].id);
    }

    this.setState({seminarsValue: seminarsValue})
  }
  handlePasswordValueChange(event) {
    this.setState({passwordValue: event.target.value})
  }
  handleRoleValueChange(event) {
    this.setState({roleValue: event.target.value})
  }
  handleAddNewUserSubmit(event) {
    event.preventDefault();

    const { handleAddNewUserSubmit } = this.props;
    let newUser = [];
    let username = this.state.usernameValue;
    let email = this.state.emailValue;
    let firstName = this.state.firstNameValue;
    let lastName = this.state.lastNameValue;
    let birthDate = this.state.birthDateValue;
    let gender = this.state.genderValue;
    let school = this.state.schoolValue;
    let studentNumber = this.studentNumber.value;
    let course = this.state.courseValue;
    let seminars = this.state.seminarsValue;


    let password = this.state.passwordValue;
    let role = this.state.roleValue;

    if (
      (username == '' ) ||
      (email == '') ||
      (firstName == '') ||
      (lastName == '') ||
      (password == '')
    ) {
      alert("Please fill out all the required fields");
    }
    else {
      newUser.push({
        username,
        email,
        firstName,
        lastName,
        birthDate,
        gender,
        school,
        studentNumber,
        course,
        seminars,
        password,
        role
      });
      handleAddNewUserSubmit(newUser);
    }
  }

  render() {
    const {
      handleUsernameValueChange,
      handleEmailValueChange,
      handleFirstNameValueChange,
      handleLastNameValueChange,
      handleBirthDateValueChange,
      handleGenderValueChange,
      handleSchoolValueChange,
      handleCourseValueChange,
      handleSeminarsValueChange,
      handlePasswordValueChange,
      handleRoleValueChange,
      handleAddNewUserSubmit
    } = this;
    const {
      usernameValue,
      emailValue,
      firstNameValue,
      lastNameValue,
      birthDateValue,
      genderValue,
      schoolValue,
      courseValue,
      seminarsValue,
      seminarsData,
      passwordValue,
      roleValue
    } = this.state;

    return(
      <div>
        <div className="section">
            <div className="section-body">
              <FormGroup
                bsClass=
                {
                  usernameValue == ""
                    ?
                    "form-group has-error"
                    :
                    "form-group"
                }
              >
                <ControlLabel bsClass="col-md-3 control-label" htmlFor="username">
                  Username (required)
                </ControlLabel>
                <div className="col-md-9">
                  <FormControl
                    id="username"
                    type="text"
                    value={usernameValue}
                    onChange={handleUsernameValueChange}
                    placeholder=""
                  />
                </div>
              </FormGroup>
              <FormGroup
                bsClass=
                  {
                    emailValue == ""
                      ?
                      "form-group has-error"
                      :
                      "form-group"
                  }
              >
                <ControlLabel bsClass="col-md-3 control-label" htmlFor="email">
                  Email (required)
                </ControlLabel>
                <div className="col-md-9">
                  <FormControl
                    id="email"
                    type="email"
                    value={emailValue}
                    onChange={handleEmailValueChange}
                    placeholder=""
                  />
                </div>
              </FormGroup>
              <FormGroup
                bsClass=
                  {
                    firstNameValue == ""
                      ?
                      "form-group has-error"
                      :
                      "form-group"
                  }
              >
                <ControlLabel bsClass="col-md-3 control-label" htmlFor="firstName">
                  First Name (required)
                </ControlLabel>
                <div className="col-md-9">
                  <FormControl
                    id="firstName"
                    type="text"
                    value={firstNameValue}
                    onChange={handleFirstNameValueChange}
                    placeholder=""
                  />
                </div>
              </FormGroup>
              <FormGroup
                bsClass=
                  {
                    lastNameValue == ""
                      ?
                      "form-group has-error"
                      :
                      "form-group"
                  }
              >
                <ControlLabel bsClass="col-md-3 control-label" htmlFor="lastName">
                  Last Name (required)
                </ControlLabel>
                <div className="col-md-9">
                  <FormControl
                    id="lastName"
                    type="text"
                    value={lastNameValue}
                    onChange={handleLastNameValueChange}
                    placeholder=""
                  />
                </div>
              </FormGroup>
              <FormGroup>
                <ControlLabel bsClass="col-md-3 control-label">
                  Birth Date
                </ControlLabel>
                <div className="col-md-9">
                  <DateTime
                    defaultValue={birthDateValue}
                    onChange={handleBirthDateValueChange}
                    timeFormat={false}
                  />
                  </div>
              </FormGroup>
              <FormGroup>
                <ControlLabel bsClass="col-md-3 control-label">
                  Gender
                </ControlLabel>
                <div className="col-md-9">
                  <div className="radio radio-inline">
                    <input type="radio" id="male" value="male" checked={genderValue === 'male'} onChange={handleGenderValueChange} />
                    <label htmlFor="male">
                      Male
                    </label>
                  </div>
                  <div className="radio radio-inline">
                    <input type="radio" id="female" value="female" checked={genderValue === 'female'} onChange={handleGenderValueChange} />
                    <label htmlFor="female">
                      Female
                    </label>
                  </div>
                </div>
              </FormGroup>
              <FormGroup>
                <ControlLabel bsClass="col-md-3 control-label">
                  School
                </ControlLabel>
                <div className="col-md-9">
                  <Select2
                    defaultValue={schoolValue}
                    data={[
                      {text: 'Polytechnic University of the Philippines (PUP) - Manila', id: 'pup-manila'},
                      {text: 'Adamson University (AdU)', id: 'adu'},
                      {text: 'Arellano University (AU)', id: 'au'},
                      {text: 'Centro Escolar University (CEU)', id: 'ceu'},
                      {text: 'Don Bosco Technical College(DBTC)', id: 'dbtc'},
                      {text: 'Eulogio "Amang" Rodriguez Institute of Science and Technology (EARIST)', id: 'earist'},
                      {text: 'Far Eastern University (FEU)', id: 'feu'},
                      {text: 'Gardner College', id: 'gardner'},
                      {text: 'ICCT College', id: 'icct'},
                      {text: 'Innovative College of Science and Technology (ICST)', id: 'icst'},
                      {text: 'Jose Rizal University (JRU)', id: 'jru'},
                      {text: 'New Era University (NEU)', id: 'neu'},
                      {text: 'National University (NU)', id: 'nu'},
                      {text: 'Pamantasan ng Lungsod ng Marikina (PLMAR)', id: 'plmar'},
                      {text: 'Pamantasan ng Lungsod ng Maynila (PLM)', value: 'plm'},
                      {text: 'Philippine State College of Aeronautics (PHILSCA)', id: 'philsca'},
                      {text: 'Polytechnic University of the Philippines (PUP) - Batangas', id: 'pup-batangas'},
                      {text: 'Rizal Technological University (RTU)', id: 'rtu'},
                      {text: 'St.John Technological College of the Philippines- (SJTCP)', id: 'sjtcp'},
                      {text: 'STI', id: 'sti'},
                      {text: 'STI - College Global City', id: 'sti-global-city'},
                      {text: 'Taguig City University (TCU)', id: 'tcu'},
                      {text: 'Taytay National High School (TNHS)', id: 'tnhs'},
                      {text: 'Technological Institute of the Philippines (TIP)', id: 'tip'},
                      {text: 'Technological University of the Philippines (TUP)', id: 'tup'},
                      {text: 'University of Rizal System (URS)', id:'urs'},
                      {text: 'University of the East (UE)', id: 'ue'},
                      {text: 'University of Santo Tomas (UST)', id: 'ust'},
                      {text: 'Westmead International School (WIS)', id: 'wis'},
                      {text: 'Other', id: 'other'}
                    ]}
                    onChange={handleSchoolValueChange}
                  />
                </div>
              </FormGroup>
              <FormGroup>
                <ControlLabel bsClass="col-md-3 control-label" htmlFor="studentNumber">
                  Student Number
                </ControlLabel>
                <div className="col-md-9">
                  <FormControl
                    id="studentNumber"
                    inputRef={(ref) => {this.studentNumber = ref}}
                    type="text"
                    placeholder="" />
                </div>
              </FormGroup>
              <FormGroup>
                <ControlLabel bsClass="col-md-3 control-label">
                  Course
                </ControlLabel>
                <div className="col-md-9">
                  <Select2
                    defaultValue={courseValue}
                    data={[
                      {text: 'BS Computer Engineering (BSCpE)', id: 'bscpe'},
                      {text: 'BS Information Technology (BSIT)', id: 'bsit'},
                      {text: 'BS Computer Science (BSCS)', id: 'bscs'},
                      {text: 'Other', id: 'other'}
                    ]}
                    onChange={handleCourseValueChange}
                  />
                </div>
              </FormGroup>
              <FormGroup>
                <ControlLabel bsClass="col-md-3 control-label">
                  Seminars
                </ControlLabel>
                <div className="col-md-9">
                  <Select2
                    multiple
                    defaultValue={seminarsValue}
                    data={seminarsData}
                    onChange={handleSeminarsValueChange}
                    ref="seminars"
                  />
                </div>
              </FormGroup>
              <FormGroup
                bsClass=
                  {
                    passwordValue == ""
                      ?
                      "form-group has-error"
                      :
                      "form-group"
                  }
              >
                <ControlLabel bsClass="col-md-3 control-label" htmlFor="password">
                  Password (required)
                </ControlLabel>
                <div className="col-md-9">
                  <FormControl
                    id="password"
                    type="password"
                    value={passwordValue}
                    onChange={handlePasswordValueChange}
                    placeholder=""
                  />
                </div>
              </FormGroup>
              <FormGroup>
                <ControlLabel bsClass="col-md-3 control-label">
                  Role
                </ControlLabel>
                <div className="col-md-9">
                  <Select2
                    defaultValue={roleValue}
                    data={[
                      {text: 'Registrant', id: 'registrant'},
                      {text: 'Administrator', id: 'administrator'}
                    ]}
                    onChange={handleRoleValueChange}
                  />
                </div>
              </FormGroup>
          </div>
        </div>
        <div className="form-footer">
          <div className="form-group">
            <div className="col-md-9 col-md-offset-3">
              <Button bsStyle="primary" onClick={handleAddNewUserSubmit}>
                Add New User
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Body;
