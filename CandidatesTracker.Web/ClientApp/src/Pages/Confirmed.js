import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PersonRow from '../components/PersonRow';
import { Link } from 'react-router-dom';

const Confirmed = () => {
    const [confirmedPeople, setPeople] = useState([]);


useEffect(() => {
    const getPeople = async () => {
        const { data } = await axios.get('/api/candidate/getconfirmedcandidates');
        setPeople(data);
    }
    getPeople();
}, []);

return (
    
    <div>
        <h1>Confirmed</h1>
        <table className="table table-hover table-striped table-bordered">
            <thead>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Notes</th>
            </thead>
            <tbody>
                {confirmedPeople.map(p=>
                    <PersonRow
                    person={p}
                    key={p.id}
                    />)}
            </tbody>
        </table>
    </div>
    );
}
export default Confirmed;             

