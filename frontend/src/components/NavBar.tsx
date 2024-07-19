import { useState } from "react";
import { AppBar, Toolbar, Box, Tab, Tabs, useMediaQuery, useTheme } from '@mui/material';

export default function NavBar () {

    const [value, setValue] = useState(1);

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('xl'))

    const tabStyle = {
            fontSize: isSmallScreen ? 30 : 40,
            textTransform: 'lowercase',
            marginRight: 3,
            marginLeft: 3
    }
    
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }

    return (
        <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
            <Toolbar>
                <Box display="flex" alignItems="center" width="100%" justifyContent="space-around" sx={{ color: 'white' }}>
                    <Tabs 
                        value={value} 
                        onChange={handleChange}
                        textColor="inherit"
                        TabIndicatorProps={{ style: {display: 'none'} }}
                        centered
                    >
                        <Tab disableRipple label="bing" sx={tabStyle} disabled />
                        <Tab disableRipple label="home" sx={tabStyle} />
                        <Tab disableRipple label="jordan sposito" sx={tabStyle} />
                        <Tab disableRipple label="projects" sx={tabStyle} />
                        <Tab disableRipple label="javascript" sx={tabStyle} />
                        <Tab disableRipple label="java" sx={tabStyle} />
                        <Tab disableRipple label="python" sx={tabStyle} disabled />
                        <Tab disableRipple label="other" sx={tabStyle} disabled/>
                    </Tabs>
                </Box>
            </Toolbar>
        </AppBar>
    )
}