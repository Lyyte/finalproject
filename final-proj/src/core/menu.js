import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import './menu.css';

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#444444" };
    } else {
        return { color: "#FFFFFF" };
    }
};

const Menu = ( {history}) => (
    <div>
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="/">StoreName™</a>
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
                        <Link className="nav-link" style={isActive(history, '/signin')} to="/signin">Sign In</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, '/signup')} to="/signup">Sign Up</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>


    //     <ul className="nav nav-tabs">
    //         <li className="nav-item">
    //             <Link
    //                 className="nav-link"
    //                 style={isActive(history, "/")}
    //                 to="/"
    //             >
    //                 Home
    //             </Link>
    //         </li>

    //         <li className='nav-item'>
    //             <Link className="nav-link" style={isActive(history, '/signin')} to="/signin">Sign In</Link>
    //         </li>

    //         <li className='nav-item'>
    //             <Link className="nav-link" style={isActive(history, '/signup')} to="/signup">Sign Up</Link>
    //         </li>
    //     </ul>
    //     </nav>

    // </div>
);

export default withRouter(Menu)

