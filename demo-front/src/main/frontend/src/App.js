import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Index from './pages/view';
import Header from './pages/components/Header';
import Footer from './pages/components/Footer';
// import Board from './pagres/Board';
import styles from './App.css';

export default function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/view" element={<Index />} />
                    {/*<Route path="/board" element={<Board />} />*/}
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}