import React from 'react'
import { useState } from 'react';
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { ArrowRightOutlined } from '@ant-design/icons';
import { IN, CA } from 'country-flag-icons/react/3x2';
import SuccessModel from '../Modals/SuccessModel';
import { Row, Col, Card, Divider, Menu, Space, Dropdown, Button, Input } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Arrow from '../../assets/Image/arrow.png'
import './Post.css'

const Post = () => {
    const [countryToSend, setcountryToSend] = useState();
    const [countryToRecieve, setcountryToRecieve] = useState();
    const [amount, setamount] = useState();
    const [isModalVisible, setisModalVisible] = useState(false);
    const [sendFlag, setsendFlag] = useState();
    const [recieveFlag, setrecieveFlag] = useState();
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
            .then((res => setisModalVisible(true)))
            .catch(err => console.log(err))
    }


    const handleMenuClickSend = (e) => {
        setsendFlag(e.key)
    };
    const handleMenuClick = (e) => {
        setrecieveFlag(e.key);
    };
    const menuSend = (
        <Menu
            onClick={handleMenuClickSend}
            items={[
                {
                    label: <IN style={{ width: '2rem', margin: '1rem' }} />,
                    key: '1',
                    icon: "INDIA",
                },
                {
                    label: <CA style={{ width: '2rem', margin: '1rem' }} />,
                    key: '2',
                    icon: "CANADA",
                },
            ]}
        />
    );
    const menu = (
        <Menu
            onClick={handleMenuClick}
            items={[
                {
                    label: <IN style={{ width: '2rem', margin: '1rem' }} />,
                    key: '1',
                    icon: "INDIA",
                },
                {
                    label: <CA style={{ width: '2rem', margin: '1rem' }} />,
                    key: '2',
                    icon: "CANADA",
                },
            ]}
        />
    );

    console.log(sendFlag, 'sendFlagsendFlagsendFlag');
    return (
        <div className="site-card-border-less-wrapper">
            <Card id='postcard'
                title={<Divider orientation='center'>Swift Conversion </Divider>}
                bordered={false}
                style={{
                    width: '100%',
                    color: 'white',
                }}
            >
                <Row style={{ color: 'black' }}>
                    <Col style={{ width: '30%' }}>
                        {sendFlag === "1" ? (
                            <IN id='conversionFlagInd' />
                        ) : (
                            <CA id='conversionFlagInd' />
                        )}
                    </Col>
                    <Col style={{ width: '30%' }}>
                        <img id='conversionarrow' src={Arrow}></img>
                    </Col>
                    <Col style={{ width: '30%' }}>
                        {/* <CA id='conversionFlagCND' /> */}
                        {recieveFlag === "1" ? (
                            <IN id='conversionFlagCND' />
                        ) : (
                            <CA id='conversionFlagCND' />
                        )}
                    </Col>
                </Row>
                <Row style={{marginBottom:'2%'}}>
                    <Col style={{ width: '33%', background: 'red' }} >
                        <Space wrap >
                            <Dropdown overlay={menuSend}  >
                                <Button className='dropdownPostSend'>
                                    <Space >
                                        Sender
                                        <DownOutlined />
                                    </Space>
                                </Button>
                            </Dropdown>
                        </Space>
                    </Col>
                    <Col style={{ width: '33%', background: 'red' }} >
                        <Input id='amountInput' placeholder='Amount'/>

                    </Col>
                    <Col style={{width:'33%',float:'right'}}>
                        <Space wrap>
                            <Dropdown overlay={menu}>
                                <Button className='dropdownPostRecieve'>
                                    <Space >
                                        Recieve
                                        <DownOutlined />
                                    </Space>
                                </Button>
                            </Dropdown>
                        </Space>

                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default Post