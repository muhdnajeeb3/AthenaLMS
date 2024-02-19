import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./screens/Login"
import HomeScreen from "./screens/HomeScreen"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import ProjectDetails from "./screens/ProjectDetails"


function App() {
  const pathname = window.location.pathname;
  return (
    <>
    <BrowserRouter>
    {pathname !== "/login" && <NavBar /> }
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/login" element={<Login />} />
      <Route path="/ProjectandAssignments" element={<ProjectDetails />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
