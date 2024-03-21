import { Container } from "react-bootstrap"
import AssignmentEditor from "../submitassignmentcomponents/AssignmentEditor"
import { useEffect } from "react";

const SubmitAssignments = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Container fluid className="bg-light">
        <div className="moduledetailwrap py-4">
          <div className="text-dark pt-4 pb-3 mdtoprow w-100">
            <div>
              <h2 className="project-heading text-dark pb-1">
                <b>Submit Assignments</b>
              </h2>
            </div>
          </div>
        </div>
      </Container>
      <AssignmentEditor />
    </>
  )
}

export default SubmitAssignments