import React from 'react'

const Post = () => {
    return (
        <center>
            <div class="card" style={{width:'18rem'}}>
                <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWgb_52c3pYUdxPNcwk0YRU2FdcE3kjOWBxw&usqp=CAU" alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">Name: <span>Samir Alam</span></h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </center>
    )
}

export default Post