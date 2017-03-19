import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment-timezone';


class TableRow extends Component {
    render() {
        const { user } = this.props;

        return(
            <tr>
                <td>
                    <Link to={'/admin/user/' + user._id}>
                        {user.username}
                    </Link>
                </td>
                <td>
                    {user.firstName}
                </td>
                <td>
                    {user.lastName}
                </td>
                <td>
                    {user.email}
                </td>
                <td>
                    {user.role}
                </td>
                <td>
                    {
                        moment(user.createdAt)
                            .tz("Asia/Manila")
                            .format("MM/DD/YYYY hh:mm A")
                    }
                </td>
                <td>
                    {
                        moment(user.updatedAt)
                            .tz("Asia/Manila")
                            .format("MM/DD/YYYY hh:mm A")
                    }
                </td>
            </tr>
        )
    }
}

export default TableRow;