import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PersonRowViewDetails from '../components/PersonRowViewDetails';
import CandidateContext from '../CandidateContext';
import { Link } from 'react-router-dom';

const Pending = () => {
    const [pendingPeople, setPeople] = useState([]);


useEffect(() => {
    const getPeople = async () => {
        const { data } = await axios.get('/api/candidate/getpendingcandidates');
        setPeople(data);
    }
    getPeople();
}, [pendingPeople]);

return (
    
    <div>
        <h1>Confirmed</h1>
        <table className="table table-hover table-striped table-bordered">
            <thead>
                <tr>
                <th></th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Notes</th>
                </tr>
            </thead>
            <tbody>
                {pendingPeople.map(p=>
                    <PersonRowViewDetails
                    person={p}
                    key={p.id}
                    />)}
            </tbody>
        </table>
    </div>
    );
}
export default Pending;             
