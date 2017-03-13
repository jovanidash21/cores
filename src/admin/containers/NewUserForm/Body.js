import React, { Component } from 'react';
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

        this.state = {
            genderValue: 'male',
            schoolValue: 'pup-manila',
            courseValue: 'bscpe',
            roleValue: 'registrant'
        };
        this.handleGenderValueChange = this.handleGenderValueChange.bind(this);
        this.handleSchoolValueChange = this.handleSchoolValueChange.bind(this);
        this.handleCourseValueChange = this.handleCourseValueChange.bind(this);
        this.handleRoleValueChange = this.handleRoleValueChange.bind(this);
        this.handleAddNewUserSubmit = this.handleAddNewUserSubmit.bind(this);
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
    handleRoleValueChange(event) {
        this.setState({roleValue: event.target.value})
    }
    handleAddNewUserSubmit(event) {
        event.preventDefault();

        const { handleAddNewUserSubmit } = this.props;


    }

    render() {
        const {
            handleGenderValueChange,
            handleSchoolValueChange,
            handleCourseValueChange,
            handleRoleValueChange,
            handleAddNewUserSubmit
        } = this;
        const {
            genderValue,
            schoolValue,
            courseValue,
            roleValue
        } = this.state;

        return(
            <div>
                <div className="section">
                    <div className="section-body">
                        <FormGroup>
                            <ControlLabel bsClass="col-md-3 control-label" htmlFor="username">
                                Username (required)
                            </ControlLabel>
                            <div className="col-md-9">
                                <FormControl id="username" ref="username" type="text" placeholder="" />
                            </div>
                            <ControlLabel bsClass="col-md-3 control-label" htmlFor="email">
                                Email (required)
                            </ControlLabel>
                            <div className="col-md-9">
                                <FormControl id="email" ref="email" type="email" placeholder="" />
                            </div>
                            <ControlLabel bsClass="col-md-3 control-label" htmlFor="firstName">
                                First Name
                            </ControlLabel>
                            <div className="col-md-9">
                                <FormControl id="firstName" ref="firstName" type="text" placeholder="" />
                            </div>
                            <ControlLabel bsClass="col-md-3 control-label" htmlFor="lastName">
                                Last Name
                            </ControlLabel>
                            <div className="col-md-9">
                                <FormControl id="lastName" ref="lastName" type="text" placeholder="" />
                            </div>
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
                            <ControlLabel bsClass="col-md-3 control-label" htmlFor="studentNumber">
                                Student Number
                            </ControlLabel>
                            <div className="col-md-9">
                                <FormControl id="studentNumber" ref="studentNumber" type="text" placeholder="" />
                            </div>
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
                            <ControlLabel bsClass="col-md-3 control-label" htmlFor="password">
                                Password
                            </ControlLabel>
                            <div className="col-md-9">
                                <FormControl id="password" ref="password" type="password" placeholder="" />
                            </div>
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