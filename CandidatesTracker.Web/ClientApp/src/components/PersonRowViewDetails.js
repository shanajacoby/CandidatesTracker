import React from 'react';
import { Link } from 'react-router-dom';

const PersonRowViewDetails = ({ person }) => {
    const { id, firstName, lastName, email, phone, notes } = person;
    return (
        <tr>
            <td><Link to={`/viewdetails/${id}`}>
                View Details
                </Link></td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{notes}</td>
        </tr>
    )
}

export default PersonRowViewDetails;