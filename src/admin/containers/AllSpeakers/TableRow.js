import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment-timezone';

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
                    {
                        moment(speaker.createdAt)
                            .tz("Asia/Manila")
                            .format("MM/DD/YYYY hh:mm A")
                    }
                </td>
                <td>
                    {
                        moment(speaker.updatedAt)
                            .tz("Asia/Manila")
                            .format("MM/DD/YYYY hh:mm A")
                    }
                </td>
            </tr>
        )
    }
}

export default TableRow;