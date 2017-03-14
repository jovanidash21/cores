import React, { Component } from 'react';

class TableRow extends Component {
    render() {
        const { speaker } = this.props;

        return(
            <tr>
                <td>
                    {speaker.firstName}
                </td>
                <td>
                    {speaker.lastName}
                </td>
                <td>
                    {speaker.position}
                </td>
                <td>
                    {speaker.school}
                </td>
                <td>
                    {speaker.office}
                </td>
                <td>
                    {speaker.seminar}
                </td>
                <td>
                    {speaker.createdAt}
                </td>
                <td>
                    {speaker.updatedAt}
                </td>
            </tr>
        )
    }
}

export default TableRow;