import { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { useAuth } from "../../context/Auth";

const Login = () => {

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state ||"/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

    return (
        <div className="flex justify-center items-center bg-slate-500">
            <form className="bg-white p-14 mt-4 mb-4 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl  rounded-br-2xl "  onSubmit={handleSubmit}>
                <h2 className="flex justify-center text-2xl mb-10">Registration</h2>
                
                <label className="input input-bordered flex items-center gap-2 mb-4">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                   <input type="email" className="grow" value={email} onChange={(e) => setEmail(e.target.value)}placeholder="Email" />
               </label>
               <label className="input input-bordered flex items-center gap-2 mb-4">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                   <input type="password" className="grow" value={password}
                   onChange={(e) => setPassword(e.target.value)} 
                   placeholder="Password" />
               </label>
               <p className="text-blue-500"><NavLink to="/forget-password"> Forget Password</NavLink></p>
                <div className="flex justify-center mb-4">
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;