import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function RefreshHandler({ setIsAuthenticated }) {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const jwtToken = localStorage.getItem('jwtToken');
        console.log('Current Location:', location.pathname);
        console.log('JWT Token:', jwtToken);

        setIsAuthenticated(false); // Set to false initially

        if (jwtToken) {
            console.log('User is logged in');
            setIsAuthenticated(true);

            // Prevent logged-in user from accessing login/signup pages
            const protectedPaths = ['/Home']; // Adjust based on your actual protected routes
            if (protectedPaths.includes(location.pathname)) {
                console.log('Redirecting logged-in user to home');
                navigate('/', { replace: true });
            } else if (location.pathname === '/Login' || location.pathname === '/Signup') {
                console.log('Redirecting to home page');
                navigate('/', { replace: true });
            }
        } else {
            console.log('User is NOT logged in');
            // Optionally redirect to login page if trying to access protected pages
            const publicPaths = ['/', '/Login', '/Signup'];
            if (!publicPaths.includes(location.pathname)) {
                console.log('Redirecting to login page');
                navigate('/Login', { replace: true });
            }
        }
    }, [jwtToken, location.pathname, navigate, setIsAuthenticated]); // Dependency array includes jwtToken

    return null;
}

export default RefreshHandler;
