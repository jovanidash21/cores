import React, { Component } from 'react';
import Body from './Body';
import Footer from './Footer';

const NewUserForm  = () => {
    return(
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <form className="form form-horizontal">
                            <Body />
                            <Footer />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default NewUserForm;