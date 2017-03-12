import React, { Component } from 'react';
import CardHeader from './CardHeader';
import Body from './Body';
import Footer from './Footer';

class NewSeminarForm extends React.Component {
    render() {
        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <CardHeader />
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
    }
}

export default NewSeminarForm;