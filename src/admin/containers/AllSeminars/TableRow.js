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
                    {seminar.schedule}
                </td>
                <td>
                    {seminar.location}
                </td>
                <td>
                    {seminar.createdAt}
                </td>
                <td>
                    {seminar.updatedAt}
                </td>
            </tr>
        )
    }
}

export default TableRow;