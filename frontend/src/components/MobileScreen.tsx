import { Box, Typography, Grid } from "@mui/material"


const MobileScreen: React.FC = () => {
    return (
        <Grid item width={'100%'} border={1} bgcolor={'white'} margin={12}>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} color={'green'}>
                <Typography variant="h6" textAlign={'center'} margin={5}>This website doesn't work on small screens!</Typography>
                <Typography variant="h6" textAlign={'center'} margin={5}>Try it out on a computer</Typography>
            </Box>
        </Grid>
    )
}

export default MobileScreen;