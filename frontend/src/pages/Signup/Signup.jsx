import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import HomeWrapper from '../../components/HomeWrapper';
import './Signin.css'

const Signup = () => {
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [phoneNumber, setphoneNumber] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [cnfpassword, setcnfpassword] = useState();
  const naviate = useNavigate();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (cnfpassword === password) {
      const userData = {
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
      }
      axios.post('http://localhost:5000/users/signup', userData)
        .then(res => naviate('/login'))
        .catch(err => console.log('Error'))
    }
    else {
      alert('password is not same in both field')
    }
  }
  return (
    <HomeWrapper>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">
                Sign up
              </h3>
              <form onSubmit={onSubmitHandler}>
                <div class="mb-3">
                  <label>Fist Name</label>
                  <input type={'text'} class="form-control" required  onChange={(e)=>setfirstName(e.target.value)}/>
                </div>
                <div class="mb-3">
                  <label>Last Name</label>
                  <input type="email" class="form-control"  onChange={(e)=>setlastName(e.target.value)}/>
                </div>
                <div class="mb-3">
                  <label>Contact Number</label>
                  <input type={'text'} class="form-control" required onChange={(e)=>setphoneNumber(e.target.value)}/>
                </div>
                <div class="mb-3">
                  <label>Email address</label>
                  <input type="email" class="form-control" required onChange={(e)=>setemail(e.target.value)} />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" required  onChange={(e)=>setpassword(e.target.value)}/>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                  <input type="password" class="form-control" required  onChange={(e)=>setcnfpassword(e.target.value)}/>
                </div>
                <div class="mb-3 form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                  <label class="form-check-label" for="exampleCheck1">You agree to our terms and conditions</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col">
          <img src='https://wallpaperaccess.com/full/2675409.jpg' width="100%" height="458" alt="Lobby Image" />
        </div>
      </div>
    </HomeWrapper>
  )
}

export default Signup;