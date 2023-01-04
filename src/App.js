import React from 'react';
import 'styles/App.css'
import 'styles/Fonts.css'
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';
import Menu from "UI/Menu/Menu.jsx"
import { useState } from 'react';


function App() {
const [likes, setLikes] = useState(5);
function increment() {
    
    console.log(likes)
    setLikes(likes + 1)
}
    
return (
<div className='Root'>
<BrowserRouter>
    <div>
        <Menu></Menu>
    </div>
</BrowserRouter>
<div>{likes}</div>
<button onClick={ ()=> increment() }>Like</button>
</div>
)
}

export default App