import React from 'react'
import { useState } from 'react';
import jwt_decode from "jwt-decode";
import axios from 'axios';
import Infocard from '../../utils/Helpers/Infocard';
import {useSelector,useDispatch} from 'react-redux';
import {setpostStatus} from '../../redux/PostSlice'

const Post = () => {
    const [countryToSend, setcountryToSend] = useState();
    const [countryToRecieve, setcountryToRecieve] = useState();
    const [amount, setamount] = useState();
    const postStatus=useSelector((state)=>state.post.postStatus)
    const dispatch=useDispatch();
    const onSubmitHandler = (e) => {
        e.preventDefault();
        var token = localStorage.userToken;
        var decoded = jwt_decode(token);
        var userId = decoded.userId;
        const userData = {
            countryToSend,
            countryToRecieve,
            amount,
            userId
        };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`
        }

        axios.post('http://localhost:5000/post', userData, { headers: headers })
            .then((res => dispatch(setpostStatus(true))))
            .catch(err => console.log(err))
    }
    return (
        <center>
            {postStatus ? (<Infocard/>) : (
                <div class="card" style={{ width: "18rem" }}>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <form onSubmit={onSubmitHandler}>
                            <div class="form-group">

                                <select onChange={(e) => setcountryToSend(e.target.value)}>
                                    <option>India</option>
                                    <option>Chanda</option>
                                </select>
                                <input type={'number'} class="form-control" placeholder="Enter amount" required onChange={(e) => setamount(e.target.value)} />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <select onChange={(e) => setcountryToRecieve(e.target.value)}>
                                    <option>Canada</option>
                                    <option>India</option>
                                </select>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            )}

        </center>
    )
}

export default Post