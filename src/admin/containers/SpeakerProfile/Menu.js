import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { Button } from 'react-bootstrap';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.handleDeleteSpeakerSubmit = this.handleDeleteSpeakerSubmit.bind(this);
    }
    handleDeleteSpeakerSubmit(event) {
        event.preventDefault();

        const {
            speaker,
            handleDeleteSpeakerSubmit
        } = this.props;

        handleDeleteSpeakerSubmit(speaker._id);
        browserHistory.push('/admin/speakers');
    }

    render() {
        const { handleDeleteSpeakerSubmit } = this;
        const { speaker } = this.props;

        return(
            <div className="row" style={{textAlign:"right"}}>
                <div className="col-lg-12">
                    <Link to={'/admin/speaker/' + speaker._id + '/edit'}>
                        <Button bsSize="large" bsStyle="success">
                            Edit Speaker
                        </Button>
                    </Link>
                    &nbsp;
                    <Button bsSize="large" bsStyle="danger" onClick={handleDeleteSpeakerSubmit} >
                        Delete Speaker
                    </Button>
                </div>
            </div>
        )
    }
}

export default Menu;