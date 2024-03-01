import { Button, Container } from "react-bootstrap";
import "../homecomponents/HomeScreen.css";
const ChangePassword = () => {
  return (
    <Container fluid className="changepassword-bg py-5">
      <Container className="pt-5">
        <div className="createpassword-wrap pt-4 pb-3 px-4">
          <div>
            <h3 className="cptitle text-center">You are all most done !</h3>
            <p className="text-center pt-1">
              Please Change your login password here
            </p>
            <form action="">
              <div className="cpform-group my-5">
                <label>Current Password</label>
                <input className="cpform-control" type="password" />
              </div>
              <div className="cpform-group my-5">
                <label>New Password</label>
                <input className="cpform-control" type="password" />
              </div>
              <div className="cpform-group my-5">
                <label>Re-Enter New Password</label>
                <input className="cpform-control" type="password" />
              </div>
              <div className="cpformbtnwrap mb-4">
                <Button className="cp-btn">Update</Button>
                <Button className="cp-btn">Cancel</Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default ChangePassword;
