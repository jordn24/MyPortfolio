import leftClickIcon from "../assets/images/leftClickIcon-400.webp";
import touchIcon from "../assets/images/touchIcon-400.webp";

import {Box, Avatar, Typography, useMediaQuery, Theme} from "@mui/material";

const Footer = () => {
    const isLargeScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

    return (
        <Box display='flex' alignItems='center' marginTop={3}>
            {isLargeScreen ? 
            <>
                <Avatar src={leftClickIcon} />
                <Typography color={'white'} variant="h6" marginLeft={2}>Select</Typography>
            </>
            :
            <>
                <Avatar src={touchIcon} sx={{height: 30, width: 30}} />
                <Typography color={'white'} variant="body1" marginLeft={2}>Select</Typography>
            </>
            }
        </Box>
    )
}

export default Footer;