import React, { Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { signout, isAuthenticated } from "../user/index";
import '../assets/css/menu.css';

// Menu represents the navbar which will be different depending on if the user is signed in
// or if they are an admin account.
// Non signed in users will have the option to sign in or sign up
// Signed in normal users will have the option to access the home page, dashboard, etc.
// Admin users will be able to access the home page and dashboard.

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#444444" };
    } else {
        return { color: "#FFFFFF" };
    }
};

const Menu = ({ history }) => (
    <div>
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="/">Eleutheria™</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/")}
                            to="/"
                        >
                            Home
                </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/shop")}
                            to="/shop"
                        >
                            Shop
                </Link>
                    </li>

                    {isAuthenticated() && isAuthenticated().user.role === 0 && (
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                style={isActive(history, "/user/dashboard")}
                                to="/user/dashboard"
                            >
                                Dashboard
                    </Link>
                        </li>
                    )}

                    {isAuthenticated() && isAuthenticated().user.role === 1 && (
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                style={isActive(history, "/admin/dashboard")}
                                to="/admin/dashboard"
                            >
                                Dashboard
                    </Link>
                        </li>
                    )}

                    {!isAuthenticated() && (
                        <Fragment>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    style={isActive(history, "/signin")}
                                    to="/signin"
                                >
                                    Sign In
                        </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    style={isActive(history, "/signup")}
                                    to="/signup"
                                >
                                    Sign Up
                        </Link>
                            </li>
                        </Fragment>
                    )}

                    {isAuthenticated() && (
                        <li className="nav-item">
                            <span
                                className="nav-link"
                                style={{ cursor: "pointer", color: "#ffffff" }}
                                onClick={() =>
                                    signout(() => {
                                        history.push("/");
                                    })
                                }
                            >
                                Sign Out
                    </span>
                        </li>
                    )}
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </div>
);

export default withRouter(Menu)

