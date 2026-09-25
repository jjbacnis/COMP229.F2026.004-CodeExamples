import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Pages/Home.jsx';
import AboutMe from './Pages/AboutMe.jsx';
import Projects from './Pages/Projects.jsx';
import Services from './Pages/Services.jsx';
import Layout from './Components/Layout.jsx';
import NotFound from './Pages/NotFound.jsx';

function MainRouter() {
    return (
        <>
            <div>
                <Layout />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/aboutme" element={<AboutMe />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </>
    );
}

export default MainRouter;