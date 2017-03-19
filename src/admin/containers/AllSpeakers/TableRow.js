import React, { Component } from 'react';
import { Link } from 'react-router';

class TableRow extends Component {
    render() {
        const { speaker } = this.props;

        return(
            <tr>
                <td>
                    <Link to={'/admin/speaker/' + speaker._id}>
                        {speaker.firstName}
                    </Link>
                </td>
                <td>
                    <Link to={'/admin/speaker/' + speaker._id}>
                        {speaker.lastName}
                    </Link>
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