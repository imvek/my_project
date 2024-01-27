import React from 'react';
import './header.css';
export function Header() {
    return (
        <div className='header'>
            <div className='headerButton'>
                <button>Login</button>
                <button>Sign Up</button>
                <button>Admin</button>
            </div>
            <div className='headerImage'>
                <img src='flag.png' alt="flag" />
            </div>
            <div className='headerNav'>
                <ul type="none">
                    <li>Home</li>
                    <li>Services</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}