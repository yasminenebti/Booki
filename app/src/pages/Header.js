import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.svg";
import {
  ArrowRightOnRectangleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { GlobalState } from "../GlobalState";

function Header() {
  let navigate = useNavigate();
  const state = useContext(GlobalState);
  const loggedUser = state.userAPI.isLogged[0];
  const [searchQuery, setSearchQuery] = useState("");

  const user = state.token[0];
  console.log(user);
  function searchClick() {
    navigate(`/search?q=${searchQuery}`);
  }
  return (
    <header className="top-0 z-50 grid grid-cols-3 p-4 sm:px-10 ">
      <Link to="/">
        <img
          src={logo}
          alt="hi"
          className="flex items-center cursor-pointer my-auto h-10"
        />
      </Link>

      <div className="flex items-center rounded-md sm:shadow-xl sm:bg-primary ">
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          className="flex-grow pl-5 text-sm outline-none sm:bg-primary"
          type="text"
          placeholder="search here"
        />

        <MagnifyingGlassIcon
          onClick={searchClick}
          className="hidden h-9 cursor-pointer sm:inline-flex p-2 sm:mx-2"
        />
      </div>

      <div className="flex items-center justify-end">
        {loggedUser ? (
          <div className="flex items-center">
            <div className="cursor-pointer hover:underline hidden sm:inline-flex sm:mx-4 md:px-7 text-secondary sm:text-sm md:text-md">
              Welcome {user.name} !
            </div>

            <ArrowRightOnRectangleIcon className="cursor-pointer h-7 hover:text-red" />

            {/* <Link to="/wishList">WishList </Link> */}
          </div>
        ) : (
          <div className="flex items-center space-x-3">
            <Link
              to="/login"
              className="cursor-pointer hover:underline text-sm sm:text-md"
            >
              Log In
            </Link>
            <Link
              to="/register"
              className="cursor-pointer hover:underline text-sm sm:text-md"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
