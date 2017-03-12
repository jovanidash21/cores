import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import Select2 from 'react-select2-wrapper';

const Body  = () => {
    return(
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
                        Date
                    </ControlLabel>
                    <div className="col-md-9">
                        <FormControl id="date" type="text" placeholder="" />
                    </div>
                </FormGroup>
            </div>
        </div>
    )
};

export default Body;