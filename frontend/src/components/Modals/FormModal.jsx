import React from 'react'
import { Modal, Button, Form, Input } from 'antd';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
const FormModal = ({ isModalVisible, setIsModalVisible }) => {

    const handleOk = () => {
        setIsModalVisible(false)
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const onFinish = (values) => {
        var token = localStorage.userToken;
        var decoded = jwt_decode(token);
        var userId = decoded.userId;
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`
        }
        axios.post(`http://localhost:5000/users/${userId}`, values, { headers: headers })
            .then((res) => alert('Data Updated Successfully'),setIsModalVisible(false))
            .catch(err => console.log(err))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    layout="vertical"
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="First Name"
                        name="firstName"
                        rules={[
                            {
                                required: false,
                                message: 'Please input your first name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Last Name"
                        name="lastName"
                        rules={[
                            {
                                required: false,
                                message: 'Please input your last name!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Contact Number"
                        name="phoneNumber"
                        rules={[
                            {
                                required: false,
                                message: 'Please input your contact!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: false,
                                message: 'Please input your email',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Address"
                        name="address"
                        rules={[
                            {
                                required: false,
                                message: 'Please input your address',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}
export default FormModal