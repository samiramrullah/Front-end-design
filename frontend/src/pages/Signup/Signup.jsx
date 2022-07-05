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
      <div className='container mt-3 signupmain'>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input type={'text'} className="form-control" required onChange={(e) => setfirstName(e.target.value)} value={firstName} />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input type={'text'} className="form-control" onChange={(e) => setlastName(e.target.value)} value={lastName} />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input type={'tel'} className="form-control" required onChange={(e) => setphoneNumber(e.target.value)} value={phoneNumber} />
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" onChange={(e) => setemail(e.target.value)} value={email} />
            <div className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" required onChange={(e) => setpassword(e.target.value)} value={password} />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input type="password" className="form-control" required onChange={(e) => setcnfpassword(e.target.value)} value={cnfpassword} />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" required />
            <label className="form-check-label">By checking in this button you agree to our terms and conditions</label>
          </div>
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
      </div>
    </HomeWrapper>
  )
}

export default Signup;