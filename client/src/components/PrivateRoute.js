import React from "react";
import { Route, Redirect } from "react-router-dom";

/* 
    1. it ha the same interface as Route
    2. it renders a <Route /> and pass props to it
    3. it checks if the user has an authentication token if they do, 
        it rendered the passed in component.
    4. if the user does not have the authentication token, it redirects to /login
*/

const PrivateRoute = ({ component: Component, ...props }) => {
  // console.log("this is the component: ", Component)
  return (
    <Route
      {...props}
      render={() => {
        if (localStorage.getItem("token")) {
          return <Component />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};
export default PrivateRoute;
