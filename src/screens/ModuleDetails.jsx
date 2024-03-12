import { useEffect } from "react";
import Banner from "../moduledetaiIscomponent/Banner"
import '../moduledetaiIscomponent/ModuleDetails.css'
const ModuleDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <Banner />
    </>
  )
}

export default ModuleDetails