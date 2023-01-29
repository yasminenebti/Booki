import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import UserAPI from "./api/UserAPI";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);

  const setRefToken = async () => {
    const res = await axios.get("http://localhost:7000/api/user/authcheck", {
      headers: {
        access_token: localStorage.getItem("token"),
      },
    });

    console.log(res.data.user);
    setToken(res.data.user);
  };
  useEffect(() => {
    const existToken = localStorage.getItem("token");
    if (existToken) setRefToken();
  }, []);

  const state = {
    token: [token, setToken],

    userAPI: UserAPI(token),
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
