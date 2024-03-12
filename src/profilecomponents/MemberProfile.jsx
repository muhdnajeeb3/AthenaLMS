import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";

const MemberProfile = () => {
  const [counters, setCounters] = useState({
    counter: 0,
    counterOne: 0,
    counterTwo: 0,
  });
  const { counter } = counters;

  const incrementCounter = (counterKey, length, precision) => {
    setTimeout(() => {
      setCounters((prevCounters) => ({
        ...prevCounters,
        [counterKey]: prevCounters[counterKey] + precision,
      }));
    }, 20);
  };

  useEffect(() => {
    if (counter < 85) {
      incrementCounter("counter", 35, 1);
    }
  }, [counter]);
  const percentage = counter;
  return (
    <Container fluid className="bg-light py-2">
      <div className="memberprofilewrap">
        <h2 className="mptitle">My Private Profile</h2>
        <br />
        <div className="mpbox1">
          <div className="col-md-8">
            <div className="shadow p-3 bg-white profilecards mb-4">
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
            {/* Educational Qualfication */}
            <div className="practicalinfo bg-white shadow p-4 pb-2 mb-3">
              <div
                className="practicalinfo-title w-100 mb-3 plus-icon-wrap"
              >
                <h5>
                  <b>Education Qualification</b>
                </h5>
                <span className="plus-icon">+</span>
              </div>
              <div>
                <div className="createvoice-list">
                  <div>
                    <span className="">Master In Data Sciences</span>
                    <br />
                    <span>Year: 2015</span>
                  </div>
                  <div className="deletview-btn-wrap">
                    <Button variant="">Delete</Button>
                    <Button variant="">View</Button>
                  </div>
                </div>
                <hr />
                <div className="createvoice-list">
                  <div>
                    <span className="">Master In Data Sciences</span>
                    <br />
                    <span>Year: 2015</span>
                  </div>
                  <div className="deletview-btn-wrap">
                    <Button variant="">Delete</Button>
                    <Button variant="">View</Button>
                  </div>
                </div>
                <hr />
                <div className="createvoice-list">
                  <div>
                    <span className="">Master In Data Sciences</span>
                    <br />
                    <span>Year: 2015</span>
                  </div>
                  <div className="deletview-btn-wrap">
                    <Button variant="">Delete</Button>
                    <Button variant="">View</Button>
                  </div>
                </div>
                <hr />
                <div className="createvoice-list">
                  <div>
                    <span className="">Master In Data Sciences</span>
                    <br />
                    <span>Year: 2015</span>
                  </div>
                  <div className="deletview-btn-wrap">
                    <Button variant="">Delete</Button>
                    <Button variant="">View</Button>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            {/* work expereince */}
            <div className="practicalinfo bg-white shadow p-4 pb-2 mb-3">
              <div
                className="practicalinfo-title w-100 mb-3 plus-icon-wrap"
              >
                <h5>
                  <b>Work Experience</b>
                </h5>
                <span className="plus-icon">+</span>
              </div>
              <div>
                <div className="createvoice-list">
                  <div>
                    <span className="">Test at Test</span>
                    <br />
                    <span>year : Feb 2020 - Till now</span>
                  </div>
                  <div className="deletview-btn-wrap">
                    <Button variant="">Delete</Button>
                    <Button variant="">View</Button>
                  </div>
                </div>
                <hr />
                <div className="createvoice-list">
                  <div>
                    <span className="">Test at Test</span>
                    <br />
                    <span>year : Feb 2020 - Till now</span>
                  </div>
                  <div className="deletview-btn-wrap">
                    <Button variant="">Delete</Button>
                    <Button variant="">View</Button>
                  </div>
                </div>
                <hr />
                <div className="createvoice-list">
                  <div>
                    <span className="">Test at Test</span>
                    <br />
                    <span>year : Feb 2020 - Till now</span>
                  </div>
                  <div className="deletview-btn-wrap">
                    <Button variant="">Delete</Button>
                    <Button variant="">View</Button>
                  </div>
                </div>
                <hr />
                <div className="createvoice-list">
                  <div>
                    <span className="">Test at Test</span>
                    <br />
                    <span>year : Feb 2020 - Till now</span>
                  </div>
                  <div className="deletview-btn-wrap">
                    <Button variant="">Delete</Button>
                    <Button variant="">View</Button>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            {/* additional doc */}
            <div className="practicalinfo bg-white shadow p-4 pb-2 mb-3">
              <div
                className="practicalinfo-title w-100 mb-3 plus-icon-wrap"
              >
                <h5>
                  <b>Additional Documents</b>
                </h5>
                <span className="plus-icon">+</span>
              </div>
              <div>
                <div className="createvoice-list">
                  <div>
                    <span className="">Photo : <span className="blue">23617_lap.png</span></span>
                  </div>
                </div>
                <div className="createvoice-list">
                  <div>
                    <span className="">Passport/Photo ID card copy with Date of Birth : <span className="blue">23617_lap.png</span></span>
                  </div>
                </div>
                <div className="createvoice-list">
                  <div>
                    <span className="">Photo : <span className="blue">23617_lap.png</span></span>
                  </div>
                </div>
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
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    pathTransitionDuration: 0.5,
                    pathColor: `rgba(255, 0, 110)`,
                    textColor: "#000",
                  })}
                />
              </div>
              <div className="w-100 flex">
                <span className="text-center m-auto">
                  Well done! Your profile is completed
                </span>
              </div>
            </div>
            {/* create invoice */}
            <div className="practicalinfo bg-white shadow p-4 pb-2 mb-3">
              <div className="practicalinfo-title w-100 mb-3">
                <h5>
                  <b>Create Invoice</b>
                </h5>
              </div>
              <div>
                <div className="createvoice-list">
                  <span className="">Master In Data Sciences</span>
                  <Link to="" className="prc">Click Here</Link>
                </div>
                <div className="createvoice-list">
                  <span className="">
                    Master of Business Administration - Blockchain Management
                  </span>
                  <Link to="" className="prc">Click Here</Link>
                </div>
                <div className="createvoice-list">
                  <span className="">
                    Master of International Business Administration
                  </span>
                  <Link to="" className="prc">Click Here</Link>
                </div>
                <div className="createvoice-list">
                  <span className="">
                    Master of International Business Administration
                  </span>
                  <Link to="" className="prc">Click Here</Link>
                </div>
              </div>
            </div>
            {/* Claim Your Certificates */}
            <div className="practicalinfo bg-white shadow p-4 pb-2 mb-3">
              <div className="practicalinfo-title w-100 mb-3">
                <h5>
                  <b>Claim Your Certificates</b>
                </h5>
              </div>
              <div>
                <div className="createvoice-list">
                  <span className="">Certified Manager</span>
                  <Link to="" className="prc">Click Here</Link>
                </div>
                <div className="createvoice-list">
                  <span className="">
                    Postgraduate Certificate In International Human Resource
                    Management
                  </span>
                  <Link to="" className="prc">Click Here</Link>
                </div>
              </div>
            </div>
            {/* Your certificates */}
            <div className="practicalinfo bg-white shadow p-4 pb-2 mb-3">
              <div className="practicalinfo-title w-100 mb-3">
                <h5>
                  <b>Your Certificates</b>
                </h5>
              </div>
              <div>
                <div className="createvoice-list">
                  <span className="">Certified Manager</span>
                  <Link to="" className="prc">Click Here</Link>
                </div>
              </div>
            </div>
            {/* Progress Report Card */}
            <div className="practicalinfo bg-white shadow p-4 pb-2 mb-3">
              <div className="practicalinfo-title w-100 mb-3">
                <h5>
                  <b>Progress Report Card</b>
                </h5>
              </div>
              <div>
                <div className="createvoice-list">
                  <span className="">Master In Data Sciences</span>
                  <Link to="" className="prc">
                    Click Here
                  </Link>
                </div>
                <div className="createvoice-list">
                  <span className="">
                    Master of Business Administration - Blockchain Management
                  </span>
                  <Link to="" className="prc">
                    Click Here
                  </Link>
                </div>
                <div className="createvoice-list">
                  <span className="">
                    Master of International Business Administration
                  </span>
                  <Link to="" className="prc">
                    Click Here
                  </Link>
                </div>
                <div className="createvoice-list">
                  <span className="">
                    Master of International Business Administration
                  </span>
                  <Link to="" className="prc">
                    Click Here
                  </Link>
                </div>
              </div>
            </div>
            {/* letter of completion */}
            <div className="practicalinfo bg-white shadow p-4 pb-2 mb-3">
              <div className="practicalinfo-title w-100 mb-3">
                <h5>
                  <b>Letter Of Completion</b>
                </h5>
              </div>
              <div>
                <div className="createvoice-list">
                  <span className="">Master In Data Sciences</span>
                  <Link to="" className="prc">
                    Click Here
                  </Link>
                </div>
                <div className="createvoice-list">
                  <span className="">
                    Master of Business Administration - Blockchain Management
                  </span>
                  <Link to="" className="prc">
                    Click Here
                  </Link>
                </div>
                <div className="createvoice-list">
                  <span className="">
                    Master of International Business Administration
                  </span>
                  <Link to="" className="prc">
                    Click Here
                  </Link>
                </div>
                <div className="createvoice-list">
                  <span className="">
                    Master of International Business Administration
                  </span>
                  <Link to="" className="prc">
                    Click Here
                  </Link>
                </div>
              </div>
            </div>
            {/* Your id card */}
            <div className="practicalinfo bg-white shadow p-4 pb-2 mb-3">
              <div className="practicalinfo-title w-100 mb-3">
                <h5>
                  <b>Your ID Card</b>
                </h5>
              </div>
              <div>
                <div className="createvoice-list">
                  <span className="">Master In Data Sciences</span>
                  <Link to="" className="prc">
                    View ID
                  </Link>
                </div>
                <div className="createvoice-list">
                  <span className="">
                    Master of Business Administration - Blockchain Management
                  </span>
                  <Link to="" className="prc">
                    View ID
                  </Link>
                </div>
                <div className="createvoice-list">
                  <span className="">
                    Master of International Business Administration
                  </span>
                  <Link to="" className="prc">
                    View ID
                  </Link>
                </div>
                <div className="createvoice-list">
                  <span className="">
                    Master of International Business Administration
                  </span>
                  <Link to="" className="prc">
                    View ID
                  </Link>
                </div>
              </div>
            </div>
            {/* course you enrolled */}
            <div className="practicalinfo bg-white shadow p-4 pb-2 mb-3">
              <div className="practicalinfo-title w-100 mb-3">
                <h5>
                  <b>Courses you Enrolled</b>
                </h5>
              </div>
              <div className="course-enroled-list-wrap">
                <div className="course-enroled-list">
                  <h6 className="">
                    <b>
                      Master of Business Administration - Blockchain Management
                    </b>
                  </h6>
                  <h6 className="pt-2 pb-1 mb-3">
                    <b>University:</b>
                    <span>Guglielmo Marconi University, Italy</span>
                  </h6>
                  <div className="blockedresume-wrap">
                    <span className="col-md-6">Blocked</span>
                    <Link to="">Resume Learning</Link>
                  </div>
                </div>
                <hr />
                <div className="course-enroled-list">
                  <h6 className="">
                    <b>
                      Master of Business Administration - Blockchain Management
                    </b>
                  </h6>
                  <h6 className="pt-2 pb-1 mb-3">
                    <b>University:</b>
                    <span>Guglielmo Marconi University, Italy</span>
                  </h6>
                  <div className="blockedresume-wrap">
                    <span className="col-md-6">Blocked</span>
                    <Link to="">Resume Learning</Link>
                  </div>
                </div>
                <hr />
                <div className="course-enroled-list">
                  <h6 className="">
                    <b>
                      Master of Business Administration - Blockchain Management
                    </b>
                  </h6>
                  <h6 className="pt-2 pb-1 mb-3">
                    <b>University:</b>
                    <span>Guglielmo Marconi University, Italy</span>
                  </h6>
                  <div className="blockedresume-wrap">
                    <span className="col-md-6">Blocked</span>
                    <Link to="">Resume Learning</Link>
                  </div>
                </div>
                <hr />
                <div className="course-enroled-list">
                  <h6 className="">
                    <b>
                      Master of Business Administration - Blockchain Management
                    </b>
                  </h6>
                  <h6 className="pt-2 pb-1 mb-3">
                    <b>University:</b>
                    <span>Guglielmo Marconi University, Italy</span>
                  </h6>
                  <div className="blockedresume-wrap">
                    <span className="col-md-6">Blocked</span>
                    <Link to="">Resume Learning</Link>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MemberProfile;
