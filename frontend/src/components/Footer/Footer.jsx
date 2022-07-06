import React from 'react'
import { NavLink } from 'react-router-dom';
import { FacebookFilled, TwitterCircleFilled, GoogleCircleFilled, LinkedinFilled, HomeFilled, MessageFilled, PhoneFilled } from '@ant-design/icons'
const Footer = () => {
  return (
    <div>

      <footer class="text-center text-lg-start bg-light text-muted">
        <section
          class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div class="me-5 d-none d-lg-block" style={{ textAlign: 'center' }}>
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="https://www.facebook.com/samiramrullah/" class="me-4 text-reset">
              <FacebookFilled />
            </a>
            <a href="" class="me-4 text-reset">
              <TwitterCircleFilled />
            </a>
            <a href="" class="me-4 text-reset">
              <i class="fab fa-google"></i>
            </a>
            <a href="" class="me-4 text-reset">
              <GoogleCircleFilled />
            </a>
            <a href="" class="me-4 text-reset">
              <LinkedinFilled />
            </a>
          </div>
        </section>
        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3"></i>Cred Adda
                </h6>
                <p>
                  Short Intro of Company <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti asperiores maxime, corrupti adipisci laborum minima animi sunt expedita, illo cumque eius saepe eligendi eum natus. Velit optio eaque aspernatur nostrum?
                </p>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  Why Cred Adda
                </h6>
                <p>
                  <a href="#!" class="text-reset">Trusted</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Fast</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Gurantee</a>
                </p>
              </div>
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  Our Services
                </h6>
                <p>
                  <a href="#!" class="text-reset">24 hrs Customer Support</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Send Money in Short Time</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Send Money with Security</a>
                </p>
                <p>
                  <a href="#!" class="text-reset">Help</a>
                </p>
              </div>
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  Contact
                </h6>
                <p><HomeFilled clasName="me-3" /> Sector 12, Chandigarh 160012, India</p>
                <a>
                  <MessageFilled clasName="me-3" />
                  samiramrullah@gmail.com
                </a>
                <p><PhoneFilled clasName="me-3" />  + 977 9823231006</p>
                <p><PhoneFilled clasName="me-3" />  + 91 9041952237</p>
              </div>
            </div>
          </div>
        </section>
        <div class="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2021 Copyright:
          <NavLink to={'/'} class="text-reset fw-bold"> Credadda.com</NavLink>
        </div>
      </footer>
    </div>
  )
}

export default Footer