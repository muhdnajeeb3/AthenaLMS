import { Button, Container } from "react-bootstrap"
import Testimonial from "../freetrialhomecomponents/Testimonial"
import { useState } from "react";

const ExploreCourses = () => {
    const [myProfileSection, setMyProfileSection] = useState("Doctoral");
  const isMemberProfile = myProfileSection === "Doctoral";
  const isPB = myProfileSection === "Master Degree";
  const isMNP = myProfileSection === "PG Diploma";
  return (
    <>
    <Container fluid className="bg-white py-5">
        <div className="profile-sections-row">
          <span
            onClick={() => setMyProfileSection("Doctoral")}
            className={`${isMemberProfile ? "profile-active" : ""}`}
          >
            <b>Doctoral</b>
          </span>
          <span
            onClick={() => setMyProfileSection("Master Degree")}
            className={`${isPB ? "profile-active" : ""}`}
          >
            <b>Master Degree</b>
          </span>
          <span
            onClick={() =>
              setMyProfileSection("PG Diploma")
            }
            className={`${isMNP ? "profile-active" : ""}`}
          >
            <b>PG Diploma</b>
          </span>
        </div>
        <div className="exporecoursecards my-5">
        <div className="explorecoursecard bg-white shadow h-100 clearfix">
          <div className="courseimgwrap">
            <img
              src="https://ulearn.uniathena.com/images/thumb-pgcbt.jpg"
              alt=""
            />
          </div>
          <div className="coursecardcontent p-2">
            <h6 className="pl-3 pr-2 mb-0">
              <b>Postgraduate Certificate in Blockchain Technology</b>
            </h6>
            <p className="pt-3 pb-0 pl-3 pr-3">
              Cambridge International Qualifications (CIQ), UK
            </p>
          </div>
          <Button className="startfreetrial-btn">Start Free Trail</Button>
        </div>
        <div className="explorecoursecard bg-white shadow h-100 clearfix">
          <div className="courseimgwrap">
            <img
              src="https://ulearn.uniathena.com/images/thumb-pgcbt.jpg"
              alt=""
            />
          </div>
          <div className="coursecardcontent p-2">
            <h6 className="pl-3 pr-2 mb-0">
              <b>Postgraduate Certificate in Blockchain Technology</b>
            </h6>
            <p className="pt-3 pb-0 pl-3 pr-3">
              Cambridge International Qualifications (CIQ), UK
            </p>
          </div>
          <Button className="startfreetrial-btn">Start Free Trail</Button>
        </div>
        
        <div className="explorecoursecard bg-white shadow h-100 clearfix">
          <div className="courseimgwrap">
            <img
              src="https://ulearn.uniathena.com/images/thumb-pgcbt.jpg"
              alt=""
            />
          </div>
          <div className="coursecardcontent p-2">
            <h6 className="pl-3 pr-2 mb-0">
              <b>Postgraduate Certificate in Blockchain Technology</b>
            </h6>
            <p className="pt-3 pb-0 pl-3 pr-3">
              Cambridge International Qualifications (CIQ), UK
            </p>
          </div>
          <Button className="startfreetrial-btn">Start Free Trail</Button>
        </div>
        <div className="explorecoursecard bg-white shadow h-100 clearfix">
          <div className="courseimgwrap">
            <img
              src="https://ulearn.uniathena.com/images/thumb-pgcbt.jpg"
              alt=""
            />
          </div>
          <div className="coursecardcontent p-2">
            <h6 className="pl-3 pr-2 mb-0">
              <b>Postgraduate Certificate in Blockchain Technology</b>
            </h6>
            <p className="pt-3 pb-0 pl-3 pr-3">
              Cambridge International Qualifications (CIQ), UK
            </p>
          </div>
          <Button className="startfreetrial-btn">Start Free Trail</Button>
        </div>
       
      </div>
      </Container>
    <Testimonial />
    </>
  )
}

export default ExploreCourses