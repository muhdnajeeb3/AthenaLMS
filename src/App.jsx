import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./screens/Login"
import HomeScreen from "./screens/HomeScreen"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"


function App() {
  const pathname = window.location.pathname;
  console.log(pathname);
  return (
    <>
    <BrowserRouter>
    {pathname !== "/login" && <NavBar /> }
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<HomeScreen />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
