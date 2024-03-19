import { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import PhoneInput from "react-phone-number-input";

const BookaCall = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Container fluid className="dash-module-wrap py-2">
        <Row className="dash-module-content" style={{ flexDirection: "row" }}>
          <h1 className="flex item-center">
            <b>Request Call Back</b>
          </h1>
        </Row>
      </Container>
      <Container fluid className="bg-white py-2">
        <div className="bookacall-form-wrap pt-4">
          <div className="bookacall-form-row py-4">
            <h3 className="bac-title mb-3">Contact Details</h3>
            <form action="">
              <div className="bac-nameemail-wrap">
                <div>
                  <span className="nam1-1a">Name of Student</span>
                  <span className="nam1-1b">Joju Test Schneide</span>
                </div>
                <div>
                  <span className="nam1-1a">Email of Student</span>
                  <span className="nam1-1b">joju@schneideit.com</span>
                </div>
              </div>
              <div className="py-4 bac-form-group-wrap">
                <div className="bac-form-group">
                  <label>Company</label>
                  <select name="" id="">
                    <option value="">Select</option>
                  </select>
                </div>
                <div className="bac-form-group">
                  <label>Language of your preference to communicate?</label>
                  <select name="" id="">
                    <option value="">Select</option>
                    <option value="">English</option>
                    <option value="">French</option>
                    <option value="">Spanish</option>
                    <option value="">Hindi</option>
                    <option value="">Arabic</option>
                  </select>
                </div>
                <div className="bac-form-group">
                  <label>How would you like to be contacted?</label>
                  <select name="" id="">
                    <option value="">Select</option>
                    <option value="">Email</option>
                    <option value="">Whatsapp</option>
                    <option value="">Phone</option>
                  </select>
                </div>
                <div className="bac-form-group">
                  <label>Contact No</label>
                  <PhoneInput
                    placeholder="Enter phone number"
                    //   value={value}
                    //   onChange={setValue}
                    defaultCountry="IN"
                  />
                </div>
                <div className="bac-form-group">
                  <label>Remarks</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Your Message"
                    style={{ minHeight: "5rem" }}
                  />
                </div>
                <div className="bac-form-group content-end">
                  <Button className="default-btn">Submit</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default BookaCall;
