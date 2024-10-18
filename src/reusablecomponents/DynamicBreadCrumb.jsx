import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const DynamicBreadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Define custom mapping for each path to a readable name
  const breadcrumbMap = {
    "course-home": "Course Home",
    "module-details": "Module Details",
    "test": "Test",
    "quiz": "Quiz",
  };

  return (
    <Breadcrumb>
      {/* Home breadcrumb */}
      <Breadcrumb.Item as={Link} to="/" className="breadcrumb">
        Home
      </Breadcrumb.Item>

      {/* Dynamic breadcrumb items based on path */}
      {pathnames.map((pathname, index) => {
        const currentPath = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        const breadcrumbLabel = breadcrumbMap[pathname] || pathname;

        return isLast ? (
          <Breadcrumb.Item active key={currentPath}>
            {breadcrumbLabel}
          </Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item as={Link} to={currentPath} key={currentPath}>
            {breadcrumbLabel}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default DynamicBreadcrumb;

//           {/* <Breadcrumb>
{/* <Breadcrumb.Item href="/" className="breadcrumb">
Course Home
</Breadcrumb.Item>
<Breadcrumb.Item href={`/ModuleDetails?CourseId=${CourseId}`}>Unit 3</Breadcrumb.Item>
</Breadcrumb> */} 
// 
 