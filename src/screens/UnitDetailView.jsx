import { useEffect } from "react";
import Banner from "../unitdetailviewcomponents/Banner"
import Progress from "../unitdetailviewcomponents/Progress"
import '../unitdetailviewcomponents/UnitDetailView.css'
const UnitDetailView = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  return (
    <>
        <Banner />
        <Progress />
    </>
  )
}

export default UnitDetailView