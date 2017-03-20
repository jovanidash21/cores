import React, { Component } from 'react';
import TableRow from './TableRow';

class CardBody extends Component {
    render() {
        const { speakers } = this.props;

        return(
            <div className="card-body no-padding">
                <table className="datatable table table-striped primary" cellSpacing="0" width="100%">
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
                        <th>School</th>
                        <th>Office</th>
                        <th>Date Created</th>
                        <th>Last Update</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        speakers.map(speaker =>
                            <TableRow speaker={speaker} />
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CardBody;