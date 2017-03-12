import React, { Component } from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

const AllSeminars = () => {
    return(
        <div className="row">
            <div className="col-xs-12">
                <div className="card">
                    <CardHeader />
                    <CardBody />
                </div>
            </div>
        </div>
    )
};

export default AllSeminars;