import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const CourseModules = () => {
  return (
    <Container fluid className="bg-light">
      <div className="course-more-module-wrap py-5">
        <h2 className="text-center w-100 pb-4">
          <b>MODULES IN THIS COURSE</b>
        </h2>
        <br />
        <div className="course-more-details-modules w-100 shadow p-3">
          <div>
            <span>1. Sustainability and Business</span>
            <Link to="">
              <Button className="startlearning-btn">Start Learning</Button>
            </Link>
          </div>
        </div>
        <div className="course-more-details-modules w-100 shadow p-3">
          <div>
            <span>2. Sustainability and Business</span>
            <Link to="">
              <Button className="startlearning-btn">Start Learning</Button>
            </Link>
          </div>
        </div>
        <div className="course-more-details-modules w-100 shadow p-3">
          <div>
            <span>3. Sustainability and Business</span>
            <Link to="">
              <Button className="startlearning-btn">Start Learning</Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CourseModules;
