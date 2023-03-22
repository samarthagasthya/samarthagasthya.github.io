import React , {useState, useEffect,Suspense} from "react";
import {Routes, Route} from "react-router-dom";
import FallbackSpinner from "./components/FallbackSpinner";
import NavBarWithRouter from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";


const Main = () => {

    return (
        <div className="MainApp">
            <NavBarWithRouter />
            <main className="main">
            <Suspense fallback={<FallbackSpinner/>}>
                <Routes>
                    
                        <Route exact path="/" element={<Home/>} />
                        <Route path="/about" element={<About header="About" />} />
                        <Route path="/skills" element={<Skills header="Skills" />} />
                        <Route path="/experience" element={<Experience header="Experience" />} />
                        <Route path="/projects" element={<Projects header="Projects"/>} />
                        
                </Routes>
                </Suspense>
            </main>
        </div>
    )
}

export default Main;