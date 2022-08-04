import React from 'react';
import { Link } from 'react-router-dom';

const PersonRow = ({ person }) => {
    const { id, firstName, lastName, email, phone, notes } = person;
    return (
        <tr>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{notes}</td>
        </tr>
    )
}

export default PersonRow;