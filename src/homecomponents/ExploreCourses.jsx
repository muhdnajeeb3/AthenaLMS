import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const ExploreCourses = () => {
  return (
    <Container fluid className="pb-5">
      <h2 className="text-center  py-4 w-100 text-dark">
        <b>Do you want to Explore More Courses?</b>
      </h2>
      <div className="exporecoursecards">
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
        <div className="flex w-100">
          <Link
          to='/ExploreCourses'
            className="dreadmore-btn"
            style={{ borderRadius: "0", margin: "0 0 0 auto" }}
          >
            Explore All Courses
          </Link>
        </div>
    </Container>
  );
};

export default ExploreCourses;
