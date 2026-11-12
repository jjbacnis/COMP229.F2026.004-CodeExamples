import React from "react";
import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import Projects from "./Pages/Projects";
import Services from "./Pages/Services";
import Layout from "./Components/Layout";
import NotFound from "./Pages/NotFound";

function MainRouter (){
    return(
        <div>
            <Layout />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<AboutMe />} />
                <Route exact path="/projects" element={<Projects />} />
                <Route exact path="/services" element={<Services />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            
        </div>
    );
}

export default MainRouter;