import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

const Footer  = () => {
    return(
        <div className="form-footer">
            <div className="form-group">
                <div className="col-md-9 col-md-offset-3">
                    <Button bsStyle="primary">
                        Add New User
                    </Button>
                </div>
            </div>
        </div>
    )
};

export default Footer;