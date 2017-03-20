import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment-timezone';

class TableRow extends Component {
    render() {
        const { seminar } = this.props;

        return(
            <tr>
                <td>
                    <Link to={'/admin/seminar/' + seminar._id}>
                        {seminar.title}
                    </Link>
                </td>
                <td>
                    {
                        moment(seminar.schedule)
                            .tz("Asia/Manila")
                            .format("MM/DD/YYYY hh:mm A")
                    }
                </td>
                <td>
                    {seminar.location}
                </td>
                <td>
                    {
                        moment(seminar.createdAt)
                            .tz("Asia/Manila")
                            .format("MM/DD/YYYY hh:mm A")
                    }
                </td>
                <td>
                    {
                        moment(seminar.updatedAt)
                            .tz("Asia/Manila")
                            .format("MM/DD/YYYY hh:mm A")
                    }
                </td>
            </tr>
        )
    }
}

export default TableRow;