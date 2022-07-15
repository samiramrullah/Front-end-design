import HomeWrapper from '../../components/HomeWrapper';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { useState } from 'react';
import { Col, Divider, Row } from "antd";
import Services from '../../components/Services/Services';
import './Home.css'
import SendCard from '../../components/SendCard/SendCard';


const Home = () => {
  const [countryToSend, setcountryToSend] = useState();
  const [countryToRecieve, setcountryToRecieve] = useState();
  const [amount, setamount] = useState();
  const naviate = useNavigate();
  const onSendhandler = (e) => {
    e.preventDefault();
    var token = localStorage.userToken;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${token}`
    }
    axios.get('http://localhost:5000/checkauth', { headers: headers })
      .then((res) => {
        if (res.data.message === "Authorized") {
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
            .then((res => alert('posted')))
            .catch(err => console.log(err))
        }
        else {
          naviate('/login')
        }
      })
      .catch(err => naviate('/login'))
  }
  return (
    <HomeWrapper>
      <Divider orientation="center">Cred Adda</Divider>
      <Row>
        <Col style={{ backgroundColor: "red" }} flex={2}>
          <center><h3>Best way to send your money</h3>
            <h3>Secure and Fast Transactions</h3>
          </center>
          <div id="StepsHeading">
            How To send your Money
          </div>
          <Row >
            <Col style={{ width: "30%" }}>
              Step 1
              <br />
              Explain the steps
            </Col>
            <Col style={{ width: "30%" }}>
              Step 2
              <br />
              <p>Explain Second Step</p>
            </Col>
            <Col style={{ width: "30%" }}>
              Step 1
              <br />
              <p>Explanation</p>
            </Col>
            <Col id='youtubelink'>
              <iframe
                src="https://www.youtube.com/embed/ToUzPIAyui0"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            </Col>
          </Row>
        </Col>

        <Col style={{ backgroundColor: "blue" }} flex={3}>

          <SendCard />
        </Col>
      </Row>

    </HomeWrapper>
  )
}

export default Home