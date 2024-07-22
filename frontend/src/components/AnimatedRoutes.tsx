import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import HomeGrid from "./HomeGrid";
import MeGrid from "./MeGrid";
import ProjectsGrid from "./ProjectsGrid";
import ErrorGrid from "./ErrorGrid";

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

const AnimatedRoutes: React.FC<{direction: "forward" | "backward"}> = ({direction}) => {

    const location = useLocation();

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
                <Route path="/" element={<HomeGrid />} />
                <Route path="/jordansposito" element={<MeGrid />} />
                <Route path="/projects" element={<ProjectsGrid />} />
                <Route path="/projects/javascript" element={<ProjectsGrid filter="javascript" />} />
                <Route path="/projects/java" element={<ProjectsGrid filter="java" />} />
                <Route path="/projects/python" element={<ProjectsGrid filter="python" />} />
                <Route path="/projects/other" element={<ProjectsGrid filter="other" />} />
                <Route path="*" element={<ErrorGrid />} />
            </Routes>
            </motion.div>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;