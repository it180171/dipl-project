import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import SideBar from "./components/components/SideBar";
import {Navigate, Routes} from "react-router";
import InstallablePackages from "./components/pages/InstallablePackages";
import PageNotFound from "./components/pages/PageNotFound";
import Versionstack from "./components/pages/Versionstack";
import Installables from "./components/pages/Installables";
import Home, {HomeButton} from "./components/pages/Home";
import ExportConfig from "./components/pages/ExportConfig";
import Import from "./components/pages/Import";
import {QueryClient, QueryClientProvider} from 'react-query';
import LoginButton from "./components/components/LoginButton";
import {useAuth} from "react-oidc-context"
import {AuthProvider} from "react-oidc-context"
import React, {createContext, useContext, useState} from "react";
import Cookies from 'js-cookie';
import LogoutButton from "./components/components/LogoutButton";

const oidcConfig = {
    authority: "https://login.test.doka.com/",
    client_id: "9d71a618-5337-4bff-b8b0-3e236e73e5ea",
    token_type: "Bearer",
    redirect_uri: "http://localhost:3000",
    scope: "openid offline_access profile phone email dfdsin.doka.com/download",
    post_logout_redirect_uri: "http://localhost:3000/login"
}

const query = new QueryClient();
export const TokenContext = createContext(null);

function App() {

    const [access_token, setAccess_token] = useState(null);
    const [isAuth, setIsAuth] = useState(false);

    const auth = useAuth();

    const IsAuthenticated = () => {
        if (auth.isLoading) {
            return "Loading...";
        }

        if (auth.error) {
            console.log(isAuth);
            console.log(auth.isAuthenticated);
            console.log(auth.error.message);
            /*return `Oops... ${auth.error.message}`*/
        }
        console.log(auth.isAuthenticated);

        if (auth.isAuthenticated) {
            console.log(auth.user.access_token);
            console.log(auth.user.refresh_token);
            console.log(auth.user.expires_in);
            console.log(auth.user.expired);
            setAccess_token(auth.user.access_token);
            localStorage.setItem('access_token', auth.user.access_token);
            console.log(localStorage.getItem('access_token'));
            return (
                <SideBar/>
            )
        }
    }


    return (
        <AuthProvider {...oidcConfig}>
            <BrowserRouter>
               <IsAuthenticated />

                {/* <HomeButton /> */}
                <Routes>
                    <Route path="/" element={auth.isAuthenticated ? <Home/> : <LoginButton />}/>
                    <Route path="/login" element={ auth.isAuthenticated ? "Already Authenticated" : <LoginButton />}/>
                    <Route path="/installablePackages" element={<InstallablePackages/>}/>
                    <Route path="/import" element={<Import/>}/>
                    <Route path="/export"
                           element={
                               <QueryClientProvider client={query}>
                                   <ExportConfig/>
                               </QueryClientProvider>
                           }
                    />
                    <Route path="/versionstack" element={
                        <TokenContext.Provider  value={access_token}>
                        <QueryClientProvider client={query}>
                            <Versionstack/>
                        </QueryClientProvider>
                        </TokenContext.Provider>
                    }
                    />
                    <Route path="/installables" element={<Installables/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        </AuthProvider>

    );
}

export default App;
