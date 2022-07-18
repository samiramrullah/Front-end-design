import PostCard from "../../utils/Helpers/PostCard";
import { useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import { Card, Row, Col, Button } from 'antd';
import { UploadOutlined } from "@ant-design/icons";
import './Profile.css'
const { Meta } = Card;
const Post = () => {
    const [data, setdata] = useState();
    const [userInfo, setuserInfo] = useState();
    const [profleImage, setProfileImage] = useState();
    useEffect(() => {
        var token = localStorage.userToken;
        var decoded = jwt_decode(token);
        var userId = decoded.userId;
        const userData = {
            userId
        };
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`
        }
        axios.post('http://localhost:5000/post/userinfo', userData, { headers: headers })
            .then((res => setdata(res.data)))
            .catch(err => console.log(err))
        axios.get(`http://localhost:5000/users/${userId}`, { headers: headers })
            .then((res) => setuserInfo(res.data))
            .catch(err => console.log(err))
    }, [])
    const ImageHandler = (e) => {
        console.log(e.target.files[0]);
    }
    const Updatehandler = () => {

    }
    return (
        <div>
            <Row style={{ width: '60%', marginLeft: '40%' }}>
                <Col >
                    <Card
                        hoverable
                        style={{
                            width: 300,
                        }}
                        cover={<img alt="example" src="https://uploads.concordia.net/2020/06/12162037/Samir-Ibrahim.jpeg" height="100%" />}
                    >
                        {/* <Meta title="Info" /> */}
                        <Button style={{ top: "-1rem", right: "-11rem" }} icon={<UploadOutlined />}>Upload</Button>
                    </Card>
                </Col>
                {/* <Row >
                 <Col >Name</Col>
                 <Col style={{marginLeft:'3rem'}}>Samir</Col>
                </Row> */}
            </Row>
            <center className="row mt-5">
                {Array.isArray(data) ? (
                    data?.map(itm => (
                        <div className="col"><PostCard countryToSend={itm.countryToSend} countryToRecieve={itm.countryToRecieve} amount={itm.amount} dateTime={itm.datetime} postId={itm._id} /></div>
                    ))
                ) : null}
            </center>
        </div>
    )
}

export default Post;