/** @format */

import { Button, Modal, Image } from "react-bootstrap";
import "../developer/developer.css";

export default function DeveloperProfile(props) {
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.close}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Ali Raza - Frontend Developer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src="assets/aliraza.jpg" alt="Not Found" className="dev_img" />
          <p>
            Co-Founder <strong>Incomebomb.com</strong>. Hi, my self Ali Raza, I
            am digital expert and Front End Developer, currently self-employed
            and driven by passion to create digital solution for my valuable
            clients. I like to help people get answers to their problems
            regarding WordPress and Web Development. I love about what I do! I
            want to make my impression as a successful developer and for that I
            try to learn and teach anything valuable that can help me to get the
            better understand of what I do.To utilize my technical skills for
            achieving the target and developing the best performance in the
            organization. I would like to implement my innovative ideas, skills
            and creativity for accomplishing the projects.
          </p>
        </Modal.Body>
        <div className="social_iocns">
          <ul class="social-network social-circle">
            <li>
              <a
                href="https://github.com/AliRazaSaqib"
                class="icoRss"
                title="Rss"
              >
                <i class="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://web.facebook.com/profile.php?id=100006145513818"
                class="icoFacebook"
                title="Facebook"
              >
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/AliRaza55795782"
                class="icoTwitter"
                title="Twitter"
              >
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.incomebomb.com/"
                class="icoGoogle"
                title="Google +"
              >
                <i class="fa fa-globe"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ali-raza-7689901a7/"
                class="icoLinkedin"
                title="Linkedin"
              >
                <i class="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
          <div className="contact">
            <div>
              <strong>Contact:</strong> +92307-7534255
            </div>
            <div>
              <strong>Email:</strong> raza80540@gmail.com
            </div>
          </div>
        </div>

        <section class="services">
          <div class="container">
            <div class="section-title">
              <h2>My Expertise</h2>
              <p class="col-md-8 offset-md-2">
                To utilize my technical skills for achieving the target and
                developing the best performance in the organization. I would
                like to implement my innovative ideas, skills and creativity for
                accomplishing the projects.
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
      </Modal>
    </>
  );
}
