import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as Logo } from "..//..//assets/icons8-hitfilm-pro.svg";
import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    // console.log(currentUser);


    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <Logo />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    {
                        currentUser ?
                            (<span className="nav-link" onClick={signOutUser}>SING OUT</span>)
                            : (<Link className="nav-link" to="/auth">SIGN IN</Link>)
                    }

                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}
export default Navigation;