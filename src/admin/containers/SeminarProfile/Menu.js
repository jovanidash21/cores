import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.handleDeleteSeminarSubmit = this.handleDeleteSeminarSubmit.bind(this);
    }
    handleDeleteSeminarSubmit(event) {
        event.preventDefault();

        const {
            seminar,
            handleDeleteSeminarSubmit
        } = this.props;

        handleDeleteSeminarSubmit(seminar._id);
    }

    render() {
        const { handleDeleteSeminarSubmit } = this;
        const { seminar } = this.props;

        return(
            <div className="row" style={{textAlign:"right"}}>
                <div className="col-lg-12">
                    <Link to={'/admin/seminar/' + seminar._id + '/edit'}>
                        <Button bsSize="large" bsStyle="success">
                            Edit Seminar
                        </Button>
                    </Link>
                    &nbsp;
                    <Button bsSize="large" bsStyle="danger" onClick={handleDeleteSeminarSubmit} >
                        Delete Seminar
                    </Button>
                </div>
            </div>
        )
    }
}

export default Menu;