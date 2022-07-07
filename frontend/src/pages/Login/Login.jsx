import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import HomeWrapper from '../../components/HomeWrapper';
import './Login.css'
const Login = () => {

  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const naviate = useNavigate();
  let jwttoken;
  const onSubmitLogin = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    }
    axios.post('http://localhost:5000/users/login', userData)
      .then(res => {
        jwttoken = res.data.token;
        localStorage.setItem('userToken', res.data.token);
        console.log(localStorage.userToken);
        naviate('/dashboard');

      })
      .catch(err => console.log(err))
  }
  return (
    <HomeWrapper>
      <div className='container'>
        <div className="row">
          <div className="col">
            <div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Welcome Back to Cred Adda</h5>
                  <form onSubmit={onSubmitLogin}>
                    <div class="form-group">
                      <label>Email address</label>
                      <input type="email" class="form-control" placeholder="Enter email" required onChange={(e) => setemail(e.target.value)} />
                    </div>
                    <div class="form-group">
                      <label>Password</label>
                      <input type="password" class="form-control" placeholder="Password" required onChange={(e) => setpassword(e.target.value)} />
                    </div>
                    <button type="submit" class="btn btn-primary mt-3">Login</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <center className="col">
            <img src='https://wallpaperaccess.com/full/2675409.jpg' width="808" height="458" alt="Lobby Image" />
          </center>
        </div>
      </div>

    </HomeWrapper>
  )
}

export default Login