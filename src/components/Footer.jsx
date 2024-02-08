import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <section className="footerbackground p-0">
      <div className="container body-content" style={{maxWidth:'1200px'}}>
        <div className="row footer">
          <div className="col-md-4 winner">
            <img
              src="https://uniathena.com/themes/custom/athena/images/athena-logo.svg"
              className="fot-log-new mb-3"
            />
            <p>
              Athena Global Education is a subsidiary of Westford
              <br />
              Education Group, a higher education services
              <br />
              provider since 2009, providing quality UK, Italian
              <br />
              and Spanish Bachelor and Master level degrees.
            </p>
            <span>Subscribe to our newsletter</span>
            <br />
            <div className="newslatterrow">
            <input
              name="ctl00$txtnewsletter"
              type="text"
              id="txtnewsletter"
              className="subscribe-box w-70"
              //   onchange="NewsletterEmailChange(this.id)"
            />
            <input
              type="submit"
              name="ctl00$btnsave"
              value="Subscribe"
              //   onclick="if(!validateNewsletter()) return false;"
              id="btnsave"
              className="btn-br-small-purple "
            />
            </div>
          </div>
          <div className="colfooter foot-links">
            <p>
              <Link
                to="https://uniathena.com/about-us/our-background"
                target="_blank"
              >
                About Us
              </Link>
            </p>
            <p>
              <Link
                to="https://uniathena.com/about-us/athena-governance-structure"
                target="_blank"
              >
                Governance
              </Link>
            </p>
            <p>
              <Link
                to="https://uniathena.com/about-us/policies-and-procedures"
                target="_blank"
              >
                Policies &amp; Procedures
              </Link>
            </p>
            <p>
              <Link
                to="https://uniathena.com/about-us/board-of-governance"
                target="_blank"
              >
                Board of Governance
              </Link>
            </p>
            <p>
              <Link
                to="https://uniathena.com/about-us/academic-council"
                target="_blank"
              >
                Academic Council
              </Link>
            </p>
            <p>
              <Link
                to="https://uniathena.com/about-us/executive-council"
                target="_blank"
              >
                Executive Council
              </Link>
            </p>
            <p>
              <Link
                to="https://uniathena.com/about-us/core-principles"
                target="_blank"
              >
                Core Principles
              </Link>
            </p>
            <p>
              <Link to="https://uniathena.com/Contact-Us" target="_blank">
                Contact Us{" "}
              </Link>
            </p>
          </div>
          <div className="colfooter foot-links">
            <p>
              <Link to="https://uniathena.com/privacy-policy" target="_blank">
                Privacy Policy
              </Link>
            </p>
            <p>
              <Link to="https://uniathena.com/FAQ-Glossary" target="_blank">
                FAQ Glossary
              </Link>
            </p>
            <p>
              <Link
                to="https://uniathena.com/registration-terms"
                target="_blank"
              >
                Terms &amp; Conditions
              </Link>
            </p>
            <p>
              <Link to="https://uniathena.com/apl_policy" target="_blank">
                APL policy
              </Link>
            </p>

            <p>
              <Link
                to="https://uniathena.com/policies/equality_and_diversity_policy"
                target="_blank"
              >
                Equality and Diversity Policy
              </Link>
            </p>
            <p>
              <Link to="https://uniathena.com/feeAndCharges" target="_blank">
                Other Fee &amp; Charges{" "}
              </Link>
            </p>
            <p>
              <Link
                to="https://uniathena.com/certificateIssuance"
                target="_blank"
              >
                Certificate Issuance{" "}
              </Link>
            </p>
          </div>
          <div className="colfooter foot-links footer-social">
            <img
              className="footer-westford"
              src="https://ulearn.uniathena.com/Images/westford-logo.png"
            />

            <div className="social-icons mb-3 pb-30px">
              <Link
                to="https://www.facebook.com/AthenaGlobalEducation/"
                target="_blank"
              >
                <img
                  alt="facebook icon"
                  src="https://ulearn.uniathena.com/Images/facebook.svg"
                />
              </Link>
              <Link to="https://www.instagram.com/uni_athena/" target="_blank">
                <img
                  alt="instagram icon"
                  src="https://ulearn.uniathena.com/Images/instagram.svg"
                />
              </Link>
              <Link
                to="https://www.linkedin.com/school/athenaglobaleducation/"
                target="_blank"
              >
                <img
                  alt="linkedin icon"
                  src="https://ulearn.uniathena.com/Images/linkedin.svg"
                />
              </Link>
              <Link to="https://twitter.com/AthenaGlobalEdu/" target="_blank">
                <img
                  alt="twitter icon"
                  src="https://ulearn.uniathena.com/Images/twitter.svg"
                />
              </Link>
            </div>
          </div>

          <div className="col-md-4"></div>
          <div
            className="col-md-8"
            style={{
              borderTop: "1px solid rgba(0,0,0,0.5)",
              height: "5px",
              display: "block",
            }}
          ></div>

          <div className="col-md-4"></div>
          <div className="col-md-8 footer-address">
            <div className="col">
              <h6>UK</h6>

              <p>
                Athena Global Education
                <br />
                Magdalen Centre
                <br />
                Robert Robinson Avenue
                <br />
                Oxford, OX4 4GA, UK
                <br />
                Phone : +44 18 65 78 4299
              </p>
            </div>
            <div className="col">
              <h6>MIDDLE EAST</h6>
              <p>
                Athena Global Education FZE
                <br />
                Block L-3, First Floor, P O Box 519265,
                <br />
                Sharjah Publishing City,
                <br />
                Free Zone, Sharjah, UAE
                <br />
                Phone : +971 65 31 2511
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-url text-center text-white">
        <p className="mb-1">Athena Global Education © 2024 </p>
      </div>
    </section>
  );
}

export default Footer;
