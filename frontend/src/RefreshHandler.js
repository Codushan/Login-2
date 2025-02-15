import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function RefreshHandler({ setIsAuthenticated }) {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const jwtToken = localStorage.getItem('jwtToken');
        console.log('Current Location:', location.pathname);
        console.log('JWT Token:', jwtToken);

        if (jwtToken) {
            console.log('User is logged in');
            setIsAuthenticated(true);

            // Redirect to home if trying to access login/signup pages
            const protectedPaths = ['/Login', '/Signup'];
            if (protectedPaths.includes(location.pathname)) {
                console.log('Redirecting logged-in user to home');
                navigate('/Home', { replace: true });
            }
        } else {
            console.log('User is NOT logged in');
            setIsAuthenticated(false);

            // Redirect to login if trying to access protected pages
            const publicPaths = ['/', '/Login', '/Signup', '/Home'];
            if (!publicPaths.includes(location.pathname)) {
                console.log('Redirecting to login page');
                navigate('/Login', { replace: true });
            }
        }
    }, [location.pathname, navigate, setIsAuthenticated]);

    return null;
}

export default RefreshHandler;
