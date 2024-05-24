import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ auth, onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout();
        navigate('/login');
    };

    return (
        <nav>
            <ul>
                {!auth ? (
                    <>
                    {/* Navbar in the starting */}
                        <li>  <Link to="/register">Register</Link>    </li>
                        <li>  <Link to="/login">Login</Link>    </li>
                    </>
                ) : (
                    <>
                    {/* navbar after the user successfully log in */}
                        <li>  <Link to="/home">Home</Link>    </li>
                        <li>  <button className='logout' onClick={handleLogout}>Logout</button>    </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
