import { createContext, useState, useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(
        window.localStorage.getItem('session') ?? false
    );
    
    useEffect(() => {
        verifySession();
    }, []);
    
    const verifySession = async () => {
        const session = JSON.parse(window.localStorage.getItem('session'))

        if (session) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    };

    const login = (session) => {
        window.localStorage.setItem('session', JSON.stringify(session))
        setIsAuthenticated(true);
    };

    const logout = () => {
        window.localStorage.removeItem('session');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuthContext() {
    return useContext(AuthContext);
}

export { AuthProvider, useAuthContext };