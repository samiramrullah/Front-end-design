import {
  UserOutlined, LogoutOutlined, HomeOutlined, InfoCircleTwoTone
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useState, useEffect } from 'react';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import About from '../About/About';
import Contact from '../Contact/Contact';
import Post from '../../components/Post/Post';
import Profile from '../../components/Profile/Profile';
import Login from '../../pages/Login/Login';
import axios from 'axios';
import './Dashboard.css'
const {Content, Footer, Sider } = Layout;

const Dashboard = () => {

  const naviate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState()
  useEffect(() => {
    var token = localStorage.userToken;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${token}`
    }

    axios.get('http://localhost:5000/checkauth', { headers: headers })
      .then((res => setisLoggedIn(res.data)))
      .catch(err => console.log(err))
  }, [])
  const logoutHandler = () => {
    localStorage.setItem('userToken', null)
    naviate('/')
  }
  if (isLoggedIn) {
    if (isLoggedIn.message === "Authorized") {
      return (
        <Layout
          style={{
            minHeight: '100vh',
            backgroundColor:`azure` 
          }}
        >
          <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="logo" style={{ textAlign: 'center', backgroundColor: '#6197c2cc' }} ><b>Cred Adda</b></div>
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline"
            >
              <Menu.Item>
                <NavLink to={"/dashboard/profile"}>
                  <UserOutlined /> Profile
                </NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to={"/dashboard/post"}>
                  <UserOutlined /> Post
                </NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to={'/about'} >
                  <InfoCircleTwoTone /> About
                </NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink to={"/"}>
                  <HomeOutlined /> Home
                </NavLink>
              </Menu.Item>
              <Menu.Item onClick={logoutHandler} >
                <LogoutOutlined />
              </Menu.Item>

            </Menu>
          </Sider>
          <Layout className="site-layout">
            {/* <Header
              className="site-layout-background"
              style={{
                padding: 0,
              }}

            ></Header> */}
            <Content
              style={{
                margin: '0 16px',
              }}
            >
              <div
                className="site-layout-background"
                style={{
                  padding: 24,
                  minHeight: 600,
                  
                }}
              >
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/profile' element={<Profile />} />
                  <Route path='/post' element={<Post />} />
                </Routes>
              </div>
            </Content>
            <Footer
              style={{
                textAlign: 'center',
              }}
            >
              © Credadda 2022
            </Footer>
          </Layout>
        </Layout>
      )
    } else {
      return (
        <center>
          <Login />
        </center>
      )
    }
  }
  else {
    return (
      <center>
        <Login />
      </center>
    )
  }
};

export default Dashboard;

