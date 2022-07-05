import { 
  // DesktopOutlined,
  // FileOutlined,
  // PieChartOutlined,
  // TeamOutlined,
  UserOutlined,
 } from '@ant-design/icons';
import {Layout, Menu  } from 'antd';
import { useState } from 'react';
import {NavLink, Route, Routes} from 'react-router-dom'
import About from '../About/About';
import Contact from '../Contact/Contact';
import Post from '../../components/Post/Post';
import Profile from '../../components/Profile/Profile';
import jwt_decode from "jwt-decode";
import './Dashboard.css'
const { Header, Content, Footer, Sider } = Layout;


const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  // var token=localStorage.userToken;
  // var decoded=jwt_decode(token)
  // console.log(decoded);
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" style={{textAlign:'center'}} >Samir</div>
        <Menu theme="dark" defaultSelectedKeys={["demo"]} mode="inline"  
        >
          <NavLink to='/dashboard/profile'><Menu.Item key="demo"><UserOutlined />Profile</Menu.Item></NavLink>
          <NavLink to='/dashboard/post'><Menu.Item key="data" ><UserOutlined />Post</Menu.Item></NavLink>
          </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
          
        > <h3 style={{textAlign:'center'}}>User Name</h3></Header>
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
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/post' element={<Post/>}/>
     </Routes>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;

