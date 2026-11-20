import React from "react";
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import ListProject from "./Components/projects/ListProjects";
import AddProject from "./Components/projects/AddProject";
import EditProject from "./Components/projects/EditProject";
import Signup from "./Components/auth/Signup";

function MainRouter (){
    return(
        <div>
            <Layout />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<AboutMe />} />
                <Route exact path="/projects" element={<Projects />} />
                <Route exact path="/services" element={<Services />} />
                <Route exact path="/projects/list" element={<ListProject />} />
                <Route exact path="/projects/add" element={<AddProject />} />
                <Route exact path="/projects/edit/:id" element={<EditProject />} />
                <Route exact path="/users/signup" element={<Signup />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            
        </div>
    );
}

export default MainRouter;