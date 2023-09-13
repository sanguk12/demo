import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home-page';
import Index from './pages/view/index';
// import Board from './pagres/Board';


export default function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/view" element={<Index />} />
                    {/*<Route path="/board" element={<Board />} />*/}
                </Routes>
            </div>
        </BrowserRouter>
    );
}