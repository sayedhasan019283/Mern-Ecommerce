import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../context/Auth";``
import Spinner from "../Spinner";
import AdminDashboard from "../AdminDashboard/AdminDashboard";


export default function DashBoardPrivetRoute ()  {
    const [ok, setOk] = useState(false);
    const [auth] = useAuth();
  
    useEffect(() => {
      const authCheck = async () => {
        const res = await axios.get("http://localhost:8000/api/v1/auth/admin-auth");
        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      };
      if (auth?.token) authCheck();
    }, [auth?.token]);
  
    return ok ? <AdminDashboard/> : <Spinner/> ;
  }

