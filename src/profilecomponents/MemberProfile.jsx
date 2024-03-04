import { Container } from "react-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const MemberProfile = () => {
  const percentage =63;
  return (
    <Container fluid className="bg-light py-2">
      <div className="memberprofilewrap">
        <h2 className="mptitle">My Private Profile</h2>
        <br />
        <div className="mpbox1">
          <div className="col-md-8">
            <div className="shadow p-3 bg-white profilecards">
              <div>
                <img
                  src="https://t3.ftcdn.net/jpg/06/39/82/56/360_F_639825617_M37Rtx5wggULiv1sa6HRYdlWGJhZ4yYw.jpg"
                  alt=""
                  width={130}
                  className="profile-img"
                />
              </div>
              <div className="w-100  p-2">
                <div className="editprofile">
                  <h6>
                    <b>Joju</b>
                    <b>Test Schneide</b> <b className="id-dash"> | </b>{" "}
                    <b className="id-blk"> ID: </b>
                    <b className="id-no">20113680</b>
                  </h6>
                  <div className="editprofile">
                    <i className="fa fa-edit" />
                    <span title="Edit">Edit Profile</span>
                  </div>
                </div>
                <b>Test</b>
                <p className="pt-3 m-0">
                  <b>Test1</b>|<b>Test1</b>| <b>INDIA</b>
                </p>
                <p
                  className="pt-3 m-0 editprofile"
                  style={{ justifyContent: "flex-start" }}
                >
                  <img src="https://ulearn.uniathena.com/images/icons/mail.svg" />
                  <b>joju@schneideit.com</b>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="practicalinfo bg-white shadow p-4 mb-3">
              <div className="practicalinfo-title w-100 mb-3">
                <h5>
                  <b>Complete Your Profile</b>
                </h5>
              </div>
              <div className="progresscirclewrap mb-3">
              <CircularProgressbar value={percentage} text={`${percentage}%`} 
              styles={buildStyles({
                pathTransitionDuration: 0.5,
                pathColor: `rgba(255, 0, 110)`,
                textColor: '#000',
              })}
              />
              </div>
              <div className="w-100 flex">
              <span className="text-center m-auto">Well done! Your profile is completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MemberProfile;
