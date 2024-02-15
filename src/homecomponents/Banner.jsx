import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <Container fluid className="bg-light">
      <Row className="homebannerrow">
        <div className="col-md-6 py-5">
          <h2 className="greeting pb-2">
            <span id="MainContent_lblUser">Good Afternoon, Joju</span>
          </h2>
          <p>
            If a man empties his purse into his head, no man can take it away
            from him. An investment in knowledge always pays the best interest.{" "}
            <br />
            <b>Ben Franklin</b>
          </p>
          <div className="newmailbox">
            <div className="newmailwrapper">
              <div className="newmailnotifyrow">
                <div>
                  <b>You have new mail notification</b>
                </div>
                <div className="mailnumber">
                  <span>22</span>
                </div>
              </div>
              <div className="mailview">View</div>
            </div>
          </div>
          <div className="newmailbox mt-4" style={{ minHeight: "560px" }}>
            <div className="newmailwrapper" style={{ flexDirection: "row" }}>
              <div className="newmailnotifyrow">
                <b>Upcoming Webinars</b>
              </div>
              <div className="mailnumber">
                <span>4</span>
              </div>
            </div>
            <div>
              <Slider {...settings}>
                <div className="webinarwrap">
                  <div>
                    <h4 className="webinartitle">
                      SQL Mastery: Techniques for Data Manipulation
                    </h4>
                  </div>
                </div>
                <div className="webinarwrap">
                  <div>
                    <h4 className="webinartitle">
                      SQL Mastery: Techniques for Data Manipulation
                    </h4>
                  </div>
                </div>
                <div className="webinarwrap">
                  <div>
                    <h4 className="webinartitle">
                      SQL Mastery: Techniques for Data Manipulation
                    </h4>
                  </div>
                </div>
                <div className="webinarwrap">
                  <div>
                    <h4 className="webinartitle">
                      SQL Mastery: Techniques for Data Manipulation
                    </h4>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <Col className="col-md-6 py-5">y</Col>
      </Row>
    </Container>
  );
};

export default Banner;
