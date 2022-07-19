import React from 'react'
import { useState } from 'react';
import { IN, CA } from 'country-flag-icons/react/3x2';
import SuccessModel from '../Modals/SuccessModel';
import { Row, Col, Card, Divider, Menu, Space, Dropdown, Button, Input } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Arrow from '../../assets/Image/arrow.png';
import './Post.css'

const Post = () => {
    const [countryToSend, setcountryToSend] = useState();
    const [countryToRecieve, setcountryToRecieve] = useState();
    const [amount, setamount] = useState();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [sendFlag, setsendFlag] = useState();
    const [recieveFlag, setrecieveFlag] = useState();

    const handleMenuClickSend = (e) => {
        setsendFlag(e.key)
        if (e.key === '1') {
            setcountryToSend('India')
        }
        else if (e.key === '2') {
            setcountryToSend('Canada')
        }
    };
    const handleMenuClick = (e) => {
        setrecieveFlag(e.key);
        if (e.key === '1') {
            setcountryToRecieve('India')
            console.log(countryToRecieve);
        }
        else if (e.key === '2') {
            setcountryToRecieve('Canada')
        }
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

    const postTransactions = () => {
        if (!amount) {
            alert('Please Select Amount')
        }
        else {
            setIsModalVisible(true)
        }
    }
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
                <Row style={{ marginBottom: '2%' }}>
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
                        <Input id='amountInput' placeholder='Amount' onChange={(e) => setamount(e.target.value)} />
                    </Col>
                    <Col style={{ width: '33%', float: 'right' }}>
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
                <Row>
                    <Col style={{ width: '100%', marginLeft: '40%' }}>
                        <Button onClick={postTransactions} style={{ width: '35%' }} size='large'>Post</Button>
                    </Col>
                </Row>
            </Card>
            <SuccessModel isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} countryToRecieve={countryToRecieve} countryToSend={countryToSend} amount={amount} />
        </div>
    )
}

export default Post