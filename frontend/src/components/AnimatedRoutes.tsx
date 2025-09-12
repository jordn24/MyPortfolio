import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import HomeGrid from "./HomeGrid";
import MeGrid from "./MeGrid";
import ProjectsGrid from "./ProjectsGrid";
import ErrorGrid from "./ErrorGrid";
import { useEffect, useState } from "react";

const variants = {
    enter: (direction: "forward" | "backward") => ({
      x: direction === "forward" ? "100vw" : "-100vw",
    }),
    center: {
      x: 0,
    },
    exit: (direction:  "forward" | "backward") => ({
      x: direction === "forward" ? "-100vw" : "100vw",
    }),
};

interface Project {
    id: string;
    title: string;
    thumbnail: string;
    link: string;
    date: string;
    category: string;
    backgroundColour: string;
}

const AnimatedRoutes: React.FC<{direction: "forward" | "backward"}> = ({direction}) => {

    const [projects, setProjects] = useState<Project[]>([]);
  

    const location = useLocation();

    useEffect(() => {
        fetch("https://myportfolio-0jva.onrender.com/projects")
            .then((response) => {
                return response.json();
            })
            .then((resData) => {
                let sortedProjects = resData;
                sortedProjects.sort((a: Project, b: Project) => new Date(b.date).getTime() - new Date(a.date).getTime());
                setProjects(sortedProjects);
            })
            .catch((err: any) => {
                console.log("Fetching data went wrong...", err);
            })
    }, [])
    
    return(
        <AnimatePresence initial={true} mode="wait" custom={direction} >
            <motion.div
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
            key={location.pathname}
            custom={direction}
            >
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomeGrid projects={projects} />} />
                <Route path="/jordansposito" element={<MeGrid />} />
                <Route path="/projects" element={<ProjectsGrid projects={projects} />} />
                <Route path="/projects/javascript" element={<ProjectsGrid projects={projects} filter="javascript"/>} />
                <Route path="/projects/java" element={<ProjectsGrid projects={projects} filter="java"/>} />
                <Route path="/projects/python" element={<ProjectsGrid projects={projects} filter="python"/>} />
                <Route path="/projects/other" element={<ProjectsGrid projects={projects} filter="other"/>} />
                <Route path="*" element={<ErrorGrid />} />
            </Routes>
            </motion.div>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;