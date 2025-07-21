'use client'

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

import "react-toastify/dist/ReactToastify.css";
// import { url } from "../../lib/lib"; 

export default function AdminLogin() {
  const pathname = usePathname();
  const router = useRouter();

  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isPassVisible, setIsPassVisible] = useState(false);
  const { email, username, password } = inputValue;

  function handleOnChange(e) {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form')

    let formData = {};
    let requestPath = "";

    if (pathname.includes("/admin/login")) {
      formData = {
        username: inputValue.username,
        password: inputValue.password,
      };
      requestPath = "admin/login";
      console.log('PathName:', pathname)
    } else if (pathname.includes("/team/login")) {
      formData = { email: inputValue.email, password: inputValue.password };
      requestPath = "team/login";
    }

    try {
      const { data } = await axios.post(`${url}auth/${requestPath}`, formData, { withCredentials: true });
      const { success, message } = data;

      if (success) {
        router.push("/admin/rooms");
      } else {
        toast.dismiss();
        toast.error(message);
      }
    } catch (error) {
      console.error(error);
    }

    setInputValue({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <ToastContainer />
      <section className="min-w-[100vw] min-h-[100vh] flex items-center justify-center">
        <div className="w-full h-full overflow-hidden absolute z-[-1]">
          <img
            src="/assets/images/delight.jpg"
            alt=""
            className="object-cover lg:h-[140%] xl:h-[160%] h-full absolute left-1/2 -translate-x-1/2 filter blur-[2px]"
          />
        </div>
        <div className="p-4 rounded-md shadow-md shadow-gray-400 bg-white md:min-w-[600px] mx-4">
          <div className="text-blue_1 flex justify-center">
              <img  
                src="https://www.oliveapartmentsdelhi.com/assets/Olive-Service-Apartments-Delhi-logo-BSRsqSW1.png" 
                alt="Olive Serviced Apartments" 
                width={150} 
                height={50} 
              />
            
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:px-4 py-4">
            {pathname.includes("/admin/login") ? (
              <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter your Username"
                  value={username}
                  onChange={handleOnChange}
                  className="p-2 outline-none text-gray-500 border border-[#dee2e6] rounded-md w-full"
                />
              </div>
            ) : (
              <div>
                <label htmlFor="email">Username</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your Username"
                  value={email}
                  onChange={handleOnChange}
                  className="p-2 outline-none text-gray-500 border border-[#dee2e6] rounded-md w-full"
                />
              </div>
            )}
            <div>
              <label htmlFor="password">Password</label>
              <div className="relative flex">
                <input
                  type={isPassVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handleOnChange}
                  className="p-2 outline-none text-gray-500 border border-[#dee2e6] rounded-md flex-1"
                />
                <button
                  type="button"
                  onClick={() => setIsPassVisible((prev) => !prev)}
                  className="absolute p-2 right-2 top-2/4 -translate-y-2/4 bg-transparent border-0 text-gray-300"
                >
                  {isPassVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
                </button>
              </div>
            </div>
            <button type="submit" 
            className="p-2  bg-[#5db64c] rounded-md bg-tl_primary border-0 text-white flex-grow">
              Log in
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
