import React from 'react';
import { IndexLink } from 'react-router';

const Logo  = () => {
    return(
        <div id="logo">
            <h1>
                <IndexLink to="/">
                    CoRES 2018
                </IndexLink>
            </h1>
            <p>
                Computer Research and Engineering Symposium
            </p>
        </div>
    )
};

export default Logo;