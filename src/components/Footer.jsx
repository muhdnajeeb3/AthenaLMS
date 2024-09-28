import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { Button, Container } from "react-bootstrap";

function Footer() {
  const newsletterHandler = (event) => {
    event.preventDefault();
    alert("You clicked");
  };

  return (
    <footer className="footerbackground">
      <Container className="body-content" style={{maxWidth:'1200px'}}>
        <div className="row footer pt-5">
          <div className="col-md-4 winner">
            <img
              src="https://ulearn.uniathena.com/images/athena-logo-footer.svg"
              className="fot-log-new mt-0"
              alt="Athena Logo"
            />
            <p className="w-70">
              Athena Global Education FZE is an Online Education provider
              offering self-paced Masters, Doctorate, and Microcredit programs
              in collaboration with European Universities and Reputed
              Professional Qualifications Authority. Athena is the latest
              venture of Westford Education Group, a higher education services
              provider since 2009.
            </p>
            <div className="mt-3 d-flex footer-social">
              <a
                href="https://www.facebook.com/uniathena"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Facebook icon"
                  src="https://ulearn.uniathena.com/Images/facebook.svg"
                />
              </a>
              <a
                href="https://www.instagram.com/uni_athena/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Instagram icon"
                  src="https://ulearn.uniathena.com/Images/instagram.svg"
                />
              </a>
              <a
                href="https://www.linkedin.com/school/athenaglobaleducation/mycompany/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="LinkedIn icon"
                  src="https://ulearn.uniathena.com/Images/linkedin.svg"
                />
              </a>
              <a
                href="https://x.com/AthenaGlobalEdu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Twitter icon"
                  src="https://ulearn.uniathena.com/Images/twitter.svg"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCMNksRt7eJOypN3qWaNwL_g"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="YouTube icon"
                  src="https://ulearn.uniathena.com/Images/youtube.svg"
                />
              </a>
            </div>
            <img
              className="w-158 pt-3 my-3"
              src="https://ulearn.uniathena.com/images/westford-logo.svg"
              alt="Westford Logo"
            />
            <p className="w-70">
              Westford Education Group (WEG) is a leading provider of accredited
              international education to aspiring learners across the globe.
              Westford is fast emerging as a reputed brand of global education
              providers.
            </p>
          </div>
          <div className="col foot-links">
            <div>
              <p>
                <a
                  href="https://uniathena.com/about-us/our-background"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About Us
                </a>
              </p>
              <p>
                <a
                  href="https://uniathena.com/about-us/athena-governance-structure"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Governance
                </a>
              </p>
              <p>
                <a
                  href="https://uniathena.com/about-us/policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Policies & Procedures
                </a>
              </p>
              <p>
                <a
                  href="https://uniathena.com/about-us/board-of-governance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Board of Governance
                </a>
              </p>
              <p>
                <a
                  href="https://uniathena.com/about-us/academic-council"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Academic Council
                </a>
              </p>
              <p>
                <a
                  href="https://uniathena.com/about-us/executive-council"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Executive Council
                </a>
              </p>
              <p>
                <a
                  href="https://uniathena.com/about-us/core-principles"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Core Principles
                </a>
              </p>
              <p>
                <a
                  href="https://uniathena.com/contactus"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Us
                </a>
              </p>
            </div>
            <div className="mt-3 mb-3">
              <h6>UK</h6>
              <p>
                Athena Global Education
                <br />
                Magdalen Centre,
                <br />
                Robert Robinson Avenue,
                <br />
                Oxford, OX4 4GA, UK
                <br />
                Phone: +44 18 65 78 4299
              </p>
            </div>
          </div>
          <div className="col foot-links">
            <div>
              <p>
                <a
                  href="https://uniathena.com/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </p>
              <p>
                <a
                  href="https://uniathena.com/faq-glossory"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FAQ Glossary
                </a>
              </p>
              <p>
                <a
                  href="https://uniathena.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms & Conditions
                </a>
              </p>
              <p>
                <a
                  href="https://uniathena.com/apl_policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  APL policy
                </a>
              </p>
              <p>
                <a
                  href="https://uniathena.com/policies/equality_and_diversity_policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Equality and Diversity Policy
                </a>
              </p>
              <p>
                <a
                  href="https://uniathena.com/feeAndCharges"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Other Fee & Charges
                </a>
              </p>
              <p>
                <a
                  href="https://uniathena.com/certificateIssuance"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Certificate Issuance
                </a>
              </p>
            </div>
            <div className="mt-3 mb-3">
              <h6>MIDDLE EAST</h6>
              <p>
                Athena Global Education FZE
                <br />
                Block L-3, First Floor,
                <br />
                P O Box 519265,
                <br />
                Sharjah Publishing City,
                <br />
                Free Zone, Sharjah, UAE
                <br />
                Phone: +971 65 31 2511
              </p>
            </div>
          </div>

          <div className="col-md-4 d-flex flex-column" >
            <div
              className="social-icons subscribe mb-3"
              style={{ paddingBottom: "30px" }}
            >
              <p>Subscribe to our Newsletter & Webinars</p>
              <input
                type="text"
                className="subscribe-box w-100"
                placeholder="Please enter your email ID"
                onChange={(e) => console.log(e.target.value)}
              />
              <input
                className="subscribe-box w-100 mt-3"
                placeholder="Please enter your name"
              />
              <div className="d-flex gap-2 w-100 my-2 justify-content-end  text-right ter-con">
                <a href="#" className="text-white">Terms and Conditions</a>
              </div>
              <div className="form-check d-flex gap-2">
                <input
                  className="form-check-input p-0"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  Subscribe to webinar series
                </label>
              </div>
              <Button
                className="btn-br-small-pink mt-3 w-100"
                onClick={newsletterHandler}
              >
                Subscribe
              </Button>
              <div className="d-none">
                <a
                  href="https://www.facebook.com/AthenaGlobalEducation/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="Facebook icon"
                    src="https://ulearn.uniathena.com/Images/facebook.svg"
                  />
                </a>
                <a
                  href="https://www.instagram.com/uni_athena/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="Instagram icon"
                    src="https://ulearn.uniathena.com/Images/instagram.svg"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/school/athenaglobaleducation/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="LinkedIn icon"
                    src="https://ulearn.uniathena.com/Images/linkedin.svg"
                  />
                </a>
                <a
                  href="https://twitter.com/AthenaGlobalEdu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="Twitter icon"
                    src="https://ulearn.uniathena.com/Images/twitter.svg"
                  />
                </a>
              </div>
            </div>
            <div className=" hidden-xs">
              <h6>INDIA</h6>
              <p>
                Athena Global Education
                <br />
                9A, Midas Tower,
                <br />
                Phase 1,
                <br />
                Hinjewadi Rajiv Gandhi Infotech Park
                <br />
                Pune - 411057
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
