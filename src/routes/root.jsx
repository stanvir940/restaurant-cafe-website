import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Footer from "../components/Footer";

export default function root() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Home></Home>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
