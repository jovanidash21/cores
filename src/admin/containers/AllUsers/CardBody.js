import React, { Component } from 'react';
import { Link } from 'react-router';
import SpicyDatatable from 'spicy-datatable';
import moment from 'moment-timezone';
import 'spicy-datatable/src/sample-styles.css'

class CardBody extends Component {
    render() {
        const { users } = this.props;
        const usersColumns = [
            { key: 'username', label: 'Username' },
            { key: 'firstName', label: 'First Name' },
            { key: 'lastName', label: 'Last Name' },
            { key: 'email', label: 'Email' },
            { key: 'role', label: 'Role' },
            { key: 'createdAt', label: 'Date Created' },
            { key: 'updatedAt', label: 'Last Update' }
        ];
        const usersRows = [];

        for (var i = 0; i < users.length; i++) {
            usersRows.push({
                username:
                    <Link to={'/admin/user/' + users[i]._id}>
                        {users[i].username}
                    </Link>,
                firstName: users[i].firstName,
                lastName: users[i].lastName,
                email: users[i].email,
                role: users[i].role,
                createdAt: moment(users[i].createdAt)
                    .tz("Asia/Manila")
                    .format("MM/DD/YYYY hh:mm A"),
                updatedAt: moment(users[i].updatedAt)
                    .tz("Asia/Manila")
                    .format("MM/DD/YYYY hh:mm A")
            });
        }

        return(
            <div className="card-body no-padding">
                <SpicyDatatable
                    tableKey="usersTable"
                    columns={usersColumns}
                    rows={usersRows}
                />
            </div>
        )
    }
}

export default CardBody;