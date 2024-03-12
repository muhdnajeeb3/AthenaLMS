import { useEffect } from "react"
import Banner from "../freetrialhomecomponents/Banner"
import Testimonial from "../freetrialhomecomponents/Testimonial"
import Discussions from "../homecomponents/Discussions"
import ExploreCourses from "../homecomponents/ExploreCourses"

const FreeTrialHome = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Banner />
    <Testimonial />
    <Discussions />
    <ExploreCourses />
    </>
  )
}

export default FreeTrialHome