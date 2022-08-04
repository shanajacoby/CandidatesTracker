import React, {useState, useEffect} from "react";
import {useParams, useHistory} from 'react-router-dom';
import axios from 'axios';
import {useCount} from '../CandidateContext';

const ViewDetails =()=>{
    const {id}= useParams();
    const history= useHistory();
    const [candidate, setCandidate]= useState({firstName:'', lastName:'', phoneNumber:'', email:'', notes:''});
    const {updateConfirmedCount}= useCount();
    const {updateRefusedCount}= useCount();
    const {updatePendingCount}= useCount();

    useEffect(()=>{
        const getCandidate= async ()=>{
            const {data}= await axios.get(`/api/candidate/getcandidatesbyid?id=${id}`);
            const{firstName, lastName, phone, email, notes}= data;
            setCandidate(data);
        }
        getCandidate();
    },[updatePendingCount]);

    const onConfirmClick = async()=>{
        await axios.post(`/api/candidate/confirmcandidate?id=${id}`);
        updateConfirmedCount();
        updatePendingCount();
        history.push('/confirmed');
    }
    const onRefuseClick = async()=>{
        await axios.post(`/api/candidate/refusecandidate?id=${id}`);
        updateRefusedCount();
        updatePendingCount();
        history.push('/refused');
    }

    return(
        <div className="row">
            <div className="col-lg-8">
                <h2 classname="mt-4">{candidate.firstName}</h2>
                <h2 classname="mt-4">{candidate.lastName}</h2>
                <h2 classname="mt-4">{candidate.phoneNumber}</h2>
                <h2 classname="mt-4">{candidate.email}</h2>
                <p classname="mt-4">{candidate.notes}</p>
                <button className="btn btn-primary" onClick={onConfirmClick}>Confirm</button>
                <button className="btn btn-danger" onClick={onRefuseClick}>Refuse</button>
            </div>
        </div>
    )
}
export default ViewDetails;