import aBtnIcon from "../assets/images/aBtnIcon.png";
import {Box, Avatar, Typography} from "@mui/material";

const Footer = () => {
    return (
        <Box display='flex' alignItems='center'>
            <Avatar src={aBtnIcon} />
            <Typography color={'white'} variant="h6" marginLeft={2}>Select</Typography>
        </Box>
    )
}

export default Footer;