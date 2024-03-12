import { useEffect } from "react"
import Banner from "../homecomponents/Banner"
import Discussions from "../homecomponents/Discussions"
import ExploreCourses from "../homecomponents/ExploreCourses"
import '../homecomponents/HomeScreen.css'
const HomeScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Banner />
    <Discussions />
    <ExploreCourses />
    </>
  )
}

export default HomeScreen