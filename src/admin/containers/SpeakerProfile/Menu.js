import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

class Menu extends Component {
    render() {
        const { speaker } = this.props;

        return(
            <div className="row" style={{textAlign:"right"}}>
                <div className="col-lg-12">
                    <Link to={'/admin/speaker/' + speaker._id + '/edit'}>
                        <Button bsSize="large" bsStyle="success">
                            Edit Speaker
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Menu;