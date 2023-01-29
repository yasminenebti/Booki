import React, { useState } from "react";
import logo from "../images/signin.svg";
import axios from "axios";
import Loading from "../utils/Loading";

import "../App.css";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChangeData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmitData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:7000/api/user/login",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      localStorage.setItem("token", res.data.token);
      window.location.href = "/";
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="">
      <div className="relative max-w-md mt-36  bg-primary rounded-xl pt-48 px-16 mx-auto ">
        <img src={logo} alt="" className="absolute max-h-72 -top-28" />

        <form onSubmit={(e) => onSubmitData(e)} className="flex flex-col ">
          <h2 className="mx-auto text-3xl mb-8 mt-6 text-secondary font-bold">
            Welcome Back!
          </h2>
          <input
            onChange={(e) => onChangeData(e)}
            className="px-5 py-0 my-5 mx-0 h-10 rounded-lg w-full 
          bg-primary border border-silver  shadow-md focus:bg-white focus:border-light focus:outline-none "
            type="email"
            name="email"
            value={user.email}
            required
            placeholder="email"
          />

          <input
            onChange={(e) => onChangeData(e)}
            className="px-5 py-0 mt-5 mb-10 mx-0 h-10 rounded-lg w-full 
            bg-primary border border-silver  shadow-md focus:bg-white focus:border-light focus:outline-none "
            type="password"
            name="password"
            value={user.password}
            required
            autoComplete="on"
            placeholder="password"
          />
          <button
            onSubmit={() => {
              user && <Loading />;
            }}
            className="text-white mx-24 mb-5 bg-green px-5 py-2 shadow-md rounded-md font-bold  hover:shadow-xl active:scale-90 transition duration-150"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
