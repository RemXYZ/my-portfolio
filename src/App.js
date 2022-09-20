import React from 'react';
import 'styles/App.css'
import 'styles/Fonts.css'
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';
import Menu from "UI/Menu/Menu.jsx"

function App() {
return (
<BrowserRouter>
    <div>
        <Menu></Menu>
    </div>
</BrowserRouter>
)
}

export default App