/** @format */

import React from "react";
import "../developer/developer.css";
export default function DeveloperInfo() {
  const closeWindow = () => {
    window.close();
  };
  return (
    <div className="profile">
      <div className="overlay">
        <button onClick={closeWindow}>X</button>
        <div className="holdDivs">
          <div className="developer_name">Ali Raza</div>
          <div className="image">
            <img src="assets/aliraza.jpg" alt=" Not Showing" />
          </div>
          <div className="footer-social-icon">
            <div className="mb-2 flex-center">
              <a
                className="fb-ic"
                href="https://web.facebook.com/profile.php?id=100006145513818"
              >
                <i className="fab fa-facebook-f fa-lg"></i>
              </a>

              <a className="tw-ic" href="https://twitter.com/AliRaza55795782">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a className="tw-ic" href="https://twitter.com/AliRaza55795782">
                <i className="fab fa-github fa-lg"></i>
              </a>
              <a className="tw-ic" href="https://twitter.com/AliRaza55795782">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>
          <p>
            Co-Founder Incomebomb.com. Hi, my self Ali Raza, I am digital expert
            and Front End Developer, currently self-employed and driven by
            passion to create digital solution for my valuable clients. I like
            to help people get answers to their problems regarding WordPress and
            Web Development. I love about what I do! I want to make my
            impression as a successful developer and for that I try to learn and
            teach anything valuable that can help me to get the better
            understand of what I do!
          </p>

          <section class="services">
            <div class="container">
              <div class="section-title">
                <h2>My Expertise</h2>
                <p class="col-md-8 offset-md-2">
                  To utilize my technical skills for achieving the target and
                  developing the best performance in the organization. I would
                  like to implement my innovative ideas, skills and creativity
                  for accomplishing the projects.
                </p>
              </div>
              <div class="applyGrid">
                <div class="set_margin" data-aos="fade-up">
                  <div class="service-box">
                    <i class="fab fa-html5"></i>
                    <h4>
                      <a href="">HTML</a>
                    </h4>
                  </div>
                </div>
                <div class="set_margin" data-aos="fade-up">
                  <div class="service-box">
                    <i class="fab fa-css3-alt"></i>
                    <h4>
                      <a href="">CSS3</a>
                    </h4>
                  </div>
                </div>
                <div class="set_margin" data-aos="fade-up">
                  <div class="service-box">
                    <i class="fab fa-node-js"></i>
                    <h4>
                      <a href="">JAVASCRIPT</a>
                    </h4>
                  </div>
                </div>
                <div class="set_margin" data-aos="fade-up">
                  <div class="service-box">
                    <i class="fab fa-bootstrap"></i>
                    <h4>
                      <a href="">BOOTSTRAP</a>
                    </h4>
                  </div>
                </div>
                <div class="set_margin" data-aos="fade-up">
                  <div class="service-box">
                    <i class="fab fa-sass"></i>
                    <h4>
                      <a href="">SASS</a>
                    </h4>
                  </div>
                </div>
                <div class="set_margin" data-aos="fade-up">
                  <div class="service-box">
                    <i class="fab fa-react"></i>
                    <h4>
                      <a href="">REACT</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
