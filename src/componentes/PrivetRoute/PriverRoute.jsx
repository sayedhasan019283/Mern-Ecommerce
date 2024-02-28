import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../context/Auth";
import Spinner from "../Spinner";
import Dashboard from "../Dashboard/Dashboard";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get("http://localhost:8000/api/v1/auth/user-auth");
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Dashboard/> : <Spinner/> ;
}