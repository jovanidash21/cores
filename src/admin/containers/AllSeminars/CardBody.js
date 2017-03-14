import React, { Component } from 'react';
import TableRow from './TableRow';

class CardBody extends Component {
    render() {
        const { seminars } = this.props;

        return(
            <div className="card-body no-padding">
                <table className="datatable table table-striped primary" cellSpacing="0" width="100%">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Speaker</th>
                        <th>Schedule</th>
                        <th>Location</th>
                        <th>Date Created</th>
                        <th>Last Update</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        seminars.map(seminar =>
                            <TableRow seminar={seminar} />
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CardBody;