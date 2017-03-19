import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

class Menu extends Component {
    render() {
        const { seminar } = this.props;

        return(
            <div className="row" style={{textAlign:"right"}}>
                <div className="col-lg-12">
                    <Link to={'/admin/seminar/' + seminar._id + '/edit'}>
                        <Button bsSize="large" bsStyle="success">
                            Edit Seminar
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Menu;