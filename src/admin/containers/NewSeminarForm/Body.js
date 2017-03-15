import React, { Component } from 'react';
import {
    FormGroup,
    FormControl,
    ControlLabel,
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

    render() {
        return(
            <div>
                <div className="section">
                    <div className="section-body">
                        <FormGroup>
                            <ControlLabel bsClass="col-md-3 control-label" htmlFor="title">
                                Title (required)
                            </ControlLabel>
                            <div className="col-md-9">
                                <FormControl id="title" type="text" placeholder="" />
                            </div>
                            <ControlLabel bsClass="col-md-3 control-label">
                                Speaker
                            </ControlLabel>
                            <div className="col-md-9">
                                <Select2
                                    defaultValue={'Speaker 1'}
                                    data={[
                                        'Speaker 1',
                                        'Speaker 2'
                                    ]}
                                />
                            </div>
                            <ControlLabel bsClass="col-md-3 control-label" htmlFor="date">
                                Schedule
                            </ControlLabel>
                            <div className="col-md-9">
                                <FormControl id="date" type="text" placeholder="" />
                            </div>
                        </FormGroup>
                    </div>
                </div>
                <div className="form-footer">
                    <div className="form-group">
                        <div className="col-md-9 col-md-offset-3">
                            <Button bsStyle="primary">
                                Add New Seminar
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;