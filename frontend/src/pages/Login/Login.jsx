import { useNavigate,NavLink } from 'react-router-dom';
import axios from 'axios';
import HomeWrapper from '../../components/HomeWrapper';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Row, Col, Button, Checkbox, Form, Input } from 'antd';
import './Login.css'
const Login = () => {
  const naviate = useNavigate();
  let jwttoken;

  const onFinish = (values) => {
    axios.post('http://localhost:5000/users/login', values)
      .then(res => {
        jwttoken = res.data.token;
        localStorage.setItem('userToken', res.data.token);
        naviate('/dashboard');

      })
      .catch(err => console.log(err))
    console.log('Received values of form: ', values);
  };
  return (
    <HomeWrapper>
      <Row style={{ height: "60vh" }}>
        <Col style={{ width: '50%' }}>
          <Form id='loginForm'
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <NavLink to={'/signup'}>Register now!</NavLink>
            </Form.Item>
          </Form>
        </Col>
        <Col id='signinImage' style={{ width: '50%' }}>
        </Col>
      </Row>

    </HomeWrapper>
  )
}

export default Login