import React from 'react'
import { useState } from 'react';
import jwt_decode from "jwt-decode";
import axios from 'axios';
import Infocard from '../../utils/Helpers/Infocard';
import { useSelector, useDispatch } from 'react-redux';
import { setpostStatus } from '../../redux/PostSlice'
import { DollarCircleOutlined, ArrowRightOutlined } from '@ant-design/icons';

const Post = () => {
    const [countryToSend, setcountryToSend] = useState();
    const [countryToRecieve, setcountryToRecieve] = useState();
    const [amount, setamount] = useState();
    const postStatus = useSelector((state) => state.post.postStatus)
    const dispatch = useDispatch();
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
            {postStatus ? (<Infocard />) : (
                <div class="card" style={{ width: "70rem", height: "30rem" }}>
                    <div className='card-header'>
                        <h5 >Swift Conversion</h5>
                    </div>
                    <div class="card-body">
                        <div className='container mt-5'>
                            <div className='row my-5'>
                                <div className="col">
                                    <DollarCircleOutlined style={{ fontSize: '4rem', color: '#757573' }} />
                                </div>
                                <div className="col">
                                    <ArrowRightOutlined style={{ fontSize: '4rem', color: '#757573' }} />
                                </div>
                                <div className="col">
                                    <DollarCircleOutlined style={{ fontSize: '4rem', color: '#757573' }} />
                                </div>
                            </div>
                            <form className=' row mt-5 mb-3  d-flex align-items-center' onSubmit={onSubmitHandler}>
                                <div class="form-group row">
                                    <div className='col'>
                                        <select className="form-select" aria-label="Default select example" onChange={(e) => setcountryToSend(e.target.value)}>
                                            <option>India</option>
                                            <option>Chanda</option>
                                        </select>
                                    </div>
                                    <div className='col'>
                                        <input type={'number'} class="form-control mb-2" placeholder="Enter amount" required onChange={(e) => setamount(e.target.value)} />
                                        <small id="emailHelp" className="form-text text-muted mt-2">We'll never share your email with anyone else.</small>
                                    </div>

                                    <div className='col'>
                                        <select className="form-select" aria-label="Default select example" onChange={(e) => setcountryToRecieve(e.target.value)}>
                                            <option>Canada</option>
                                            <option>India</option>
                                        </select>
                                    </div>


                                </div>


                            </form>
                            <div className='row d-flex justify-content-center'>
                                <div className='col-6 col-md-4'>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </div>

                            </div>
                        </div>



                    </div>
                </div>
            )}

        </center>
    )
}

export default Post