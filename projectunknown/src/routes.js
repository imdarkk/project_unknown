import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./assets/screen/Login";
import Main from "./assets/screen/Main";

const ProtectedRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Main} />
        </Switch>
    );
};

const UnprotectedRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
        </Switch>
    );
};

export { ProtectedRoutes, UnprotectedRoutes };
