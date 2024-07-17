import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

export default function root() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
