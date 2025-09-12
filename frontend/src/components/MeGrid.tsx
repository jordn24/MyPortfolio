import { Grid, Box, Typography, useMediaQuery } from '@mui/material';
import Tile from './Tile';
import { motion } from "framer-motion";

import linkedInBg from "../assets/images/linkedInBg-400.webp";
import emailBg from "../assets/images/emailBg-400.webp";
import githubBg from "../assets/images/githubBg-400.webp";
import avatar from "../assets/images/avatar-400.webp";
import gamerScoreIcon from "../assets/images/gamerScoreIcon-400.webp"
import friendVariant from "../assets/images/friendVariant-400.webp";
import friendVariant2 from "../assets/images/friendVariant2-400.webp";
import friendVariant3 from "../assets/images/friendVariant4-400.webp";
import theme from '../theme/customTheme';

const MeGrid = () => {  

    const isMediumScreen = useMediaQuery(theme.breakpoints.down('xl'));
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));

    let email = "jordan.sposito2430@gmail.com";

    let friendImageHeight = 380;
    let myImageHeight = 500;

    if(isMediumScreen) {
        friendImageHeight = 300;
        myImageHeight = 380;
    };
    if(isSmallScreen) {
        friendImageHeight = 200;
        myImageHeight = 280;
    };


    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <Grid container direction='column'>
                    <Grid item marginTop={1}>
                        <Tile label='Github' image={githubBg} alt="github" url="https://github.com/jordn24" />
                    </Grid>
                    <Grid item marginTop={1}>
                        <Tile label='LinkedIn' url='https://www.linkedin.com/in/jordan-sposito-9225082ba/' image={linkedInBg} alt="linked-in"/> 
                    </Grid>
                    <Grid item marginTop={1}>
                        <Tile label='Email Me' image={emailBg} alt="contact-me" url={`mailto:${email}`} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <Box display={'flex'} flexDirection={'column'} alignItems={'flex-end'} height={'100%'} justifyContent={'center'}>
                    <Typography fontSize={isSmallScreen ? 20 : 30} color={'white'} variant='h4' alignSelf={'flex-start'} marginLeft={5}>Jordan Sposito</Typography>
                    <Box display={'flex'} width={'100%'} alignItems={'center'} >
                        <Typography fontSize={isSmallScreen ? 20 : 30} marginRight={1} color={'white'} variant='h4' alignSelf={'flex-start'} marginLeft={5}>652423</Typography>
                        <img src={gamerScoreIcon} height={isSmallScreen ? 20 : 30}/>
                    </Box>
                    <motion.img whileHover={{ scale: 1.1, zIndex: 10 }} src={avatar} height={myImageHeight} />
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box display={'flex'} height={'100%'} justifyContent={'space-evenly'} alignItems={'center'} marginTop={5}>
                    <motion.img whileHover={{ scale: 1.1, zIndex: 10 }} src={friendVariant} height={friendImageHeight} />
                    <motion.img whileHover={{ scale: 1.1, zIndex: 10 }} src={friendVariant2} height={friendImageHeight} />
                    <motion.img whileHover={{ scale: 1.1, zIndex: 10 }} src={friendVariant3} height={friendImageHeight} />
                </Box>
            </Grid>
        </Grid>
    );
}

export default MeGrid;