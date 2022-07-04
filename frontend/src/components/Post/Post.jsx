import React from 'react'
import { useState } from 'react';
const Post = () => {
    const [countryToSend,setcountryToSend]=useState();
    const [countryToRecieve,setcountryToRecieve]=useState();
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        const userData={
            countryToSend,
            countryToRecieve,
        };
        console.log(userData);
    }
    return (
        <center>
            <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <form onSubmit={onSubmitHandler}>
                        <div class="form-group">
                           
                              <select onChange={(e)=>setcountryToSend(e.target.value)}>
                                <option>India</option>
                                <option>Chanda</option>
                                </select> 
                            <input type={'number'} class="form-control" placeholder="Enter amount" required />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                        <select onChange={(e)=>setcountryToRecieve(e.target.value)}>
                                <option>Canada</option>
                                <option>India</option>
                                </select> 
                            <input type={'number'} class="form-control" placeholder="Enter amount" />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </center>
    )
}

export default Post