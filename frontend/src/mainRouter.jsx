import React from "react";
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import ListProject from "./components/projects/ListProjects";
import AddProject from "./components/projects/AddProject";
import EditProject from "./components/projects/EditProject";
import Signup from "./components/auth/Signup";
import Signin from "./Components/auth/Signin";
import PrivateRoute from "./Components/auth/PrivateRoute";

function MainRouter() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<AboutMe />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/projects/list" element={
                        <PrivateRoute>
                            <ListProject />
                        </PrivateRoute>
                    } />
                    <Route path="/projects/add" element={
                        <PrivateRoute>
                            <AddProject />
                        </PrivateRoute>
                    } />
                    <Route path="/projects/edit/:id" element={
                        <PrivateRoute>
                            <EditProject />
                        </PrivateRoute>
                    } />
                    <Route path="/users/signup" element={<Signup />} />
                    <Route path="/users/signin" element={<Signin />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>

        </div>
    );
}

export default MainRouter;