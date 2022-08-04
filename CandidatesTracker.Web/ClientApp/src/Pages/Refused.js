import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PersonRow from '../components/PersonRow';
import { Link } from 'react-router-dom';

const Refused = () => {
    const [refusedPeople, setPeople] = useState([]);


useEffect(() => {
    const getPeople = async () => {
        const { data } = await axios.get('/api/candidate/getrefusedcandidates');
        setPeople(data);
    }
    getPeople();
}, []);

return (
    
    <div>
        <h1>Refused</h1>
        <table className="table table-hover table-striped table-bordered">
            <thead>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Notes</th>
            </thead>
            <tbody>
                {refusedPeople.map(p=>
                    <PersonRow
                    person={p}
                    key={p.id}
                    />)}
            </tbody>
        </table>
    </div>
    );
}
export default Refused;             
