import { Container } from "react-bootstrap";
import Slider from "react-slick";
import PrevButton from "./PrevButton";
import NextButton from "./NextButton";

const Testimonial = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevButton />,
    nextArrow:<NextButton />,
    // autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <Container fluid className="py-5">
      <div className="testimonialrow">
        <div className="theadcontent">
          <h5>Testimonial</h5>
          <h2>Our Students Say About us</h2>
          <p>
            Our students speak about their learning experience at Athena, how
            the courses sharpened their management skills and the support they{" "}
            received at every stage.
          </p>
        </div>
        <div className="my-5">
          <Slider {...settings}>
            <div
              className="testicardwrap"
            >
              <div className="testicard">
                <div className="testicardbgbox" />
                <div className="col-md-7 testicardcontent">
                  <img
                    src="https://ulearn.uniathena.com/Images/v2-icons/testi-excla.jpg"
                    alt=""
                    width={40}
                    className="mb-2"
                  />
                  <p>
                    So far, what I have experienced in Athena is impressive,
                    especially regarding people to assist me with my academic
                    challenges.Thank you all for your desire to make sure I
                    progress with my studies.
                  </p>
                  <p>
                    Eudorah Kudiabor, Chief Medical Director <br />
                    Life Scientists and Global Doctors Health Institutions,
                    <br />
                    Ghana
                  </p>
                  <img
                    src="https://ulearn.uniathena.com/Images/testimonial/fb.png"
                    alt=""
                  />
                </div>
                <div className="col-md-5 testicardimg">
                  <img
                    src="https://ulearn.uniathena.com/Images/testimonial/Eudorah.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              className="testicardwrap"

            >
              <div className="testicard">
                <div className="testicardbgbox" />
                <div className="col-md-7 testicardcontent">
                  <img
                    src="https://ulearn.uniathena.com/Images/v2-icons/testi-excla.jpg"
                    alt=""
                    width={40}
                    className="mb-2"
                  />
                  <p>
                    So far, what I have experienced in Athena is impressive,
                    especially regarding people to assist me with my academic
                    challenges.Thank you all for your desire to make sure I
                    progress with my studies.
                  </p>
                  <p>
                    Eudorah Kudiabor, Chief Medical Director <br />
                    Life Scientists and Global Doctors Health Institutions,
                    <br />
                    Ghana
                  </p>
                  <img
                    src="https://ulearn.uniathena.com/Images/testimonial/fb.png"
                    alt=""
                  />
                </div>
                <div className="col-md-5 testicardimg">
                  <img
                    src="https://ulearn.uniathena.com/Images/testimonial/Eudorah.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </Container>
  );
};

export default Testimonial;
