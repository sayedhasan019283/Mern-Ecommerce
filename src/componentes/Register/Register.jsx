import { useState } from "react";
import { FaPhone, FaAddressCard } from "react-icons/fa6";
import { useNavigate, Link } from "react-router-dom";
import { toast } from 'react-toastify';
import axios from "axios";

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8000/api/v1/auth/register", {
              name,
              email,
              password,
              phone,
              address,
            });
            if (res && res.data.success) {
              toast.success(res.data && res.data.message);
              navigate("/login");
            } else {
              toast.error(res.data.message);
            }
          } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
          }
    }

    return (
        <div className="flex justify-center items-center bg-slate-500">
            <form className="bg-white p-14 mt-4 mb-4 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl  rounded-br-2xl "  onSubmit={handleSubmit}>
                <h2 className="flex justify-center text-2xl mb-10">Registration Form</h2>
                <label className="input input-bordered flex items-center gap-2 mb-4 mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                    <input type="text" className="grow" value={name} onChange={(e) => setName(e.target.value)} placeholder="Username" />
                </label>
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
               <label className="input input-bordered flex items-center gap-2 mb-4 mt-4">
                   <FaPhone/>
                   <input type="text" className="grow" placeholder="Phone"
                   onChange={(e) => setPhone(e.target.value)}
                   value={phone}/>
               </label>
               <label className="input input-bordered flex items-center gap-2 mb-4 mt-4">
                   <FaAddressCard/>
                   <input type="text" className="grow" value={address} 
                   onChange={(e) => setAddress(e.target.value)}
                   placeholder="address" />
               </label>
               <span className="mt-4">Do you have an account <Link className="text-blue-900" to="/login">Log in</Link></span>
                <div className="flex justify-center mb-4">
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Register</button>
                </div>
            </form>
        </div>
    );
};

export default Register;
