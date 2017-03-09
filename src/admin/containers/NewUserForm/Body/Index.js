import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

const Body  = () => {
    return(
        <div className="card-body">
            <form className="form form-horizontal">
                <div className="section">
                    <div className="section-body">
                        <FormGroup>
                            <ControlLabel bsClass="col-md-3 control-label" htmlFor="username">
                                Username (required)
                            </ControlLabel>
                            <div className="col-md-9">
                                <FormControl id="username" type="text" placeholder="" />
                            </div>
                            <ControlLabel bsClass="col-md-3 control-label" htmlFor="email">
                                Email (required)
                            </ControlLabel>
                            <div className="col-md-9">
                                <FormControl id="email" type="email" placeholder="" />
                            </div>
                            <ControlLabel bsClass="col-md-3 control-label" htmlFor="firstName">
                                First Name
                            </ControlLabel>
                            <div className="col-md-9">
                                <FormControl id="firstName" type="text" placeholder="" />
                            </div>
                            <ControlLabel bsClass="col-md-3 control-label" htmlFor="lastName">
                                Last Name
                            </ControlLabel>
                            <div className="col-md-9">
                                <FormControl id="lastName" type="text" placeholder="" />
                            </div>
                        </FormGroup>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default Body;