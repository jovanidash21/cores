import React, { Component } from 'react'
import { Link } from 'react-router';

class Logo extends Component {
    render() {
        const { user } = this.props;

        return(
            <div id="logo">
                <h1>
                    <Link to={'/' + user.username}>
                        {
                            user.firstName
                        }
                        &nbsp;
                        {
                            user.lastName
                        }
                    </Link>
                </h1>
                <p>
                    &#64;
                    {
                        user.username
                    }
                </p>
            </div>
        )
    }
}

export default Logo;