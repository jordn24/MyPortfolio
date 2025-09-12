import { Avatar, Typography, AppBar, Toolbar, Box } from '@mui/material';

import profilePic from '../assets/images/profilePic-400.webp';


export default function Header () {
    return (

        <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
            <Toolbar>
                <Box display="flex" width="100%" alignItems="center" justifyContent="flex-end">
                    <Typography variant="h5" color={'white'} marginRight={2}>
                        Jordan Sposito
                    </Typography>
                    <Avatar src={profilePic} variant='square' />
                </Box>
            </Toolbar>
        </AppBar>
    )
}