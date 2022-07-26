import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import {ArrowLeftOutlined} from '@ant-design/icons';
import './About.css';
const About = () => {
  const navigate = useNavigate();
  const backbuttonHandler = () => {
    navigate(-1)
  }
  return (
    <>
      <div className="AboutMain">
        <div class="we-are-block">
          <div id="about-us-section">
            <button className='backbtn' onClick={backbuttonHandler}><ArrowLeftOutlined /></button>
            <div class="about-us-image">
              <img id='img'src="https://wallpaperaccess.com/full/2675409.jpg" width="808" height="458" alt="Lobby Image" />
            </div>
            <div class="about-us-info">
              <h2>Cred Adda</h2>
              <p>We make money transer easy, fast and smooth</p>
              <NavLink to={'/signup'} title="About Us Button">Connect With US</NavLink>
            </div>
          </div>
          <div id="history-section">
            <div class="history-image">
              <img src="https://thumbs.dreamstime.com/b/canada-indian-flag-hands-together-man-hand-beautiful-color-red-wonderful-place-126029930.jpg" width="951" height="471" alt="Building Pic" />
            </div>
            <div class="history-info">
              <h2>Why Cred Adda</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime in magni explicabo mollitia. Consequatur cumque provident molestias quos, doloribus iure dolorum nisi error ad aliquam laboriosam voluptatum mollitia maxime magni.</p>
              <a href="#" title="History Button">Contact US</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About