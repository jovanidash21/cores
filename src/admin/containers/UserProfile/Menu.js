import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { Button } from 'react-bootstrap';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.handleDeleteUserSubmit = this.handleDeleteUserSubmit.bind(this);
    }
    handleDeleteUserSubmit(event) {
        event.preventDefault();

        const {
            user,
            handleDeleteUserSubmit
        } = this.props;

        handleDeleteUserSubmit(user._id);
        browserHistory.push('/admin/users');
    }

    render() {
        const { handleDeleteUserSubmit } = this;
        const { user } = this.props;

        return(
            <div className="row" style={{textAlign:"right"}}>
                <div className="col-lg-12">
                    <Link to={'/admin/user/' + user._id + '/edit'}>
                        <Button bsSize="large" bsStyle="success">
                            Edit User
                        </Button>
                    </Link>
                    &nbsp;
                    <Button bsSize="large" bsStyle="danger" onClick={handleDeleteUserSubmit} >
                        Delete User
                    </Button>
                </div>
            </div>
        )
    }
}

export default Menu;