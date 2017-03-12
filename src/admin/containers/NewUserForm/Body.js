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

        this.handleAddNewUserSubmit = this.handleAddNewUserSubmit.bind(this);
    }
    handleAddNewUserSubmit(event) {
        event.preventDefault();

        const { handleAddNewUserSubmit } = this.props;

        handleAddNewUserSubmit(newUser);
    }

    render() {
        const { handleAddNewUserSubmit } = this;

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
                                <Select2
                                    defaultValue={'Male'}
                                    data={['Male', 'Female']}
                                />
                            </div>
                            <ControlLabel bsClass="col-md-3 control-label">
                                School
                            </ControlLabel>
                            <div className="col-md-9">
                                <Select2
                                    defaultValue={'Polytechnic University of the Philippines (PUP) - Manila'}
                                    data={[
                                        'Polytechnic University of the Philippines (PUP) - Manila',
                                        'Adamson University (AdU)',
                                        'Arellano University (AU)',
                                        'Centro Escolar University (CEU)',
                                        'Don Bosco Technical College(DBTC)',
                                        'Eulogio "Amang" Rodriguez Institute of Science and Technology (EARIST)',
                                        'Far Eastern University (FEU)',
                                        'Gardner College',
                                        'ICCT College',
                                        'Innovative College of Science and Technology (ICST)',
                                        'Jose Rizal University (JRU)',
                                        'New Era University (NEU)',
                                        'National University (NU)',
                                        'Pamantasan ng Lungsod ng Marikina (PLMAR)',
                                        'Pamantasan ng Lungsod ng Maynila (PLM)',
                                        'Philippine State College of Aeronautics (PHILSCA)',
                                        'Polytechnic University of the Philippines (PUP) - Batangas',
                                        'Rizal Technological University (RTU)',
                                        'St.John Technological College of the Philippines- (SJTCP)',
                                        'STI',
                                        'STI - College Global City',
                                        'Taguig City University (TCU)',
                                        'Taytay National High School',
                                        'Technological Institute of the Philippines (TIP)',
                                        'Technological University of the Philippines (TUP)',
                                        'University of Rizal System (URS)',
                                        'University of the East (UE)',
                                        'University of Santo Tomas (UST)',
                                        'Westmead International School (WIS)',
                                        'Other'
                                    ]}
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
                                    defaultValue={'BS Computer Engineering (BSCpE)'}
                                    data={[
                                        'BS Computer Engineering (BSCpE)',
                                        'BS Information Technology (BSIT)',
                                        'BS Computer Science (BSCS)',
                                        'Other'
                                    ]}
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
                                    defaultValue={'Registrant'}
                                    data={['Registrant', 'Administrator']}
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