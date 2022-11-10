import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Development from '../pages/Development';
import Home from '../pages/Home';
const navigation = () => {
    return (
        <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/Development' exact element={<Development/>} />
        </Routes>
    );
};

export default navigation;