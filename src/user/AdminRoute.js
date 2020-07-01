import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "./index";

// Routes to the admin pages by checking the user and whether or not they are an admin

const AdminRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() && isAuthenticated().user.role === 1 ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/signin",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);

export default AdminRoute;
