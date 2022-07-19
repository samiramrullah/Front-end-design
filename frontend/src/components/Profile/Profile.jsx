import PostCard from "../../utils/Helpers/PostCard";
import { useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import { Card, Row, Col, Button, Divider } from 'antd';
import { EditOutlined } from "@ant-design/icons";
import FormModal from '../Modals/FormModal';
import { Empty } from 'antd';
import './Profile.css'
const Post = () => {
    const [data, setdata] = useState();
    const [userInfo, setuserInfo] = useState();
    const [isModalVisible, setIsModalVisible] = useState(false);
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

    const showModalHandler = () => {
        setIsModalVisible(true);
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
                        <Button onClick={showModalHandler} style={{ left: "12.56rem" }} icon={<EditOutlined />}>Edit</Button>
                    </Card>
                </Col>
            </Row>
            <Row style={{ marginLeft: '40%', paddingTop: '2rem' }}>
                <Col >Name</Col>
                <Col style={{ marginLeft: '1rem' }}>
                    {userInfo && (<p>{userInfo.firstName} {userInfo.lastName}</p>)}
                </Col>
            </Row>
            <Row style={{ marginLeft: '40%' }}>
                <Col >Email</Col>
                <Col style={{ marginLeft: '1rem' }}>
                    {userInfo && (<p>{userInfo.email}</p>)}
                </Col>
            </Row>
            <Row style={{ marginLeft: '40%' }}>
                <Col >Contact Number</Col>
                <Col style={{ marginLeft: '1rem' }}>
                    {userInfo && (<p>{userInfo.phoneNumber}</p>)}
                </Col>
            </Row>
            <Row style={{ marginLeft: '40%' }}>
                <Col >Address</Col>
                <Col style={{ marginLeft: '1rem' }}>
                    {userInfo && (
                        (Object.keys(userInfo)).includes('address') ? (
                            <p>{userInfo.address}</p>
                        ) : (
                            <p>No address</p>
                        )
                    )}
                </Col>
            </Row>
            <Divider className="postText" orientation="center">Posts</Divider>
            <center className="row mt-5">
                {Array.isArray(data) ? (

                    data.length > 0 ? (
                        data?.map(itm => (

                            <div className="col"><PostCard countryToSend={itm.countryToSend} countryToRecieve={itm.countryToRecieve} amount={itm.amount} dateTime={itm.datetime} postId={itm._id} /></div>
                        ))
                    ) : (
                        <Empty />
                    )
                ) : <Empty />}
            </center>
            <FormModal isModalVisible={isModalVisible} showModalHandler={showModalHandler} setIsModalVisible={setIsModalVisible} />
        </div>
    )
}
export default Post;