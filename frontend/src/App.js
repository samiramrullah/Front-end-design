import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import './App.css';
function App() {
  return (
    <div className="App">
     {/* <Navbar/> */}
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard/*' element={<Dashboard/>}/>
      {/* <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/post' element={<Contact/>}/> */}
     </Routes>
     {/* <Signup/>
     <Footer/> */}
    </div>
  );
}

export default App;
