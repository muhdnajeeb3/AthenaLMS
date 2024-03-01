import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./screens/Login"
import HomeScreen from "./screens/HomeScreen"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import ProjectDetails from "./screens/ProjectDetails"
import ModuleDetails from "./screens/ModuleDetails"
import UnitDetailView from "./screens/UnitDetailView"
import FreeTrialHome from "./screens/FreeTrialHome"
import MyProfile from "./screens/MyProfile"
import ChangePassword from "./screens/ChangePassword"
import CourseMoreDetails from "./screens/CourseMoreDetails"


function App() {
  return (
    <>
    <BrowserRouter>
     <NavBar />
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/FreeTrialHome" element={<FreeTrialHome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/ProjectandAssignments" element={<ProjectDetails />} />
      <Route path="/ModuleDetails" element={<ModuleDetails />} />
      <Route path="/UnitDetailView" element={<UnitDetailView />} />
      <Route path="/MyProfile" element={<MyProfile />} />
      <Route path="/ChangePassword" element={<ChangePassword />} />
      <Route path="/CourseMoreDetails" element={<CourseMoreDetails />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
