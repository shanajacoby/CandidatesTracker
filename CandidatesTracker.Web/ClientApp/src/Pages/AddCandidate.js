import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useCount} from '../CandidateContext';
import axios from 'axios';

const AddCandidate = () => {

    const [candidate, setCandidate] = useState({ firstName: '', lastName: '', email: '', phoneNumber: '', notes: '' });
    const history = useHistory();
    const { updatePendingCount } = useCount();

    const onSubmitClick = async () => {
        candidate.RegistrationStatus = "pending";
        await axios.post('/api/candidate/addcandidate', candidate);
        updatePendingCount();
        history.push('/pending');
    };



    const onTextChange = e => {
        const copy = { ...candidate };
        copy[e.target.name] = e.target.value;
        setCandidate(copy);
    };



    return (
        <div className="card card-body bg-light">
            <h4>Add Candidate</h4>
            <form>
                <input type="text" name='firstName' onChange={onTextChange} placeholder="First Name" className="form-control" />
                <br />
                <input type="text" name='lastName' onChange={onTextChange} placeholder="Last Name" className="form-control" />
                <br />
                <input type="text" name='email' onChange={onTextChange} placeholder="Email" className="form-control" />
                <br />
                <input type="text" name='phoneNumber' onChange={onTextChange} placeholder="Phone Number" className="form-control" />
                <br />
                <textarea rows="5" className="form-control" name='notes' onChange={onTextChange}>
                </textarea>
                <br />
                <button className="btn btn-primary" onClick={onSubmitClick}>Submit</button>
            </form>
        </div>
    )
}

export default AddCandidate;