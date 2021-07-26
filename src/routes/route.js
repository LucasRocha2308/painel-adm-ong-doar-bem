import { useEffect, useState } from "react";
import { Redirect, Route as ReactDOMRoute } from "react-router-dom";
import { useAuth } from "../providers/Auth";
const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { auth } = useAuth();

  const [token, setToken] = useState(
    localStorage.getItem("@token") || ""
  );
  useEffect(() => {
    setToken(localStorage.getItem("@token") || "");
  }, [auth]);

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? "/" : "/usuario",
            }}
          />
        );
      }}
    />
  );
};

export default Route;
