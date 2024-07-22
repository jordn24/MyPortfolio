import React, { useState, useEffect, useRef } from "react";
import { AppBar, Toolbar, Box, Tab, Tabs, useMediaQuery, useTheme } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const ROUTES = [
  "/",
  "/jordansposito",
  "/projects",
  "/projects/javascript",
  "/projects/java",
  "/projects/python",
  "/projects/other"
];

const NavBar: React.FC<{handleDirectionChange: (newDirection: "forward" | "backward") => void}> = ({handleDirectionChange}) => {
  const [value, setValue] = useState(1);

  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('xl'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const location = useLocation();
  const navigate = useNavigate();
  const prevLocation = useRef(location.pathname);
  
  let fontSize = 40;

  if(isMediumScreen) {fontSize = 28}
  if(isSmallScreen) {fontSize = 25}

  const tabStyle = {
    fontSize: fontSize,
    textTransform: 'lowercase',
    marginRight: 3,
    marginLeft: 3
  };

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setValue(1);
        break;
      case "/jordansposito":
        setValue(2);
        break;
      case "/projects":
        setValue(3);
        break;
      case "/projects/javascript":
        setValue(4);
        break;
      case "/projects/java":
        setValue(5);
        break;
      case "/projects/python":
        setValue(6);
        break;
      case "/projects/other":
        setValue(7);
        break;
      default:
        setValue(1);
    }
  }, [location.pathname]);

  const handleTabClick = (path: string, index: number) => {
    const currentIndex = ROUTES.indexOf(prevLocation.current);
    const targetIndex = index;

    if (currentIndex !== -1) {
      handleDirectionChange(currentIndex > targetIndex ? "backward" : "forward");
    }

    setValue(index + 1);
    navigate(path);

    prevLocation.current = path;
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
        <Box display="flex" alignItems="center" width="100%" justifyContent="space-around" sx={{ color: 'white' }}>
          <Tabs
            value={value}
            textColor="inherit"
            TabIndicatorProps={{ style: { display: 'none' } }}
            centered
          >
            <Tab disableRipple label="bing" sx={tabStyle} disabled style={{visibility: isSmallScreen ? 'hidden' : 'visible'}} />
            <Tab disableRipple label="home" sx={tabStyle} onClick={() => handleTabClick("/", 0)} />
            <Tab disableRipple label="jordan sposito" sx={tabStyle} onClick={() => handleTabClick("/jordansposito", 1)} />
            <Tab disableRipple label="projects" sx={tabStyle} onClick={() => handleTabClick("/projects", 2)} />
            <Tab disableRipple label="javascript" sx={tabStyle} onClick={() => handleTabClick("/projects/javascript", 3)} />
            <Tab disableRipple label="java" sx={tabStyle} onClick={() => handleTabClick("/projects/java", 4)} />
            <Tab disableRipple label="python" sx={tabStyle} onClick={() => handleTabClick("/projects/python", 5)} style={{visibility: isSmallScreen ? 'hidden' : 'visible'}} />
            <Tab disableRipple label="other" sx={tabStyle} disabled style={{visibility: isSmallScreen ? 'hidden' : 'visible'}} />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
