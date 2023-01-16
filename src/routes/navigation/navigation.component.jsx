import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as Logo } from "..//..//assets/icons8-hitfilm-pro.svg";
import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
    const { currentUser , setCurrentUser } = useContext(UserContext)
    // console.log(currentUser);

    const signOutHandler = async () =>{
        const res = await signOutUser();
        // console.log(res);
        setCurrentUser(null); //set current user ile currentUser'a ilk değer olan null değerini atıyoruz ve Sing Out yerine direk olarak sign in tekrardan gelmiş oluyor.

    }

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
                            (<span className="nav-link" onClick={signOutHandler}>SING OUT</span>)
                            : (<Link className="nav-link" to="/auth">SIGN IN</Link>)
                    }

                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}
export default Navigation;