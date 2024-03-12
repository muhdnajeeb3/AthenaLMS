import { useEffect } from "react";
import Main from "../logincomponents/Main"
import Navbar from "../logincomponents/NavBar"

function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Navbar />
    <Main />
    </>
  )
}

export default Login