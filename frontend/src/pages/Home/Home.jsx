import HomeWrapper from '../../components/HomeWrapper';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { useState } from 'react';
import Services from '../../components/Services/Services';

import './Home.css';


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

      <div className='main-wrap' style={{ height: '490px', background: '50%', position: '117px' }} >
        <section>
          <div className='container'>
            <div className='row' >
              <div className="col-8 ml-5 " style={{ marginTop: '6rem' }}>

                <div className="row  d-flex align-items-end">
                  <h1 className='title'>Welcome to Cred Adda</h1>
                  <b>Send Your Money with in fast, secure and trusted way</b>
                </div>
                <form onSubmit={onSendhandler} className=' row mt-5 mb-3  d-flex align-items-center' >
                  <div class="form-group row">
                    <div className='col'>
                      <select className="form-select" aria-label="Default select example" onChange={(e) => setcountryToSend(e.target.value)}>
                        <option>India</option>
                        <option>Chanda</option>
                      </select>
                    </div>
                    <div className='col'>
                      <input type={'number'} class="form-control mb-2" placeholder="Enter amount" required onChange={(e) => setamount(e.target.value)} />
                    </div>
                    <div className='col'>
                      <select className="form-select" aria-label="Default select example" onChange={(e) => setcountryToRecieve(e.target.value)} >
                        <option>Canada</option>
                        <option>India</option>
                      </select>
                    </div>
                    <div className='col d-flex justify-content-center '>
                      <button type="submit" class="btn btn-outline-dark">Send</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className='col-auto'>
                <div className="card " style={{ width: '300px', marginTop: '5rem' }}>
                  <div className="card-header">
                    <div className="container d-flex justify-content-center my-1">
                      <div class="btn-group btn-group-toggle" data-toggle="buttons">
                        <button class="btn btn-outline-dark active">
                          <span type="radio" name="options" id="option1" autocomplete="off" checked /> Sign In
                        </button>
                        <button class="btn btn-outline-dark">
                          <span type="radio" name="options" id="option2" autocomplete="off" /> Log In
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <Services /> */}
      </div>

    </HomeWrapper>
  )
}

export default Home