import React from "react";
import Menu from "./menu";
import './layout.css';

const Layout = ({
    title = "Title",
    description = "Description",
    className,
    children
}) => (
    <div>
        <Menu />
        <div className="jumbotron jumbotron-fluid">
            <div class="container">
            <h2>{title}</h2>
            <p className="lead">{description}</p>
        </div>
        </div>
        <div className={className}>{children}</div>
    </div>
);

export default Layout;
