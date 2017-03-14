import React, { Component } from 'react';
import TableRow from './TableRow';

class CardBody extends Component {
    render() {
        const { users } = this.props;

        return(
            <div className="card-body no-padding">
                <table className="datatable table table-striped primary" cellSpacing="0" width="100%">
                    <thead>
                    <tr>
                        <th>Username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Date Created</th>
                        <th>Last Update</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user =>
                                <TableRow user={user} />
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CardBody;