import React from 'react';
import MainPage from './pages/MainPage';
import {Route, Switch} from "react-router-dom";
import AdminDataPage from "./pages/adminData";
import AdminProcessPage from "./pages/adminProcess";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signUp";
import UserPage from "./pages/user";
import {pages} from "./data/pages";
import PasswordRecoverPage from "./pages/PasswordRecover";

function App() {
    //HERE запрос даты с сервера
    return (
        <div className="App">
            <Switch>
                <Route path={pages.passwordRecover}>
                    <PasswordRecoverPage/>
                </Route>1
                <Route path={pages.adminData}>
                    <AdminDataPage/>
                </Route>
                <Route path={pages.adminProcess}>
                    <AdminProcessPage/>
                </Route>
                <Route path={pages.login}>
                    <LoginPage/>
                </Route>
                <Route path={pages.signUp}>
                    <SignUpPage/>
                </Route>
                <Route path={pages.user}>
                    <UserPage/>
                </Route>
                <Route path={pages.home}>
                    <MainPage/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
