import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

const AuthProvider = (props) => {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        // Pull saved state
    }, []);

    const login = () => {
        setLoggedIn(true);
    };
    const logout = () => {
        setLoggedIn(false);
    };

    const authContextValue = {
        login,
        logout,
        loggedIn
    };

    return <AuthContext.Provider value={authContextValue} {...props} />;
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };