import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { usersMock } from "/@/usersMock";
import { setAuth, setUserInfo } from "/@/store/reducers/accountInfoReducer";
import { useTypeSelector } from "/@/hooks";
import { AppLoader } from "/@/components";
import { routerAuth, routerUnauth } from "./routers";

function Navigation() {
  const [loading, setLoading] = useState(true);
  const { role } = useTypeSelector((data) => data.accountInfoReducer);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const token = localStorage.getItem("@token") || "";
    const validToken = usersMock.filter((item) => item.token === token);
    if (validToken[0]) {
      dispatch(setAuth("auth"));
      dispatch(setUserInfo(validToken[0]));
      setTimeout(() => {
        setLoading(false);
      }, 500);
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, []);

  return (
    <>
      {loading ? (
        <AppLoader />
      ) : (
        <RouterProvider router={role === "auth" ? routerAuth : routerUnauth} />
      )}
    </>
  );
}

export { Navigation };
