import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayouts() {
  return (
    <div>
        <Navbar/>
        <div style={{minHeight: '92vh'}}> 
            <p>This is outlet</p>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}
