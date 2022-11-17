import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contact from '../pages/Contact';
import Designer from '../pages/Designer';
import Development from '../pages/Development';
import Home from '../pages/Home';
const Navigation = () => {
    return (
        <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/Development' exact element={<Development/>} />
            <Route path="/Designer" exact element={<Designer/>} />
            <Route path='/Contact' exact element={<Contact/>} />
        </Routes>
    );
};

export default Navigation;