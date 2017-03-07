import React, { Component } from 'react';

const PageLikes  = () => {
    return(
        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <a className="card card-banner card-blue-light">
                <div className="card-body">
                    <i className="icon fa fa-thumbs-o-up fa-4x" />
                    <div className="content">
                        <div className="title">Page Likes</div>
                        <div className="value"><span className="sign" />2453</div>
                    </div>
                </div>
            </a>
        </div>
    )
};

export default PageLikes;