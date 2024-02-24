import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

export default function MainLayouts() {
  return (
    <div>
        <Navbar/>
        <div > 
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}
