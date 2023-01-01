import React from 'react';
import './Menu.css'
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';

// RS - imr
//RS - sfc Stateless Function Component
const Menu = () => {
    return ( 
        <div className='menu_background'>
            <div className="menu">
                <Link to="/home" className="logo">InfMat</Link>
                <nav>
                    <Link to="#" className="nav_item">ABOUT</Link>
                    <Link to="#" className="nav_item">BLOG</Link>
                    <Link to="#" className="nav_item">CONTACT</Link>
                    <Link to="#" className="nav_item">#</Link>
                </nav>
            </div>
        </div>
    );
}

export default Menu;
