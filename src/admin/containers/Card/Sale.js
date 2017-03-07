import React, { Component } from 'react';

const Sale  = () => {
    return(
        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <a className="card card-banner card-green-light">
                <div className="card-body">
                    <i className="icon fa fa-shopping-basket fa-4x" />
                    <div className="content">
                        <div className="title">Sale Today</div>
                        <div className="value"><span className="sign">$</span>420</div>
                    </div>
                </div>
            </a>
        </div>
    )
};

export default Sale;