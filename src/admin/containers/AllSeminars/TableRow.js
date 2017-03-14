import React, { Component } from 'react';

class TableRow extends Component {
    render() {
        const { seminar } = this.props;

        return(
            <tr>
                <td>
                    {seminar.title}
                    </td>
                <td>
                    {seminar.speaker}
                </td>
                <td>
                    {user.schedule}
                </td>
                <td>
                    {user.location}
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