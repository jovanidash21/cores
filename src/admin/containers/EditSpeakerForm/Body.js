import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {
    FormGroup,
    ControlLabel,
    FormControl,
    Button
} from 'react-bootstrap';
import Select2 from 'react-select2-wrapper';

class Body extends Component {
    constructor(props) {
        super(props);

        const { speaker } = this.props;

        this.state = {
            firstNameValue: speaker.firstName,
            lastNameValue: speaker.lastName,
            emailValue: speaker.email,
            schoolValue: speaker.school,
            courseValue: speaker.course
        };
        this.handleFirstNameValueChange = this.handleFirstNameValueChange.bind(this);
        this.handleLastNameValueChange = this.handleLastNameValueChange.bind(this);
        this.handleEmailValueChange = this.handleEmailValueChange.bind(this);
        this.handleSchoolValueChange = this.handleSchoolValueChange.bind(this);
        this.handleCourseValueChange = this.handleCourseValueChange.bind(this);
        this.handleEditSpeakerSubmit = this.handleEditSpeakerSubmit.bind(this);
    }
    handleFirstNameValueChange(event) {
        this.setState({firstNameValue: event.target.value})
    }
    handleLastNameValueChange(event) {
        this.setState({lastNameValue: event.target.value})
    }
    handleEmailValueChange(event) {
        this.setState({emailValue: event.target.value})
    }
    handleSchoolValueChange(event) {
        this.setState({schoolValue: event.target.value})
    }
    handleCourseValueChange(event) {
        this.setState({courseValue: event.target.value})
    }
    handleEditSpeakerSubmit(event) {
        event.preventDefault();

        const {
            speaker,
            handleEditSpeakerSubmit
        } = this.props;
        let editSpeaker = [];
        let firstName = this.state.firstNameValue;
        let lastName = this.state.lastNameValue;
        let email = this.state.emailValue;
        let position = this.position.value;
        let school = this.state.schoolValue;
        let course = this.state.courseValue;
        let office = this.office.value;

        if (
            (firstName == '' ) ||
            (lastName == '') ||
            (email == '')
        ) {
            alert("Please fill out all the required fields");
        }
        else {
            editSpeaker.push({
                firstName,
                lastName,
                email,
                position,
                school,
                course,
                office
            });
            handleEditSpeakerSubmit(editSpeaker);
            browserHistory.push('/admin/speaker' + speaker._id);
        }
    }

    render() {
        const {
            handleFirstNameValueChange,
            handleLastNameValueChange,
            handleEmailValueChange,
            handleSchoolValueChange,
            handleCourseValueChange,
            handleEditSpeakerSubmit
        } = this;
        const { speaker } = this.props;
        const {
            firstNameValue,
            lastNameValue,
            emailValue,
            schoolValue,
            courseValue
        } = this.state;

        return(
            <div>
                <div className="section">
                    <div className="section-body">
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
                        <FormGroup>
                            <ControlLabel bsClass="col-md-3 control-label" htmlFor="position">
                                Position
                            </ControlLabel>
                            <div className="col-md-9">
                                <FormControl
                                    id="position"
                                    inputRef={(ref) => {this.position = ref}}
                                    type="text"
                                    defaultValue={speaker.position}
                                    placeholder=""
                                />
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
                            <ControlLabel bsClass="col-md-3 control-label" htmlFor="office">
                                Office
                            </ControlLabel>
                            <div className="col-md-9">
                                <FormControl
                                    id="office"
                                    inputRef={(ref) => {this.office = ref}}
                                    type="text"
                                    defaultValue={speaker.office}
                                    placeholder=""
                                />
                            </div>
                        </FormGroup>
                    </div>
                </div>
                <div className="form-footer">
                    <div className="form-group">
                        <div className="col-md-9 col-md-offset-3">
                            <Button bsStyle="primary" onClick={handleEditSpeakerSubmit}>
                                Update Speaker
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;