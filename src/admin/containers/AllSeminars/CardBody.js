import React, { Component } from 'react';
import { Link } from 'react-router';
import SpicyDatatable from 'spicy-datatable';
import moment from 'moment-timezone';
import 'spicy-datatable/src/sample-styles.css'

class CardBody extends Component {
    render() {
        const { seminars } = this.props;
        const seminarsColumns = [
            { key: 'title', label: 'Title' },
            { key: 'schedule', label: 'Schedule' },
            { key: 'location', label: 'Location' },
            { key: 'createdAt', label: 'Date Created' },
            { key: 'updatedAt', label: 'Last Update' }
        ];
        const seminarsRows = [];

        for (var i = 0; i < seminars.length; i++) {
            seminarsRows.push({
                title:
                    <Link to={'/admin/seminar/' + seminars[i]._id}>
                        {seminars[i].title}
                    </Link>,
                schedule: moment(seminars[i].schedule)
                    .tz("Asia/Manila")
                    .format("MM/DD/YYYY hh:mm A"),
                location: seminars[i].location,
                createdAt: moment(seminars[i].createdAt)
                    .tz("Asia/Manila")
                    .format("MM/DD/YYYY hh:mm A"),
                updatedAt: moment(seminars[i].updatedAt)
                    .tz("Asia/Manila")
                    .format("MM/DD/YYYY hh:mm A")
            });
        }

        return(
            <div className="card-body no-padding">
                <SpicyDatatable
                    tableKey="seminarsTable"
                    columns={seminarsColumns}
                    rows={seminarsRows}
                />
            </div>
        )
    }
}

export default CardBody;