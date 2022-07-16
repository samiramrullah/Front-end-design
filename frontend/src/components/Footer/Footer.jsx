import React from 'react'
import { NavLink } from 'react-router-dom';
import { FacebookFilled, TwitterCircleFilled, LinkedinFilled, InstagramFilled } from '@ant-design/icons';
import { useTranslation } from "react-i18next";
import { useState } from 'react';
import './Footer.css'
const Footer = () => {
    const { t } = useTranslation();
    const [message,setmessage]=useState();
    const[email,setemail]=useState();
    const onSubmitHandler=(e)=>{
            e.preventDefault();
            console.log(message,email);
    }
    return (
        <div>
            <div class="container-fluid bg-dark text-white py-5 px-sm-3 px-md-5">
                <div class="row pt-5">
                    <div class="col-lg-4 col-md-12 mb-5">
                        <h1 class="mb-3 display-5 text-capitalize text-white"><span class="text-primary">Cred</span>Adda</h1>
                        <p class="m-0">Ipsum amet sed vero et lorem stet eos ut, labore sed sed stet sea est ipsum ut. Volup amet ea sanct ipsum, dolore vero lorem no duo eirmod. Eirmod amet ipsum no ipsum lorem clita ut. Ut sed sit lorem ea lorem sed, amet stet sit sea ea diam tempor kasd kasd. Diam nonumy etsit tempor ut sed diam sed et ea</p>
                    </div>
                    <div class="col-lg-8 col-md-12">
                        <div class="row">
                            <div class="col-md-4 mb-5">
                                <h5 class="text-primary mb-4">Get In Touch</h5>
                                <p><i class="fa fa-map-marker-alt mr-2"></i>Sector-12 , Chandigarh, India</p>
                                <p><i class="fa fa-phone-alt mr-2"></i>+91 904 1952237</p>
                                <p><i class="fa fa-envelope mr-2"></i>samiramrullah@gmail.com</p>
                                <div class="d-flex justify-content-start mt-4">
                                    <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" href="https://twitter.com/samiramrullah" target={'_blank'} style={{ width: '36px', height: '36px'}}><TwitterCircleFilled /></a>
                                    <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" href="https://www.linkedin.com/in/samir-alam-52b59a12a/" target={'_blank'} style={{ width: '36px', height: '36px' }}><LinkedinFilled /></a>
                                    <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" href="https://www.instagram.com/_beingsamir/" target={'_blank'} style={{ width: '36px', height: '36px' }}><InstagramFilled /></a>
                                    <a class="btn btn-outline-light rounded-circle text-center mr-2 px-0" href="https://www.facebook.com/samiramrullah/" target={'_blank'} style={{ width: '36px', height: '36px' }}><FacebookFilled /></a>
                                </div>
                            </div>
                            <div class="col-md-4 mb-5">
                                <h5 class="text-primary mb-4">Popular Links</h5>
                                <div class="d-flex flex-column justify-content-start">
                                    <NavLink to={'/'} class="text-white mb-2">Home</NavLink>
                                    <NavLink to={'/about'} class="text-white mb-2" >About Us</NavLink>
                                    <a class="text-white mb-2" href="https://twitter.com/samiramrullah">Our Services</a>
                                    <a class="text-white mb-2" href="https://twitter.com/samiramrullah">Our Team</a>
                                    <NavLink to={'/contact'} class="text-white">Contact Us</NavLink>
                                </div>
                            </div>
                            <div class="col-md-4 mb-5">
                                <h5 class="text-primary mb-4">Have a Query?</h5>
                                <form onSubmit={onSubmitHandler}>
                                    <div class="form-group">
                                        <input type="text" class="form-control border-0" placeholder="Text here" required="required" onChange={(e)=>setmessage(e.target.value)}/>
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control border-0" placeholder="Your Email" required="required" onChange={(e)=>setemail(e.target.value)} />
                                    </div>
                                    <div>
                                        <button class="btn btn-lg btn-primary btn-block border-0" type="submit">Send Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid text-white py-4 px-sm-3 px-md-5" style={{ background: '#111111' }}>
                <div class="row">
                    <div class="col-md-6 text-center text-md-left mb-3 mb-md-0">
                        <p class="m-0 text-white">
                            &copy; <a class="text-white font-weight-bold" href="#">Cred Adda</a>. All Rights Reserved.

                        </p>
                    </div>
                    <div class="col-md-6 text-center text-md-right">
                        <ul class="nav d-inline-flex">
                            <li class="nav-item">
                                <a class="nav-link text-white py-0" href="https://twitter.com/samiramrullah">Privacy</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white py-0" href="https://twitter.com/samiramrullah">Terms</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white py-0" href="https://twitter.com/samiramrullah">FAQs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white py-0" href="https://twitter.com/samiramrullah">Help</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;