import { useEffect } from "react";
import Banner from "../coursemoredetailscomponent/Banner"
import CourseModules from "../coursemoredetailscomponent/CourseModules"
import '../coursemoredetailscomponent/CourseMoreDetails.css'

const CourseMoreDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner />
      <CourseModules />
    </>
  )
}

export default CourseMoreDetails