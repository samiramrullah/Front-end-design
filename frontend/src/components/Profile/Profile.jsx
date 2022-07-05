import PostCard from "../../utils/Helpers/PostCard";
import { useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useState } from "react";
const Post = () => {
    const [data,setdata]=useState();
    
    useEffect(()=>{
        var token = localStorage.userToken;
        var decoded = jwt_decode(token);
        var userId = decoded.userId;
        // const userData = {
        //     // countryToSend,
        //     // countryToRecieve,
        //     // amount,
        //     userId
        // };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`
        }

        console.log(userId);
        axios.post('http://localhost:5000/post/', userId, { headers: headers })
            .then((res => console.log(res)))
            .catch(err => console.log(err))
    },[])
    return (
        <div>
            <center>
                <div class="card" style={{ width: '18rem' }}>
                    <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWgb_52c3pYUdxPNcwk0YRU2FdcE3kjOWBxw&usqp=CAU" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Name: <span>Samir Alam</span></h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </center>
            <center className="row">
                <div className="col"><PostCard countryToSend="INDIA" countryToRecieve="CANADA" amount="1500"/></div>
                
            </center>
        </div>
    )
}

export default Post;