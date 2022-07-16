import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import HomeWrapper from '../../components/HomeWrapper';
import { Col, Row, Button, Checkbox, Form, Input, Divider } from 'antd';
import './Signin.css'

const Signup = () => {
  const naviate = useNavigate();
  const onFinish = (values) => {
    console.log('Success:', values);
    axios.post('http://localhost:5000/users/signup', values)
      .then(res => naviate('/login'))
      .catch(err => console.log('Error'))
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <HomeWrapper>
      <Row>
        <Col style={{ width: '50%' }}>
          <Divider orientation="center"><h2>WELCOME</h2></Divider>
          <Form
            id='signupForm'
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
              layout: "vertical",
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
                  required: true,
                  message: 'Please input your First Name',
                  type:'string'
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
                  required: true,
                  message: 'Please Enter valid Contact Number',
                  // type:'number'
                }
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: 'email',
                  message: 'Please Enter valid email'
                }
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: -1,
                span: 16,
              }}
              required
              rules={[
                {
                  required:true,
                  message:'Please Check this field to proceed'
                }
              ]}
            >
              <Checkbox>Remember me</Checkbox>
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
        </Col>
        <Col id='signupimage'></Col>
      </Row>
    </HomeWrapper>
  )
}

export default Signup;