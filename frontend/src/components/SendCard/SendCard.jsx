import React from 'react';
import { DownOutlined} from '@ant-design/icons';
import { Button, Dropdown, Menu, message, Space, Row, Col, Input, Steps } from 'antd';
import { IN, CA } from 'country-flag-icons/react/3x2';
import { useState } from 'react';
import './SendCard.css'


const SendCard = () => {
    const [step, setstep] = useState(0);
    const [amountvalue, setamountvalue] = useState();
    const { TextArea } = Input;
    const { Step } = Steps;
    const handleMenuClick = (e) => {
        message.info('Click on menu item.');
        console.log('click', e);
    };

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
    const ChangeStatus = () => {
        if (step === 0) {
            setstep(1);
            return
        }
        else if (step === 1) {
            setstep(2);
            return;
        }
        else if (step === 2) {
            setstep(3);
            return
        }
        else if (step === 3) {
            setstep(0);
            return;
        }
    }
    setTimeout(ChangeStatus, 5000);
    return (
        <>
            <h3 style={{ marginBottom: '1rem' }}>With Zero Cost</h3>
            <Row id='dropdownwrapper'>
                <Col style={{ width: "55%" }}>
                    <TextArea className='text_area' onChange={(e) => setamountvalue(e.target.value)}
                        placeholder="Enter Amount"
                        autoSize={{
                            minRows: 2,
                            maxRows: 6,
                        }}
                    />
                </Col>
                <Col>
                    <Space wrap>
                        <Dropdown overlay={menu}>
                            <Button className='signup_btn'>
                                <Space >
                                    Sender
                                    <DownOutlined />
                                </Space>
                            </Button>
                        </Dropdown>
                    </Space>
                </Col>
            </Row>
            <Row style={{ marginLeft: '4rem', marginTop: '1rem', marginBottom: '1rem' }}>
                <Col style={{ paddingTop: '12px' }}>
                    <Steps direction="vertical" current={step}>
                        <Step title="Step 1" description="This is a description." />
                        {/* {step == 0 ? (<hr style={{ paddingLedt: '1rem' }} />) : null} */}
                        <Step title="Step 2" description="This is a description." />
                        {/* {step == 1 ? (<hr style={{ paddingLedt: '1rem' }} />) : null} */}
                        <Step title="Step 3" description="This is a description." />
                        {/* {step == 2 ? (<hr style={{ paddingLedt: '1rem' }} />) : null} */}
                        <Step title="Congratulations" description="This is a description." />
                    </Steps>
                </Col>
            </Row>
            <Row id='dropdownwrapper'>
                <Col style={{ width: "55%" }}>
                    <TextArea className='text_area'
                        placeholder="Enter Amount"
                        autoSize={{
                            minRows: 2,
                            maxRows: 6,
                        }}
                        value={amountvalue}
                    />
                </Col>
                <Col>
                    <Space wrap>
                        <Dropdown overlay={menu}>
                            <Button className='signup_btn'>
                                <Space >
                                    Sender
                                    <DownOutlined />
                                </Space>
                            </Button>
                        </Dropdown>
                    </Space>
                </Col>
            </Row>
            {/* <Row>
                <Col id='getstartedbtn'>
                    <Button value={'large'}>Get Started</Button>
                </Col>
            </Row> */}
        </>
    )
}
export default SendCard