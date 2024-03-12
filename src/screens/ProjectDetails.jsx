import { useEffect } from "react";
import ProjectAndAssignement from "../projectdetailscomponent/ProjectAndAssignement"

const ProjectDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <><ProjectAndAssignement /></>
  )
}

export default ProjectDetails