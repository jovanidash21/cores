import React, { Component } from 'react';

class TableRow extends Component {
    render() {
        const { user } = this.props;

        return(
            <tr>
                <td>
                    {user.username}
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
                    {user.createdAt}
                </td>
                <td>
                    {user.updatedAt}
                </td>
            </tr>
        )
    }
}

export default TableRow;