import React, { Component } from 'react';
import Sale from './Sale';
import PageLikes from './PageLikes';
import Registration from './Registration';

const Card  = () => {
    return(
        <div className="row">
            <Sale />
            <PageLikes />
            <Registration />
        </div>
    )
};

export default Card;