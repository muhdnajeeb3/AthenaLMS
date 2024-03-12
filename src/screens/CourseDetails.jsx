import { useEffect } from "react";
import Banner from "../moduledetaiIscomponent/Banner"
import '../moduledetaiIscomponent/ModuleDetails.css'
const CourseDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  return (
    <>
        <Banner CourseDetails/>
    </>
  )
}

export default CourseDetails