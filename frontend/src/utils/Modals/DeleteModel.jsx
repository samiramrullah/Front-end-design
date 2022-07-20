import { Modal } from 'antd';
import axios from 'axios';
import { useState,useEffect } from 'react';
const DeleteModel = ({ isModalVisible, setIsModalVisible, postId }) => {

    const [displayText,setDisplayText]=useState(`Are you sure You want to delete? 
       Once You delete You cant Retrive it!!!`)
       useEffect(()=>{
       setDisplayText(`Are you sure You want to delete? 
       Once You delete You cant Retrive it!!!`)
    },[])
    const handleOk = () => {
        var token = localStorage.userToken;
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`
        }
        axios.post('http://localhost:5000/post/deletepost', {postId}, { headers: headers })
            .then((res => setDisplayText(`Deleted Successfully, Post Id:  ${postId}`)))
            .catch(err => setDisplayText(`Something Went Wrong`))
};
const handleCancel = () => {
    setIsModalVisible(false);
    setDisplayText(`Are you sure You want to delete? 
    Once You delete You cant Retrive it!!!`)
};
return (
    <div>
        <Modal title="Delete Post" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <p>{displayText}</p>
        </Modal>
    </div>
)
}

export default DeleteModel