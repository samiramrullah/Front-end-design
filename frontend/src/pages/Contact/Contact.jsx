import React from 'react'
import HomeWrapper from '../../components/HomeWrapper';
import { Row, Col, Input } from 'antd';
import './Contact.css'
const Contact = () => {
  return (
    <HomeWrapper>
      <Row style={{ width: '100%', marginTop: '5%' }}>
        <Col style={{ width: '50%' }}>
          <h1>Always for your services</h1>
          <p>Fell Free to react us</p>
          <h2>India</h2>
          <p>Punjab Engineering College , Sector-12</p>
          <p>160012, Chandigarh, India</p>
          <p>+91 9041952237</p>
        </Col>
        <Col style={{ width: '25%' }}>
          <Input className='namefieldContactus' placeholder='Name' />
        </Col>
        <Col style={{ width: '25%' }}>
          <Input className='namefieldContactus' placeholder='Email' type={'email'} />
        </Col>
        <Col>
          Input Filed
        </Col>
      </Row>
      <Row>
        <Col style={{ width: '100%', height: '30rem' }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.2909844489727!2d76.78125741508698!3d30.766411581625515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ff281cf557ef9%3A0x2497dfdff5122b78!2sPEC%20CAMPUS%2C%20CHANDIGARH!5e0!3m2!1sen!2sin!4v1658289337006!5m2!1sen!2sin"
            width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Col>
      </Row>
    </HomeWrapper>
  )
}

export default Contact