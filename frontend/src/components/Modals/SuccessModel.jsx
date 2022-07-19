import { useState } from 'react';
import { Modal } from 'antd';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
const SuccessModel = ({ isModalVisible, setIsModalVisible, countryToSend, countryToRecieve, amount }) => {
    const initalText = <p>Are you sure you want to post the transaction?</p>
    const successtext = <><p>Transactions Successfully Posted</p>
        <p>We Will contact you soon to your register Mobile Number <b>Or</b></p>
        <p>Contact us at +91 904 198 2237</p>
    </>
    const errortext = <>
        <p>Ooops!!!</p>
        <p>Something Went Wrong</p>
    </>
    const [displaytext, setdisplaytext] = useState(initalText)

    const handleOk = () => {
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
        console.log(userData);
        axios.post('http://localhost:5000/post', userData, { headers: headers })
            .then((res => setdisplaytext(successtext)))
            .catch(err => setdisplaytext(errortext))
        // setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setdisplaytext(initalText)
    };
    return (
        <Modal title="Post Transactions" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <p>{displaytext}</p>
        </Modal>
    )
}

export default SuccessModel