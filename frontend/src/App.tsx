import React, { useEffect, useState } from "react";

import { Grid, useMediaQuery, Theme } from "@mui/material";
import './assets/css/main.css'

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SidePreview from "./components/SidePreview";

import InitialLoad from "./components/InitialLoad";
import AnimatedRoutes from "./components/AnimatedRoutes";
import MobileScreen from "./components/MobileScreen";


const App: React.FC = () => {

  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const isLargeScreen = useMediaQuery((theme: Theme) => theme.breakpoints.only('xl'));

  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const [loaded, setLoaded] = useState(() => {
    return sessionStorage.getItem('initialLoadShown') === 'true';
  });

  const handleDirectionChange = (newDirection: "forward" | "backward") => {
    setDirection(newDirection);
  }

  useEffect(() => {
    if (!loaded) {
      setTimeout(() => {
        setLoaded(true);
        sessionStorage.setItem('initialLoadShown', 'true');
      }, 1500);
    }
  }, [loaded]);
  
  return (    
    <Grid container>
      { isSmallScreen ? <MobileScreen />
      :<>
          <Grid item xs={12} marginRight={10} marginLeft={10} marginTop={5}> 
            <Header />
          </Grid>
          <Grid item xs={12} marginRight={10} marginLeft={10} marginBottom={5}>
            <NavBar handleDirectionChange={handleDirectionChange} />
          </Grid>
          {loaded ? 
                <>
                <Grid item xs={2} >
                  { isLargeScreen && <SidePreview side="left"/> }
                </Grid>
                <Grid item xs={8}>
                      <AnimatedRoutes direction={direction} />
                </Grid>
                <Grid item xs={2}>
                  { isLargeScreen && <SidePreview side="right"/> }
                </Grid>
                </>
                : 
                <InitialLoad />
          }
          <Grid item xs={12} marginLeft={14}>
             { !isSmallScreen && <Footer /> }
          </Grid>
        </>
      }
    </Grid>
  );
}

export default App;
