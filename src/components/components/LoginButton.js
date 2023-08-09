import React from 'react';
import {useAuth} from "react-oidc-context";
import SideBar from "./SideBar";
import {Outlet} from "react-router";
import '../style/home.css';

const LoginButton = () => {

    const auth = useAuth();


    return (
        <div>
        <button className="login-btn" onClick={auth.signinRedirect}>Log in</button>
        <Outlet/>
        </div>
    )
}

export default LoginButton;