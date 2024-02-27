import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./screens/Login"
import HomeScreen from "./screens/HomeScreen"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import ProjectDetails from "./screens/ProjectDetails"
import ModuleDetails from "./screens/ModuleDetails"
import UnitDetailView from "./screens/UnitDetailView"
import FreeTrialHome from "./screens/FreeTrialHome"


function App() {
  const pathname = window.location.pathname;
  return (
    <>
    <BrowserRouter>
    {pathname !== "/login" && <NavBar /> }
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/FreeTrialHome" element={<FreeTrialHome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/ProjectandAssignments" element={<ProjectDetails />} />
      <Route path="/ModuleDetails" element={<ModuleDetails />} />
      <Route path="/UnitDetailView" element={<UnitDetailView />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
